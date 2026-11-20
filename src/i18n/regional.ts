import data from '@/data/regional-places.json';

export const regionalPlaces = data;
export const regionalLocales = ['en', 'zh'] as const;
export type RegionalLocale = (typeof regionalLocales)[number];
export type PlaceSlug = keyof typeof regionalPlaces;

export function isRegionalLocale(locale: string): locale is RegionalLocale {
  return regionalLocales.some((supported) => supported === locale);
}

export const regionalLabels = {
  en: {
    title: 'Day trips from Krujë', intro: 'Explore historic sites and natural landscapes in Krujë and on separate day trips across the region.',
    manager: 'About the site and visitor information', region: 'Area', visit: 'Walking route and photo spots',
    photo: 'Photo source', facts: 'Basic information', info: 'Heritage and visitor information',
    travel: 'Directions from Krujë', map: 'Find the site on Google Maps', sources: 'Sources',
    consult: 'For the current access arrangements, use the site contact or visitor guidance from',
  },
  zh: {
    title: '从克鲁亚出发的一日游', intro: '探索克鲁亚本地的古迹，以及适合单独安排一日游的周边历史景点和自然景观。',
    manager: '景点介绍与管理咨询', region: '所在地区', visit: '步行路线与拍摄机位',
    photo: '照片来源', facts: '基础信息', info: '遗产与参观资料',
    travel: '从克鲁亚出发的路线', map: '在 Google Maps 中定位景点', sources: '资料来源',
    consult: '当前通行与开放安排可向现场管理人员或以下机构查询：',
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
