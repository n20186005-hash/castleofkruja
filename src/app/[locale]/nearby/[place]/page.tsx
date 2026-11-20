import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { heritagePlaces, heritageText } from '@/i18n/heritage';
import { museumCopy } from '@/i18n/museum-copy';
import { guideLabels } from '@/i18n/guide-details';
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
  const [basic, address, manager] = museumCopy[locale].labels;
  const [walking, photos, faq] = guideLabels[locale];
  const map = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Krujë, Albania`)}`;
  return (
    <>
      <Header interior />
      <main className="section-padding pt-24">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link href="/" className="underline">{visitGuide[locale][10]}</Link>
          <header className="space-y-4">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
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
            <dl><dt className="font-semibold">{address}</dt><dd>{name} · Rruga Kala, Krujë</dd></dl>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{walking} · {photos}</h2>
            <p>{route}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{faq}</h2>
            <details className="rounded-xl border p-4">
              <summary className="cursor-pointer font-semibold">{question}</summary>
              <p className="mt-3">{answer}</p>
            </details>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
