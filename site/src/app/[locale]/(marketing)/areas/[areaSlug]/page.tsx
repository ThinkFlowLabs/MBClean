import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import {
  counties,
  getCountyBySlug,
  getCityBySlug,
  getCountyForCity,
  getAllCities,
} from '@/lib/content/areas';
import { SITE_URL } from '@/lib/content/navigation';
import { AreaPageContent } from './AreaPageContent';
import { CityPageContent } from './CityPageContent';

interface Props {
  params: Promise<{ locale: string; areaSlug: string }>;
}

export async function generateStaticParams() {
  const countyParams = counties.map((c) => ({ areaSlug: c.slug }));
  const cityParams = getAllCities().map((city) => ({ areaSlug: city.slug }));
  return [...countyParams, ...cityParams];
}

export async function generateMetadata({ params }: Props) {
  const { locale, areaSlug } = await params;

  // Try county first
  const county = getCountyBySlug(areaSlug);
  if (county) {
    return generatePageMetadata({
      title: county.metaTitle,
      description: county.metaDescription,
      path: `/areas/${county.slug}`,
      locale,
    });
  }

  // Try city
  const city = getCityBySlug(areaSlug);
  const parentCounty = city ? getCountyForCity(areaSlug) : undefined;
  if (city) {
    const title =
      city.metaTitle ||
      `Commercial Cleaning ${city.name} | MB Clean Solutions`;
    const description =
      city.metaDescription ||
      `Professional commercial cleaning services in ${city.name}, ${parentCounty?.name || 'South Florida'}. Deep cleaning, floor care, pressure washing & more. Free estimates.`;

    return generatePageMetadata({
      title,
      description,
      path: `/areas/${city.slug}`,
      locale,
    });
  }

  return {};
}

export default async function AreaPage({ params }: Props) {
  const { locale, areaSlug } = await params;

  // Try county first
  const county = getCountyBySlug(areaSlug);
  if (county) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Service Areas', url: `${SITE_URL}/areas` },
            { name: county.name, url: `${SITE_URL}/areas/${county.slug}` },
          ])}
        />
        <AreaPageContent county={county} />
      </>
    );
  }

  // Try city
  const city = getCityBySlug(areaSlug);
  const parentCounty = city ? getCountyForCity(areaSlug) : undefined;
  if (city && parentCounty) {
    return (
      <>
        <JsonLd
          data={breadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Service Areas', url: `${SITE_URL}/areas` },
            {
              name: parentCounty.name,
              url: `${SITE_URL}/areas/${parentCounty.slug}`,
            },
            { name: city.name, url: `${SITE_URL}/areas/${city.slug}` },
          ])}
        />
        <CityPageContent city={city} county={parentCounty} locale={locale} />
      </>
    );
  }

  notFound();
}
