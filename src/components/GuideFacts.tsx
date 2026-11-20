import { localVisit, localVisitDuration, minuteUnits } from '@/i18n/local-visit';
import { Link, type Locale } from '@/i18n/routing';
import { museumCopy } from '@/i18n/museum-copy';
import { krujeGuides } from '@/i18n/kruje-guides';
import { visitGuide, visitPath } from '@/i18n/visit-guide';
import { oldBazaarPath, skanderbegPath, ethnographicPath } from '@/i18n/guide-paths';

const googleSnapshot = 'https://www.google.com/travel/hotels/entity/ChkIoqvewuCZ8cgqGg0vZy8xMWg3MWw0X2Z2EAE';
export const guideStops = {
  bazaar: {
    path: oldBazaarPath, score: '4.4', count: 701,
    address: 'GQ5V+RQ4, Rruga Pazari Vjeter, Krujë, Albania',
    map: 'https://www.google.com/maps/search/?api=1&query=Old+Bazaar+of+Kruja%2C+GQ5V%2BRQ4',
    source: 'https://www.google.com.ng/travel/hotels/entity/CgoI1rrU9vbfnM9FEAE',
  },
  skanderbeg: {
    path: skanderbegPath, score: '4.6', count: 1720,
    address: 'Sheshi Gjergj Kastrioti, Krujë, Albania',
    map: 'https://maps.google.com/maps?q=Muzeu+Historik+Kombetar+Gjergj+Kastrioti+Skenderbeg+Kruje+Albania',
    source: googleSnapshot,
  },
  ethnographic: {
    path: ethnographicPath, score: '4.6', count: 451,
    address: 'GQ4V+MFJ, Rruga Kala, Krujë, Albania',
    map: 'https://maps.google.com/maps?q=Muzeu+Etnografik+Kruje+Albania',
    source: googleSnapshot,
  },
} as const;

export const guideMaps = { bazaar: guideStops.bazaar.map, skanderbeg: guideStops.skanderbeg.map, ethnographic: guideStops.ethnographic.map };

type Stop = keyof typeof guideStops;
type GuideKind = Stop | 'half' | 'tickets';

export default function GuideFacts({ locale, kind }: { locale: Locale; kind: GuideKind }) {
  const copy = museumCopy[locale];
  const [type, duration, hours, admission, bazaarType, halfType, skanderbegType, ethnographicType, ticketType, bazaarHours, walkingCost, bazaarCost, mapTitle] = localVisit[locale];
  const kinds = { bazaar: bazaarType, half: halfType, skanderbeg: skanderbegType, ethnographic: ethnographicType, tickets: ticketType };
  const museumInfo = `https://www.qendramuzeore-kruje.com/${locale === 'sq' ? 'sq' : 'en'}/visit`;
  const [basic, address, , gettingThere, ratings, checked, , routeRatings, directions] = copy.labels;
  const relevant: Stop[] = kind === 'half' ? ['bazaar', 'skanderbeg', 'ethnographic']
    : kind === 'tickets' ? ['skanderbeg', 'ethnographic'] : [kind];

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border p-5 sm:p-7 space-y-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
        <h2 className="font-display text-3xl font-semibold">{basic}</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div><dt className="font-semibold">{type}</dt><dd>{kinds[kind]}</dd></div>
          {kind !== 'tickets' && <div><dt className="font-semibold">{duration}</dt><dd>{localVisitDuration[kind]} {minuteUnits[locale]}</dd></div>}
          <div>
            <dt className="font-semibold">{address}</dt>
            <dd className="flex flex-col gap-1">
              {relevant.map((stop) => <a className="underline" key={stop} href={guideStops[stop].map}>{guideStops[stop].address}</a>)}
            </dd>
          </div>
        </dl>
        {(kind === 'skanderbeg' || kind === 'ethnographic') && (
          <p><Link className="underline" href={visitPath}>{visitGuide[locale][0]}</Link></p>
        )}
      </section>
      {kind !== 'tickets' && (
        <>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{hours}</h2>
            {(kind === 'bazaar' || kind === 'half') && <p>{bazaarHours}</p>}
            {kind !== 'bazaar' && <p><a className="underline" href={museumInfo}>{krujeGuides[locale].museumHours}</a></p>}
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{admission}</h2>
            {kind === 'bazaar' ? <p>{bazaarCost}</p> : <p>{walkingCost} <a className="underline" href="https://visitkruja.com/guides/kruja-castle-tickets-hours/">{krujeGuides[locale].prices}</a></p>}
          </section>
        </>
      )}
      <section className="space-y-3">
        <h2 className="font-display text-3xl font-semibold">{gettingThere}</h2>
        <p>{directions}</p>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl font-semibold">{ratings}</h2>
        {(kind === 'half' || kind === 'tickets') && <p>{routeRatings}</p>}
        <ul className="space-y-2">
          {relevant.map((stop) => {
            const item = guideStops[stop];
            const title = stop === 'bazaar' ? krujeGuides[locale].bazaar[0] : copy[stop][0];
            return (
              <li key={stop} className="flex flex-wrap items-baseline gap-x-3">
                {stop === kind ? <span>{title}</span> : <Link href={item.path} className="underline">{title}</Link>}
                <a className="font-semibold underline" href={item.map}>{item.score}/5 ({item.count.toLocaleString(locale)})</a>
                <a className="text-sm underline" href={item.source}>{checked}</a>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="font-display text-3xl font-semibold">{mapTitle}</h2>
        <ul className="space-y-2">
          {relevant.map((stop) => <li key={stop}><a className="underline" href={guideStops[stop].map}>{guideStops[stop].address}</a></li>)}
        </ul>
      </section>
    </div>
  );
}
