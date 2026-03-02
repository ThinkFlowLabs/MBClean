import type { FAQItem } from '@/types';

export interface ServicePageContent {
  slug: string;
  heroImage: string;
  /** Full content sections rendered in order */
  sections: ContentSection[];
  /** What's included checklist */
  included: string[];
  includedEs: string[];
  /** Our process steps */
  process: ProcessStep[];
  /** FAQ items for schema + accordion */
  faqs: FAQItem[];
  faqsEs: FAQItem[];
}

export interface ContentSection {
  heading: string;
  headingEs: string;
  body: string;
  bodyEs: string;
}

export interface ProcessStep {
  title: string;
  titleEs: string;
  description: string;
  descriptionEs: string;
}
