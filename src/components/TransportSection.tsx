'use client';

import { useTranslations, useMessages } from 'next-intl';
import type { ReactNode } from 'react';

export default function TransportSection() {
  const t = useTranslations('transport');
  const messages = useMessages() as any;
  const airport = messages?.transport?.airport as
    | {
        title: string;
        intro: string;
        transit: { title: string; duration: string; cost: string; steps: string[] };
        drive: { title: string; duration: string; cost: string; steps: string[]; note: string };
      }
    | undefined;

  const transportOptions = [
    {
      key: 'fromCenter',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 22h20L12 2z"/>
          <circle cx="12" cy="15" r="3"/>
        </svg>
      ),
    },
    {
      key: 'fromAirport',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21.5 4c0 0-2 .5-3.5 2L14.5 9.5l-8.2-1.8c-.8-.2-1.6.3-1.8 1.1-.2.8.3 1.6 1.1 1.8l6.3 1.4-3.4 3.4-2.8-.7c-.6-.2-1.2.1-1.4.7-.2.6.1 1.2.7 1.4l3.5.9 1.4 3.5c.2.6.8.9 1.4.7.6-.2.9-.8.7-1.4l-.7-2.8 3.4-3.4 1.4 6.3c.2.8 1 1.3 1.8 1.1.8-.2 1.3-1 1.1-1.8z"/>
        </svg>
      ),
    },
    {
      key: 'fromStation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <path d="M8 21h8"/>
          <path d="M12 17v4"/>
        </svg>
      ),
    },
    {
      key: 'publicTransport',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="3" width="16" height="16" rx="2"/>
          <path d="M4 11h16"/>
          <circle cx="8" cy="15" r="1"/>
          <circle cx="16" cy="15" r="1"/>
        </svg>
      ),
    },
    {
      key: 'walking',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3 7h-6l3-7z"/>
          <path d="M12 9v13"/>
          <path d="M8 17l4 4 4-4"/>
          <path d="M5 22h14"/>
        </svg>
      ),
    },
    {
      key: 'driving',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 3v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3"/>
          <path d="M14 6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6"/>
          <path d="M4 20h16"/>
          <circle cx="7" cy="17" r="2"/>
          <circle cx="17" cy="17" r="2"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="transport" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {transportOptions.map((option) => (
            <TransportCard
              key={option.key}
              icon={option.icon}
              title={t(option.key as any)}
              description={t(`${option.key}Desc` as any)}
            />
          ))}
        </div>

        {airport && (
          <div
            className="mt-10 rounded-2xl p-6 sm:p-8 border"
            style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
          >
            <h3
              className="font-display text-2xl font-semibold mb-2"
              style={{ color: 'var(--text-primary)' }}
            >
              {airport.title}
            </h3>
            <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>{airport.intro}</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <AirportRoute
                title={airport.transit.title}
                duration={airport.transit.duration}
                cost={airport.transit.cost}
                steps={airport.transit.steps}
              />
              <AirportRoute
                title={airport.drive.title}
                duration={airport.drive.duration}
                cost={airport.drive.cost}
                steps={airport.drive.steps}
                note={airport.drive.note}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AirportRoute({
  title,
  duration,
  cost,
  steps,
  note,
}: {
  title: string;
  duration: string;
  cost: string;
  steps: string[];
  note?: string;
}) {
  return (
    <div
      className="rounded-xl p-5 border"
      style={{ background: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}
    >
      <h4 className="font-display text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h4>
      <div className="flex flex-wrap gap-2 mb-4">
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: 'var(--accent)', color: 'white' }}
        >
          {duration}
        </span>
        <span
          className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: 'var(--accent-soft, rgba(0,0,0,0.06))', color: 'var(--text-primary)' }}
        >
          {cost}
        </span>
      </div>
      <ol className="space-y-2.5">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
              style={{ background: 'var(--accent)', color: 'white' }}
            >
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      {note && (
        <p
          className="mt-4 text-xs leading-relaxed p-3 rounded-lg"
          style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--text-muted)' }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

function TransportCard({ icon, title, description }: { icon: ReactNode; title: string; description: string }) {
  return (
    <div
      className="rounded-xl p-6 border"
      style={{ background: 'var(--bg-tertiary)', borderColor: 'var(--border-color)' }}
    >
      <div className="flex items-center gap-3 mb-3" style={{ color: 'var(--accent)' }}>
        <div className="p-2 rounded-lg bg-white/50 dark:bg-black/20">
          {icon}
        </div>
        <h3 className="font-display text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      </div>
      <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{description}</p>
    </div>
  );
}
