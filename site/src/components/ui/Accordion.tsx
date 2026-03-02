'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/types';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const snappyEase: [number, number, number, number] = [0.2, 0, 0, 1];

const contentVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: snappyEase },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

interface AccordionProps {
  items: FAQItem[];
  className?: string;
  variant?: 'default' | 'card';
}

export function Accordion({ items, className, variant = 'default' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            'overflow-hidden transition-all duration-300',
            variant === 'card'
              ? 'bg-white rounded-2xl border border-slate-100 shadow-card'
              : 'border-b border-slate-200 last:border-0',
            openIndex === index && variant === 'card' && 'shadow-card-hover',
          )}
        >
          <button
            onClick={() => toggle(index)}
            className={cn(
              'w-full flex items-center justify-between text-left min-h-[52px] transition-colors',
              variant === 'card' ? 'px-6 py-5' : 'py-5',
              'group',
            )}
            aria-expanded={openIndex === index}
          >
            <span className="font-heading font-bold text-base sm:text-lg text-navy-500 pr-4 leading-snug group-hover:text-navy-600 transition-colors">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.25, ease: smoothEase }}
              className="flex-shrink-0"
            >
              <ChevronDown
                className={cn(
                  'w-5 h-5 transition-colors',
                  openIndex === index ? 'text-orange-500' : 'text-slate-400',
                )}
              />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.div
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="overflow-hidden"
              >
                <div
                  className={cn(
                    'text-slate-600 text-sm sm:text-base leading-relaxed',
                    variant === 'card' ? 'px-6 pb-6 pt-0' : 'pb-5',
                  )}
                >
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
