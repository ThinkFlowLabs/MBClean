'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container, Section, SectionHeader } from '@/components/ui';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';
import { InlineCTA } from '@/components/sections/InlineCTA';
import { RelatedServices } from '@/components/sections/RelatedServices';
import { cn } from '@/lib/utils/cn';
import { CheckCircle } from 'lucide-react';
import {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Service } from '@/types';
import type { ServicePageContent as ServicePageContentType } from '@/lib/content/service-pages';

// Map service slugs to their before/after image pairs
const serviceBeforeAfterMap: Record<string, { before: string; after: string; label: string; labelEs: string }> = {
  'stripping-and-waxing': {
    before: '/images/before-after/floor-waxing-before.webp',
    after: '/images/before-after/floor-waxing-after.webp',
    label: 'Floor Stripping & Waxing',
    labelEs: 'Decapado y Encerado de Pisos',
  },
  'scrubbing-and-wax': {
    before: '/images/before-after/scrubbing-wax-before.webp',
    after: '/images/before-after/scrubbing-wax-after.webp',
    label: 'Scrubbing & Wax',
    labelEs: 'Fregado y Encerado',
  },
  'carpet-cleaning': {
    before: '/images/before-after/carpet-cleaning-before.webp',
    after: '/images/before-after/carpet-cleaning-after.webp',
    label: 'Carpet Cleaning',
    labelEs: 'Limpieza de Alfombras',
  },
  'pressure-washing': {
    before: '/images/before-after/pressure-washing-before.webp',
    after: '/images/before-after/pressure-washing-after.webp',
    label: 'Pressure Washing',
    labelEs: 'Lavado a Presión',
  },
  'tile-grout-cleaning': {
    before: '/images/before-after/tile-grout-before.webp',
    after: '/images/before-after/tile-grout-after.webp',
    label: 'Tile & Grout Cleaning',
    labelEs: 'Limpieza de Losetas y Lechada',
  },
  'marble-terrazzo-polishing': {
    before: '/images/before-after/marble-polishing-before.webp',
    after: '/images/before-after/marble-polishing-after.webp',
    label: 'Marble Polishing',
    labelEs: 'Pulido de Mármol',
  },
  'air-duct-cleaning': {
    before: '/images/before-after/air-duct-before.webp',
    after: '/images/before-after/air-duct-after.webp',
    label: 'Air Duct Cleaning',
    labelEs: 'Limpieza de Ductos',
  },
  'post-construction-cleaning': {
    before: '/images/before-after/post-construction-before.webp',
    after: '/images/before-after/post-construction-after.webp',
    label: 'Post-Construction Cleaning',
    labelEs: 'Limpieza Post-Construcción',
  },
  'commercial-deep-cleaning': {
    before: '',
    after: '/images/before-after/commercial-deep-cleaning.webp',
    label: 'Our Cleaning Crew in Action',
    labelEs: 'Nuestro Equipo en Acción',
  },
};

// Map service slugs to their content images (shown before first H2)
const serviceContentImageMap: Record<string, string> = {
  'commercial-deep-cleaning': '/images/services/commercial-deep-cleaning-content.webp',
  'commercial-floor-deep-cleaning': '/images/services/commercial-floor-deep-cleaning-content.webp',
  'stripping-and-waxing': '/images/services/stripping-and-waxing-content.webp',
  'scrubbing-and-wax': '/images/services/scrubbing-and-wax-content.webp',
  'carpet-cleaning': '/images/services/carpet-cleaning-content.webp',
  'pressure-washing': '/images/services/pressure-washing-content.webp',
  'tile-grout-cleaning': '/images/services/tile-grout-cleaning-content.webp',
  'marble-terrazzo-polishing': '/images/services/marble-terrazzo-polishing-content.webp',
  'air-duct-cleaning': '/images/services/air-duct-cleaning-content.webp',
  'post-construction-cleaning': '/images/services/post-construction-cleaning-content.webp',
};

const iconMap: Record<string, LucideIcon> = {
  Sparkles, Layers, Sun, RotateCw, Waves,
  Droplets, Grid3X3, Diamond, Wind, HardHat,
};

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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

interface ServicePageContentProps {
  service: Service;
  relatedServices: Service[];
  pageContent?: ServicePageContentType;
  locale: string;
}

export function ServicePageContent({
  service,
  relatedServices,
  pageContent,
  locale,
}: ServicePageContentProps) {
  const t = useTranslations('services');
  const isEs = locale === 'es';
  const Icon = iconMap[service.icon] || Sparkles;

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28 overflow-hidden">
        {/* Background Image */}
        {service.image && (
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover opacity-15"
            sizes="100vw"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700/90 via-navy-500/85 to-navy-600/90" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10">
              <Icon className="w-8 h-8 text-orange-400" />
            </div>
            <h1
              className="font-heading font-extrabold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              {isEs ? service.nameEs : service.name}
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl leading-relaxed">
              {isEs ? service.shortDescriptionEs : service.shortDescription}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Rich Content Sections ── */}
      {pageContent && pageContent.sections.length > 0 ? (
        pageContent.sections.map((section, i) => {
          const hasContentImage = i === 0 && serviceContentImageMap[service.slug];
          const showInlineCTA = (i + 1) % 2 === 0 && i < pageContent.sections.length - 1;
          return (
            <Section
              key={i}
              background={i % 2 === 0 ? 'white' : 'slate'}
              padding="sm"
              animate={false}
              className={hasContentImage ? 'pt-6 sm:pt-8' : undefined}
            >
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="max-w-4xl mx-auto"
              >
                {/* Content image inside first section */}
                {hasContentImage && (
                  <motion.div variants={fadeUp} className="mb-8">
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] shadow-lg">
                      <Image
                        src={serviceContentImageMap[service.slug]}
                        alt={isEs ? service.nameEs : service.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  </motion.div>
                )}
                <motion.h2
                  variants={fadeUp}
                  className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-500 tracking-tight mb-6"
                >
                  {isEs ? section.headingEs : section.heading}
                </motion.h2>
                <motion.div
                  variants={fadeUp}
                  className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-500 prose-strong:text-navy-600 prose-a:text-orange-500"
                >
                  {(isEs ? section.bodyEs : section.body).split('\n\n').map((paragraph, j) => (
                    <p key={j} dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n/g, '<br />')
                    }} />
                  ))}
                </motion.div>
              </motion.div>

              {/* Inline CTA inside section, after every 2nd section's content */}
              {showInlineCTA && (
                <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
                  <InlineCTA />
                </div>
              )}
            </Section>
          );
        })
      ) : (
        <section className="py-16 sm:py-20 bg-white">
          <Container size="narrow">
            <p className="text-slate-400 italic text-center">
              Detailed service content will be added soon.
            </p>
          </Container>
        </section>
      )}

      {/* ── What's Included ── */}
      {pageContent && pageContent.included.length > 0 && (
        <Section background="white" padding="sm" animate={false}>
          <SectionHeader title={t('whatsIncluded')} animate={false} />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isEs ? pageContent.includedEs : pageContent.included).map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Inline CTA inside What's Included section */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 sm:mt-10">
            <InlineCTA />
          </div>
        </Section>
      )}

      {/* ── Before/After or Service Image ── */}
      {serviceBeforeAfterMap[service.slug] && (
        <Section background="white" padding="sm" animate={false}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-500 tracking-tight mb-8 text-center">
              {isEs ? 'Resultados Reales' : 'Real Results'}
            </h2>
            {serviceBeforeAfterMap[service.slug].before ? (
              /* Before/After pair */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={serviceBeforeAfterMap[service.slug].before}
                    alt={`Before ${isEs ? serviceBeforeAfterMap[service.slug].labelEs : serviceBeforeAfterMap[service.slug].label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-navy-700/70 backdrop-blur-sm text-xs font-bold text-white uppercase tracking-wider">
                      {isEs ? 'Antes' : 'Before'}
                    </span>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={serviceBeforeAfterMap[service.slug].after}
                    alt={`After ${isEs ? serviceBeforeAfterMap[service.slug].labelEs : serviceBeforeAfterMap[service.slug].label}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1.5 rounded-full bg-orange-500/80 backdrop-blur-sm text-xs font-bold text-white uppercase tracking-wider">
                      {isEs ? 'Después' : 'After'}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Single image (e.g., commercial deep cleaning collage) */
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9]">
                <Image
                  src={serviceBeforeAfterMap[service.slug].after}
                  alt={isEs ? serviceBeforeAfterMap[service.slug].labelEs : serviceBeforeAfterMap[service.slug].label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            )}
            <p className="mt-4 text-center text-sm text-slate-400">
              {isEs ? serviceBeforeAfterMap[service.slug].labelEs : serviceBeforeAfterMap[service.slug].label}
            </p>
          </motion.div>
        </Section>
      )}

      {/* ── Our Process ── */}
      {pageContent && pageContent.process.length > 0 && (
        <Section background="slate" padding="sm" animate={false}>
          <SectionHeader title={t('ourProcess')} animate={false} />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="max-w-3xl mx-auto"
          >
            <div className="space-y-6">
              {pageContent.process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0">
                    <span className="w-10 h-10 rounded-full bg-orange-500 text-white text-sm font-heading font-bold flex items-center justify-center shadow-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h3 className="font-heading font-bold text-base text-navy-500">
                      {isEs ? step.titleEs : step.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                      {isEs ? step.descriptionEs : step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ── Pricing ── */}
      <PricingSection service={service} />

      {/* ── FAQ ── */}
      {pageContent && pageContent.faqs.length > 0 && (
        <FAQSection
          items={isEs ? pageContent.faqsEs : pageContent.faqs}
          title={t('faq')}
        />
      )}

      {/* ── Related Services ── */}
      <RelatedServices services={relatedServices} />

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
