import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { serviceSchema, breadcrumbSchema, faqSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { services, getServiceBySlug, getRelatedServices } from '@/lib/content/services';
import { getServicePageContent } from '@/lib/content/service-pages';
import { SITE_URL } from '@/lib/content/navigation';
import { ServicePageContent } from './ServicePageContent';

interface Props {
  params: Promise<{ locale: string; serviceSlug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ serviceSlug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) return {};

  return generatePageMetadata({
    title: locale === 'es' ? service.metaTitleEs : service.metaTitle,
    description: locale === 'es' ? service.metaDescriptionEs : service.metaDescription,
    path: `/services/${service.slug}`,
    locale,
  });
}

export default async function ServicePage({ params }: Props) {
  const { locale, serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);
  if (!service) notFound();

  const relatedServices = getRelatedServices(serviceSlug);
  const pageContent = getServicePageContent(serviceSlug);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
          { name: service.name, url: `${SITE_URL}/services/${service.slug}` },
        ])}
      />
      {pageContent && pageContent.faqs.length > 0 && (
        <JsonLd data={faqSchema(locale === 'es' ? pageContent.faqsEs : pageContent.faqs)} />
      )}
      <ServicePageContent
        service={service}
        relatedServices={relatedServices}
        pageContent={pageContent}
        locale={locale}
      />
    </>
  );
}
