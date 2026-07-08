import { useTranslations, useMessages } from 'next-intl';

type ArchitectureItem = { title: string; content: string };

export default function ArchitectureSection() {
  const t = useTranslations('architecture');
  const messages = useMessages() as any;
  const items = (messages?.architecture?.items || []) as ArchitectureItem[];

  if (!items.length) return null;

  return (
    <section id="architecture" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p
          className="mb-8 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 border flex flex-col ${index === 2 ? 'sm:col-span-2' : ''}`}
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <h3
                className="font-display text-xl font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.title}
              </h3>
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
