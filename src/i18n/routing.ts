import { oldBazaarPath, halfDayPath, skanderbegPath, ethnographicPath } from '@/i18n/guide-paths';
import { visitPath } from './visit-guide';
import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'zh', 'sq', 'de', 'fr', 'it', 'nl'],
  defaultLocale: 'en',
  localePrefix: {
    mode: 'always',
  },
  pathnames: {
    '/': '/',
    [visitPath]: visitPath,
    [oldBazaarPath]: oldBazaarPath,
    [halfDayPath]: halfDayPath,
    [skanderbegPath]: skanderbegPath,
    [ethnographicPath]: ethnographicPath,
    '/privacy-policy': '/privacy-policy',
    '/terms-of-service': '/terms-of-service',
    '/cookie-settings': '/cookie-settings',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
