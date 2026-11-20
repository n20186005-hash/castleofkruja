import { routing } from './routing';
import data from '@/data/regional-places.json';

export const regionalPlaces = data;
export const regionalLocales = routing.locales;
export type RegionalLocale = (typeof regionalLocales)[number];
export type PlaceSlug = keyof typeof regionalPlaces;

export function isRegionalLocale(locale: string): locale is RegionalLocale {
  return regionalLocales.some((supported) => supported === locale);
}

export const regionalLabels = {
  en: {
    title: 'Day trips from Krujë', intro: 'Explore historic sites and natural landscapes in Krujë and on separate day trips across the region.',
    about: 'About', managedBy: 'Management', region: 'Area', visit: 'Walking route and photo spots',
    observe: 'Architecture and what to look for', planning: 'Planning your visit',
    photo: 'Photo source', facts: 'Basic information', info: 'Heritage and visitor information',
    travel: 'Directions from Krujë', map: 'Find the site on Google Maps', sources: 'Sources',
    consult: 'For the current access arrangements, use the site contact or visitor guidance from',
  },
  zh: {
    title: '从克鲁亚出发的一日游', intro: '探索克鲁亚本地的古迹，以及适合单独安排一日游的周边历史景点和自然景观。',
    about: '关于', managedBy: '管理主体', region: '所在地区', visit: '步行路线与拍摄机位',
    observe: '建筑、景观与观察重点', planning: '行程安排建议',
    photo: '照片来源', facts: '基础信息', info: '遗产与参观资料',
    travel: '从克鲁亚出发的路线', map: '在 Google Maps 中定位景点', sources: '资料来源',
    consult: '当前通行与开放安排可向现场管理人员或以下机构查询：',
  },
  "sq": {
    "title": "Udhëtime ditore nga Kruja",
    "intro": "Zbuloni monumentet dhe peizazhet e Krujës dhe destinacionet për udhëtime ditore në rajon.",
    "about": "Rreth",
    "managedBy": "Administrimi",
    "region": "Zona",
    "visit": "Itinerari në këmbë dhe pikat për fotografi",
    "observe": "Arkitektura dhe çfarë të vëreni",
    "planning": "Planifikoni vizitën",
    "photo": "Burimi i fotografisë",
    "facts": "Informacion bazë",
    "info": "Trashëgimia dhe informacioni për vizitorët",
    "travel": "Udhëzime nga Kruja",
    "map": "Gjeni vendin në Google Maps",
    "sources": "Burimet",
    "consult": "Për hyrjen, ndiqni udhëzimet vendore ose kontaktoni"
  },
  "de": {
    "title": "Tagesausflüge ab Krujë",
    "intro": "Entdecken Sie Baudenkmäler und Naturlandschaften in Krujë und bei Tagesausflügen in die Region.",
    "about": "Über",
    "managedBy": "Verwaltung",
    "region": "Gebiet",
    "visit": "Fußweg und Fotostandorte",
    "observe": "Architektur und sehenswerte Details",
    "planning": "Besuch planen",
    "photo": "Bildquelle",
    "facts": "Grundinformationen",
    "info": "Kulturerbe und Besucherinformationen",
    "travel": "Wegbeschreibung ab Krujë",
    "map": "Ort auf Google Maps finden",
    "sources": "Quellen",
    "consult": "Aktuelle Hinweise zum Zugang erhalten Sie vor Ort oder bei"
  },
  "fr": {
    "title": "Excursions depuis Krujë",
    "intro": "Découvrez les sites historiques et les paysages naturels de Krujë et de sa région lors d’excursions à la journée.",
    "about": "À propos de :",
    "managedBy": "Gestion",
    "region": "Secteur",
    "visit": "Parcours à pied et points de vue photo",
    "observe": "Architecture et détails à observer",
    "planning": "Préparer votre visite",
    "photo": "Source de la photo",
    "facts": "Informations pratiques",
    "info": "Patrimoine et informations visiteurs",
    "travel": "Itinéraire depuis Krujë",
    "map": "Localiser le site sur Google Maps",
    "sources": "Sources",
    "consult": "Pour connaître les modalités d’accès, consultez les indications sur place ou renseignez-vous auprès de"
  },
  "it": {
    "title": "Gite di un giorno da Krujë",
    "intro": "Scopri i siti storici e i paesaggi naturali di Krujë e le mete da visitare in giornata nella regione.",
    "about": "Informazioni su",
    "managedBy": "Gestione",
    "region": "Zona",
    "visit": "Percorso a piedi e punti fotografici",
    "observe": "Architettura e dettagli da osservare",
    "planning": "Pianifica la visita",
    "photo": "Fonte della foto",
    "facts": "Informazioni di base",
    "info": "Patrimonio e informazioni per i visitatori",
    "travel": "Indicazioni da Krujë",
    "map": "Trova il luogo su Google Maps",
    "sources": "Fonti",
    "consult": "Per le modalità di accesso consulta le indicazioni sul posto o rivolgiti a"
  },
  "nl": {
    "title": "Dagtochten vanuit Krujë",
    "intro": "Ontdek historische plekken en natuur in Krujë en maak dagtochten naar bestemmingen in de regio.",
    "about": "Over",
    "managedBy": "Beheer",
    "region": "Gebied",
    "visit": "Wandelroute en fotoplekken",
    "observe": "Architectuur en details om op te letten",
    "planning": "Plan je bezoek",
    "photo": "Fotobron",
    "facts": "Basisinformatie",
    "info": "Erfgoed en bezoekersinformatie",
    "travel": "Route vanuit Krujë",
    "map": "Vind de plek op Google Maps",
    "sources": "Bronnen",
    "consult": "Raadpleeg voor de actuele toegang de aanwijzingen ter plaatse of neem contact op met"
  },
} as const;

export function visitorContact(area: string, slug: PlaceSlug) {
  if (slug === 'qafe-shtame' || slug === 'dajti-national-park') {
    return { name: 'Agjencia Kombëtare e Zonave të Mbrojtura', url: 'https://akzm.gov.al/' };
  }
  if (slug === 'bovilla-lake') return { name: 'Bashkia Tiranë', url: 'https://tirana.al/pika-interesi/liqeni-i-bovilles' };
  switch (area) {
    case 'Krujë': return { name: 'Bashkia Krujë', url: 'https://kruja.gov.al/' };
    case 'Vorë': return { name: 'Bashkia Vorë', url: 'https://bashkiavore.gov.al/' };
    case 'Durrës':
    case 'Durrës County': return { name: 'Visit Durrës', url: 'https://visitdurres.al/' };
    case 'Kavajë': return { name: 'Bashkia Kavajë', url: 'https://bashkiakavaje.gov.al/' };
    case 'Rrogozhinë': return { name: 'EU4Culture', url: 'https://eu4culture.al/location/castle-of-bashtova/' };
    default: return { name: 'Bashkia Tiranë', url: 'https://tirana.al/' };
  }
}

const durresMuseumCentre = {
  name: 'Qendra Muzeore Durrës',
  url: 'https://qeverisjavendore.gov.al/wp-content/uploads/2024/08/Ligj-nr.-27-date-17.5.2018-Per-trashegimine-kulturore-dhe-muzete.pdf',
};

const verifiedManagers: Partial<Record<PlaceSlug, { name: string; url: string }>> = {
  'durres-archaeological-museum': durresMuseumCentre,
  'durres-amphitheatre': durresMuseumCentre,
  'durres-venetian-tower': durresMuseumCentre,
  'durres-forum': durresMuseumCentre,
  'qafe-shtame': {
    name: 'AdZM Durrës · AKZM',
    url: 'https://akzm.gov.al/nis-puna-mbi-hartimin-e-planit-te-integruar-te-menaxhimit-per-parkun-natyror-qafeshtame/',
  },
  'dajti-national-park': {
    name: 'AdZM Tiranë · AKZM',
    url: 'https://akzm.gov.al/bashkepunim-dhe-angazhim-qytetar-per-pastrimin-dhe-mbrojtjen-e-maleve-te-shqiperise/',
  },
};

export function verifiedManager(slug: PlaceSlug) {
  return verifiedManagers[slug];
}

export const regionalExtra = {
  "sq": {
    "planning": [
      "Nga Pazari i Vjetër ecni drejt kalasë së Krujës për të parë hamamin ose xhaminë. Për teqenë në shpellë dhe Parkun Natyror Qafë-Shtamë organizoni transport më vete.",
      "Në Durrës ecni nga amfiteatri nëpër qytetin e vjetër drejt bregdetit. Për Ishmin dhe kishën e kalanë e Kepit të Rodonit planifikoni një udhëtim rrugor më vete.",
      "Zgjidhni Krujën, Durrësin ose Tiranën si bazë sipas itinerarit. Çdo faqe jep informacione për hyrjen, kostot, transportin dhe fotografitë."
    ],
    "amphitheatre": "Udhëzuesit e fundit përmendin një tarifë prej 200–300 lekësh për të rritur. Konfirmojeni çmimin te sporteli."
  },
  "de": {
    "planning": [
      "Gehen Sie vom Alten Basar zur Burg Krujë, um das Bad oder die Moschee zu sehen. Zum Höhlenheiligtum und zum Naturpark Qafë-Shtamë benötigen Sie eine separate Anfahrt.",
      "In Durrës gehen Sie vom Amphitheater durch die Altstadt zum Wasser. Für Ishëm sowie Kirche und Burg am Kap Rodon sollten Sie eine separate Fahrt einplanen.",
      "Wählen Sie Krujë, Durrës oder Tirana als Ausgangspunkt. Jeder Reiseführer enthält Angaben zu Zugang, Kosten, Anreise und Fotos."
    ],
    "amphitheatre": "Aktuelle Reiseführer nennen 200–300 Lek für Erwachsene. Fragen Sie am Eingang nach dem geltenden Preis."
  },
  "fr": {
    "planning": [
      "Depuis le vieux bazar, montez à pied au château pour voir le hammam ou la mosquée. Prévoyez un trajet distinct pour le sanctuaire troglodytique et le parc naturel de Qafë-Shtamë.",
      "À Durrës, rejoignez le front de mer à pied depuis l’amphithéâtre en traversant la vieille ville. Prévoyez un trajet séparé pour Ishëm et le cap Rodon.",
      "Choisissez Krujë, Durrës ou Tirana selon votre itinéraire. Chaque fiche présente les conditions d’accès, les frais, les transports et les photos du lieu."
    ],
    "amphitheatre": "Des guides récents indiquent 200 à 300 leks pour un adulte. Confirmez le tarif au guichet d’entrée."
  },
  "it": {
    "planning": [
      "Dal Vecchio Bazar sali a piedi al castello di Krujë per vedere le terme o la moschea. Organizza un tragitto separato per il santuario rupestre e il Parco naturale di Qafë-Shtamë.",
      "A Durazzo vai a piedi dall’anfiteatro al lungomare attraversando il centro storico. Programma un viaggio separato per Ishëm e per la chiesa e il castello di Capo Rodon.",
      "Scegli come base Krujë, Durazzo o Tirana in base al tuo itinerario. Ogni guida riporta modalità di accesso, costi, trasporti e fotografie."
    ],
    "amphitheatre": "Le guide recenti riportano 200–300 lek per un adulto. Verifica il prezzo alla biglietteria."
  },
  "nl": {
    "planning": [
      "Loop vanaf de Oude Bazaar naar het kasteel voor de badruïne of de moskee. Regel apart vervoer naar het grotheiligdom en Natuurpark Qafë-Shtamë.",
      "Wandel in Durrës van het amfitheater via de oude stad naar de kust. Plan een aparte autorit naar Ishëm en de kerk en het kasteel op Kaap Rodon.",
      "Kies Krujë, Durrës of Tirana als uitvalsbasis. Elke gids bevat gegevens over toegang, kosten, vervoer en foto’s."
    ],
    "amphitheatre": "Recente reisgidsen noemen 200–300 lek voor volwassenen. Vraag bij de ingang naar de actuele prijs."
  }
} as const;

export function regionalAlternates(path: string) {
  return { ...Object.fromEntries(regionalLocales.map((locale) => [locale, `/${locale}${path}`])), 'x-default': `/en${path}` };
}
