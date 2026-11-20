import { Link, type Locale } from '@/i18n/routing';
import { oldBazaarPath, halfDayPath } from '@/i18n/guide-paths';
import { krujeGuides } from '@/i18n/kruje-guides';
import { useLocale, useTranslations } from 'next-intl';

export default function SurroundingsSection() {
  const { bazaar, half } = krujeGuides[useLocale() as Locale];
  const t = useTranslations('surroundings');
  const tSEO = useTranslations('seo');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSEO('h2Landmarks')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />
        <div
          className="rounded-2xl p-8 sm:p-10 border text-center"
          style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
        >
          <h3
            className="font-display text-2xl sm:text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h3>
          <p
            className="mb-6 text-sm font-medium uppercase tracking-wider"
            style={{ color: 'var(--accent)' }}
          >
            {t('subtitle')}
          </p>
          <p
            className="text-base leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            {t('content')}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 underline" style={{ color: 'var(--accent)' }}>
          <li><Link href={oldBazaarPath}>{bazaar[0]}</Link></li>
          <li><Link href={halfDayPath}>{half[0]}</Link></li>
        </ul>
      </div>
    </section>
  );
}
