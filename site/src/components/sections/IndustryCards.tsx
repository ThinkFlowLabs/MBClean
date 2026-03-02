'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { industries } from '@/lib/content/industries';
import { ArrowRight } from 'lucide-react';
import {
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer,
};

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

export function IndustryCards() {
  const t = useTranslations('industries');
  const locale = useLocale();

  return (
    <Section background="white" padding="lg" id="industries">
      <SectionHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
      >
        {industries.map((industry) => {
          const Icon = iconMap[industry.icon] || Building;
          return (
            <motion.div
              key={industry.slug}
              variants={cardVariants}
              className="group"
            >
              <Link
                href={`/industries/${industry.slug}` as never}
                className={cn(
                  'flex flex-col items-center text-center rounded-2xl overflow-hidden',
                  'bg-slate-50 border border-transparent',
                  'hover:bg-white hover:border-slate-100 hover:shadow-card',
                  'transition-all duration-300',
                  'group-hover:-translate-y-1',
                )}
              >
                {/* Industry Image */}
                {industry.image && (
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={locale === 'es' ? industry.nameEs : industry.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-700/50 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <div className="w-8 h-8 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-heading font-bold text-sm text-navy-500 leading-snug">
                    {locale === 'es' ? industry.nameEs : industry.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
