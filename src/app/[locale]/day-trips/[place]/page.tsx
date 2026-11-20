import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { guideLabels } from '@/i18n/guide-details';
import { museumCopy } from '@/i18n/museum-copy';
import { isRegionalLocale, regionalLabels, regionalLocales, regionalPlaces, visitorContact, type PlaceSlug } from '@/i18n/regional';

type Props = { params: Promise<{ locale: string; place: string }> };

export function generateStaticParams({ params }: { params: { locale: string } }) {
  return isRegionalLocale(params.locale) ? Object.keys(regionalPlaces).map((place) => ({ place })) : [];
}

async function getPage(params: Props['params']) {
  const { locale, place } = await params;
  if (!isRegionalLocale(locale) || !Object.hasOwn(regionalPlaces, place)) notFound();
  const slug = place as PlaceSlug;
  const data = regionalPlaces[slug];
  return { locale, slug, data, copy: data[locale] };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug, copy } = await getPage(params);
  const path = `/day-trips/${slug}`;
  return {
    title: copy.title, description: copy.about,
    alternates: { canonical: `/${locale}${path}`, languages: { en: `/en${path}`, zh: `/zh${path}`, 'x-default': `/en${path}` } },
    openGraph: { title: copy.title, description: copy.about, url: `/${locale}${path}`, images: [`/region/${slug}.webp`] },
  };
}

export default async function RegionalPlace({ params }: Props) {
  const { locale, slug, data, copy } = await getPage(params);
  setRequestLocale(locale);
  const t = regionalLabels[locale];
  const addressLabel = museumCopy[locale].labels[1];
  const contact = visitorContact(data.area, slug);
  const query = encodeURIComponent(`${data.address}, Albania`);
  const map = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const directions = `https://www.google.com/maps/dir/?api=1&origin=Kruj%C3%AB%2C%20Albania&destination=${query}`;
  return (
    <>
      <Header interior languages={regionalLocales} />
      <main className="section-padding pt-24">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link href="/day-trips" className="underline">{t.title}</Link>
          <header className="space-y-4">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{copy.title}</h1>
            <a href={map} className="underline">{t.map}</a>
          </header>
          <figure>
            <Image src={`/region/${slug}.webp`} alt={copy.title} width={data.photo.width} height={data.photo.height}
              priority className="max-h-[34rem] w-full rounded-2xl object-contain" />
            <figcaption className="mt-2 text-sm"><a href={data.photo.source} className="underline">{t.photo} · {data.photo.credit}</a></figcaption>
          </figure>
          <section className="rounded-2xl border p-5 sm:p-7 space-y-3" style={{ borderColor: 'var(--border-color)', background: 'var(--bg-tertiary)' }}>
            <h2 className="font-display text-3xl font-semibold">{t.manager}</h2>
            <p>{copy.about}</p>
            <p>{t.consult} <a href={contact.url} className="underline">{contact.name}</a>.</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{t.facts}</h2>
            <dl className="space-y-2">
              <div><dt className="font-semibold">{addressLabel}</dt><dd><a href={map} className="underline">{data.address}</a></dd></div>
              <div><dt className="font-semibold">{t.region}</dt><dd>{data.area}</dd></div>
            </dl>
            <a href={directions} className="underline">{t.travel}</a>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{t.visit}</h2>
            <p>{copy.visit}</p>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{guideLabels[locale][2]}</h2>
            <details className="rounded-xl border p-4" style={{ borderColor: 'var(--border-color)' }}>
              <summary className="cursor-pointer font-semibold">{copy.question}</summary>
              <p className="mt-3">{copy.answer}</p>
            </details>
          </section>
          <a href={data.source} className="underline">{t.info}</a>
        </article>
      </main>
      <Footer />
    </>
  );
}
