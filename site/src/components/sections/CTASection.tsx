'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { ArrowRight, Phone } from 'lucide-react';
import { PHONE_RAW, PHONE_NUMBER } from '@/lib/content/navigation';

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
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function CTASection() {
  const t = useTranslations('home');
  const tc = useTranslations('common');

  return (
    <section className="relative overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600" />

      {/* ── Decorative orbs ── */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-300/10 blur-[100px] pointer-events-none" />

      {/* ── Dot pattern ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <Container size="default" className="relative z-10 py-20 sm:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            {t('cta.title')}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg text-white/80 leading-relaxed"
          >
            {t('cta.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href={'/free-quote' as never}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                'bg-orange-500 hover:bg-orange-600 text-white',
                'font-heading font-bold text-base',
                'shadow-lg shadow-orange-500/25',
                'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
                'whitespace-nowrap',
              )}
            >
              {t('cta.button')}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={`tel:${PHONE_RAW}`}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 rounded-xl',
                'bg-white/10 hover:bg-white/15 text-white border border-white/15',
                'font-heading font-bold text-base backdrop-blur-sm',
                'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
              )}
            >
              <Phone className="w-5 h-5" />
              {PHONE_NUMBER}
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
