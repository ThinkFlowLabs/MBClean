import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { localBusinessSchema, organizationSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { HeroSplit } from '@/components/sections/HeroSplit';
import { StatsBar } from '@/components/sections/StatsBar';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { ServiceAreaMap } from '@/components/sections/ServiceAreaMap';
import { TrustBar } from '@/components/sections/TrustBar';
import { CTASection } from '@/components/sections/CTASection';
import { BeforeAfterGallery } from '@/components/sections/BeforeAfterGallery';

const beforeAfterImages = [
  {
    before: '/images/before-after/floor-waxing-before.webp',
    after: '/images/before-after/floor-waxing-after.webp',
    beforeAlt: 'Dull commercial floor before professional stripping and waxing',
    afterAlt: 'Gleaming commercial floor after MB Clean stripping and waxing service',
    label: 'Floor Stripping & Waxing',
  },
  {
    before: '/images/before-after/carpet-cleaning-before.webp',
    after: '/images/before-after/carpet-cleaning-after.webp',
    beforeAlt: 'Stained commercial carpet before deep cleaning',
    afterAlt: 'Fresh commercial carpet after MB Clean deep cleaning service',
    label: 'Carpet Cleaning',
  },
  {
    before: '/images/before-after/pressure-washing-before.webp',
    after: '/images/before-after/pressure-washing-after.webp',
    beforeAlt: 'Dirty building exterior before pressure washing',
    afterAlt: 'Clean building exterior after MB Clean pressure washing',
    label: 'Pressure Washing',
  },
  {
    before: '/images/before-after/tile-grout-before.webp',
    after: '/images/before-after/tile-grout-after.webp',
    beforeAlt: 'Discolored tile and grout before professional cleaning',
    afterAlt: 'Restored tile and grout after MB Clean deep cleaning service',
    label: 'Tile & Grout Cleaning',
  },
  {
    before: '/images/before-after/marble-polishing-before.webp',
    after: '/images/before-after/marble-polishing-after.webp',
    beforeAlt: 'Dull, cloudy marble floor before professional polishing',
    afterAlt: 'Mirror-polished marble floor after MB Clean restoration service',
    label: 'Marble Polishing',
  },
  {
    before: '/images/before-after/air-duct-before.webp',
    after: '/images/before-after/air-duct-after.webp',
    beforeAlt: 'Dirty air duct before professional cleaning',
    afterAlt: 'Clean air duct after MB Clean air duct cleaning service',
    label: 'Air Duct Cleaning',
  },
];

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });

  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'MB Clean Solutions | Limpieza Comercial Profesional Sur de Florida'
        : 'MB Clean Solutions | Professional Commercial Cleaning South Florida',
    description: t('hero.subheadline'),
    path: '/',
    locale,
    ogImage: '/images/og-default.webp',
  });
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={organizationSchema()} />
      <HeroSplit />
      <StatsBar />
      <TrustBar />
      <ServiceCards />
      <WhyChooseUs />
      <HowItWorks />
      <TestimonialsCarousel />
      <BeforeAfterGallery
        images={beforeAfterImages}
        title="See the Difference"
        subtitle="Real results from recent MB Clean Solutions projects across South Florida."
      />
      <ServiceAreaMap />
      <CTASection />
    </>
  );
}
