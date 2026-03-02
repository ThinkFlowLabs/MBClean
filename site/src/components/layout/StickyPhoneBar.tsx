'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { PHONE_NUMBER, PHONE_RAW } from '@/lib/content/navigation';
import { Phone, FileText } from 'lucide-react';

export function StickyPhoneBar() {
  const t = useTranslations('common');

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden pb-safe">
      <div className="bg-navy-500/95 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.15)]">
        <div className="grid grid-cols-2 divide-x divide-white/10">
          {/* Call Button */}
          <a
            href={`tel:+1${PHONE_RAW}`}
            className="flex items-center justify-center gap-2.5 py-3.5 text-white font-semibold text-sm active:bg-white/5 transition-colors min-h-[52px]"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <Phone className="w-4.5 h-4.5 text-orange-400" />
            <span>{t('cta.callNow')}</span>
          </a>

          {/* Quote Button */}
          <Link
            href="/free-quote"
            className="flex items-center justify-center gap-2.5 py-3.5 bg-orange-500 text-white font-semibold text-sm active:bg-orange-600 transition-colors min-h-[52px]"
          >
            <FileText className="w-4.5 h-4.5" />
            <span>{t('nav.freeQuote')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
