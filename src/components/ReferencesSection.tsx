import { useTranslations, useMessages } from 'next-intl';

export default function ReferencesSection() {
  const t = useTranslations('references');
  const tFooter = useTranslations('footer');
  const messages = useMessages() as any;
  const items = (messages?.references?.items || []) as string[];
  const officialLinks = messages?.footer?.officialLinks || {};

  return (
    <section className="py-12 border-t" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-4xl mx-auto px-6">
        <h3
          className="text-lg font-semibold mb-6 uppercase tracking-wider"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>Literature & Archives</h4>
            <ul className="list-disc list-outside ml-5 space-y-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="text-sm leading-relaxed"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3" style={{ color: 'var(--text-secondary)' }}>{tFooter('officialResourcesTitle')}</h4>
            <ul className="list-disc list-outside ml-5 space-y-2">
              <li className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <a href="https://akt.gov.al/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--accent)]">
                  {officialLinks.akt || 'National Tourism Agency of Albania (AKT)'}
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <a href="https://iktk.gov.al/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--accent)]">
                  {officialLinks.iktk || 'National Institute of Cultural Heritage (IKTK)'}
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <a href="https://arkiva.gov.al/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--accent)]">
                  {officialLinks.arkiva || 'General Directorate of Archives'}
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <a href="https://asig.gov.al/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--accent)]">
                  {officialLinks.asig || 'State Authority for Geospatial Information (ASIG)'}
                </a>
              </li>
              <li className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                <a href="https://punetejashtme.gov.al/en/regjimi-i-vizave-per-te-huajt/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-[var(--accent)]">
                  {officialLinks.visa || 'Ministry for Europe and Foreign Affairs - Visa Regime'}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
