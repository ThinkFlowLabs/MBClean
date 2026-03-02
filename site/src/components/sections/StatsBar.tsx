'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui';
import { Award, ShieldCheck, BadgeCheck } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   Animation Config
   ═══════════════════════════════════════════════════ */
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const statItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const badgeFade = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: smoothEase, delay: 0.6 },
  },
};

/* ═══════════════════════════════════════════════════
   Animated Counter Hook
   ═══════════════════════════════════════════════════ */
function useCounter(target: number, isActive: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  const animate = useCallback(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  useEffect(() => {
    if (isActive) animate();
  }, [isActive, animate]);

  return count;
}

/* ═══════════════════════════════════════════════════
   Stat Data
   ═══════════════════════════════════════════════════ */
interface StatConfig {
  value: number;
  suffix: string;
  labelKey: string;
}

const stats: StatConfig[] = [
  { value: 10, suffix: '+', labelKey: 'yearsLabel' },
  { value: 2500, suffix: '+', labelKey: 'projectsLabel' },
  { value: 100, suffix: '%', labelKey: 'satisfactionLabel' },
  { value: 3, suffix: '', labelKey: 'countiesLabel' },
];

/* ═══════════════════════════════════════════════════
   Individual Stat Component
   ═══════════════════════════════════════════════════ */
function AnimatedStat({
  config,
  isVisible,
  label,
}: {
  config: StatConfig;
  isVisible: boolean;
  label: string;
}) {
  const count = useCounter(config.value, isVisible);

  return (
    <motion.div variants={statItem} className="text-center px-4 py-3">
      <p className="font-heading font-extrabold text-4xl sm:text-5xl text-white tabular-nums">
        {count.toLocaleString()}
        <span className="text-orange-400">{config.suffix}</span>
      </p>
      <p className="mt-2 text-xs sm:text-sm text-white/45 uppercase tracking-[0.15em] font-medium">
        {label}
      </p>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   StatsBar Component
   ═══════════════════════════════════════════════════ */
export function StatsBar() {
  const t = useTranslations('home');
  const tc = useTranslations('common');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  const certifications = [
    { icon: Award, label: tc('trust.sbe') },
    { icon: ShieldCheck, label: tc('trust.wosb') },
    { icon: BadgeCheck, label: tc('trust.licensed') },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-600 via-navy-500 to-navy-600" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.06),transparent_60%)]" />

      {/* ── Subtle texture overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <Container size="wide" className="relative z-10 py-14 sm:py-16 lg:py-20">
        {/* ── Stats Grid ── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10"
        >
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.labelKey}
              config={stat}
              isVisible={isInView}
              label={t(`stats.${stat.labelKey}`)}
            />
          ))}
        </motion.div>

        {/* ── Divider ── */}
        <div className="mt-10 sm:mt-12 border-t border-white/8" />

        {/* ── Certification Badges ── */}
        <motion.div
          variants={badgeFade}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {certifications.map((cert) => (
            <span
              key={cert.label}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full',
                'bg-white/[0.04] border border-white/10',
                'text-xs sm:text-sm text-white/70 font-medium tracking-wide',
              )}
            >
              <cert.icon className="w-3.5 h-3.5 text-orange-400/60" />
              {cert.label}
            </span>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
