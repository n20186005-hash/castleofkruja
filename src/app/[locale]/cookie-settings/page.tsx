import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import CookieSettingsClient from './CookieSettingsClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.castleofkruja.com';
  const zhUrl = `${baseUrl}/zh/cookie-settings`;
  const enUrl = `${baseUrl}/en/cookie-settings`;
  const sqUrl = `${baseUrl}/sq/cookie-settings`;
  const deUrl = `${baseUrl}/de/cookie-settings`;
  const frUrl = `${baseUrl}/fr/cookie-settings`;
  const itUrl = `${baseUrl}/it/cookie-settings`;
  const nlUrl = `${baseUrl}/nl/cookie-settings`;
  const selfUrl = `${baseUrl}/${locale}/cookie-settings`;

  return {
    alternates: {
      canonical: selfUrl,
      languages: {
        'zh': zhUrl,
        'en': enUrl,
        'sq': sqUrl,
        'de': deUrl,
        'fr': frUrl,
        'it': itUrl,
        'nl': nlUrl,
        'x-default': enUrl,
      },
    },
  };
}

export default async function CookiePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookieSettingsClient />;
}
