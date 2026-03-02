'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Section, SectionHeader, Accordion } from '@/components/ui';
import type { FAQItem } from '@/types';

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  background?: 'white' | 'slate';
}

export function FAQSection({
  items,
  title,
  subtitle,
  background = 'slate',
}: FAQSectionProps) {
  const t = useTranslations('services');

  return (
    <Section background={background} padding="lg" id="faq">
      <SectionHeader
        title={title || t('faq')}
        subtitle={subtitle}
      />

      <motion.div variants={staggerItem} className="max-w-3xl mx-auto">
        <Accordion items={items} variant="card" />
      </motion.div>
    </Section>
  );
}
