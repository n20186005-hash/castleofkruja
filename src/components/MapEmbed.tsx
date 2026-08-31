import { useTranslations, useMessages } from 'next-intl';

export default function MapEmbed() {
  const t = useTranslations('mapSection');
  const tSEO = useTranslations('seo');
  const tBasic = useTranslations('basicInfo');
  const messages = useMessages() as any;
  const mapsLink = messages?.hero?.mapsLink || 'https://maps.app.goo.gl/z3Ak17fXyWwwntcB9';
  const mapsEmbedSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5314.343359275666!2d19.7944047!3d41.507325400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1351cdda90c2b389%3A0x39d52cebe65e9e3a!2z5YWL6a2v5Lqe5Z-O5aCh!5e1!3m2!1szh-CN!2s!4v1788143650269!5m2!1szh-CN!2s';
  const govtTourismUrl = 'https://akt.gov.al';

  return (
    <section id="map" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {tSEO('h2Location')}
        </h2>
        <p className="mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>{t('subtitle')}</p>
        <div className="w-12 h-0.5 mb-10" style={{ background: 'var(--accent)' }} />

        <div
          className="map-container relative rounded-xl overflow-hidden border"
          style={{ borderColor: 'var(--map-border)' }}
        >
          <iframe
            src={mapsEmbedSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title={`Google Maps - ${tBasic('officialNameValue')} - ${tBasic('cityValue')}`}
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 items-center">
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {t('openMaps')}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <div className="mt-10 text-center text-sm">
          <p style={{ color: 'var(--text-muted)' }}>
            For official updates and regional tourism information, visit{' '}
            <a
              href={govtTourismUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
              style={{ color: 'var(--accent)' }}
            >
              {tBasic('countryValue')} Official Tourism Portal (AKT)
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
