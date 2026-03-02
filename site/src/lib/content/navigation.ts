import type { NavItem } from '@/types';
import { services } from './services';
import { industries } from './industries';
import { counties } from './areas';

export const mainNavigation: NavItem[] = [
  {
    label: 'nav.home',
    href: '/',
  },
  {
    label: 'nav.services',
    href: '/services',
    children: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: 'nav.industries',
    href: '/industries',
    children: industries.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
    })),
  },
  {
    label: 'nav.areas',
    href: '/areas',
    children: counties.map((county) => ({
      label: county.name,
      href: `/areas/${county.slug}`,
    })),
  },
  {
    label: 'nav.about',
    href: '/about',
  },
  {
    label: 'nav.reviews',
    href: '/reviews',
  },
  {
    label: 'nav.blog',
    href: '/blog',
  },
  {
    label: 'nav.contact',
    href: '/contact',
  },
];

export const PHONE_NUMBER = '(954) 482-5008';
export const PHONE_RAW = '9544825008';
export const ADDRESS = '2980 NE 207th ST, Suite 300, Aventura, FL 33180';
export const EMAIL = 'info@mbcleansolutions.com';
export const COMPANY_NAME = 'MB Clean Solutions';
export const SITE_URL = 'https://mbcleansolutions.com';
