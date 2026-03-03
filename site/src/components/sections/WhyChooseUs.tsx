'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { MapPin, Wrench, ShieldCheck, DollarSign } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface WhyUsItem {
  icon: LucideIcon;
  titleKey: string;
  accent: string;
  accentBg: string;
}

const items: WhyUsItem[] = [
  {
    icon: MapPin,
    titleKey: 'local',
    accent: 'text-emerald-500',
    accentBg: 'bg-emerald-50',
  },
  {
    icon: Wrench,
    titleKey: 'expert',
    accent: 'text-navy-500',
    accentBg: 'bg-navy-50',
  },
  {
    icon: ShieldCheck,
    titleKey: 'guarantee',
    accent: 'text-orange-500',
    accentBg: 'bg-orange-50',
  },
  {
    icon: DollarSign,
    titleKey: 'transparent',
    accent: 'text-sky-500',
    accentBg: 'bg-sky-50',
  },
];

export function WhyChooseUs() {
  const t = useTranslations('home');

  return (
    <Section background="white" padding="lg" id="why-us">
      <SectionHeader
        title={t('whyUs.title')}
        subtitle={t('whyUs.subtitle')}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {items.map((item) => (
          <motion.div
            key={item.titleKey}
            variants={itemVariants}
            className="group text-center sm:text-left"
          >
            {/* Icon */}
            <div
              className={cn(
                'w-14 h-14 rounded-2xl flex items-center justify-center mx-auto sm:mx-0',
                'transition-transform duration-300 group-hover:scale-110',
                item.accentBg,
              )}
            >
              <item.icon className={cn('w-7 h-7', item.accent)} />
            </div>

            {/* Title */}
            <h3 className="mt-5 font-heading font-bold text-lg text-navy-500">
              {t(`whyUs.items.${item.titleKey}.title`)}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-slate-500 leading-relaxed text-justify">
              {t(`whyUs.items.${item.titleKey}.description`)}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
