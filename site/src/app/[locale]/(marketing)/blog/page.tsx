import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { getPublishedArticles } from '@/lib/blog/api';
import { BlogListContent } from './BlogListContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Blog | MB Clean Solutions'
        : 'Blog | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Consejos expertos, perspectivas de la industria y guías de limpieza comercial para negocios del Sur de Florida.'
        : 'Expert tips, industry insights, and commercial cleaning guides for South Florida businesses.',
    path: '/blog',
    locale,
  });
}

export default async function BlogPage() {
  const articles = await getPublishedArticles();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ])}
      />
      <BlogListContent articles={articles} />
    </>
  );
}
