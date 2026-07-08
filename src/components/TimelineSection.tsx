import { useTranslations, useMessages } from 'next-intl';

type TimelineItem = { year: string; title: string; description: string };

export default function TimelineSection() {
  const t = useTranslations('knowledge.timeline');
  const messages = useMessages() as any;
  const items = (messages?.knowledge?.timeline?.items || []) as TimelineItem[];

  if (!items.length) return null;

  return (
    <section id="history" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p
          className="text-center mb-12 max-w-2xl mx-auto"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <ol className="relative border-l-2 ml-3 sm:ml-4" style={{ borderColor: 'var(--border-color)' }}>
          {items.map((item, index) => (
            <li key={`${item.year}-${index}`} className="mb-10 ml-6 sm:ml-8">
              <span
                className="absolute -left-[11px] flex items-center justify-center w-5 h-5 rounded-full"
                style={{ background: 'var(--accent)', border: '3px solid var(--bg-secondary)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </span>
              <div
                className="rounded-2xl p-5 sm:p-6 border shadow-sm hover:shadow-md transition-shadow"
                style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <span
                    className="font-display text-xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.year}
                  </span>
                  <h3
                    className="font-display text-lg font-semibold"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
