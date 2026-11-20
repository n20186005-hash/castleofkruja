import { heritagePaths, heritageText } from '@/i18n/heritage';
import { guideLabels } from '@/i18n/guide-details';
import { visitGuide, visitPath } from '@/i18n/visit-guide';
import { museumCopy } from '@/i18n/museum-copy';
import { Link, type Locale } from '@/i18n/routing';
import { oldBazaarPath, halfDayPath, skanderbegPath, ethnographicPath } from '@/i18n/guide-paths';
import { krujeGuides } from '@/i18n/kruje-guides';
import { useLocale, useTranslations } from 'next-intl';

export default function SurroundingsSection() {
  const locale = useLocale() as Locale;
  const heritage = heritageText[locale as keyof typeof heritageText];
  const { bazaar, half } = krujeGuides[locale];
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
        <nav className="mt-6 rounded-2xl border p-5 sm:p-7" aria-labelledby="nearby-guides" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
          <h3 id="nearby-guides" className="font-display text-2xl font-semibold mb-3">{guideLabels[locale][3]}</h3>
          <ul className="grid gap-3 sm:grid-cols-2 underline" style={{ color: 'var(--accent)' }}>
          <li><Link href={oldBazaarPath}>{bazaar[0]}</Link></li>
          <li><Link href={halfDayPath}>{half[0]}</Link></li>
          <li><Link href={skanderbegPath}>{museumCopy[locale].skanderbeg[0]}</Link></li>
          <li><Link href={ethnographicPath}>{museumCopy[locale].ethnographic[0]}</Link></li>
          <li><Link href={visitPath}>{visitGuide[locale][0]}</Link></li>
          {heritage && Object.entries(heritagePaths).map(([path, href]) => {
            const place = path.split('/').at(-1) as keyof typeof heritage;
            return <li key={path}><Link href={href}>{heritage[place][0]}</Link></li>;
          })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
