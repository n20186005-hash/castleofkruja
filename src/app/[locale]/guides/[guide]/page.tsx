import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import { GuideAbout, GuideVisitDetails } from '@/components/GuideDetail';
import GuideFacts, { guideMaps } from '@/components/GuideFacts';
import { museumCopy } from '@/i18n/museum-copy';
import Footer from '@/components/Footer';
import { Link, routing, type Locale } from '@/i18n/routing';
import { oldBazaarPath, halfDayPath, skanderbegPath, ethnographicPath } from '@/i18n/guide-paths';
import { krujeGuides } from '@/i18n/kruje-guides';
import { visitGuide, visitPath } from '@/i18n/visit-guide';

const origin = 'https://www.castleofkruja.com';
const guides = {
  'skanderbeg-museum': { key: 'skanderbeg', path: skanderbegPath, image: '/guides/skanderbeg-museum.webp',
    map: guideMaps.skanderbeg, source: 'https://akt.gov.al/en/attractions/Skanderbeg-Museum/',
    photo: 'The_Museum_of_Scanderbeg,_Kruja_Castle,_Albania_and_the_ruins_of_Fatih_Mosque_of_Kruja.jpg',
    author: 'Gerimema2' },
  'ethnographic-museum': { key: 'ethnographic', path: ethnographicPath, image: '/guides/ethnographic-museum.webp',
    map: guideMaps.ethnographic, source: 'https://akt.gov.al/en/muze/muzeu-etnografik-i-krujes/',
    photo: 'Museum_of_Ethnographic_in_Kruja.jpg', author: 'OdettMelody' },
  'old-bazaar': { key: 'bazaar', path: oldBazaarPath, image: '/guides/old-bazaar.webp',
    map: guideMaps.bazaar,
    source: 'https://akt.gov.al/en/attractions/old-bazaar-traditional-bazaar/' },
  'half-day-in-kruje': { key: 'half', path: halfDayPath, image: '/gallery/castle-of-kruja%20(1).jpg',
    map: 'https://www.google.com/maps/dir/?api=1&origin=Old+Bazaar+of+Kruja%2C+GQ5V%2BRQ4&destination=Ethnographic+Museum+of+Kruja%2C+GQ4V%2BMFJ&waypoints=Gjergj+Kastrioti+National+Museum%2C+Kruje&travelmode=walking',
    source: 'https://www.akt.gov.al/en/cities/kruje/' },
} as const;

type Props = { params: Promise<{ locale: Locale; guide: string }> };

export function generateStaticParams() {
  return Object.keys(guides).map((guide) => ({ guide }));
}

function getGuide(slug: string) {
  if (!Object.hasOwn(guides, slug)) notFound();
  return guides[slug as keyof typeof guides];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, guide } = await params;
  const { path, key, image } = getGuide(guide);
  const [title, description] = (key === 'skanderbeg' || key === 'ethnographic' ? museumCopy[locale][key] : krujeGuides[locale][key]);
  const url = `${origin}/${locale}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((lang) => [lang, `${origin}/${lang}${path}`])),
        'x-default': `${origin}/${routing.defaultLocale}${path}`,
      },
    },
    openGraph: { title, description, url, type: 'article', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function KrujeGuidePage({ params }: Props) {
  const { locale, guide } = await params;
  setRequestLocale(locale);
  const details = getGuide(guide);
  const { key, image, map, source } = details;
  const copy = krujeGuides[locale];
  const [title, description, firstHeading, first, secondHeading, second] = key === 'skanderbeg' || key === 'ethnographic' ? museumCopy[locale][key] : copy[key];
  const [tickets, , , , , , , , , , home, , sourceLabel] = visitGuide[locale];

  return (
    <>
      <Header interior />
      <main className="section-padding pt-24">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link className="underline" href="/">{home}</Link>
          <header className="space-y-4">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="text-lg">{description}</p>
            <a className="underline" href={map}>Google Maps</a>
          </header>
          <figure>
            <Image src={image} alt={key === 'half' ? 'Kalaja e Krujës' : title}
              width={1200} height={800} priority
              className="aspect-[2/1] w-full rounded-2xl object-cover" />
            {'photo' in details && (
              <figcaption className="mt-2 text-sm">
                <a className="underline" href={`https://commons.wikimedia.org/wiki/File:${details.photo}`}>
                  {details.author} / Wikimedia Commons
                </a>
              </figcaption>
            )}
            {key === 'bazaar' && (
              <figcaption className="mt-2 text-sm">
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Old_Bazaar_in_Kruja.jpg">
                  Wikiuser Mely / Wikimedia Commons
                </a>
              </figcaption>
            )}
          </figure>
          <GuideAbout locale={locale} kind={key} />
          <GuideFacts locale={locale} kind={key} />
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{firstHeading}</h2>
            <p>{first}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{secondHeading}</h2>
            <p>{second}</p>
            {key === 'half' && (
              <a className="underline" href={`https://www.qendramuzeore-kruje.com/${locale === 'sq' ? 'sq' : 'en'}/visit`}>
                Qendra Muzeore Krujë
              </a>
            )}
          </section>
          {key === 'half' && (
            <figure>
              <Image src="/guides/old-bazaar.webp" alt={copy.bazaar[0]} width={1200} height={800}
                className="aspect-[2/1] w-full rounded-2xl object-cover" />
              <figcaption className="mt-2 text-sm">
                <Link className="underline" href={oldBazaarPath}>{copy.bazaar[0]}</Link>
                {' · '}
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Old_Bazaar_in_Kruja.jpg">Wikiuser Mely / Wikimedia Commons</a>
              </figcaption>
            </figure>
          )}
          <GuideVisitDetails locale={locale} kind={key} />
          <ul className="space-y-2 underline">
            <li><Link href={visitPath}>{tickets}</Link></li>
            <li>{key === 'bazaar'
              ? <Link href={halfDayPath}>{copy.half[0]}</Link>
              : <Link href={oldBazaarPath}>{copy.bazaar[0]}</Link>}</li>
            <li><a href={source}>{sourceLabel}</a></li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
