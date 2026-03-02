'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import {
  quoteFormSchema,
  quoteStep1Schema,
  quoteStep2Schema,
  quoteStep3Schema,
} from '@/lib/forms/validation';
import type { QuoteFormValues } from '@/lib/forms/validation';
import {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
  ArrowRight, ArrowLeft, Check, Loader2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: smoothEase },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    transition: { duration: 0.25, ease: smoothEase },
  }),
};

const TOTAL_STEPS = 3;

const propertyTypes = [
  'Office Building',
  'Warehouse / Distribution Center',
  'Restaurant / Kitchen',
  'Medical / Healthcare',
  'Retail Store',
  'Hotel / Hospitality',
  'Condo / HOA Common Areas',
  'Church / House of Worship',
  'Gym / Fitness Center',
  'New Construction',
  'Other',
];

const sqftRanges = [
  'Under 1,000 sq ft',
  '1,000 – 5,000 sq ft',
  '5,000 – 10,000 sq ft',
  '10,000 – 25,000 sq ft',
  '25,000 – 50,000 sq ft',
  '50,000+ sq ft',
];

export function MultiStepQuoteForm() {
  const t = useTranslations('common');
  const locale = useLocale();
  const [[step, direction], setStep] = useState([1, 0]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: {
      service: '',
      propertyType: '',
      squareFootage: '',
      additionalDetails: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      preferredDate: '',
    },
    mode: 'onTouched',
  });

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
    setValue,
  } = form;

  const selectedService = watch('service');

  // Step validation before advancing
  const goToStep = async (nextStep: number) => {
    const dir = nextStep > step ? 1 : -1;

    if (dir > 0) {
      let valid = false;
      if (step === 1) valid = await trigger(['service']);
      if (step === 2) valid = await trigger(['propertyType', 'squareFootage']);
      if (!valid) return;
    }

    setStep([nextStep, dir]);
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setIsSuccess(true);
    } catch {
      setSubmitError(t('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Success State ──
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: smoothEase }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-navy-500">
          {t('form.success')}
        </h3>
      </motion.div>
    );
  }

  return (
    <div>
      {/* ── Progress Bar ── */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
            const stepNum = i + 1;
            const isActive = stepNum === step;
            const isComplete = stepNum < step;
            return (
              <div key={stepNum} className="flex items-center flex-1">
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      'w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300',
                      isComplete && 'bg-orange-500 text-white',
                      isActive && 'bg-navy-500 text-white ring-4 ring-navy-500/20',
                      !isActive && !isComplete && 'bg-slate-100 text-slate-400',
                    )}
                  >
                    {isComplete ? <Check className="w-4 h-4" /> : stepNum}
                  </div>
                  <span
                    className={cn(
                      'text-sm font-medium hidden sm:block',
                      isActive ? 'text-navy-500' : 'text-slate-400',
                    )}
                  >
                    {stepNum === 1 && t('form.selectService')}
                    {stepNum === 2 && t('form.propertyDetails')}
                    {stepNum === 3 && t('form.contactInfo')}
                  </span>
                </div>
                {stepNum < TOTAL_STEPS && (
                  <div
                    className={cn(
                      'flex-1 h-[2px] mx-3',
                      isComplete ? 'bg-orange-500' : 'bg-slate-100',
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Progress percentage bar */}
        <div className="h-1 bg-slate-100 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
            animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
            transition={{ duration: 0.4, ease: smoothEase }}
          />
        </div>
      </div>

      {/* ── Step Content ── */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative overflow-hidden min-h-[320px]">
          <AnimatePresence mode="wait" custom={direction}>
            {/* ═══ Step 1: Service Selection ═══ */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="font-heading font-bold text-lg text-navy-500 mb-5">
                  {t('form.selectService')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service) => {
                    const Icon = iconMap[service.icon] || Sparkles;
                    const isSelected = selectedService === service.slug;
                    return (
                      <button
                        key={service.slug}
                        type="button"
                        onClick={() => setValue('service', service.slug, { shouldValidate: true })}
                        className={cn(
                          'flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200',
                          isSelected
                            ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-500/20'
                            : 'border-slate-200 bg-white hover:border-slate-300',
                        )}
                      >
                        <div
                          className={cn(
                            'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0',
                            isSelected ? 'bg-orange-500/10' : 'bg-slate-50',
                          )}
                        >
                          <Icon
                            className={cn(
                              'w-5 h-5',
                              isSelected ? 'text-orange-500' : 'text-slate-400',
                            )}
                          />
                        </div>
                        <span
                          className={cn(
                            'text-sm font-medium',
                            isSelected ? 'text-orange-600' : 'text-slate-600',
                          )}
                        >
                          {locale === 'es' ? service.nameEs : service.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.service && (
                  <p className="mt-3 text-sm text-red-500">{errors.service.message}</p>
                )}
              </motion.div>
            )}

            {/* ═══ Step 2: Property Details ═══ */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="font-heading font-bold text-lg text-navy-500 mb-5">
                  {t('form.propertyDetails')}
                </h3>
                <div className="space-y-5">
                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      {t('form.propertyType')}
                    </label>
                    <select
                      {...register('propertyType')}
                      className={cn(
                        'w-full h-12 px-4 rounded-xl border bg-white text-sm',
                        'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
                        'transition-all duration-200 appearance-none',
                        errors.propertyType ? 'border-red-300' : 'border-slate-200',
                      )}
                    >
                      <option value="">{t('form.propertyType')}</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.propertyType.message}</p>
                    )}
                  </div>

                  {/* Square Footage */}
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      {t('form.squareFootage')}
                    </label>
                    <select
                      {...register('squareFootage')}
                      className={cn(
                        'w-full h-12 px-4 rounded-xl border bg-white text-sm',
                        'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
                        'transition-all duration-200 appearance-none',
                        errors.squareFootage ? 'border-red-300' : 'border-slate-200',
                      )}
                    >
                      <option value="">{t('form.squareFootage')}</option>
                      {sqftRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                    {errors.squareFootage && (
                      <p className="mt-1.5 text-sm text-red-500">{errors.squareFootage.message}</p>
                    )}
                  </div>

                  {/* Additional Details */}
                  <div>
                    <label className="block text-sm font-medium text-slate-600 mb-2">
                      Additional Details (Optional)
                    </label>
                    <textarea
                      {...register('additionalDetails')}
                      rows={3}
                      className={cn(
                        'w-full px-4 py-3 rounded-xl border bg-white text-sm',
                        'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
                        'transition-all duration-200 resize-none',
                        'border-slate-200',
                      )}
                      placeholder="Tell us more about your space or project..."
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ═══ Step 3: Contact Info ═══ */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="font-heading font-bold text-lg text-navy-500 mb-5">
                  {t('form.contactInfo')}
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label={t('form.firstName')}
                      error={errors.firstName?.message}
                      {...register('firstName')}
                    />
                    <FormField
                      label={t('form.lastName')}
                      error={errors.lastName?.message}
                      {...register('lastName')}
                    />
                  </div>
                  <FormField
                    label={t('form.email')}
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                  />
                  <FormField
                    label={t('form.phone')}
                    type="tel"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label={`${t('form.company')} (Optional)`}
                      {...register('company')}
                    />
                    <FormField
                      label={`${t('form.preferredDate')} (Optional)`}
                      type="date"
                      {...register('preferredDate')}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Navigation Buttons ── */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => goToStep(step - 1)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-500 hover:text-navy-500 hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('form.previous')}
            </button>
          ) : (
            <div />
          )}

          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={() => goToStep(step + 1)}
              className={cn(
                'inline-flex items-center gap-2 px-6 py-3 rounded-xl',
                'bg-navy-500 hover:bg-navy-600 text-white',
                'font-heading font-bold text-sm',
                'transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
              )}
            >
              {t('form.next')}
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-3 rounded-xl',
                'bg-orange-500 hover:bg-orange-600 text-white',
                'font-heading font-bold text-sm',
                'shadow-lg shadow-orange-500/20',
                'transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]',
                'disabled:opacity-60 disabled:cursor-not-allowed',
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t('form.sending')}
                </>
              ) : (
                <>
                  {t('form.submit')}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>

        {submitError && (
          <p className="mt-4 text-sm text-red-500 text-center">{submitError}</p>
        )}
      </form>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Form Field Component
   ═══════════════════════════════════════════════════ */
import { forwardRef } from 'react';

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1.5">
          {label}
        </label>
        <input
          ref={ref}
          className={cn(
            'w-full h-12 px-4 rounded-xl border bg-white text-sm',
            'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
            'transition-all duration-200',
            error ? 'border-red-300' : 'border-slate-200',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    );
  },
);
FormField.displayName = 'FormField';
