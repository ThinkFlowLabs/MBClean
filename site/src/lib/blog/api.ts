import type { BlogPost } from '@/types';

const CONTENT_API_URL = process.env.CONTENT_API_URL;
const CONTENT_API_KEY = process.env.CONTENT_API_KEY;

/**
 * Fetch published blog articles from Content-Automation-AI.
 * Falls back to empty array if API is unavailable.
 */
export async function getPublishedArticles(): Promise<BlogPost[]> {
  if (!CONTENT_API_URL) return [];

  try {
    const response = await fetch(
      `${CONTENT_API_URL}/api/public/articles?brandId=mb-clean&status=published`,
      {
        headers: {
          ...(CONTENT_API_KEY && { Authorization: `Bearer ${CONTENT_API_KEY}` }),
        },
        next: { revalidate: 3600 }, // Hourly fallback, webhook triggers on-demand
      },
    );

    if (!response.ok) return [];

    const data = await response.json();
    return data.articles || [];
  } catch {
    return [];
  }
}

/**
 * Fetch a single article by slug.
 */
export async function getArticleBySlug(slug: string): Promise<BlogPost | null> {
  if (!CONTENT_API_URL) return null;

  try {
    const response = await fetch(
      `${CONTENT_API_URL}/api/public/articles/${slug}?brandId=mb-clean`,
      {
        headers: {
          ...(CONTENT_API_KEY && { Authorization: `Bearer ${CONTENT_API_KEY}` }),
        },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
