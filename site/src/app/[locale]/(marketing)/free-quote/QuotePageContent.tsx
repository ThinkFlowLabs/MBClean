'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, Container } from '@/components/ui';
import { MultiStepQuoteForm } from '@/components/forms';
import { Shield, Clock, CheckCircle } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export function QuotePageContent() {
  const t = useTranslations('quote');
  const tc = useTranslations('common');

  const trustSignals = [
    { icon: Shield, label: tc('trust.licensed') },
    { icon: Clock, label: 'Quotes within 24 hours' },
    { icon: CheckCircle, label: tc('trust.satisfaction') },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-16 sm:py-20 overflow-hidden">
        <Image
          src="/images/hero/homepage-hero.webp"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/85 via-navy-500/80 to-navy-600/85" />
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="font-heading font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.15 }}
            className="mt-3 text-lg text-white/80 max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          {/* Trust pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            {trustSignals.map((signal) => (
              <span
                key={signal.label}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
              >
                <signal.icon className="w-3.5 h-3.5 text-orange-400/70" />
                {signal.label}
              </span>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ── Form ── */}
      <Section background="white" padding="lg">
        <div className="max-w-3xl mx-auto">
          <MultiStepQuoteForm />
        </div>
      </Section>
    </>
  );
}
