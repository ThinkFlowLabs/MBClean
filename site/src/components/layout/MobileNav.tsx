'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import { industries } from '@/lib/content/industries';
import { counties } from '@/lib/content/areas';
import { PHONE_NUMBER, PHONE_RAW } from '@/lib/content/navigation';
import {
  Phone, ChevronDown, ArrowRight, MapPin, X,
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   Icon Registries (shared with Header)
   ═══════════════════════════════════════════════════ */
const serviceIconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

const industryIconMap: Record<string, LucideIcon> = {
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer,
};

/* ═══════════════════════════════════════════════════
   Helpers
   ═══════════════════════════════════════════════════ */
function formatCompactPrice(min: number, max: number, unit: string): string {
  const fmt = (n: number) => (n >= 1 ? `$${n}` : `$${n.toFixed(2)}`);
  const u = unit === 'per sq ft' ? '/sqft' : '/vent';
  return `${fmt(min)}–${fmt(max)}${u}`;
}

/* ═══════════════════════════════════════════════════
   Animation Variants
   ═══════════════════════════════════════════════════ */
const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
const snappyEase: [number, number, number, number] = [0.2, 0, 0, 1];

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3 } },
};

const drawerVariants = {
  closed: {
    x: '100%',
    transition: { duration: 0.35, ease: snappyEase },
  },
  open: {
    x: 0,
    transition: { duration: 0.45, ease: smoothEase },
  },
};

const navStagger = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.15 },
  },
};

const navItemVariant = {
  closed: { opacity: 0, x: 20 },
  open: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

const accordionVariants = {
  collapsed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: snappyEase },
  },
  expanded: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.35, ease: smoothEase },
  },
};

/* ═══════════════════════════════════════════════════
   Accordion Section
   ═══════════════════════════════════════════════════ */
function AccordionSection({
  label,
  isOpen,
  onToggle,
  children,
}: {
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 min-h-[44px]"
        aria-expanded={isOpen}
      >
        <span className="font-heading font-bold text-[22px] text-white tracking-tight">
          {label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: smoothEase }}
        >
          <ChevronDown className="w-5 h-5 text-white/70" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Main MobileNav
   ═══════════════════════════════════════════════════ */
interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  /* ── Body scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setExpandedSection(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ── Close on route change ── */
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  /* ── Close on Escape ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSection((prev) => (prev === section ? null : section));
  };

  const switchLocale = (newLocale: string) => {
    router.replace(pathname as '/', { locale: newLocale as 'en' | 'es' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="mobile-backdrop"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.nav
            key="mobile-drawer"
            variants={drawerVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[420px] bg-navy-500 lg:hidden overflow-hidden"
            aria-label="Mobile navigation"
          >
            {/* Decorative gradient mesh background */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-orange-500/8 to-transparent blur-3xl" />
              <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-navy-300/10 to-transparent blur-3xl" />
            </div>

            {/* Scrollable content */}
            <div className="relative h-full flex flex-col overflow-y-auto pb-safe">
              {/* Top bar */}
              <div className="flex items-center justify-between px-6 pt-6 pb-2">
                <Link
                  href="/"
                  className="font-heading font-extrabold text-xl tracking-tight text-white"
                  onClick={onClose}
                >
                  MB<span className="text-orange-500">Clean</span>
                </Link>
                <button
                  onClick={onClose}
                  className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-white/5 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 text-white/70" />
                </button>
              </div>

              {/* Divider */}
              <div className="mx-6 h-px bg-white/10" />

              {/* Navigation links */}
              <motion.div
                variants={navStagger}
                initial="closed"
                animate="open"
                className="flex-1 px-6 pt-4 pb-8"
              >
                {/* Home */}
                <motion.div variants={navItemVariant}>
                  <Link
                    href="/"
                    className={cn(
                      'block py-4 font-heading font-bold text-[22px] tracking-tight min-h-[44px] transition-colors',
                      pathname === '/' ? 'text-orange-400' : 'text-white hover:text-white/80',
                    )}
                    onClick={onClose}
                  >
                    {t('nav.home')}
                  </Link>
                </motion.div>

                {/* Services Accordion */}
                <motion.div variants={navItemVariant}>
                  <AccordionSection
                    label={t('nav.services')}
                    isOpen={expandedSection === 'services'}
                    onToggle={() => toggleSection('services')}
                  >
                    <div className="pl-1 pb-3 space-y-0.5">
                      {services.map((service) => {
                        const Icon = serviceIconMap[service.icon] || Sparkles;
                        return (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}` as never}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors group min-h-[44px]"
                            onClick={onClose}
                          >
                            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-md bg-white/5 group-hover:bg-orange-500/15 transition-colors">
                              <Icon className="w-4 h-4 text-white/70 group-hover:text-orange-400 transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-white/80 group-hover:text-white truncate">
                                {locale === 'es' ? service.nameEs : service.name}
                              </div>
                              <div className="text-xs text-white/60">
                                {formatCompactPrice(service.priceMin, service.priceMax, service.priceUnit)}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                      <Link
                        href="/services"
                        className="flex items-center gap-2 py-2.5 px-3 text-sm font-semibold text-orange-400 hover:text-orange-300 transition-colors min-h-[44px]"
                        onClick={onClose}
                      >
                        {t('cta.viewServices')}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </AccordionSection>
                </motion.div>

                {/* Industries Accordion */}
                <motion.div variants={navItemVariant}>
                  <AccordionSection
                    label={t('nav.industries')}
                    isOpen={expandedSection === 'industries'}
                    onToggle={() => toggleSection('industries')}
                  >
                    <div className="pl-1 pb-3 space-y-0.5">
                      {industries.map((industry) => {
                        const Icon = industryIconMap[industry.icon] || Building;
                        return (
                          <Link
                            key={industry.slug}
                            href={`/industries/${industry.slug}` as never}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors group min-h-[44px]"
                            onClick={onClose}
                          >
                            <Icon className="w-4 h-4 text-white/70 group-hover:text-orange-400 transition-colors" />
                            <span className="text-sm font-medium text-white/80 group-hover:text-white">
                              {locale === 'es' ? industry.nameEs : industry.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </AccordionSection>
                </motion.div>

                {/* Areas Accordion */}
                <motion.div variants={navItemVariant}>
                  <AccordionSection
                    label={t('nav.areas')}
                    isOpen={expandedSection === 'areas'}
                    onToggle={() => toggleSection('areas')}
                  >
                    <div className="pl-1 pb-3 space-y-0.5">
                      {counties.map((county) => (
                        <Link
                          key={county.slug}
                          href={`/areas/${county.slug}` as never}
                          className="flex items-center gap-3 py-3 px-3 rounded-lg hover:bg-white/5 transition-colors group min-h-[44px]"
                          onClick={onClose}
                        >
                          <MapPin className="w-4 h-4 text-white/70 group-hover:text-orange-400 transition-colors" />
                          <div>
                            <div className="text-sm font-medium text-white/80 group-hover:text-white">
                              {county.name}
                            </div>
                            <div className="text-xs text-white/60">
                              {county.cities.length} {locale === 'es' ? 'ciudades' : 'cities'}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionSection>
                </motion.div>

                {/* Static Links */}
                {([
                  { href: '/about' as const, key: 'nav.about' as const },
                  { href: '/reviews' as const, key: 'nav.reviews' as const },
                  { href: '/blog' as const, key: 'nav.blog' as const },
                  { href: '/contact' as const, key: 'nav.contact' as const },
                ] as const).map(({ href, key }) => (
                  <motion.div key={href} variants={navItemVariant}>
                    <Link
                      href={href as never}
                      className={cn(
                        'block py-4 font-heading font-bold text-[22px] tracking-tight min-h-[44px] transition-colors',
                        pathname.startsWith(href)
                          ? 'text-orange-400'
                          : 'text-white hover:text-white/80',
                      )}
                      onClick={onClose}
                    >
                      {t(key)}
                    </Link>
                  </motion.div>
                ))}

                {/* ── Divider ── */}
                <motion.div variants={navItemVariant}>
                  <div className="my-4 h-px bg-white/10" />
                </motion.div>

                {/* Phone */}
                <motion.div variants={navItemVariant}>
                  <a
                    href={`tel:+1${PHONE_RAW}` as never}
                    className="flex items-center gap-3 py-4 min-h-[44px] group"
                    aria-label={`Call ${PHONE_NUMBER}`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500/15">
                      <Phone className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <div className="text-lg font-heading font-bold text-white group-hover:text-orange-300 transition-colors">
                        {PHONE_NUMBER}
                      </div>
                      <div className="text-xs text-white/70">{t('cta.callNow')}</div>
                    </div>
                  </a>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={navItemVariant} className="pt-2">
                  <Link
                    href="/free-quote"
                    className="flex items-center justify-center w-full py-4 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 shadow-[0_4px_24px_rgba(249,115,22,0.3)] transition-all duration-300 active:scale-[0.98] min-h-[52px]"
                    onClick={onClose}
                  >
                    {t('cta.freeEstimate')}
                  </Link>
                </motion.div>

                {/* Language Switcher */}
                <motion.div variants={navItemVariant} className="pt-6 flex justify-center">
                  <div className="flex items-center rounded-full bg-white/5 p-0.5">
                    {(['en', 'es'] as const).map((loc) => (
                      <button
                        key={loc}
                        onClick={() => switchLocale(loc)}
                        className={cn(
                          'px-5 py-2 text-sm font-semibold rounded-full transition-all duration-200 min-h-[44px]',
                          locale === loc
                            ? 'bg-white/10 text-white'
                            : 'text-white/70 hover:text-white/90',
                        )}
                        aria-label={loc === 'en' ? 'Switch to English' : 'Cambiar a Español'}
                      >
                        {loc === 'en' ? 'English' : 'Español'}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
