'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { formatPriceRange } from '@/lib/utils/format';
import { ArrowRight } from 'lucide-react';
import {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Service } from '@/types';

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface RelatedServicesProps {
  services: Service[];
}

export function RelatedServices({ services }: RelatedServicesProps) {
  const t = useTranslations('services');
  const locale = useLocale();

  if (services.length === 0) return null;

  return (
    <Section background="white" padding="lg">
      <SectionHeader title={t('relatedServices')} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Sparkles;
          return (
            <motion.div key={service.slug} variants={cardVariants}>
              <Link
                href={`/services/${service.slug}` as never}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-2xl',
                  'bg-slate-50 border border-transparent',
                  'hover:bg-white hover:border-slate-100 hover:shadow-card',
                  'transition-all duration-300 group',
                )}
              >
                <div className="w-11 h-11 rounded-xl bg-navy-500/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-orange-50 transition-colors">
                  <Icon className="w-5 h-5 text-navy-400 group-hover:text-orange-500 transition-colors" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading font-bold text-sm text-navy-500 leading-snug">
                    {locale === 'es' ? service.nameEs : service.name}
                  </h3>
                  <p className="mt-1 text-xs text-orange-500 font-medium">
                    {formatPriceRange(service.priceMin, service.priceMax, locale === 'es' ? service.priceUnitEs : service.priceUnit)}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 mt-0.5 group-hover:text-orange-500 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
