'use client';

import { useTranslations } from 'next-intl';

type OptionalFieldKey =
  | 'accessibility'
  | 'sunsetTip'
  | 'region'
  | 'coordinates'
  | 'heritageStatus'
  | 'suggestedDuration'
  | 'photographyPolicy'
  | 'dressCode';

const OPTIONAL_FIELDS: OptionalFieldKey[] = [
  'accessibility',
  'sunsetTip',
  'region',
  'coordinates',
  'heritageStatus',
  'suggestedDuration',
  'photographyPolicy',
  'dressCode',
];

export default function BasicInfo() {
  const t = useTranslations('basicInfo');

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <InfoCard title={t('officialName')} value={t('officialNameValue')} />
          <InfoCard title={t('type')} value={t('typeValue')} />
          <InfoCard title={t('googleRating')} value={t('googleRatingValue')} />
          <InfoCard title={t('plusCode')} value={t('plusCodeValue')} />
          {OPTIONAL_FIELDS.map((key) =>
            t.has(key) ? (
              <InfoCard
                key={key}
                title={t(key)}
                value={t(`${key}Value` as any)}
                wide={key === 'heritageStatus' || key === 'photographyPolicy' || key === 'accessibility' || key === 'dressCode'}
              />
            ) : null
          )}
          <div className="md:col-span-2 lg:col-span-3">
            <InfoCard title={t('address')} value={t('addressValue')} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value, wide }: { title: string; value: string; wide?: boolean }) {
  return (
    <div
      className={`rounded-xl p-5 border ${wide ? 'md:col-span-2 lg:col-span-3' : ''}`}
      style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
    >
      <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{title}</p>
      <p className="font-medium leading-relaxed" style={{ color: 'var(--text-primary)' }}>{value}</p>
    </div>
  );
}
