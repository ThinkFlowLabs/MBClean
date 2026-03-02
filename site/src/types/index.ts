// ─── Service Types ───
export interface Service {
  slug: string;
  name: string;
  nameEs: string;
  shortDescription: string;
  shortDescriptionEs: string;
  icon: string;
  image?: string;
  priceMin: number;
  priceMax: number;
  priceUnit: 'per sq ft' | 'per vent';
  priceUnitEs: 'por pie²' | 'por ventila';
  keywords: string[];
  relatedSlugs: string[];
  metaTitle: string;
  metaDescription: string;
  metaTitleEs: string;
  metaDescriptionEs: string;
}

// ─── Industry Types ───
export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryChallenge {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryBenefit {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  name: string;
  nameEs: string;
  shortDescription: string;
  shortDescriptionEs: string;
  longDescription?: string;
  icon: string;
  image?: string;
  relevantServiceSlugs: string[];
  stats?: IndustryStat[];
  challenges?: IndustryChallenge[];
  benefits?: IndustryBenefit[];
  faq?: FAQItem[];
  metaTitle: string;
  metaDescription: string;
}

// ─── Area Types ───
export interface County {
  slug: string;
  name: string;
  shortDescription: string;
  shortDescriptionEs: string;
  image?: string;
  cities: City[];
  metaTitle: string;
  metaDescription: string;
}

export interface City {
  slug: string;
  name: string;
  county: string;
  population?: number;
  shortDescription?: string;
  shortDescriptionEs?: string;
  metaTitle?: string;
  metaDescription?: string;
}

// ─── Testimonial Types ───
export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  content: string;
  contentEs: string;
  rating: number;
  date: string;
  avatar?: string;
}

// ─── Blog Types ───
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  tags: string[];
}

// ─── Form Types ───
export interface QuoteFormData {
  // Step 1: Service
  service: string;
  // Step 2: Property
  propertyType: string;
  squareFootage: string;
  additionalDetails?: string;
  // Step 3: Contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  preferredDate?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}

// ─── Navigation Types ───
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// ─── SEO Types ───
export interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noIndex?: boolean;
}

// ─── FAQ Types ───
export interface FAQItem {
  question: string;
  answer: string;
}
