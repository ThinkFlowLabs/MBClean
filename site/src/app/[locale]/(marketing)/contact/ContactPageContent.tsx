'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, Container } from '@/components/ui';
import { ContactForm } from '@/components/forms';
import { cn } from '@/lib/utils/cn';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { PHONE_NUMBER, PHONE_RAW, EMAIL } from '@/lib/content/navigation';

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

export function ContactPageContent() {
  const t = useTranslations('contact');
  const tc = useTranslations('common');

  const contactInfo = [
    { icon: Phone, label: PHONE_NUMBER, href: `tel:${PHONE_RAW}` },
    { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
    { icon: MapPin, label: tc('serviceArea'), href: undefined },
    { icon: Clock, label: 'Mon–Sat: 7am–7pm', href: undefined },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        <Image
          src="/images/team/team-photo.webp"
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
        </Container>
      </section>

      {/* ── Content ── */}
      <Section background="white" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-3"
          >
            <motion.div variants={fadeUp}>
              <ContactForm />
            </motion.div>
          </motion.div>

          {/* Contact Info Sidebar */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              {contactInfo.map((item) => {
                const Wrapper = item.href ? 'a' : 'div';
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className={cn(
                      'flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100',
                      item.href && 'hover:bg-orange-50 hover:border-orange-100 transition-colors cursor-pointer',
                    )}
                  >
                    <div className="w-10 h-10 rounded-lg bg-navy-500/[0.06] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-navy-500" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium pt-2.5">
                      {item.label}
                    </span>
                  </Wrapper>
                );
              })}
            </motion.div>

            {/* Team Photo */}
            <motion.div variants={fadeUp} className="mt-8 relative rounded-2xl overflow-hidden aspect-[16/10]">
              <Image
                src="/images/team/team-photo.webp"
                alt="MB Clean Solutions professional cleaning team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </motion.div>

            {/* Trust signals */}
            <motion.div variants={fadeUp} className="mt-6 p-6 rounded-2xl bg-navy-500/[0.03] border border-navy-500/10">
              <h3 className="font-heading font-bold text-sm text-navy-500 mb-3">
                Why Contact Us?
              </h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Free on-site assessments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Quotes within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  100% satisfaction guarantee
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  Bilingual team (English & Spanish)
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
