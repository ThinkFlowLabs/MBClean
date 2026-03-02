import { cn } from '@/lib/utils/cn';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'orange' | 'navy' | 'outline' | 'success';
  size?: 'sm' | 'md';
  className?: string;
}

const variantStyles = {
  default: 'bg-slate-100 text-slate-600',
  orange: 'bg-orange-50 text-orange-600 border border-orange-100',
  navy: 'bg-navy-50 text-navy-500 border border-navy-100',
  outline: 'bg-transparent border border-slate-200 text-slate-500',
  success: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
} as const;

const sizeStyles = {
  sm: 'px-2.5 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
} as const;

export function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
