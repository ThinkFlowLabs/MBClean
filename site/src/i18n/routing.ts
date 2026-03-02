import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      es: '/nosotros',
    },
    '/contact': {
      en: '/contact',
      es: '/contacto',
    },
    '/free-quote': {
      en: '/free-quote',
      es: '/cotizacion-gratis',
    },
    '/reviews': {
      en: '/reviews',
      es: '/resenas',
    },
    '/services': {
      en: '/services',
      es: '/servicios',
    },
    '/services/[serviceSlug]': {
      en: '/services/[serviceSlug]',
      es: '/servicios/[serviceSlug]',
    },
    '/industries': {
      en: '/industries',
      es: '/industrias',
    },
    '/industries/[industrySlug]': {
      en: '/industries/[industrySlug]',
      es: '/industrias/[industrySlug]',
    },
    '/areas': {
      en: '/areas',
      es: '/areas',
    },
    '/areas/[areaSlug]': {
      en: '/areas/[areaSlug]',
      es: '/areas/[areaSlug]',
    },
    '/blog': {
      en: '/blog',
      es: '/blog',
    },
    '/blog/[slug]': {
      en: '/blog/[slug]',
      es: '/blog/[slug]',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
