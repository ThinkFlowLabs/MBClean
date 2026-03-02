'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui';
import { services } from '@/lib/content/services';
import { Shield, CheckCircle, FileText, Phone, ArrowRight } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   Animation Config
   ═══════════════════════════════════════════════════ */
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: smoothEase },
  },
};

const floatAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const floatAnimationSlow = {
  y: [6, -10, 6],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

/* ═══════════════════════════════════════════════════
   Component
   ═══════════════════════════════════════════════════ */
export function HeroSplit() {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  const locale = useLocale();

  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const trustBadges = [
    { icon: Shield, label: tc('trust.licensed') },
    { icon: CheckCircle, label: tc('trust.satisfaction') },
    { icon: FileText, label: tc('trust.freeEstimates') },
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen overflow-hidden">
      {/* ── Background Gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600" />

      {/* ── Grid Pattern Overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Gradient Orbs (Decorative) ── */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-navy-300/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-navy-400/8 blur-[80px] pointer-events-none" />

      {/* ── Content ── */}
      <Container size="wide" className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center min-h-[85vh] lg:min-h-screen py-24 lg:py-0">
          {/* ═══ Left: Content (55%) ═══ */}
          <motion.div
            className="w-full lg:w-[55%] lg:pr-12 xl:pr-20"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-medium text-white/90 tracking-wide">
                  {t('hero.badge')}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-6 sm:mt-8 font-heading font-extrabold text-white tracking-tight leading-[1.08] drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
            >
              {t('hero.headline')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-5 sm:mt-6 text-lg sm:text-xl text-white/80 max-w-xl leading-relaxed"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* ── Inline Quote Form ── */}
            <motion.div
              variants={fadeUp}
              className="mt-8 sm:mt-10 rounded-2xl bg-white/[0.07] border border-white/10 backdrop-blur-xl p-4 sm:p-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Service Dropdown */}
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={cn(
                    'w-full h-12 px-4 rounded-xl bg-white/10 border border-white/15',
                    'text-sm text-white placeholder:text-white/60',
                    'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
                    'transition-all duration-200 appearance-none cursor-pointer',
                    !selectedService && 'text-white/60',
                  )}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(255,255,255,0.4)' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    paddingRight: '36px',
                  }}
                >
                  <option value="" disabled>
                    {tc('form.service')}
                  </option>
                  {services.map((s) => (
                    <option key={s.slug} value={s.slug} className="text-navy-500 bg-white">
                      {locale === 'es' ? s.nameEs : s.name}
                    </option>
                  ))}
                </select>

                {/* Name */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={tc('form.name')}
                  className={cn(
                    'h-12 px-4 rounded-xl bg-white/10 border border-white/15',
                    'text-sm text-white placeholder:text-white/60',
                    'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
                    'transition-all duration-200',
                  )}
                />

                {/* Phone */}
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={tc('form.phone')}
                  className={cn(
                    'h-12 px-4 rounded-xl bg-white/10 border border-white/15',
                    'text-sm text-white placeholder:text-white/60',
                    'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
                    'transition-all duration-200',
                  )}
                />
              </div>

              {/* Submit, full width below inputs */}
              <motion.button
                type="button"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'w-full h-12 mt-3 rounded-xl',
                  'bg-orange-500 hover:bg-orange-600 text-white',
                  'font-heading font-bold text-sm',
                  'shadow-lg shadow-orange-500/25',
                  'transition-colors duration-200',
                  'flex items-center justify-center gap-2',
                )}
              >
                <span>{tc('cta.requestQuote')}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* ── Trust Badges ── */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-3"
            >
              {trustBadges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/70"
                >
                  <badge.icon className="w-3.5 h-3.5 text-orange-400/70" />
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ═══ Right: Hero Image (45%), hidden on mobile ═══ */}
          <motion.div
            className="hidden lg:block w-[45%] relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: smoothEase, delay: 0.3 }}
          >
            {/* Main Hero Image -- prominently visible */}
            <div className="relative h-[540px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/homepage-hero.webp"
                alt="Professional commercial cleaning in South Florida"
                fill
                className="object-cover"
                sizes="45vw"
                priority
              />
              {/* Subtle gradient overlay for depth -- image stays clearly visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-700/40 via-transparent to-navy-700/10" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy-700/20" />

              {/* Floating Glass Stats Card -- overlapping the image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: smoothEase, delay: 1.0 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <motion.div
                  animate={floatAnimationSlow}
                  className="p-4 rounded-2xl bg-white/[0.12] border border-white/15 backdrop-blur-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-center flex-1">
                      <p className="font-heading font-extrabold text-2xl text-white">2,500+</p>
                      <p className="text-xs text-white/70 tracking-wide mt-0.5">
                        {tc('trust.projectsCompleted')}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-white/15" />
                    <div className="text-center flex-1">
                      <p className="font-heading font-extrabold text-2xl text-white">100%</p>
                      <p className="text-xs text-white/70 tracking-wide mt-0.5">
                        {tc('trust.satisfactionRate')}
                      </p>
                    </div>
                    <div className="w-px h-10 bg-white/15" />
                    <div className="text-center flex-1">
                      <div className="flex items-center justify-center gap-1.5">
                        <Phone className="w-4 h-4 text-orange-400" />
                        <span className="text-sm font-bold text-white">{tc('phone')}</span>
                      </div>
                      <p className="text-xs text-white/70 tracking-wide mt-0.5">Call Now</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative accents around the image */}
            <motion.div
              animate={floatAnimation}
              className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-orange-500/15 border border-orange-500/20 rotate-12 -z-10 blur-sm"
            />
            <motion.div
              animate={floatAnimationSlow}
              className="absolute -bottom-3 -left-3 w-14 h-14 rounded-full bg-navy-300/15 border border-white/10 -z-10 blur-sm"
            />
          </motion.div>
        </div>
      </Container>

      {/* ── Bottom Gradient Fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
