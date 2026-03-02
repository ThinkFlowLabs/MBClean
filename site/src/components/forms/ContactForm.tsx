'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations, useLocale } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import { contactFormSchema } from '@/lib/forms/validation';
import type { ContactFormValues } from '@/lib/forms/validation';
import { Send, Loader2, Check } from 'lucide-react';

export function ContactForm() {
  const tc = useTranslations('common');
  const locale = useLocale();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setIsSuccess(true);
    } catch {
      setSubmitError(tc('form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-emerald-500" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-navy-500">
          {tc('form.success')}
        </h3>
      </div>
    );
  }

  const inputStyles = cn(
    'w-full h-12 px-4 rounded-xl border bg-white text-sm',
    'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
    'transition-all duration-200',
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            {tc('form.firstName')}
          </label>
          <input
            {...register('firstName')}
            className={cn(inputStyles, errors.firstName && 'border-red-300')}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            {tc('form.lastName')}
          </label>
          <input
            {...register('lastName')}
            className={cn(inputStyles, errors.lastName && 'border-red-300')}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1.5">
          {tc('form.email')}
        </label>
        <input
          type="email"
          {...register('email')}
          className={cn(inputStyles, errors.email && 'border-red-300')}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            {tc('form.phone')}
          </label>
          <input
            type="tel"
            {...register('phone')}
            className={cn(inputStyles, errors.phone && 'border-red-300')}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-600 mb-1.5">
            {tc('form.company')} (Optional)
          </label>
          <input
            {...register('company')}
            className={cn(inputStyles)}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1.5">
          {tc('form.service')} (Optional)
        </label>
        <select
          {...register('service')}
          className={cn(inputStyles, 'appearance-none cursor-pointer')}
        >
          <option value="">{tc('form.service')}</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>
              {locale === 'es' ? s.nameEs : s.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-600 mb-1.5">
          {tc('form.message')}
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-white text-sm',
            'focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500',
            'transition-all duration-200 resize-none',
            errors.message ? 'border-red-300' : 'border-slate-200',
          )}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={cn(
          'w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl',
          'bg-orange-500 hover:bg-orange-600 text-white',
          'font-heading font-bold text-base',
          'shadow-lg shadow-orange-500/20',
          'transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]',
          'disabled:opacity-60 disabled:cursor-not-allowed',
        )}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {tc('form.sending')}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {tc('form.submit')}
          </>
        )}
      </button>

      {submitError && (
        <p className="text-sm text-red-500 text-center">{submitError}</p>
      )}
    </form>
  );
}
