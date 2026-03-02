import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { industries, getIndustryBySlug } from '@/lib/content/industries';
import { SITE_URL } from '@/lib/content/navigation';
import { IndustryPageContent } from './IndustryPageContent';

interface Props {
  params: Promise<{ locale: string; industrySlug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ industrySlug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) return {};

  return generatePageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    locale,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { industrySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Industries', url: `${SITE_URL}/industries` },
          { name: industry.name, url: `${SITE_URL}/industries/${industry.slug}` },
        ])}
      />
      <IndustryPageContent industry={industry} />
    </>
  );
}
