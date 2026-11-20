import { guideDetail, guideLabels } from '@/i18n/guide-details';
import { museumCopy } from '@/i18n/museum-copy';
import type { Locale } from '@/i18n/routing';

type Props = { locale: Locale; kind: Parameters<typeof guideDetail>[1] };

export function GuideAbout({ locale, kind }: Props) {
  const [, , manager, , , , bazaarManager] = museumCopy[locale].labels;
  const museumSite = `https://www.qendramuzeore-kruje.com/${locale === 'sq' ? 'sq' : 'en'}/visit`;
  return (
    <section className="rounded-2xl border p-5 sm:p-7 space-y-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
      <h2 className="font-display text-3xl font-semibold">{manager}</h2>
      <p>{guideDetail(locale, kind).about}</p>
      {(kind === 'bazaar' || kind === 'half') && (
        <p>{bazaarManager} <a className="underline" href="https://kruja.gov.al/wp-content/uploads/2016/06/Kruja_Info_English.pdf">Bashkia Krujë</a></p>
      )}
      {kind !== 'bazaar' && <a className="inline-block underline" href={museumSite}>Qendra Muzeore Krujë · 0511 22225</a>}
    </section>
  );
}

export function GuideVisitDetails({ locale, kind }: Props) {
  const [routeTitle, photoTitle, faqTitle] = guideLabels[locale];
  const { route, photo, faq: [question, answer] } = guideDetail(locale, kind);
  return (
    <>
      {kind !== 'tickets' && (
        <section className="space-y-3">
          <h2 className="font-display text-3xl font-semibold">{routeTitle}</h2>
          <ol className="list-decimal space-y-2 pl-6">
            {route.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>
      )}
      <section className="space-y-3">
        <h2 className="font-display text-3xl font-semibold">{photoTitle}</h2>
        <p>{photo}</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl font-semibold">{faqTitle}</h2>
        <details className="rounded-xl border p-4" style={{ borderColor: 'var(--border-color)' }}>
          <summary className="cursor-pointer font-semibold">{question}</summary>
          <p className="mt-3">{answer}</p>
        </details>
      </section>
    </>
  );
}
