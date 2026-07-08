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

  const zhUrl = `${baseUrl}/zh`;
  const enUrl = `${baseUrl}/en`;
  const sqUrl = `${baseUrl}/sq`;
  const selfUrl = `${baseUrl}/${locale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      siteName: "Castle of Kruja",
      locale: locale === 'zh' ? 'zh_CN' : locale === 'sq' ? 'sq_AL' : 'en_US',
      type: 'website',
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LandmarkOrHistoricalBuilding', 'TouristAttraction'],
    name: 'Castle of Kruja',
    alternateName: 'Kalaja e Krujës',
    description: messages.meta.description,
    url: `${baseUrl}/${locale}`,
    image: `${baseUrl}/og-image.jpg`,
    touristType: ['History', 'Culture', 'Architecture'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 41.5091,
      longitude: 19.7925,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rruga Kala',
      addressLocality: 'Krujë',
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
