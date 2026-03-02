import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { ServiceAreaMap } from '@/components/sections/ServiceAreaMap';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Áreas de Servicio | MB Clean Solutions'
        : 'Service Areas | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Servimos negocios en Miami-Dade, Broward y Palm Beach. Limpieza comercial profesional en todo el Sur de Florida.'
        : 'Serving businesses across Miami-Dade, Broward & Palm Beach counties. Professional commercial cleaning throughout South Florida.',
    path: '/areas',
    locale,
  });
}

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Service Areas', url: `${SITE_URL}/areas` },
        ])}
      />
      <ServiceAreaMap />
      <CTASection />
    </>
  );
}
