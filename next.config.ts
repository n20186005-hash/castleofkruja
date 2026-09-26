import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    enableServerActions: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https' as const, hostname: 'images.unsplash.com' },
      { protocol: 'https' as const, hostname: 'maps.google.com' },
      { protocol: 'https' as const, hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https' as const, hostname: '*.google.com' },
      { protocol: 'https' as const, hostname: 'imagedelivery.net' },
      { protocol: 'https' as const, hostname: 'workers.cloudflare.com' },
    ],
  },
};

export default withNextIntl(nextConfig);
