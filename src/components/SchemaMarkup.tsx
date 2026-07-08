import React from 'react';
import { useTranslations } from 'next-intl';

export default function SchemaMarkup() {
  const tBasic = useTranslations('basicInfo');
  const tHero = useTranslations('hero');
  const tMeta = useTranslations('meta');
  const tTransport = useTranslations('transport');

  const touristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "Place"],
    "name": tBasic('officialNameValue'),
    "alternateName": tHero('title'),
    "description": tMeta('description'),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": tBasic('cityValue'),
      "addressCountry": tBasic('countryValue'),
      "streetAddress": tBasic('addressValue')
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "reviewCount": "9953"
    },
    "publicAccess": true
  };

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
      "@id": "https://castleofkruja.com/#touristattraction"
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
    </>
  );
}
