import { Link } from '@/i18n/routing';
import { regionalPlaces, type RegionalLocale } from '@/i18n/regional';

export default function RegionalPlaceLinks({ locale }: { locale: RegionalLocale }) {
  const groups = new Map<string, Array<[string, string]>>();
  for (const [slug, place] of Object.entries(regionalPlaces)) {
    const entries = groups.get(place.area) ?? [];
    entries.push([slug, place[locale].title]);
    groups.set(place.area, entries);
  }

  return Array.from(groups, ([area, places]) => (
    <section key={area} className="space-y-3">
      <h3 className="font-display text-xl font-semibold">{area}</h3>
      <ul className="grid gap-3 sm:grid-cols-2">
        {places.map(([slug, title]) => (
          <li key={slug}>
            <Link locale={locale} href={{ pathname: '/day-trips/[place]', params: { place: slug } }} className="underline">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  ));
}
