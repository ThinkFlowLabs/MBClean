'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container, Section } from '@/components/ui';
import { CTASection } from '@/components/sections/CTASection';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import {
  ArrowRight, Phone, CheckCircle2, ChevronDown,
  AlertTriangle, Shield, Wind, Truck, Droplet, Layers,
  Users, Eye, Diamond, Baby, Calendar, Sun, Clock,
  TrendingDown, Building, ClipboardCheck,
  Warehouse, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Hotel, Hammer,
  UtensilsCrossed, GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Industry } from '@/types';
import { PHONE_RAW, PHONE_NUMBER } from '@/lib/content/navigation';

// ─── Icon Maps ────────────────────────────────────────────────────────────────
const industryIconMap: Record<string, LucideIcon> = {
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer, GraduationCap,
};

const challengeIconMap: Record<string, LucideIcon> = {
  AlertTriangle, Shield, Wind, Truck, Droplet, Layers, Users, Eye, Diamond,
  Baby, Calendar, Sun, Clock, TrendingDown, Building, UtensilsCrossed,
  ClipboardCheck,
};

// ─── Animation Presets ────────────────────────────────────────────────────────
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: smoothEase } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

interface IndustryPageContentProps {
  industry: Industry;
}

// ─── FAQ Accordion Item ───────────────────────────────────────────────────────
function FAQAccordionItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div variants={fadeUp} className="border border-slate-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors gap-4"
        aria-expanded={open}
      >
        <span className="font-heading font-semibold text-navy-700 text-sm sm:text-base leading-snug">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-slate-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function IndustryPageContent({ industry }: IndustryPageContentProps) {
  const locale = useLocale();
  const tc = useTranslations('common');
  const Icon = industryIconMap[industry.icon] || Building;
  const relevantServices = services.filter((s) =>
    industry.relevantServiceSlugs.includes(s.slug),
  );

  const displayName = locale === 'es' ? industry.nameEs : industry.name;
  const displayDescription =
    locale === 'es' ? industry.shortDescriptionEs : industry.shortDescription;

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        {industry.image && (
          <Image
            src={industry.image}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/92 via-navy-600/88 to-navy-500/90" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/5 blur-[100px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-white/50 text-xs mb-6"
            >
              <Link href="/industries" className="hover:text-white/80 transition-colors">
                Industries
              </Link>
              <span>/</span>
              <span className="text-white/80">{displayName}</span>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="w-16 h-16 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-6 backdrop-blur-sm border border-orange-400/20"
            >
              <Icon className="w-8 h-8 text-orange-400" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.1 }}
              className="font-heading font-extrabold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              Commercial Cleaning for{' '}
              <span className="text-orange-400">{displayName}</span>
              <span className="block text-2xl sm:text-3xl mt-1 text-white/80 font-semibold">
                in South Florida
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.2 }}
              className="mt-5 text-lg text-white/75 max-w-2xl leading-relaxed"
            >
              {industry.longDescription ?? displayDescription}
            </motion.p>

            {/* CTA #1: Hero buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: smoothEase, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href={'/free-quote' as never}
                className={cn(
                  'inline-flex items-center gap-2 px-7 py-3.5 rounded-xl',
                  'bg-orange-500 hover:bg-orange-600 text-white',
                  'font-heading font-bold text-sm',
                  'shadow-lg shadow-orange-500/30',
                  'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
                  'whitespace-nowrap',
                )}
              >
                Get a Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${PHONE_RAW}`}
                className={cn(
                  'inline-flex items-center gap-2 px-7 py-3.5 rounded-xl',
                  'bg-white/10 hover:bg-white/15 text-white border border-white/15',
                  'font-heading font-bold text-sm backdrop-blur-sm',
                  'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
                )}
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════════════════ */}
      {industry.stats && industry.stats.length > 0 && (
        <section className="bg-navy-700 border-b border-navy-600">
          <Container>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10"
            >
              {industry.stats.map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="py-6 px-5 text-center">
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl text-orange-400">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/60 leading-snug">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════
          CHALLENGES
      ══════════════════════════════════════════════════════ */}
      {industry.challenges && industry.challenges.length > 0 && (
        <Section background="slate" padding="lg" animate={false}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-12">
              <span className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-semibold uppercase tracking-widest mb-3">
                Industry Challenges
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-700">
                Why {displayName} Demand Expert Cleaning
              </h2>
              <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
                Standard cleaning crews are not equipped for the unique demands of your
                environment. Here&apos;s what sets {displayName.toLowerCase()} cleaning apart.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {industry.challenges.map((challenge, i) => {
                const ChallengeIcon = challengeIconMap[challenge.icon] ?? AlertTriangle;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                        <ChallengeIcon className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-navy-700 text-sm">
                          {challenge.title}
                        </h3>
                        <p className="mt-1.5 text-slate-500 text-xs leading-relaxed">
                          {challenge.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ══════════════════════════════════════════════════════
          BENEFITS + TRUST PANEL
      ══════════════════════════════════════════════════════ */}
      {industry.benefits && industry.benefits.length > 0 && (
        <Section background="white" padding="lg" animate={false}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Benefits list */}
            <div>
              <motion.div variants={fadeUp}>
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-widest mb-3">
                  The MB Clean Difference
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-700 leading-tight">
                  What We Deliver for{' '}
                  <span className="text-orange-500">{displayName}</span>
                </h2>
                <p className="mt-3 text-slate-500 text-sm leading-relaxed">
                  We don&apos;t just clean. We solve the specific challenges of your industry
                  with the right equipment, protocols, and expertise.
                </p>
              </motion.div>

              <div className="mt-8 space-y-5">
                {industry.benefits.map((benefit, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4">
                    <div className="shrink-0 w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy-700 text-sm">
                        {benefit.title}
                      </h3>
                      <p className="mt-1 text-slate-500 text-xs leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Trust panel */}
            <motion.div variants={fadeUp}>
              <div className="bg-gradient-to-br from-navy-700 to-navy-600 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-orange-500/10 blur-[60px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/15 flex items-center justify-center mb-5 border border-orange-400/20">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl leading-tight">
                    Locally Owned.<br />Not a Franchise.
                  </h3>
                  <p className="mt-3 text-white/70 text-sm leading-relaxed">
                    Direct owner accountability on every {displayName.toLowerCase()} project.
                    We treat your facility like our reputation depends on it. Because it does.
                  </p>
                  <div className="mt-6 space-y-3">
                    {[
                      'Licensed & Insured',
                      'SBE & WOSB Certified',
                      '100% Satisfaction Guarantee',
                      'Free On-Site Estimates',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="text-sm text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={'/free-quote' as never}
                    className={cn(
                      'mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                      'bg-orange-500 hover:bg-orange-600 text-white',
                      'font-heading font-bold text-sm w-full justify-center',
                      'transition-all duration-200 hover:scale-[1.02]',
                    )}
                  >
                    Request a Free Estimate
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Section>
      )}

      {/* ══════════════════════════════════════════════════════
          MID-PAGE CTA BANNER: CTA #2
      ══════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-orange-500 py-12">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
        />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="font-heading font-extrabold text-white text-xl sm:text-2xl leading-tight">
                Need a Quote for Your {displayName}?
              </p>
              <p className="mt-1 text-white/80 text-sm">
                Most estimates delivered within 24 hours. No obligation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href={'/free-quote' as never}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'bg-white text-orange-600 hover:bg-orange-50',
                  'font-heading font-bold text-sm',
                  'transition-all duration-200 hover:scale-[1.03] whitespace-nowrap',
                )}
              >
                Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${PHONE_RAW}`}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'bg-orange-600 hover:bg-orange-700 text-white border border-orange-400/30',
                  'font-heading font-bold text-sm',
                  'transition-all duration-200 hover:scale-[1.03] whitespace-nowrap',
                )}
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════
          RELEVANT SERVICES
      ══════════════════════════════════════════════════════ */}
      <Section background="slate" padding="lg" animate={false}>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.div variants={fadeUp} className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-navy-100 text-navy-600 text-xs font-semibold uppercase tracking-widest mb-3">
              Services We Provide
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-700">
              Recommended for {displayName}
            </h2>
            <p className="mt-2 text-slate-500 text-sm max-w-lg mx-auto">
              Specialized commercial cleaning services tailored to the specific demands of your
              facility type.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relevantServices.map((service) => (
              <motion.div key={service.slug} variants={fadeUp}>
                <Link
                  href={`/services/${service.slug}` as never}
                  className={cn(
                    'flex flex-col p-5 rounded-2xl h-full',
                    'bg-white border border-slate-100',
                    'hover:border-orange-200 hover:shadow-md',
                    'transition-all duration-300 group',
                  )}
                >
                  <h3 className="font-heading font-bold text-sm text-navy-600 group-hover:text-orange-500 transition-colors">
                    {locale === 'es' ? service.nameEs : service.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed line-clamp-3 flex-1">
                    {locale === 'es' ? service.shortDescriptionEs : service.shortDescription}
                  </p>
                  {service.priceMin && (
                    <p className="mt-3 text-xs font-semibold text-orange-500">
                      From ${service.priceMin} {service.priceUnit}
                    </p>
                  )}
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-navy-500 group-hover:text-orange-500 transition-colors">
                    {tc('cta.learnMore')}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} className="mt-8 text-center">
            <Link
              href={'/services' as never}
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy-500 hover:text-orange-500 transition-colors"
            >
              View all our services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </Section>

      {/* ══════════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════════ */}
      {industry.faq && industry.faq.length > 0 && (
        <Section background="white" padding="lg" animate={false}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-widest mb-3">
                FAQ
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-700">
                Common Questions About {displayName} Cleaning
              </h2>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-3">
              {industry.faq.map((item, i) => (
                <FAQAccordionItem key={i} question={item.question} answer={item.answer} />
              ))}
            </div>

            <motion.div variants={fadeUp} className="mt-10 text-center">
              <p className="text-slate-500 text-sm mb-4">Have more questions? We&apos;re happy to help.</p>
              <Link
                href={'/contact' as never}
                className={cn(
                  'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                  'border-2 border-navy-500 text-navy-600 hover:bg-navy-50',
                  'font-heading font-bold text-sm',
                  'transition-all duration-200',
                )}
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </Section>
      )}

      {/* ══════════════════════════════════════════════════════
          BOTTOM CTA SECTION: CTA #3
      ══════════════════════════════════════════════════════ */}
      <CTASection />
    </>
  );
}
