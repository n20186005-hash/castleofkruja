import { useTranslations, useMessages } from 'next-intl';

type LegendItem = { title: string; content: string; sourceTag?: string };

export default function LegendsSection() {
  const t = useTranslations('legends');
  const messages = useMessages() as any;
  const items = (messages?.legends?.items || []) as LegendItem[];
  const sourceNote = messages?.legends?.sourceNote as string | undefined;

  if (!items.length) return null;

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p
          className="mb-4 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('subtitle')}
        </p>
        {sourceNote && (
          <div
            className="mb-8 rounded-xl p-4 sm:p-5 border"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)', borderStyle: 'dashed' }}
          >
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {sourceNote}
            </p>
          </div>
        )}
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 sm:p-8 border"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {item.title}
                </h3>
                {item.sourceTag && (
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium tracking-wider"
                    style={{ background: 'var(--bg-primary)', color: 'var(--accent)', border: '1px solid var(--accent-soft, rgba(0,0,0,0.08))' }}
                  >
                    {item.sourceTag}
                  </span>
                )}
              </div>
              <p
                className="text-base leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
