import type { RegionalLocale } from './regional';

const types = {
  bath: ['Historic baths', '历史浴室遗址'],
  mosque: ['Mosque', '清真寺'],
  shrine: ['Religious shrine', '宗教圣所'],
  ruins: ['Archaeological site', '考古遗址'],
  bridge: ['Historic stone bridge', '历史石桥'],
  park: ['Protected natural area', '自然保护区'],
  monument: ['Public monument', '公共纪念碑'],
  fort: ['Fortification', '城堡与防御遗址'],
  church: ['Church or church ruins', '教堂或教堂遗址'],
  reservoir: ['Water-supply reservoir', '供水水库'],
  arena: ['Roman amphitheatre', '罗马圆形剧场'],
  tower: ['Historic tower', '历史塔楼'],
  market: ['Archaeological market site', '古代市场遗址'],
  museum: ['Museum', '博物馆'],
  house: ['House museum', '故居博物馆'],
} as const;

const access = {
  outdoor: [
    ['Visit in daylight and follow the open route posted at the site.', 'Check local notices for access or guided-visit charges.'],
    ['建议白天参观，仅使用现场标示开放的路线。', '入场或导览是否收费，请看现场公告。'],
  ],
  worship: [
    ['View from public space during worship. Ask locally before entering the building.', 'Confirm the visitor arrangements with the attendant before entering.'],
    ['礼拜期间请在公共区域观览。入内前先询问现场人员。', '入内前请向场所人员核对参观安排。'],
  ],
  park: [
    ['Use signed daylight access and check seasonal restrictions with the protected-area office.', 'Ask the park office about any access or service charges for your planned visit.'],
    ['白天从标示入口进入，并向保护区管理机构核对季节性限制。', '如使用停车、导览等服务，请先向公园管理处核对收费。'],
  ],
  street: [
    ['View from the public pedestrian space around the square.', 'There is no ticket for viewing from the public square.'],
    ['从广场周边开放的人行空间观览。', '在公共广场观看纪念像无须购票。'],
  ],
  townTower: [
    ['View from the square. Enter or climb only when the tower is explicitly open.', 'Exterior viewing from the public square needs no ticket. Ask locally about entry to the tower.'],
    ['可从广场看外观。只有明确开放时才入内或登塔。', '公共广场外观参观无须购票，登塔安排请现场核实。'],
  ],
  water: [
    ['Check access to the road and the authorized overlook. Follow posted reservoir protection rules.', 'Confirm transport, parking and any authorized viewpoint charges separately.'],
    ['先核对通往观景点的道路是否开放，并遵守水库保护公告。', '交通、停车及开放观景点的收费请分别核实。'],
  ],
  ticket: [
    ['Confirm the opening day, last entry and areas open to visitors before departure.', 'Ask the ticket office for the current adult fare and any concessions.'],
    ['出发前请核对当天开放、最后入场时间和实际开放区域。', '成人票价及优惠条件请向售票处核实。'],
  ],
  lift: [
    ['Check the mountain trail and cable-car operator separately, especially the last descent.', 'Cable-car fares are separate from park access. Check the operator’s current fare before departure.'],
    ['山上步道与缆车须分别查验开放条件，尤其要核对末班下山时间。', '缆车为单独收费的交通服务，出发前请查运营方票价。'],
  ],
} as const;

export const practicalLabels = {
  en: {
    intro: 'Explore', highlights: 'What makes it worth a stop', type: 'Type', hours: 'Opening hours and access',
    admission: 'Admission', route: 'Suggested route', transport: 'Transport', notes: 'Before you go',
    reviews: 'Visitor reviews', mapReviews: 'Open the Google Maps listing', stay: 'Where to base your visit', map: 'Address and map',
  },
  zh: {
    intro: '探索景点', highlights: '景区特色', type: '景点类型', hours: '开放时间与通行',
    admission: '门票与费用', route: '建议游览路线', transport: '交通方式', notes: '游览须知',
    reviews: '游客评价', mapReviews: '在 Google Maps 查看地点资料及评价', stay: '住宿地点建议', map: '地址与地图',
  },
} as const;

export function regionalPractical(locale: RegionalLocale, type: string, accessKind: string, area: string) {
  const i = locale === 'zh' ? 1 : 0;
  const [hours, admission] = access[accessKind as keyof typeof access][i];
  const base = area === 'Durrës County' ? 'Durrës' : area === 'Tirana County' || area === 'Vorë' ? 'Tiranë' : area === 'Rrogozhinë' ? 'Kavajë' : area;
  const stay = locale === 'zh'
    ? `安排多站串游时，可考虑以 ${base} 为住宿据点。订房前先核对从住宿到景点的往返交通。`
    : `For a multi-stop itinerary, consider staying in ${base}. Confirm transport between your accommodation and the site before booking.`;
  return { hours, admission, stay, type: types[type as keyof typeof types][i] };
}
