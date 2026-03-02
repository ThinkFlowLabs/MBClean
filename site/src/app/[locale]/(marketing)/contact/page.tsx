import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/schemas';
import { JsonLd } from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/content/navigation';
import { ContactPageContent } from './ContactPageContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return generatePageMetadata({
    title:
      locale === 'es'
        ? 'Contáctenos | MB Clean Solutions'
        : 'Contact Us | MB Clean Solutions',
    description:
      locale === 'es'
        ? 'Contáctenos para limpieza comercial profesional en el Sur de Florida. Llame al (954) 482-5008.'
        : 'Contact MB Clean Solutions for professional commercial cleaning in South Florida. Call (954) 482-5008 or fill out our contact form.',
    path: '/contact',
    locale,
  });
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ])}
      />
      <ContactPageContent />
    </>
  );
}
