import React from 'react';
import { useTranslations, useMessages } from 'next-intl';

export default function SchemaMarkup() {
  const tBasic = useTranslations('basicInfo');
  const tHero = useTranslations('hero');
  const tMeta = useTranslations('meta');
  const tTransport = useTranslations('transport');
  const tFAQ = useTranslations('faq');
  const messages = useMessages() as any;
  const faqItems = (messages?.faq?.items || []) as Array<{ question: string; answer: string }>;

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": tMeta('title'),
    "url": "https://castleofkruja.com",
    "description": tMeta('description'),
    "inLanguage": ["en", "zh", "sq"]
  };

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@id": "https://castleofkruja.com/#attraction"
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": tTransport('airport.title'),
    "description": tTransport('airport.intro'),
    "step": [
      {
        "@type": "HowToStep",
        "name": tTransport('airport.transit.title'),
        "text": tTransport('airport.transit.steps.0') || ""
      },
      {
        "@type": "HowToStep",
        "name": tTransport('airport.drive.title'),
        "text": tTransport('airport.drive.steps.0') || ""
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
