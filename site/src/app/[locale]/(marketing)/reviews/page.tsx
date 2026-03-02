import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { ReviewsContent } from './ReviewsContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Reseñas | MB Clean Solutions'
        : 'Reviews | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Lea reseñas de clientes satisfechos de MB Clean Solutions en el Sur de Florida.'
        : 'Read reviews from satisfied MB Clean Solutions clients across South Florida. 100% satisfaction guaranteed.',
    path: '/reviews',
    locale,
  });
}

export default function ReviewsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Reviews', url: `${SITE_URL}/reviews` },
        ])}
      />
      <ReviewsContent />
    </>
  );
}
