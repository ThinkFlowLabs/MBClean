'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { ArrowRight, Phone } from 'lucide-react';
import { PHONE_RAW, PHONE_NUMBER } from '@/lib/content/navigation';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

export function InlineCTA({ className }: { className?: string }) {
  const t = useTranslations('services');

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className={cn('py-2', className)}
    >
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700" />

        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-orange-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-navy-300/10 blur-[60px] pointer-events-none" />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-10 text-center">
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight">
            {t('inlineCTA.title')}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-white/70">
            {t('inlineCTA.subtitle')}
          </p>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={'/free-quote' as never}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-orange-500 hover:bg-orange-600 text-white',
                'font-heading font-bold text-sm',
                'shadow-lg shadow-orange-500/25',
                'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
                'whitespace-nowrap',
              )}
            >
              {t('requestEstimate')}
              <ArrowRight className="w-4 h-4" />
            </Link>

            <span className="text-white/50 text-sm hidden sm:inline">
              {t('inlineCTA.or')}
            </span>

            <a
              href={`tel:${PHONE_RAW}`}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-white/10 hover:bg-white/15 text-white border border-white/15',
                'font-heading font-bold text-sm backdrop-blur-sm',
                'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
              )}
            >
              <Phone className="w-4 h-4" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
