import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;
  const baseUrl = 'https://castleofkruja.com';

  const selfUrl = `${baseUrl}/${locale}`;
  const ogImageUrl = `${baseUrl}/gallery/castle-of-kruja%20(1).jpg`;
  const ogImageAlt = messages.basicInfo
    ? `${messages.basicInfo.officialNameValue || 'Castle of Kruja'} - Main view in ${messages.basicInfo.cityValue || 'Krujë'}, ${messages.basicInfo.countryValue || 'Albania'}`
    : 'Castle of Kruja - Main view in Krujë, Albania';

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
        'sq': `${baseUrl}/sq`,
        'x-default': `${baseUrl}/sq`,
      },
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      siteName: "Castle of Kruja",
      locale: locale === 'zh' ? 'zh_CN' : locale === 'sq' ? 'sq_AL' : 'en_US',
      type: 'website',
      url: selfUrl,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 800,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: messages.meta.title,
      description: messages.meta.description,
      images: [ogImageUrl],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const baseUrl = 'https://castleofkruja.com';

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const heroImageUrl = `${baseUrl}/gallery/castle-of-kruja%20(1).jpg`;
  const mapsShareUrl = 'https://maps.app.goo.gl/z3Ak17fXyWwwntcB9';
  const govtTourismUrl = 'https://akt.gov.al';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['TouristAttraction', 'LandmarkOrHistoricalBuilding'],
    '@id': `${baseUrl}/#attraction`,
    name: 'Castle of Kruja',
    alternateName: ['Kalaja e Krujës', 'Krujë Castle', 'Castle of Kruja (Krujë)'],
    description: messages.meta.description,
    url: `${baseUrl}/${locale}`,
    image: [heroImageUrl],
    isAccessibleForFree: true,
    touristType: ['History', 'Culture', 'Architecture'],
    hasMap: mapsShareUrl,
    sameAs: [
      mapsShareUrl,
      govtTourismUrl,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.6',
      reviewCount: '10706',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.507325400000006,
      longitude: 19.7944047,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rruga Kala',
      addressLocality: 'Krujë',
      addressRegion: 'Durrës County',
      postalCode: '1500',
      addressCountry: 'AL',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00',
        validFrom: '2026-05-01',
        validThrough: '2026-10-31',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '17:00',
        validFrom: '2026-11-01',
        validThrough: '2027-04-30',
      },
    ],
    containsPlace: {
      '@type': 'Museum',
      name: 'Skanderbeg Museum',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '19:00',
          validFrom: '2026-05-01',
          validThrough: '2026-10-31',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '09:00',
          closes: '17:00',
          validFrom: '2026-11-01',
          validThrough: '2027-04-30',
        },
      ],
      priceRange: '500 ALL',
    },
  };

  return (
    <html lang={locale === 'zh' ? 'zh-CN' : locale === 'sq' ? 'sq-AL' : 'en'} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossOrigin="anonymous" />
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
