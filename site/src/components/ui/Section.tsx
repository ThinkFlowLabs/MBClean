'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { Container } from './Container';
import { staggerContainer, staggerItem, scrollViewport } from '@/lib/utils/animations';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: 'default' | 'narrow' | 'wide';
  background?: 'white' | 'slate' | 'navy' | 'gradient' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
  id?: string;
}

const bgStyles = {
  white: 'bg-white',
  slate: 'bg-slate-50',
  navy: 'bg-navy-500 text-white',
  gradient: 'bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 text-white',
  none: '',
} as const;

const paddingStyles = {
  sm: 'py-12 sm:py-16',
  md: 'py-16 sm:py-20',
  lg: 'py-20 sm:py-28',
  xl: 'py-24 sm:py-36',
} as const;

export function Section({
  children,
  className,
  containerSize = 'default',
  background = 'none',
  padding = 'md',
  animate = true,
  id,
}: SectionProps) {
  const Wrapper = animate ? motion.section : 'section';
  const animateProps = animate
    ? {
        variants: staggerContainer,
        initial: 'hidden' as const,
        whileInView: 'visible' as const,
        viewport: scrollViewport,
      }
    : {};

  return (
    <Wrapper
      id={id}
      className={cn(bgStyles[background], paddingStyles[padding], className)}
      {...animateProps}
    >
      <Container size={containerSize}>{children}</Container>
    </Wrapper>
  );
}

/* Section Header sub-component */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  animate?: boolean;
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
  animate = true,
}: SectionHeaderProps) {
  const Wrapper = animate ? motion.div : 'div';
  const animateProps = animate ? { variants: staggerItem } : {};

  return (
    <Wrapper
      className={cn(
        'mb-12 sm:mb-16',
        align === 'center' && 'text-center max-w-3xl mx-auto',
        className,
      )}
      {...animateProps}
    >
      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
