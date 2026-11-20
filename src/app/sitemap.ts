import { oldBazaarPath, halfDayPath, skanderbegPath, ethnographicPath } from '@/i18n/guide-paths';
import { MetadataRoute } from 'next';
import { visitPath } from '@/i18n/visit-guide';
import { routing } from '@/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.castleofkruja.com';
  
  const entries: MetadataRoute.Sitemap = [];

  const pages = [
    '',
    '/privacy-policy',
    '/terms-of-service',
    '/cookie-settings',
    visitPath,
    oldBazaarPath,
    halfDayPath,
    skanderbegPath,
    ethnographicPath
  ];

  for (const locale of routing.locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.5,
      });
    }
  }

  return entries;
}
