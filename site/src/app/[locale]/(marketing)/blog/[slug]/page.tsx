import { notFound } from 'next/navigation';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { getArticleBySlug, getPublishedArticles } from '@/lib/blog/api';
import { ArticleContent } from './ArticleContent';

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return {};

  return generatePageMetadata({
    title: `${article.title} | MB Clean Solutions Blog`,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    locale,
    ogImage: article.coverImage,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: `${SITE_URL}/blog` },
          { name: article.title, url: `${SITE_URL}/blog/${article.slug}` },
        ])}
      />
      <ArticleContent article={article} />
    </>
  );
}
