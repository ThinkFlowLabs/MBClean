'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Section, Container } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { testimonials } from '@/lib/content/testimonials';
import { Star, Quote } from 'lucide-react';
import { CTASection } from '@/components/sections/CTASection';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
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

export function ReviewsContent() {
  const t = useTranslations('reviews');
  const locale = useLocale();

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/team/team-photo.webp"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-navy-500/85 to-navy-600/90" />
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
            className="mt-4 text-lg text-white/80 max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: smoothEase, delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-white font-heading font-bold">5.0</span>
            <span className="text-white/70 text-sm">({testimonials.length} reviews)</span>
          </motion.div>
        </Container>
      </section>

      {/* ── Reviews Grid ── */}
      <Section background="white" padding="lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-card"
            >
              <Quote className="w-8 h-8 text-orange-100 mb-4 -scale-x-100" />

              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-4 h-4',
                      i < testimonial.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-200',
                    )}
                  />
                ))}
              </div>

              <blockquote className="text-sm text-slate-600 leading-relaxed italic mb-5">
                &ldquo;{locale === 'es' ? testimonial.contentEs : testimonial.content}&rdquo;
              </blockquote>

              <div className="border-t border-slate-100 pt-4">
                <p className="font-heading font-bold text-sm text-navy-500">
                  {testimonial.name}
                </p>
                <p className="text-xs text-slate-400">
                  {testimonial.company}
                  {testimonial.role && ` · ${testimonial.role}`}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <CTASection />
    </>
  );
}
