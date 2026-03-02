'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'elevated' | 'outline';
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'section';
}

const variantStyles = {
  default: 'bg-white border border-slate-100',
  glass: 'bg-white/70 backdrop-blur-xl border border-white/20',
  elevated: 'bg-white shadow-card',
  outline: 'bg-transparent border-2 border-slate-200',
} as const;

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
} as const;

export function Card({
  children,
  className,
  variant = 'elevated',
  hover = false,
  padding = 'md',
  as: Component = 'div',
}: CardProps) {
  const Wrapper = hover ? motion.div : Component;
  const motionProps = hover
    ? {
        whileHover: { y: -4, scale: 1.01 },
        transition: { duration: 0.25, ease: [0.2, 0, 0, 1] as [number, number, number, number] },
      }
    : {};

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.25, ease: [0.2, 0, 0, 1] as [number, number, number, number] }}
        className={cn(
          'rounded-2xl overflow-hidden transition-shadow duration-300',
          variantStyles[variant],
          paddingStyles[padding],
          hover && 'cursor-pointer hover:shadow-card-hover',
          className,
        )}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <Component
      className={cn(
        'rounded-2xl overflow-hidden',
        variantStyles[variant],
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </Component>
  );
}
