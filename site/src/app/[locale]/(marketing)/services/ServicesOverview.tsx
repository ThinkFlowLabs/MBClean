'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader, Container } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import { formatPriceRange } from '@/lib/utils/format';
import { ArrowRight } from 'lucide-react';
import {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function ServicesOverview() {
  const t = useTranslations('services');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/hero/homepage-hero.webp"
          alt=""
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/80 via-navy-500/75 to-navy-600/80" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="font-heading font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.15 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </Container>
      </section>

      {/* Services Grid */}
      <Section background="white" padding="lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Sparkles;
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services/${service.slug}` as never}
                  className={cn(
                    'block h-full rounded-2xl overflow-hidden',
                    'bg-white border border-slate-100',
                    'shadow-card hover:shadow-card-hover',
                    'transition-all duration-300 hover:-translate-y-1',
                    'group',
                  )}
                >
                  {/* Service Image */}
                  {service.image && (
                    <div className="relative w-full h-40 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={locale === 'es' ? service.nameEs : service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-700/40 to-transparent" />
                      <div className="absolute bottom-3 left-4">
                        <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h2 className="font-heading font-bold text-lg text-navy-500 leading-snug group-hover:text-navy-600 transition-colors">
                      {locale === 'es' ? service.nameEs : service.name}
                    </h2>

                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      {locale === 'es' ? service.shortDescriptionEs : service.shortDescription}
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1.5 rounded-full">
                        {formatPriceRange(service.priceMin, service.priceMax, locale === 'es' ? service.priceUnitEs : service.priceUnit)}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Section>
    </>
  );
}
