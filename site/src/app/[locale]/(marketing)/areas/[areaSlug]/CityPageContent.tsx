'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container, Section, SectionHeader } from '@/components/ui';
import { CTASection } from '@/components/sections/CTASection';
import { PricingSection } from '@/components/sections/PricingSection';
import { services } from '@/lib/content/services';
import { cn } from '@/lib/utils/cn';
import {
  MapPin,
  ArrowRight,
  Building2,
  Sparkles,
  Phone,
  CheckCircle2,
} from 'lucide-react';
import type { City, County } from '@/types';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

/** Icon map for services (subset used in cards) */
const serviceIconMap: Record<string, React.ElementType> = {
  Sparkles,
};

interface CityPageContentProps {
  city: City;
  county: County;
  locale: string;
}

export function CityPageContent({ city, county, locale }: CityPageContentProps) {
  const t = useTranslations('areas');
  const tc = useTranslations('common');
  const isEs = locale === 'es';

  // Nearby cities from the same county (excluding current city)
  const nearbyCities = county.cities.filter((c) => c.slug !== city.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        {/* Decorative background */}
        {county.image && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${county.image})` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-navy-500/85 to-navy-600/90" />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
              <Link href="/areas" className="hover:text-white/80 transition-colors">
                {tc('nav.areas')}
              </Link>
              <span>/</span>
              <Link
                href={`/areas/${county.slug}` as never}
                className="hover:text-white/80 transition-colors"
              >
                {county.name}
              </Link>
              <span>/</span>
              <span className="text-white/80">{city.name}</span>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
              <MapPin className="w-8 h-8 text-orange-400" />
            </div>
            <h1
              className="font-heading font-extrabold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              {isEs
                ? `Limpieza Comercial en ${city.name}`
                : `Commercial Cleaning in ${city.name}`}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              {isEs
                ? city.shortDescriptionEs || city.shortDescription
                : city.shortDescription}
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-4 mt-8">
              {city.population && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm border border-white/10">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  {isEs ? 'Población' : 'Population'}:{' '}
                  {city.population.toLocaleString('en-US')}
                </div>
              )}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm border border-white/10">
                <MapPin className="w-4 h-4 text-orange-400" />
                {county.name}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm backdrop-blur-sm border border-white/10">
                <Sparkles className="w-4 h-4 text-orange-400" />
                {isEs ? '10 Servicios' : '10 Services'}
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/free-quote"
                className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 shadow-[0_4px_16px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                {tc('cta.freeEstimate')}
              </Link>
              <a
                href="tel:+19544825008"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                (954) 482-5008
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Services Available ── */}
      <Section background="white" padding="lg">
        <SectionHeader
          title={
            isEs
              ? `Nuestros Servicios en ${city.name}`
              : `Our Services in ${city.name}`
          }
          subtitle={
            isEs
              ? `Servicios completos de limpieza comercial disponibles para negocios en ${city.name} y alrededores.`
              : `Comprehensive commercial cleaning services available for businesses in ${city.name} and surrounding areas.`
          }
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => (
            <motion.div key={service.slug} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}` as never}
                className={cn(
                  'flex items-start gap-4 p-5 rounded-xl',
                  'bg-white border border-slate-100 shadow-sm',
                  'hover:border-orange-200 hover:shadow-md',
                  'transition-all duration-200 group',
                )}
              >
                <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-100 transition-colors">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-sm text-slate-800 group-hover:text-orange-600 transition-colors">
                    {isEs ? service.nameEs : service.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {isEs ? 'Desde' : 'From'} ${service.priceMin}
                    {service.priceUnit === 'per sq ft' ? '/sqft' : '/vent'}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-orange-400 flex-shrink-0 mt-1 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Why Choose Us for This City ── */}
      <Section background="slate" padding="lg">
        <SectionHeader
          title={
            isEs
              ? `¿Por Qué Elegir MB Clean en ${city.name}?`
              : `Why Choose MB Clean in ${city.name}?`
          }
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              title: isEs ? 'Servicio Local' : 'Local Service',
              desc: isEs
                ? `Estamos basados en el Sur de Florida y conocemos ${city.name}. Tiempos de respuesta rápidos y servicio personalizado.`
                : `Based in South Florida, we know ${city.name}. Fast response times and personalized service for local businesses.`,
            },
            {
              title: isEs ? '10 Servicios Especializados' : '10 Specialized Services',
              desc: isEs
                ? 'Desde limpieza profunda hasta pulido de mármol. Un solo proveedor para todas sus necesidades de limpieza comercial.'
                : 'From deep cleaning to marble polishing. One provider for all your commercial cleaning needs.',
            },
            {
              title: isEs ? 'Precios Transparentes' : 'Transparent Pricing',
              desc: isEs
                ? 'Publicamos nuestros rangos de precios. Sin costos ocultos ni sorpresas. Solicite su estimado gratis.'
                : 'We publish our price ranges. No hidden costs or surprises. Request your free estimate today.',
            },
            {
              title: isEs ? 'Resultados Expertos' : 'Expert Results',
              desc: isEs
                ? 'Equipos especializados con equipo de grado comercial. Limpieza a nivel de proyecto que supera las expectativas.'
                : 'Specialized crews with commercial-grade equipment. Project-level cleaning that exceeds expectations.',
            },
            {
              title: isEs ? 'Completamente Asegurados' : 'Fully Insured',
              desc: isEs
                ? 'Con licencia, asegurados y certificados SBE/WOSB. Protegemos su negocio con cada proyecto.'
                : 'Licensed, insured, and SBE/WOSB certified. We protect your business with every project.',
            },
            {
              title: isEs ? 'Bilingüe' : 'Bilingual',
              desc: isEs
                ? 'Equipo completamente bilingüe inglés/español. Comunicación clara en su idioma preferido.'
                : 'Fully bilingual English/Spanish team. Clear communication in your preferred language.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="flex items-start gap-3"
            >
              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-800">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ── Nearby Cities ── */}
      {nearbyCities.length > 0 && (
        <Section background="white" padding="lg">
          <SectionHeader
            title={
              isEs
                ? `También Servimos en ${county.name}`
                : `Also Serving ${county.name}`
            }
            subtitle={
              isEs
                ? `Explore nuestros servicios en otras ciudades del ${county.name}.`
                : `Explore our services in other ${county.name} cities.`
            }
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
          >
            {nearbyCities.map((nearbyCity) => (
              <motion.div key={nearbyCity.slug} variants={fadeUp}>
                <Link
                  href={`/areas/${nearbyCity.slug}` as never}
                  className={cn(
                    'flex items-center gap-2 p-3 rounded-xl',
                    'bg-slate-50 border border-slate-100',
                    'hover:bg-orange-50 hover:border-orange-200',
                    'transition-all duration-200 group',
                  )}
                >
                  <span className="w-2 h-2 rounded-full bg-orange-400 flex-shrink-0 group-hover:bg-orange-500" />
                  <span className="text-sm font-medium text-slate-600 group-hover:text-orange-600 transition-colors">
                    {nearbyCity.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Link back to county page */}
          <div className="text-center mt-8">
            <Link
              href={`/areas/${county.slug}` as never}
              className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              {isEs
                ? `Ver todo ${county.name}`
                : `View all ${county.name}`}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}
