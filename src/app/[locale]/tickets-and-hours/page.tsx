import { oldBazaarPath, halfDayPath } from '@/i18n/guide-paths';
import { krujeGuides } from '@/i18n/kruje-guides';
import type { Metadata } from 'next';
import Image from 'next/image';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link, routing, type Locale } from '@/i18n/routing';
import { visitGuide, visitPath } from '@/i18n/visit-guide';

const baseUrl = 'https://www.castleofkruja.com';
const image = '/gallery/castle-of-kruja%20(1).jpg';
type Props = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const [title, description] = visitGuide[locale];
  const url = `${baseUrl}/${locale}${visitPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(routing.locales.map((language) => [
          language, `${baseUrl}/${language}${visitPath}`,
        ])),
        'x-default': `${baseUrl}/${routing.defaultLocale}${visitPath}`,
      },
    },
    openGraph: { title, description, url, type: 'article', images: [image] },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  };
}

export default async function VisitGuidePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [
    title, description, admissionHeading, admission, hoursHeading, hours,
    routeHeading, bazaar, museum, returnWalk, home, map, source,
  ] = visitGuide[locale];

  return (
    <>
      <Header interior />
      <main className="section-padding pt-24">
        <article className="mx-auto max-w-4xl space-y-8">
          <Link className="underline" href="/">{home}</Link>
          <header className="space-y-4">
            <h1 className="font-display text-4xl font-semibold sm:text-5xl">{title}</h1>
            <p className="text-lg">{description}</p>
            <a className="underline" href="https://maps.app.goo.gl/z3Ak17fXyWwwntcB9">{map}</a>
          </header>
          <Image src={image} alt="Kalaja e Krujës" width={1200} height={800}
            className="aspect-[2/1] w-full rounded-2xl object-cover" priority />
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{admissionHeading}</h2>
            <p>{admission}</p>
            <p>{krujeGuides[locale].prices}</p>
            <a className="underline" href="https://visitkruja.com/guides/kruja-castle-tickets-hours/">VisitKruja</a>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{hoursHeading}</h2>
            <p>{krujeGuides[locale].museumHours}</p>
            <p>{hours}</p>
            <a className="underline" href={`https://www.qendramuzeore-kruje.com/${locale === 'sq' ? 'sq' : 'en'}/visit`}>
              Qendra Muzeore Krujë · 0511 22225
            </a>
          </section>
          <section className="space-y-3">
            <h2 className="font-display text-3xl font-semibold">{routeHeading}</h2>
            <ol className="list-decimal space-y-2 pl-6">
              {[bazaar, museum, returnWalk].map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>
          <ul className="space-y-2 underline">
            <li><Link href={oldBazaarPath}>{krujeGuides[locale].bazaar[0]}</Link></li>
            <li><Link href={halfDayPath}>{krujeGuides[locale].half[0]}</Link></li>
          </ul>
          <a className="underline" href="https://akt.gov.al/en/heritage/Kruja-Castle/">{source}</a>
        </article>
      </main>
      <Footer />
    </>
  );
}
