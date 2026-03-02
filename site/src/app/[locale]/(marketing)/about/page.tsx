import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { AboutContent } from './AboutContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Sobre Nosotros | MB Clean Solutions'
        : 'About Us | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Conozca MB Clean Solutions, empresa local de limpieza comercial especializada en el Sur de Florida.'
        : 'Learn about MB Clean Solutions, locally owned commercial cleaning specialists serving South Florida. SBE & WOSB certified, 100% satisfaction guaranteed.',
    path: '/about',
    locale,
  });
}

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'About', url: `${SITE_URL}/about` },
        ])}
      />
      <AboutContent />
    </>
  );
}
