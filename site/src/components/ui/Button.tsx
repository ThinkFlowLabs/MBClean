'use client';

import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { Link } from '@/i18n/navigation';

const variants = {
  primary:
    'bg-orange-500 text-white hover:bg-orange-600 shadow-button hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)]',
  secondary:
    'bg-navy-500 text-white hover:bg-navy-600 shadow-[0_1px_3px_rgba(0,53,78,0.2)]',
  outline:
    'border-2 border-navy-500 text-navy-500 hover:bg-navy-500 hover:text-white',
  ghost:
    'text-navy-500 hover:bg-navy-500/5',
  'outline-white':
    'border-2 border-white/30 text-white hover:bg-white/10',
} as const;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
} as const;

interface ButtonBaseProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  pill?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: undefined;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = 'primary', size = 'md', pill = true, className, children, ...props },
    ref,
  ) {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300',
      'hover:scale-[1.02] active:scale-[0.98]',
      'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500',
      variants[variant],
      sizes[size],
      pill ? 'rounded-full' : 'rounded-xl',
      className,
    );

    if ('href' in props && props.href) {
      const { href, onClick, ...rest } = props as ButtonAsLink;
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={href as never}
            className={classes}
            onClick={onClick}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...rest}
          >
            {children}
          </Link>
        </motion.div>
      );
    }

    const { onClick, type = 'button', disabled, ...rest } = props as ButtonAsButton;
    return (
      <motion.button
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className={cn(classes, disabled && 'opacity-50 cursor-not-allowed')}
        onClick={onClick}
        type={type}
        disabled={disabled}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
