'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import { ArrowRight, Loader2, Check } from 'lucide-react';

export function InlineQuoteForm() {
  const tc = useTranslations('common');
  const locale = useLocale();

  const [selectedService, setSelectedService] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !name || !phone) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: selectedService,
          firstName: name,
          phone,
          propertyType: '',
          squareFootage: '',
          lastName: '',
          email: '',
        }),
      });
      if (!response.ok) throw new Error('Failed');
      setIsSuccess(true);
    } catch {
      // Silent fail: form is a quick-quote, not critical
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-white/[0.07] border border-emerald-500/20 backdrop-blur-xl">
        <Check className="w-5 h-5 text-emerald-400" />
        <p className="text-sm text-white/80">{tc('form.success')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-3">
        {/* Service Dropdown */}
        <div className="sm:col-span-2 lg:col-span-1">
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            required
            className={cn(
              'w-full h-12 px-4 rounded-xl bg-white/10 border border-white/15',
              'text-sm text-white placeholder:text-white/60',
              'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
              'transition-all duration-200 appearance-none cursor-pointer',
              !selectedService && 'text-white/60',
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='rgba(255,255,255,0.4)' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 5.646a.5.5 0 0 1 .708 0L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              paddingRight: '36px',
            }}
          >
            <option value="" disabled>
              {tc('form.service')}
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug} className="text-navy-500 bg-white">
                {locale === 'es' ? s.nameEs : s.name}
              </option>
            ))}
          </select>
        </div>

        {/* Name */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={tc('form.name')}
          required
          className={cn(
            'h-12 px-4 rounded-xl bg-white/10 border border-white/15',
            'text-sm text-white placeholder:text-white/60',
            'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
            'transition-all duration-200',
          )}
        />

        {/* Phone */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder={tc('form.phone')}
          required
          className={cn(
            'h-12 px-4 rounded-xl bg-white/10 border border-white/15',
            'text-sm text-white placeholder:text-white/60',
            'focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:border-orange-500/30',
            'transition-all duration-200',
          )}
        />

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            'h-12 px-6 rounded-xl',
            'bg-orange-500 hover:bg-orange-600 text-white',
            'font-heading font-bold text-sm',
            'shadow-lg shadow-orange-500/25',
            'transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]',
            'flex items-center justify-center gap-2 whitespace-nowrap',
            'sm:col-span-2 lg:col-span-1',
            'disabled:opacity-60',
          )}
        >
          {isSubmitting ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <>
              <span>{tc('cta.requestQuote')}</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
