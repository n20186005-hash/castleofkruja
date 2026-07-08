'use client';

import { useTranslations, useMessages } from 'next-intl';

type TicketItem = { name: string; price: string; desc: string };

export default function TicketsSection() {
  const t = useTranslations('tickets');
  const messages = useMessages() as any;
  const items = (messages?.tickets ?? {}) as Record<string, TicketItem>;

  const order: string[] = ['grounds', 'skanderbeg', 'ethnographic', 'parking'];
  const cards = order
    .map((key) => items[key])
    .filter((item): item is TicketItem => Boolean(item));

  return (
    <section id="tickets" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <p
          className="mb-8 text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {t('intro')}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl p-6 sm:p-8 border flex flex-col"
              style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
            >
              <h3
                className="font-display text-xl font-semibold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.name}
              </h3>
              <p className="text-2xl font-bold mb-2" style={{ color: 'var(--accent)' }}>
                {item.price}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-6 rounded-xl p-5 flex items-start gap-4 border"
          style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" className="flex-shrink-0 mt-0.5">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{t('note')}</p>
        </div>
      </div>
    </section>
  );
}
