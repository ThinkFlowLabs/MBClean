import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { services } from '@/lib/content/services';
import { counties } from '@/lib/content/areas';
import { PHONE_NUMBER, PHONE_RAW, EMAIL, COMPANY_NAME } from '@/lib/content/navigation';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const t = useTranslations('common');
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-navy-500 text-white overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-navy-400/10 to-transparent blur-3xl pointer-events-none" />

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-0.5 font-heading font-extrabold text-2xl tracking-tight text-white mb-4">
              MB<span className="text-orange-500">Clean</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:+1${PHONE_RAW}` as never}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-orange-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-orange-500/70 group-hover:text-orange-400" />
                {PHONE_NUMBER}
              </a>
              <a
                href={`mailto:${EMAIL}` as never}
                className="flex items-center gap-2.5 text-sm text-white/70 hover:text-orange-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-orange-500/70 group-hover:text-orange-400" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-orange-500/70" />
                {t('serviceArea')}
              </div>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-3 mt-6">
              <span className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-white/60">
                {t('trust.sbe')}
              </span>
              <span className="px-3 py-1.5 text-xs font-semibold bg-white/5 border border-white/10 rounded-full text-white/60">
                {t('trust.wosb')}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/70 mb-5">
              {t('footer.servicesTitle')}
            </h3>
            <ul className="space-y-3">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}` as never}
                    className="text-sm text-white/80 hover:text-orange-400 transition-colors"
                  >
                    {locale === 'es' ? service.nameEs : service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  {t('cta.viewServices')}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/70 mb-5">
              {t('footer.areasTitle')}
            </h3>
            <ul className="space-y-3">
              {counties.map((county) => (
                <li key={county.slug}>
                  <Link
                    href={`/areas/${county.slug}` as never}
                    className="text-sm text-white/80 hover:text-orange-400 transition-colors"
                  >
                    {county.name}
                  </Link>
                  <ul className="mt-1.5 ml-3 space-y-1.5">
                    {county.cities.slice(0, 4).map((city) => (
                      <li key={city.slug}>
                        <Link
                          href={`/areas/${city.slug}` as never}
                          className="text-xs text-white/70 hover:text-orange-400/80 transition-colors"
                        >
                          {city.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-white/70 mb-5">
              {t('footer.companyTitle')}
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-orange-400 transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-white/80 hover:text-orange-400 transition-colors">
                  {t('nav.reviews')}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/80 hover:text-orange-400 transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-orange-400 transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href="/free-quote" className="text-sm text-white/80 hover:text-orange-400 transition-colors">
                  {t('nav.freeQuote')}
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/free-quote"
                className="inline-flex items-center px-5 py-3 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 shadow-[0_4px_16px_rgba(249,115,22,0.25)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {t('cta.freeEstimate')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/60">
              &copy; {year} {COMPANY_NAME}. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-white/60 hover:text-white/70 transition-colors cursor-pointer">
                {t('footer.privacy')}
              </span>
              <span className="text-xs text-white/60 hover:text-white/70 transition-colors cursor-pointer">
                {t('footer.terms')}
              </span>
              <span className="text-xs text-white/60 hover:text-white/70 transition-colors cursor-pointer">
                {t('footer.sitemap')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
