import { localVisit } from '@/i18n/local-visit';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { heritageObservations, heritagePractical, heritagePlaces, heritageText } from '@/i18n/heritage';
import { museumCopy } from '@/i18n/museum-copy';
import { guideLabels } from '@/i18n/guide-details';
import { regionalLabels } from '@/i18n/regional';
import { visitGuide } from '@/i18n/visit-guide';

type Locale = keyof typeof heritageText;
type Place = keyof typeof heritagePlaces;
type Props = { params: Promise<{ locale: string; place: string }> };
const origin = 'https://www.castleofkruja.com';

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return Object.hasOwn(heritageText, params.locale) ? Object.keys(heritagePlaces).map((place) => ({ place })) : [];
}

async function getPage(params: Props['params']) {
  const { locale, place } = await params;
  if (!Object.hasOwn(heritageText, locale) || !Object.hasOwn(heritagePlaces, place)) notFound();
  return { locale: locale as Locale, place: place as Place };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, place } = await getPage(params);
  const [title, description] = heritageText[locale][place];
  const url = `${origin}/${locale}/nearby/${place}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(Object.keys(heritageText).map((lang) => [lang, `${origin}/${lang}/nearby/${place}`])),
    },
    openGraph: { title, description, url, images: [heritagePlaces[place].image] },
  };
}

export default async function HeritagePage({ params }: Props) {
  const { locale, place } = await getPage(params);
  setRequestLocale(locale);
  const [title, about, route, question, answer] = heritageText[locale][place];
  const { name, image, photo, credit, source } = heritagePlaces[place];
  const [basic, address, manager, transport] = museumCopy[locale].labels;
  const [type, tekke, tower, ruins, access, accessNote, stay, stayNote, reviews] = heritagePractical[locale];
  const [walking, photos, faq] = guideLabels[locale];
  const observationIndex = { 'dollma-tekke': 0, 'clock-tower': 1, 'fatih-mosque-ruins': 2 } as const;
  const siteType = [tekke, tower, ruins][observationIndex[place]];
  const routeStart = {
    en: 'Krujë Castle gate', zh: '克鲁亚城堡门', sq: 'Porta e Kalasë së Krujës',
    de: 'Burgtor von Krujë', fr: 'Porte du château de Krujë', it: 'Porta del castello di Krujë', nl: 'Kasteelpoort van Krujë',
  }[locale];
  const observationHeading = {
    en: regionalLabels.en.observe, zh: regionalLabels.zh.observe, sq: 'Arkitektura dhe detajet',
    de: 'Architektur und Details', fr: 'Architecture et détails', it: 'Architettura e dettagli', nl: 'Architectuur en details',
  }[locale];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Krujë, Albania`)}`;
  return (
    <>
      <Header interior />
      <main className="section-padding pt-24">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link href="/" className="underline">{visitGuide[locale][10]}</Link>
          <header className="space-y-4">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="text-lg">{siteType} · Krujë</p>
            <p className="text-sm">{accessNote}</p>
            <a href={map} className="underline">Google Maps</a>
          </header>
          <figure>
            <Image src={image} alt={title} width={1200} height={800} priority
              className="max-h-[34rem] w-full rounded-2xl object-contain" />
            <figcaption className="mt-2 text-sm">
              <a className="underline" href={`https://commons.wikimedia.org/wiki/File:${photo}`}>{credit} / Wikimedia Commons</a>
            </figcaption>
          </figure>
          <section className="rounded-2xl border p-5 sm:p-7 space-y-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
            <h2 className="font-display text-3xl font-semibold">{manager}</h2>
            <p>{about}</p>
            <a className="underline" href={source}>{visitGuide[locale][12]}</a>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{basic}</h2>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div><dt className="font-semibold">{type}</dt><dd>{siteType}</dd></div>
              <div><dt className="font-semibold">{address}</dt><dd>{name} · Rruga Kala, Krujë</dd></div>
            </dl>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{access}</h2>
            <p>{accessNote}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{transport}</h2>
            <a className="underline" href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent('Old Bazaar of Kruja, Krujë')}&destination=${encodeURIComponent(`${name}, Krujë, Albania`)}&travelmode=walking`}>
              {localVisit[locale][13]} → {title}
            </a>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{observationHeading}</h2>
            <p>{heritageObservations[locale][observationIndex[place]]}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{walking} · {photos}</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>{routeStart}</li>
              <li><a className="underline" href={map}>{name}</a></li>
            </ol>
            <p>{route}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{faq}</h2>
            <details className="rounded-xl border p-4">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-3">{answer}</p>
            </details>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{stay}</h2>
            <p>{stayNote}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{reviews}</h2>
            <p>{name} · Rruga Kala, Krujë</p>
            <a href={map} className="underline">Google Maps</a>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
