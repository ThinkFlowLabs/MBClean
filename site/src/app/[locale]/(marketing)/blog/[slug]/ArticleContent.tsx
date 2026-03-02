'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui';
import { CTASection } from '@/components/sections/CTASection';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { BlogPost } from '@/types';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface ArticleContentProps {
  article: BlogPost;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const t = useTranslations('blog');

  return (
    <>
      {/* ── Header ── */}
      <section className="bg-gradient-to-br from-navy-700 via-navy-500 to-navy-600 py-16 sm:py-24">
        <Container size="narrow" className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
          >
            <Link
              href={'/blog' as never}
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white/90 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('allPosts')}
            </Link>

            {article.category && (
              <span className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium mb-4">
                {article.category}
              </span>
            )}

            <h1
              className="font-heading font-extrabold text-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)' }}
            >
              {article.title}
            </h1>

            <div className="flex items-center gap-4 mt-5 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {t('publishedOn')} {new Date(article.publishedAt).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readingTime} {t('minRead')}
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ── Article Body ── */}
      <section className="py-12 sm:py-16 bg-white">
        <Container size="narrow">
          <motion.article
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: smoothEase, delay: 0.2 }}
            className="prose prose-slate prose-lg max-w-none prose-headings:font-heading prose-headings:text-navy-500 prose-a:text-orange-500 prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </Container>
      </section>

      <CTASection />
    </>
  );
}
