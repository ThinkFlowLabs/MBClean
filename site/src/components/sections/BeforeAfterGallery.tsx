'use client';

import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/ui';
import { cn } from '@/lib/utils/cn';
import { GripVertical } from 'lucide-react';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface BeforeAfterImage {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  label?: string;
}

interface BeforeAfterGalleryProps {
  images: BeforeAfterImage[];
}

/* ═══════════════════════════════════════════════════
   Interactive Slider Component
   ═══════════════════════════════════════════════════ */
function ComparisonSlider({ image }: { image: BeforeAfterImage }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none touch-none group"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After (full width underneath) */}
      <div className="absolute inset-0">
        <Image
          src={image.after}
          alt={image.afterAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* "After" Label */}
        <span className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold backdrop-blur-sm">
          After
        </span>
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <Image
          src={image.before}
          alt={image.beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* "Before" Label */}
        <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-slate-700/90 text-white text-xs font-bold backdrop-blur-sm">
          Before
        </span>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-[3px] bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
      >
        {/* Handle Grip */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <GripVertical className="w-5 h-5 text-slate-400" />
        </div>
      </div>

      {/* Optional Label */}
      {image.label && (
        <span className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-navy-500/80 text-white text-xs font-medium backdrop-blur-sm z-20">
          {image.label}
        </span>
      )}
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   Gallery Component
   ═══════════════════════════════════════════════════ */
export function BeforeAfterGallery({ images }: BeforeAfterGalleryProps) {
  const t = useTranslations('home');

  return (
    <Section background="white" padding="lg" id="before-after">
      <SectionHeader
        title={t('beforeAfter.title')}
        subtitle={t('beforeAfter.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {images.map((image, i) => (
          <motion.div key={i} variants={fadeUp}>
            <ComparisonSlider image={image} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
