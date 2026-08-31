import { useTranslations, useMessages } from 'next-intl';

export default function Intro() {
  const t = useTranslations('intro');
  const tSEO = useTranslations('seo');
  const tOff = useTranslations('officialManagement');
  const messages = useMessages() as any;
  const items: string[] = messages?.intro?.visitGuide?.items || [];
  const alsoKnownAsItems: string[] = messages?.intro?.alsoKnownAs?.items || [];

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSEO('h2About')}
        </h2>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div
          className="p-5 sm:p-6 rounded-xl border mb-10"
          style={{
            background: 'var(--bg-tertiary)',
            borderColor: 'var(--border-color)',
            borderStyle: 'dashed',
          }}
        >
          <p
            className="text-base font-medium leading-relaxed mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            {tSEO('identityDeclaration')}
          </p>
          <nav aria-label="Geo breadcrumb" className="text-sm">
            <ol className="flex flex-wrap items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              {tSEO('geoBreadcrumb').split(' → ').map((crumb, i, arr) => (
                <li key={i} className="flex items-center gap-1.5">
                  <span style={{ color: i === arr.length - 1 ? 'var(--text-secondary)' : 'var(--text-muted)' }}>{crumb}</span>
                  {i < arr.length - 1 && <span aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <p
          className="text-lg leading-relaxed mb-8"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('description')}
        </p>

        <div
          className="p-5 sm:p-6 rounded-xl border mb-12"
          style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
        >
          <p
            className="text-base leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            {tSEO('surroundingCluster')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-xl p-6 sm:p-8 border"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('visitGuide.title')}
            </h3>
            <ul className="space-y-3">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl p-6 sm:p-8 border"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <h3
              className="font-display text-xl font-semibold mb-4"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('alsoKnownAs.title')}
            </h3>
            <ul className="space-y-3">
              {alsoKnownAsItems.map((keyword, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{keyword}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-xl border" style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}>
          <h2 className="font-display text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
            {tOff('title')}
          </h2>
          <div className="text-base leading-relaxed whitespace-pre-wrap" style={{ color: 'var(--text-secondary)' }}>
            {tOff('text')}
          </div>
        </div>
      </div>
    </section>
  );
}
