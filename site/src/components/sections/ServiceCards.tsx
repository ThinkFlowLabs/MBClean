'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { Section, SectionHeader } from '@/components/ui';
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export function ServiceCards() {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <Section background="slate" padding="lg" id="services">
      <SectionHeader
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />

      {/* ── Bento Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
        {services.slice(0, 8).map((service) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.div
              key={service.slug}
              variants={cardVariants}
              className="group relative"
            >
              <Link
                href={`/services/${service.slug}` as never}
                className={cn(
                  'block h-full p-6 rounded-2xl',
                  'bg-white border border-slate-100',
                  'shadow-card hover:shadow-card-hover',
                  'transition-all duration-300',
                  'group-hover:-translate-y-1',
                )}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-navy-500/[0.06] flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-navy-500 group-hover:text-orange-500 transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-base text-navy-500 leading-snug group-hover:text-navy-600 transition-colors">
                  {locale === 'es' ? service.nameEs : service.name}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {locale === 'es' ? service.shortDescriptionEs : service.shortDescription}
                </p>

                {/* Price + Arrow */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                    {formatPriceRange(service.priceMin, service.priceMax, locale === 'es' ? service.priceUnitEs : service.priceUnit)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* ── View All Link ── */}
      <motion.div variants={cardVariants} className="mt-10 text-center">
        <Link
          href={'/services' as never}
          className="inline-flex items-center gap-2 font-heading font-bold text-sm text-navy-500 hover:text-orange-500 transition-colors group/link"
        >
          {tc('cta.viewServices')}
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </Section>
  );
}
