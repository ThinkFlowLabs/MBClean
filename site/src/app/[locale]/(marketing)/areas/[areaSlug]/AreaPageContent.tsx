'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container, Section, SectionHeader } from '@/components/ui';
import { ServiceCards } from '@/components/sections/ServiceCards';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils/cn';
import { MapPin, ArrowRight } from 'lucide-react';
import type { County } from '@/types';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

interface AreaPageContentProps {
  county: County;
}

export function AreaPageContent({ county }: AreaPageContentProps) {
  const t = useTranslations('areas');
  const locale = useLocale();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        {/* Background Image */}
        {county.image && (
          <Image
            src={county.image}
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-navy-500/85 to-navy-600/90" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
              <MapPin className="w-8 h-8 text-orange-400" />
            </div>
            <h1
              className="font-heading font-extrabold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Commercial Cleaning in {county.name}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              {locale === 'es' ? county.shortDescriptionEs : county.shortDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Cities We Serve ── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('citiesServed')} />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {county.cities.map((city) => (
            <motion.div key={city.slug} variants={fadeUp}>
              <Link
                href={`/areas/${city.slug}` as never}
                className={cn(
                  'flex items-center gap-2 p-4 rounded-xl',
                  'bg-slate-50 border border-slate-100',
                  'hover:bg-orange-50 hover:border-orange-200',
                  'transition-all duration-200 group',
                )}
              >
                <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 group-hover:bg-orange-500" />
                <span className="text-sm font-medium text-slate-600 group-hover:text-orange-600 transition-colors">
                  {city.name}
                </span>
                {city.population && (
                  <span className="text-xs text-slate-300 ml-auto">
                    {city.population.toLocaleString('en-US')}
                  </span>
                )}
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-400 flex-shrink-0 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Services Available ── */}
      <ServiceCards />

      <CTASection />
    </>
  );
}
