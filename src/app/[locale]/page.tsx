import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import BasicInfo from '@/components/BasicInfo';
import HoursSection from '@/components/HoursSection';
import TicketsSection from '@/components/TicketsSection';
import TransportSection from '@/components/TransportSection';
import InfoSection from '@/components/InfoSection';
import TimelineSection from '@/components/TimelineSection';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import MapEmbed from '@/components/MapEmbed';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import LegendsSection from '@/components/LegendsSection';
import ArchitectureSection from '@/components/ArchitectureSection';
import SurroundingsSection from '@/components/SurroundingsSection';
import ReferencesSection from '@/components/ReferencesSection';
import SchemaMarkup from '@/components/SchemaMarkup';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://castleofkruja.com';
  return {
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'zh': `${baseUrl}/zh`,
        'en': `${baseUrl}/en`,
        'sq': `${baseUrl}/sq`,
        'x-default': `${baseUrl}/en`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SchemaMarkup />
      <Header />
      <TableOfContents />
      <main>
        <Hero />
        <Intro />
        <BasicInfo />
        <TicketsSection />
        <HoursSection />
        <ArchitectureSection />
        <TimelineSection />
        <LegendsSection />
        <TransportSection />
        <SurroundingsSection />
        <InfoSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <MapEmbed />
        <ReferencesSection />
      </main>
      <Footer />
    </>
  );
}
