import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <html>
      <body className="font-body antialiased bg-slate-50 text-slate-800">
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-heading font-extrabold text-navy-500 mb-4">
              404
            </h1>
            <h2 className="text-2xl font-heading font-bold text-slate-800 mb-4">
              {t('title')}
            </h2>
            <p className="text-slate-500 mb-8">{t('description')}</p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              {t('backHome')}
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
