import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mbcleansolutions.com'),
  title: {
    default: 'Commercial Cleaning Services South Florida | MB Clean Solutions',
    template: '%s | MB Clean Solutions',
  },
  description:
    'Professional commercial cleaning in Miami-Dade, Broward & Palm Beach. Floor cleaning, carpet care, pressure washing & marble polishing. Free estimates today.',
  openGraph: {
    type: 'website',
    siteName: 'MB Clean Solutions',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
