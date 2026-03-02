import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { QuotePageContent } from './QuotePageContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Cotización Gratis | MB Clean Solutions'
        : 'Free Quote | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Solicite una cotización gratis para servicios de limpieza comercial en el Sur de Florida.'
        : 'Request a free quote for commercial cleaning services in South Florida. Get a custom estimate within 24 hours.',
    path: '/free-quote',
    locale,
  });
}

export default function QuotePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Free Quote', url: `${SITE_URL}/free-quote` },
        ])}
      />
      <QuotePageContent />
    </>
  );
}
