import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { ServicesOverview } from './ServicesOverview';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Servicios de Limpieza Comercial | MB Clean Solutions'
        : 'Commercial Cleaning Services | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Servicios especializados de limpieza comercial y restauración para negocios del Sur de Florida.'
        : 'Specialized commercial cleaning and restoration services for South Florida businesses. Expert deep cleaning, floor care, and specialty services.',
    path: '/services',
    locale,
  });
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Services', url: `${SITE_URL}/services` },
        ])}
      />
      <ServicesOverview />
    </>
  );
}
