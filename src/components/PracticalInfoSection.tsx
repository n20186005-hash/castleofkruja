import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

type PracticalCategory = {
  title: string;
  summary: string;
  items: string[];
};

export default function PracticalInfoSection() {
  const t = useTranslations('practicalInfo');
  const messages = useMessages() as any;

  const categories: { key: 'restrooms' | 'parking' | 'dining' | 'lodging' | 'shops' | 'fuel'; icon: ReactNode }[] = [
    {
      key: 'restrooms',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M4 21V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" />
          <path d="M9 21v-7h6v7" />
          <path d="M12 5v-2" />
        </svg>
      ),
    },
    {
      key: 'parking',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </svg>
      ),
    },
    {
      key: 'dining',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2" />
          <path d="M7 2v20" />
          <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" />
        </svg>
      ),
    },
    {
      key: 'lodging',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 21V8l9-5 9 5v13" />
          <path d="M9 21v-6h6v6" />
          <path d="M3 11h18" />
        </svg>
      ),
    },
    {
      key: 'shops',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      key: 'fuel',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="3" y="5" width="8" height="16" rx="1" />
          <path d="M11 10h4v9a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-7.172a2 2 0 0 0-.586-1.414L15 5" />
          <path d="M6 5v4M18 11h.01" />
        </svg>
      ),
    },
  ];

  const getCategory = (key: string): PracticalCategory | undefined => {
    const c = messages?.practicalInfo?.[key] as PracticalCategory | undefined;
    return c && Array.isArray(c.items) ? c : undefined;
  };

  return (
    <section id="practical" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-4"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-8" style={{ background: 'var(--accent)' }} />

        <div
          className="rounded-xl p-5 sm:p-6 border mb-12 text-sm"
          style={{
            background: 'var(--bg-tertiary)',
            borderColor: 'var(--border-color)',
            borderStyle: 'dashed',
          }}
        >
          <div className="flex gap-3 items-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              className="flex-shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <p style={{ color: 'var(--text-secondary)' }}>{t('disclaimer')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map(({ key, icon }) => {
            const data = getCategory(key);
            if (!data) return null;
            return (
              <article
                key={key}
                className="rounded-2xl p-6 sm:p-7 border flex flex-col"
                style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
              >
                <header className="flex items-start gap-3 mb-4">
                  <div
                    className="p-2 rounded-lg flex-shrink-0"
                    style={{ color: 'var(--accent)', background: 'var(--bg-primary)' }}
                  >
                    {icon}
                  </div>
                  <div>
                    <h3
                      className="font-display text-xl font-semibold mb-1"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {data.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {data.summary}
                    </p>
                  </div>
                </header>
                <ul className="space-y-2.5">
                  {data.items.map((bullet, i) => (
                    <li
                      key={i}
                      className="text-sm leading-relaxed pl-4 relative"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: 'var(--accent)' }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
