import type { MetadataRoute } from 'next';
import { services } from '@/lib/content/services';
import { industries } from '@/lib/content/industries';
import { counties, getAllCities } from '@/lib/content/areas';

const SITE_URL = 'https://mbcleansolutions.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Static pages with localized Spanish paths
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: {
        languages: { en: SITE_URL, es: `${SITE_URL}/es` },
      },
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: { en: `${SITE_URL}/services`, es: `${SITE_URL}/es/servicios` },
      },
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: { en: `${SITE_URL}/about`, es: `${SITE_URL}/es/nosotros` },
      },
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: { en: `${SITE_URL}/contact`, es: `${SITE_URL}/es/contacto` },
      },
    },
    {
      url: `${SITE_URL}/free-quote`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: {
        languages: { en: `${SITE_URL}/free-quote`, es: `${SITE_URL}/es/cotizacion-gratis` },
      },
    },
    {
      url: `${SITE_URL}/reviews`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
      alternates: {
        languages: { en: `${SITE_URL}/reviews`, es: `${SITE_URL}/es/resenas` },
      },
    },
    {
      url: `${SITE_URL}/areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: { en: `${SITE_URL}/areas`, es: `${SITE_URL}/es/areas` },
      },
    },
    {
      url: `${SITE_URL}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: { en: `${SITE_URL}/industries`, es: `${SITE_URL}/es/industrias` },
      },
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.8,
      alternates: {
        languages: { en: `${SITE_URL}/blog`, es: `${SITE_URL}/es/blog` },
      },
    },
  ];

  // Service pages
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${SITE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}/services/${service.slug}`,
        es: `${SITE_URL}/es/servicios/${service.slug}`,
      },
    },
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        en: `${SITE_URL}/industries/${industry.slug}`,
        es: `${SITE_URL}/es/industrias/${industry.slug}`,
      },
    },
  }));

  // County pages
  const countyPages: MetadataRoute.Sitemap = counties.map((county) => ({
    url: `${SITE_URL}/areas/${county.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${SITE_URL}/areas/${county.slug}`,
        es: `${SITE_URL}/es/areas/${county.slug}`,
      },
    },
  }));

  // City pages
  const cityPages: MetadataRoute.Sitemap = getAllCities().map((city) => ({
    url: `${SITE_URL}/areas/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: {
      languages: {
        en: `${SITE_URL}/areas/${city.slug}`,
        es: `${SITE_URL}/es/areas/${city.slug}`,
      },
    },
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...countyPages,
    ...cityPages,
  ];
}
