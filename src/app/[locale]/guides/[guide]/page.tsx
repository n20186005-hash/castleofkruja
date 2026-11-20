import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, routing, type Locale } from '@/i18n/routing';
import { oldBazaarPath, halfDayPath } from '@/i18n/guide-paths';
import { krujeGuides } from '@/i18n/kruje-guides';
import { visitGuide, visitPath } from '@/i18n/visit-guide';

const origin = 'https://www.castleofkruja.com';
const guides = {
  'old-bazaar': { key: 'bazaar', path: oldBazaarPath, image: '/guides/old-bazaar.webp',
    map: 'https://www.google.com/maps/search/?api=1&query=Pazari+i+Vjeter+i+Krujes%2C+Kruje',
    source: 'https://akt.gov.al/en/attractions/old-bazaar-traditional-bazaar/' },
  'half-day-in-kruje': { key: 'half', path: halfDayPath, image: '/gallery/castle-of-kruja%20(1).jpg',
    map: 'https://www.google.com/maps/dir/?api=1&origin=Pazari+i+Vjeter+i+Krujes&destination=Kruja+Castle&travelmode=walking',
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
  const [title, description] = krujeGuides[locale][key];
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
  const { key, image, map, source } = getGuide(guide);
  const copy = krujeGuides[locale];
  const [title, description, firstHeading, first, secondHeading, second] = copy[key];
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
            <Image src={image} alt={key === 'bazaar' ? 'Pazari i Vjetër i Krujës' : 'Kalaja e Krujës'}
              width={1200} height={800} priority
              className="aspect-[2/1] w-full rounded-2xl object-cover" />
            {key === 'bazaar' && (
              <figcaption className="mt-2 text-sm">
                <a className="underline" href="https://commons.wikimedia.org/wiki/File:Old_Bazaar_in_Kruja.jpg">
                  Wikiuser Mely / Wikimedia Commons
                </a>
              </figcaption>
            )}
          </figure>
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
