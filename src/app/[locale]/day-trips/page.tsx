import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { isRegionalLocale, regionalLabels, regionalLocales, regionalPlaces } from '@/i18n/regional';

type Props = { params: Promise<{ locale: string }> };

async function getLocale(params: Props['params']) {
  const { locale } = await params;
  if (!isRegionalLocale(locale)) notFound();
  return locale;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = await getLocale(params);
  return {
    title: regionalLabels[locale].title,
    description: regionalLabels[locale].intro,
    alternates: {
      canonical: `/${locale}/day-trips`,
      languages: { en: '/en/day-trips', zh: '/zh/day-trips', 'x-default': '/en/day-trips' },
    },
  };
}

export default async function RegionalIndex({ params }: Props) {
  const locale = await getLocale(params);
  setRequestLocale(locale);
  const t = regionalLabels[locale];
  const places = Object.entries(regionalPlaces);
  const areas = [...new Set(places.map(([, place]) => place.area))];
  return (
    <>
      <Header interior languages={regionalLocales} />
      <main className="section-padding pt-24">
        <div className="mx-auto max-w-4xl space-y-8">
          <header className="space-y-3">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{t.title}</h1>
            <p>{t.intro}</p>
          </header>
          {areas.map((area) => (
            <section key={area} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold">{area}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {places.filter(([, place]) => place.area === area).map(([slug, place]) => (
                  <li key={slug}>
                    <Link href={{ pathname: '/day-trips/[place]', params: { place: slug } }} className="underline">
                      {place[locale].title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
