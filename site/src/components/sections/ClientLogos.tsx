'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/ui';

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

interface ClientLogosProps {
  logos?: { name: string; src: string }[];
  className?: string;
}

/**
 * Client logo strip with grayscale → color hover effect.
 * Until we have real logos, this renders placeholder brand boxes.
 */
export function ClientLogos({ logos, className }: ClientLogosProps) {
  // Placeholder brands until real logos are provided
  const placeholders = [
    'Trusted by businesses across South Florida',
  ];

  if (logos && logos.length > 0) {
    return (
      <motion.section
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className={cn('py-10 bg-slate-50 border-y border-slate-100', className)}
      >
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 sm:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Container>
      </motion.section>
    );
  }

  // Subtle placeholder when no logos available yet
  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={cn('py-8 bg-slate-50/50', className)}
    >
      <Container>
        <p className="text-center text-sm text-slate-300 tracking-wide">
          {placeholders[0]}
        </p>
      </Container>
    </motion.section>
  );
}
