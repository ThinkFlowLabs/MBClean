'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { FileText, ClipboardCheck, SprayCan } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface Step {
  icon: LucideIcon;
  key: string;
  number: string;
}

const steps: Step[] = [
  { icon: FileText, key: 'step1', number: '01' },
  { icon: ClipboardCheck, key: 'step2', number: '02' },
  { icon: SprayCan, key: 'step3', number: '03' },
];

export function HowItWorks() {
  const t = useTranslations('home');

  return (
    <Section background="slate" padding="lg" id="how-it-works">
      <SectionHeader
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
      />

      <div className="relative">
        {/* ── Connector Line (desktop only) ── */}
        <div className="hidden lg:block absolute top-16 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] h-[2px]">
          <div className="w-full h-full bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.key}
              variants={stepVariants}
              className="relative text-center"
            >
              {/* Step Number Circle */}
              <div className="relative inline-flex">
                <div className="w-20 h-20 rounded-2xl bg-white shadow-card flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-navy-500" />
                </div>
                {/* Number Badge */}
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange-500 text-white text-xs font-heading font-bold flex items-center justify-center shadow-lg z-20">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-6 font-heading font-bold text-lg text-navy-500">
                {t(`howItWorks.steps.${step.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
                {t(`howItWorks.steps.${step.key}.description`)}
              </p>

              {/* Mobile connector arrow */}
              {i < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6">
                  <div className="w-[2px] h-8 bg-gradient-to-b from-orange-300 to-orange-100 rounded-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
