import type { Metadata } from 'next';
import { SITE_URL, COMPANY_NAME } from '@/lib/content/navigation';

/** Map English path prefixes to their Spanish localized equivalents */
const esPathMap: Record<string, string> = {
  '/about': '/nosotros',
  '/contact': '/contacto',
  '/free-quote': '/cotizacion-gratis',
  '/reviews': '/resenas',
  '/services': '/servicios',
  '/industries': '/industrias',
  // /areas, /blog stay the same in Spanish
};

function toSpanishPath(enPath: string): string {
  for (const [enPrefix, esPrefix] of Object.entries(esPathMap)) {
    if (enPath === enPrefix || enPath.startsWith(enPrefix + '/')) {
      return esPrefix + enPath.slice(enPrefix.length);
    }
  }
  return enPath;
}

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path: string;
  locale?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  locale = 'en',
  ogImage,
  noIndex = false,
}: GenerateMetadataOptions): Metadata {
  const esPath = toSpanishPath(path);
  const url = `${SITE_URL}${locale === 'es' ? `/es${esPath}` : path}`;
  const alternateEn = `${SITE_URL}${path}`;
  const alternateEs = `${SITE_URL}/es${esPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: alternateEn,
        es: alternateEs,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: COMPANY_NAME,
      locale: locale === 'es' ? 'es_US' : 'en_US',
      type: 'website',
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(ogImage && { images: [ogImage] }),
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
