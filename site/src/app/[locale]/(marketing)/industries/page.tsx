import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { IndustryCards } from '@/components/sections/IndustryCards';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Industrias que Servimos | MB Clean Solutions'
        : 'Industries We Serve | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Limpieza comercial especializada para almacenes, restaurantes, consultorios médicos y más en el Sur de Florida.'
        : 'Specialized commercial cleaning for warehouses, restaurants, medical offices, condos, retail, and more across South Florida.',
    path: '/industries',
    locale,
  });
}

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Industries', url: `${SITE_URL}/industries` },
        ])}
      />
      <IndustryCards />
      <CTASection />
    </>
  );
}
