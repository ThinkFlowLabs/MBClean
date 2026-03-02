'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui';
import { Award, ShieldCheck, BadgeCheck, CheckCircle } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase },
  },
};

const badges = [
  { icon: Award, labelKey: 'sbe' },
  { icon: ShieldCheck, labelKey: 'wosb' },
  { icon: BadgeCheck, labelKey: 'licensed' },
  { icon: CheckCircle, labelKey: 'satisfaction' },
];

export function TrustBar() {
  const tc = useTranslations('common');

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-8 sm:py-10 bg-white border-y border-slate-100"
    >
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {badges.map((badge) => (
            <div
              key={badge.labelKey}
              className="flex items-center gap-2 text-slate-400"
            >
              <badge.icon className="w-5 h-5 text-navy-400/60" />
              <span className="text-sm font-medium tracking-wide">
                {tc(`trust.${badge.labelKey}`)}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </motion.section>
  );
}
