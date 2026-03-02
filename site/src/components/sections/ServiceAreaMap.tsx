'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { counties } from '@/lib/content/areas';
import { MapPin, ChevronRight } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const expandVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

export function ServiceAreaMap() {
  const t = useTranslations('areas');
  const tc = useTranslations('common');
  const locale = useLocale();
  const [expandedCounty, setExpandedCounty] = useState<string | null>(null);

  return (
    <Section background="white" padding="lg" id="service-areas">
      <SectionHeader
        title={t('title')}
        subtitle={t('subtitle')}
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {counties.map((county) => {
          const isExpanded = expandedCounty === county.slug;
          return (
            <motion.div
              key={county.slug}
              variants={cardVariants}
              className="group"
            >
              <div
                className={cn(
                  'rounded-2xl border overflow-hidden transition-all duration-300',
                  isExpanded
                    ? 'bg-white border-orange-200 shadow-card-hover'
                    : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover',
                )}
              >
                {/* County Image */}
                {county.image && (
                  <div className="relative w-full h-36 overflow-hidden">
                    <Image
                      src={county.image}
                      alt={county.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-700/50 to-transparent" />
                    <div className="absolute bottom-3 left-4">
                      <h3 className="font-heading font-bold text-lg text-white drop-shadow-sm">
                        {county.name}
                      </h3>
                    </div>
                  </div>
                )}

                {/* County Header */}
                <button
                  onClick={() => setExpandedCounty(isExpanded ? null : county.slug)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-navy-500/[0.06] flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-navy-500" />
                    </div>
                    <div>
                      {!county.image && (
                        <h3 className="font-heading font-bold text-base text-navy-500">
                          {county.name}
                        </h3>
                      )}
                      <p className="text-xs text-slate-400">
                        {county.cities.length} {t('citiesServed').toLowerCase()}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </motion.div>
                </button>

                {/* Expanded City List */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      variants={expandVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="border-t border-slate-100 pt-4">
                          <div className="grid grid-cols-2 gap-2">
                            {county.cities.map((city) => (
                              <Link
                                key={city.slug}
                                href={`/areas/${city.slug}` as never}
                                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-orange-500 transition-colors py-1"
                              >
                                <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                                {city.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* View All Areas Link */}
      <motion.div variants={cardVariants} className="mt-8 text-center">
        <Link
          href={'/areas' as never}
          className="inline-flex items-center gap-2 font-heading font-bold text-sm text-navy-500 hover:text-orange-500 transition-colors"
        >
          {tc('cta.viewAreas')}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </motion.div>
    </Section>
  );
}
