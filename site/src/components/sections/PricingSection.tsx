'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { formatPriceRange } from '@/lib/utils/format';
import { ArrowRight, Info } from 'lucide-react';
import type { Service } from '@/types';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface PricingSectionProps {
  service: Service;
}

export function PricingSection({ service }: PricingSectionProps) {
  const t = useTranslations('services');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <Section background="slate" padding="lg" id="pricing">
      <SectionHeader title={t('pricing')} />

      <motion.div
        variants={itemVariants}
        className="max-w-lg mx-auto"
      >
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-navy-500 to-navy-600 p-6 text-center">
            <h3 className="font-heading font-bold text-lg text-white">
              {locale === 'es' ? service.nameEs : service.name}
            </h3>
          </div>

          {/* Price */}
          <div className="p-8 text-center">
            <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">
              {tc('pricing.startingAt')}
            </p>
            <p className="mt-2 font-heading font-extrabold text-4xl sm:text-5xl text-navy-500">
              {formatPriceRange(service.priceMin, service.priceMax, locale === 'es' ? service.priceUnitEs : service.priceUnit)}
            </p>
            <p className="mt-1 text-sm text-slate-400">
              {locale === 'es' ? service.priceUnitEs : service.priceUnit}
            </p>

            {/* CTA */}
            <Link
              href={'/free-quote' as never}
              className={cn(
                'mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-xl',
                'bg-orange-500 hover:bg-orange-600 text-white',
                'font-heading font-bold text-sm',
                'shadow-lg shadow-orange-500/20',
                'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
              )}
            >
              {tc('pricing.requestEstimate')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Disclaimer */}
          <div className="px-6 pb-6">
            <div className="flex gap-2 p-4 rounded-xl bg-slate-50 border border-slate-100">
              <Info className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-slate-400 leading-relaxed">
                {tc('pricing.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
