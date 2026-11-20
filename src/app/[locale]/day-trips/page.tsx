import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { practicalLabels } from '@/i18n/regional-visit';
import { Link } from '@/i18n/routing';
import { isRegionalLocale, regionalAlternates, regionalExtra, regionalLabels, regionalLocales, regionalPlaces } from '@/i18n/regional';

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
      languages: regionalAlternates('/day-trips'),
    },
  };
}

export default async function RegionalIndex({ params }: Props) {
  const locale = await getLocale(params);
  setRequestLocale(locale);
  const t = regionalLabels[locale];
  const labels = practicalLabels[locale];
  const planning = locale !== 'en' && locale !== 'zh' ? regionalExtra[locale].planning : locale === 'zh' ? [
    '克鲁亚市区一日游可先从老巴扎步行进城，再选浴室遗址或清真寺。洞穴圣所与卡费什塔梅自然公园需要另安排车辆。',
    '都拉斯适合从圆形剧场步行至老城和海滨；伊舍姆城堡与罗登角教堂、海堡适合另排公路行程。',
    '住宿可按重点选克鲁亚、都拉斯或地拉那。每处专题分别列有开放、费用、交通和照片，出发前可核对当天条件。',
  ] : [
    'Walk from the Old Bazaar into Krujë Castle for the baths or mosque. Arrange separate road transport for the cave shrine and Qafë-Shtamë Nature Park.',
    'In Durrës, walk from the amphitheatre through the old town to the waterfront. Allow a separate road trip for Ishëm and the church and castle at Cape Rodon.',
    'Base yourself in Krujë, Durrës or Tirana depending on your priorities. Each guide gives access, costs, transport and photo details for that individual stop.',
  ];
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
          <section className="space-y-3 rounded-2xl border p-5 sm:p-7" style={{ borderColor: 'var(--border-color)' }}>
            <h2 className="font-display text-2xl font-semibold">{labels.route}</h2>
            <ol className="list-decimal space-y-2 pl-6">{planning.map((step) => <li key={step}>{step}</li>)}</ol>
          </section>
          {areas.map((area) => (
            <section key={area} className="space-y-3">
              <h2 className="font-display text-2xl font-semibold">{area}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {places.filter(([, place]) => place.area === area).map(([slug, place]) => (
                  <li key={slug}>
                    <Link href={{ pathname: '/day-trips/[place]', params: { place: slug } }} className="underline">
                      {place[locale].title}
                    </Link>
                    <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>{place.address}</p>
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
