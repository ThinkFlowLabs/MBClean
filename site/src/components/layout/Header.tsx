'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';
import { services } from '@/lib/content/services';
import { industries } from '@/lib/content/industries';
import { counties } from '@/lib/content/areas';
import { PHONE_NUMBER, PHONE_RAW } from '@/lib/content/navigation';
import {
  Phone, ChevronDown, ArrowRight, MapPin,
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer, GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ═══════════════════════════════════════════════════
   Icon Registries
   ═══════════════════════════════════════════════════ */
const serviceIconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

const industryIconMap: Record<string, LucideIcon> = {
  Warehouse, UtensilsCrossed, Heart, Building2, Dumbbell,
  Church, ShoppingBag, Building, Hotel, Hammer, GraduationCap,
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

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: smoothEase },
  },
  exit: {
    opacity: 0,
    y: -6,
    scale: 0.98,
    transition: { duration: 0.15 },
  },
};

const megaStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: 0.04 },
  },
};

const megaItemVariant = {
  hidden: { opacity: 0, x: -8 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.22, ease: smoothEase },
  },
};

/* ═══════════════════════════════════════════════════
   Animated Hamburger SVG
   ═══════════════════════════════════════════════════ */
function HamburgerIcon({ isOpen, scrolled }: { isOpen: boolean; scrolled: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      className={cn(
        'transition-colors duration-300',
        scrolled ? 'stroke-navy-500' : 'stroke-white',
      )}
    >
      <motion.path
        variants={{ closed: { d: 'M3 6L19 6' }, open: { d: 'M5 5L17 17' } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d="M3 11L19 11"
        variants={{ closed: { opacity: 1, x: 0 }, open: { opacity: 0, x: 8 } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.2 }}
      />
      <motion.path
        variants={{ closed: { d: 'M3 16L19 16' }, open: { d: 'M5 17L17 5' } }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   Nav Link (for static routes)
   ═══════════════════════════════════════════════════ */
function NavLink({
  href,
  label,
  scrolled,
  isActive,
}: {
  href: '/' | '/about' | '/reviews' | '/blog' | '/contact';
  label: string;
  scrolled: boolean;
  isActive: boolean;
}) {
  return (
    <Link
      href={href as never}
      className={cn(
        'relative px-3 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-200',
        isActive
          ? scrolled
            ? 'text-navy-500'
            : 'text-white'
          : scrolled
            ? 'text-slate-600 hover:text-navy-500 hover:bg-slate-50'
            : 'text-white/90 hover:text-white hover:bg-white/10',
      )}
    >
      {label}
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full" />
      )}
    </Link>
  );
}

/* ═══════════════════════════════════════════════════
   Dropdown Trigger Button
   ═══════════════════════════════════════════════════ */
function DropdownTrigger({
  label,
  isOpen,
  scrolled,
  onClick,
}: {
  label: string;
  isOpen: boolean;
  scrolled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-1 px-3 py-2 text-sm font-medium tracking-wide rounded-lg transition-all duration-200',
        isOpen
          ? scrolled
            ? 'text-navy-500 bg-slate-50'
            : 'text-white bg-white/10'
          : scrolled
            ? 'text-slate-600 hover:text-navy-500 hover:bg-slate-50'
            : 'text-white/90 hover:text-white hover:bg-white/10',
      )}
      aria-expanded={isOpen}
      aria-haspopup="true"
    >
      {label}
      <ChevronDown
        className={cn(
          'w-3.5 h-3.5 transition-transform duration-200',
          isOpen && 'rotate-180',
        )}
      />
    </button>
  );
}

/* ═══════════════════════════════════════════════════
   Main Header
   ═══════════════════════════════════════════════════ */
interface HeaderProps {
  isMobileMenuOpen?: boolean;
  onMobileMenuToggle?: () => void;
}

export function Header({ isMobileMenuOpen = false, onMobileMenuToggle }: HeaderProps) {
  const t = useTranslations('common');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* ── Scroll tracking ── */
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => setScrolled(latest > 20));

  /* ── Close dropdown on click outside ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  /* ── Close dropdown on route change ── */
  useEffect(() => {
    setActiveDropdown(null);
  }, [pathname]);

  /* ── Close on Escape key ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveDropdown(null);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  /* ── Dropdown hover bridge ── */
  const openDropdown = useCallback((id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(id);
  }, []);

  const closeDropdown = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 200);
  }, []);

  const toggleDropdown = useCallback((id: string) => {
    setActiveDropdown((prev) => (prev === id ? null : id));
  }, []);

  /* ── Locale switcher ── */
  const switchLocale = (newLocale: string) => {
    router.replace(pathname as '/', { locale: newLocale as 'en' | 'es' });
  };

  return (
    <header ref={headerRef} className="fixed top-0 inset-x-0 z-50">
      {/* ═══ Header Bar ═══ */}
      <div
        className={cn(
          'transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]',
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(0,53,78,0.04),0_4px_24px_rgba(0,53,78,0.06)]'
            : 'bg-gradient-to-b from-black/20 to-transparent',
        )}
      >
        <nav
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-500',
              scrolled ? 'h-16' : 'h-20',
            )}
          >
            {/* ── Logo ── */}
            <Link
              href="/"
              className={cn(
                'flex items-center gap-0.5 font-heading font-extrabold text-xl tracking-tight transition-colors duration-300',
                scrolled ? 'text-navy-500' : 'text-white',
              )}
            >
              MB<span className="text-orange-500">Clean</span>
            </Link>

            {/* ═══ Desktop Navigation ═══ */}
            <div className="hidden lg:flex items-center gap-0.5">
              <NavLink
                href="/"
                label={t('nav.home')}
                scrolled={scrolled}
                isActive={pathname === '/'}
              />

              {/* Services (mega dropdown trigger) */}
              <div
                onMouseEnter={() => openDropdown('services')}
                onMouseLeave={closeDropdown}
              >
                <DropdownTrigger
                  label={t('nav.services')}
                  isOpen={activeDropdown === 'services'}
                  scrolled={scrolled}
                  onClick={() => toggleDropdown('services')}
                />
              </div>

              {/* Industries (mega dropdown trigger) */}
              <div
                onMouseEnter={() => openDropdown('industries')}
                onMouseLeave={closeDropdown}
              >
                <DropdownTrigger
                  label={t('nav.industries')}
                  isOpen={activeDropdown === 'industries'}
                  scrolled={scrolled}
                  onClick={() => toggleDropdown('industries')}
                />
              </div>

              {/* Areas (inline dropdown) */}
              <div
                className="relative"
                onMouseEnter={() => openDropdown('areas')}
                onMouseLeave={closeDropdown}
              >
                <DropdownTrigger
                  label={t('nav.areas')}
                  isOpen={activeDropdown === 'areas'}
                  scrolled={scrolled}
                  onClick={() => toggleDropdown('areas')}
                />
                <AnimatePresence>
                  {activeDropdown === 'areas' && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-64 z-50"
                    >
                      <div className="relative bg-white/95 backdrop-blur-2xl rounded-xl shadow-glass-lg border border-slate-100 overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
                        <div className="py-2">
                          {counties.map((county) => (
                            <Link
                              key={county.slug}
                              href={`/areas/${county.slug}` as never}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors group"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <MapPin className="w-4 h-4 text-slate-400 group-hover:text-orange-500 transition-colors" />
                              <div>
                                <div className="text-sm font-medium text-slate-700 group-hover:text-navy-500 transition-colors">
                                  {county.name}
                                </div>
                                <div className="text-xs text-slate-400">
                                  {county.cities.length} {locale === 'es' ? 'ciudades' : 'cities'}
                                </div>
                              </div>
                            </Link>
                          ))}
                          <div className="border-t border-slate-100 mt-1 pt-1 px-4">
                            <Link
                              href="/areas"
                              className="flex items-center gap-2 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                              onClick={() => setActiveDropdown(null)}
                            >
                              {t('cta.viewAreas')}
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink href="/about" label={t('nav.about')} scrolled={scrolled} isActive={pathname.startsWith('/about')} />
              <NavLink href="/reviews" label={t('nav.reviews')} scrolled={scrolled} isActive={pathname.startsWith('/reviews')} />
              <NavLink href="/blog" label={t('nav.blog')} scrolled={scrolled} isActive={pathname.startsWith('/blog')} />
              <NavLink href="/contact" label={t('nav.contact')} scrolled={scrolled} isActive={pathname.startsWith('/contact')} />
            </div>

            {/* ═══ Right Side Actions ═══ */}
            <div className="flex items-center gap-3">
              {/* Phone */}
              <a
                href={`tel:+1${PHONE_RAW}` as never}
                className={cn(
                  'hidden md:flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-orange-500',
                  scrolled ? 'text-slate-700' : 'text-white',
                )}
                aria-label={`Call ${PHONE_NUMBER}`}
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{PHONE_NUMBER}</span>
              </a>

              {/* Language Switcher */}
              <div
                className={cn(
                  'hidden sm:flex items-center rounded-full p-0.5 transition-colors duration-300',
                  scrolled ? 'bg-slate-100' : 'bg-white/10',
                )}
              >
                {(['en', 'es'] as const).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => switchLocale(loc)}
                    className={cn(
                      'px-2.5 py-1 text-xs font-semibold rounded-full transition-all duration-200',
                      locale === loc
                        ? scrolled
                          ? 'bg-navy-500 text-white shadow-sm'
                          : 'bg-white/20 text-white'
                        : scrolled
                          ? 'text-slate-400 hover:text-slate-600'
                          : 'text-white/70 hover:text-white/90',
                    )}
                    aria-label={loc === 'en' ? 'Switch to English' : 'Cambiar a Español'}
                  >
                    {loc.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Free Quote CTA */}
              <Link href="/free-quote" className="relative group hidden sm:inline-flex">
                <span className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
                <span className="relative inline-flex items-center px-5 py-2.5 bg-orange-500 text-white text-sm font-semibold rounded-full hover:bg-orange-600 shadow-button hover:shadow-[0_4px_16px_rgba(249,115,22,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap">
                  {t('cta.freeQuote')}
                </span>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={onMobileMenuToggle}
                className={cn(
                  'lg:hidden flex items-center justify-center w-11 h-11 rounded-lg transition-colors duration-200',
                  scrolled ? 'hover:bg-slate-100' : 'hover:bg-white/10',
                )}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
              >
                <HamburgerIcon isOpen={isMobileMenuOpen} scrolled={scrolled} />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ═══ Industries Mega Dropdown ═══ */}
      <AnimatePresence>
        {activeDropdown === 'industries' && (
          <motion.div
            key="industries-mega"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-full hidden lg:block"
            onMouseEnter={() => openDropdown('industries')}
            onMouseLeave={closeDropdown}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
              <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_8px_40px_rgba(0,53,78,0.1),0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                <div className="p-5">
                  <motion.div
                    variants={megaStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-5 gap-3"
                  >
                    {industries.map((industry) => {
                      const Icon = industryIconMap[industry.icon] || Building;
                      return (
                        <motion.div key={industry.slug} variants={megaItemVariant}>
                          <Link
                            href={`/industries/${industry.slug}` as never}
                            className="group block relative overflow-hidden rounded-xl"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="relative h-28 overflow-hidden rounded-xl">
                              {industry.image && (
                                <Image
                                  src={industry.image}
                                  alt={locale === 'es' ? industry.nameEs : industry.name}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                  sizes="(max-width: 1280px) 20vw, 200px"
                                />
                              )}
                              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/85 via-navy-900/25 to-transparent group-hover:from-navy-900/90 transition-all duration-300" />
                              <div className="absolute inset-0 flex flex-col justify-end p-3 gap-1">
                                <Icon className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors duration-200" />
                                <span className="text-xs font-semibold text-white leading-tight line-clamp-2">
                                  {locale === 'es' ? industry.nameEs : industry.name}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      href="/industries"
                      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {locale === 'es' ? 'Ver Todas las Industrias' : 'View All Industries'}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Services Mega Dropdown ═══ */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            key="services-mega"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-x-0 top-full hidden lg:block"
            onMouseEnter={() => openDropdown('services')}
            onMouseLeave={closeDropdown}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-2">
              <div className="relative bg-white/95 backdrop-blur-2xl rounded-2xl shadow-[0_8px_40px_rgba(0,53,78,0.1),0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
                {/* Accent gradient hairline */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

                <div className="p-6">
                  <motion.div
                    variants={megaStagger}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 gap-1"
                  >
                    {services.map((service) => {
                      const Icon = serviceIconMap[service.icon] || Sparkles;
                      return (
                        <motion.div key={service.slug} variants={megaItemVariant}>
                          <Link
                            href={`/services/${service.slug}` as never}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 group transition-all duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-lg bg-navy-500/5 group-hover:bg-orange-500/10 transition-colors duration-200">
                              <Icon className="w-4 h-4 text-navy-400 group-hover:text-orange-500 transition-colors duration-200" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium text-slate-800 group-hover:text-navy-500 transition-colors truncate">
                                {locale === 'es' ? service.nameEs : service.name}
                              </div>
                              <div className="text-xs text-slate-400 mt-0.5">
                                {formatCompactPrice(service.priceMin, service.priceMax, service.priceUnit)}
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 text-slate-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* View All */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600 rounded-lg hover:bg-orange-50 transition-all duration-200"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {t('cta.viewServices')}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
