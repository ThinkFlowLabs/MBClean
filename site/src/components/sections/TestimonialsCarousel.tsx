'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { testimonials } from '@/lib/content/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: smoothEase },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.3, ease: smoothEase },
  }),
};

export function TestimonialsCarousel() {
  const t = useTranslations('home');
  const locale = useLocale();
  const [[current, direction], setCurrent] = useState([0, 0]);

  const paginate = useCallback(
    (dir: number) => {
      setCurrent(([prev]) => {
        const next = (prev + dir + testimonials.length) % testimonials.length;
        return [next, dir];
      });
    },
    [],
  );

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate]);

  const testimonial = testimonials[current];

  return (
    <Section background="white" padding="lg" id="testimonials">
      <SectionHeader
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
      />

      <div className="relative max-w-3xl mx-auto">
        {/* ── Quote Icon ── */}
        <Quote className="absolute -top-2 left-0 sm:left-4 w-10 h-10 text-orange-100 -scale-x-100" />

        {/* ── Carousel ── */}
        <div className="relative overflow-hidden min-h-[240px] sm:min-h-[200px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-center px-4 sm:px-12"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'w-5 h-5',
                      i < testimonial.rating
                        ? 'text-amber-400 fill-amber-400'
                        : 'text-slate-200',
                    )}
                  />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl text-slate-700 leading-relaxed italic">
                &ldquo;{locale === 'es' ? testimonial.contentEs : testimonial.content}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="mt-6">
                <p className="font-heading font-bold text-navy-500">
                  {testimonial.name}
                </p>
                <p className="text-sm text-slate-400">
                  {testimonial.company}{testimonial.role ? ` · ${testimonial.role}` : ''}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-500 hover:border-navy-200 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent([i, i > current ? 1 : -1])}
                className={cn(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  i === current
                    ? 'w-6 bg-orange-500'
                    : 'bg-slate-200 hover:bg-slate-300',
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-navy-500 hover:border-navy-200 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
