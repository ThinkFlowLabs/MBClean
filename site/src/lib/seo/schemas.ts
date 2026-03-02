import { SITE_URL, COMPANY_NAME, PHONE_NUMBER, EMAIL, ADDRESS } from '@/lib/content/navigation';
import type { Service, FAQItem } from '@/types';

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    description:
      'Professional commercial cleaning services in South Florida. Project-based deep cleaning, floor restoration, marble polishing, and specialty services for Miami-Dade, Broward, and Palm Beach counties.',
    url: SITE_URL,
    telephone: PHONE_NUMBER,
    email: EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '2980 NE 207th ST, Suite 300',
      addressLocality: 'Aventura',
      addressRegion: 'FL',
      postalCode: '33180',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'County',
        name: 'Miami-Dade County',
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
      {
        '@type': 'County',
        name: 'Broward County',
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
      {
        '@type': 'County',
        name: 'Palm Beach County',
        containedInPlace: { '@type': 'State', name: 'Florida' },
      },
    ],
    priceRange: '$$',
    image: `${SITE_URL}/images/logo/mb-clean-logo.webp`,
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Commercial Cleaning Services',
      itemListElement: [
        'Commercial Deep Cleaning',
        'Floor Stripping & Waxing',
        'Marble & Terrazzo Polishing',
        'Commercial Carpet Cleaning',
        'Commercial Pressure Washing',
        'Post-Construction Cleaning',
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: COMPANY_NAME,
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 25.9,
        longitude: -80.2,
      },
      geoRadius: '100 mi',
    },
    offers: {
      '@type': 'Offer',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        priceCurrency: 'USD',
        minPrice: service.priceMin,
        maxPrice: service.priceMax,
        unitText: service.priceUnit,
      },
    },
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/mb-clean-logo.webp`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_NUMBER,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish'],
    },
  };
}
