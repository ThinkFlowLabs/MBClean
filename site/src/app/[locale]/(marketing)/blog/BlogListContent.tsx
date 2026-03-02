'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Section, Container } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/types';

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

interface BlogListContentProps {
  articles: BlogPost[];
}

export function BlogListContent({ articles }: BlogListContentProps) {
  const t = useTranslations('blog');

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-20 sm:py-28">
        <Container className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="font-heading font-extrabold text-white tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.15 }}
            className="mt-4 text-lg text-white/80 max-w-xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </Container>
      </section>

      {/* ── Articles ── */}
      <Section background="white" padding="lg">
        {articles.length > 0 ? (
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article) => (
              <motion.div key={article.slug} variants={fadeUp}>
                <Link
                  href={`/blog/${article.slug}` as never}
                  className="group block h-full rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
                >
                  {article.coverImage && (
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={article.coverImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readingTime} {t('minRead')}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-base text-navy-500 leading-snug group-hover:text-orange-500 transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-2 text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-orange-500">
                      {t('readMore')}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-400">
              Articles coming soon. Check back for expert cleaning tips and industry insights.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
