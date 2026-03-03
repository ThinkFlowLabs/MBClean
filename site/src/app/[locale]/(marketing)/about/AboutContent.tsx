'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader, Container } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import {
  MapPin, Wrench, ShieldCheck, Award, BadgeCheck, Heart, Building2,
} from 'lucide-react';
import { ADDRESS } from '@/lib/content/navigation';

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
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export function AboutContent() {
  const t = useTranslations('about');
  const tc = useTranslations('common');

  const certifications = [
    { icon: Award, label: tc('trust.sbe'), description: 'Small Business Enterprise' },
    { icon: BadgeCheck, label: tc('trust.wosb'), description: 'Women-Owned Small Business' },
    { icon: ShieldCheck, label: tc('trust.licensed'), description: 'Fully Licensed & Insured' },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
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
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </Container>
      </section>

      {/* ── Our Story ── */}
      <Section background="white" padding="lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-navy-500/[0.06] flex items-center justify-center">
                <MapPin className="w-6 h-6 text-navy-500" />
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-500">
                {t('story.title')}
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {t('story.description')}
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2980+NE+207th+ST+Suite+300+Aventura+FL+33180"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-navy-500 hover:text-orange-500 transition-colors font-medium"
            >
              <Building2 className="w-4 h-4" />
              {ADDRESS}
            </a>
          </motion.div>
        </motion.div>
      </Section>

      {/* ── Team Photo ── */}
      <Section background="slate" padding="lg">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-card">
            <Image
              src="/images/team/team-photo.webp"
              alt="MB Clean Solutions team, locally owned commercial cleaning specialists in South Florida"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
        </motion.div>
      </Section>

      {/* ── Certifications ── */}
      <Section background="white" padding="lg">
        <SectionHeader title={t('certifications.title')} />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.label}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <cert.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="font-heading font-bold text-base text-navy-500">
                {cert.label}
              </h3>
              <p className="mt-1 text-sm text-slate-400">{cert.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Satisfaction Guarantee ── */}
      <Section background="white" padding="lg">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div variants={fadeUp}>
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-500">
              {t('guarantee.title')}
            </h2>
            <p className="mt-4 text-slate-500 leading-relaxed text-lg">
              {t('guarantee.description')}
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </>
  );
}
