import { useTranslations } from 'next-intl';

export default function SurroundingsSection() {
  const t = useTranslations('surroundings');

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <div
          className="rounded-2xl p-8 sm:p-10 border text-center"
          style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
        >
          <h2
            className="font-display text-2xl sm:text-3xl font-semibold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {t('title')}
          </h2>
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
      </div>
    </section>
  );
}
