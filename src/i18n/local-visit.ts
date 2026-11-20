import type { Locale } from './routing';

export const localVisit = {
  en: ['Site type', 'Suggested time', 'Opening hours', 'Admission', 'Market street', 'Walking itinerary', 'History museum', 'House museum', 'Ticket guide', 'Shops keep individual hours; daytime is best for browsing.', 'Walking through the bazaar and castle grounds is free. The museums sell separate tickets.', 'There is no market-street ticket. Shop purchases are separate.', 'Directions and map', 'Krujë town centre', 'Before you go'],
  zh: ['景点类型', '建议停留', '开放时间', '门票与费用', '传统市集街道', '城堡与市集步行行程', '历史博物馆', '传统民居博物馆', '门票与开放指南', '店铺各自安排营业时间，想逛店建议白天到访。', '步行游览老巴扎和城堡室外区域免费，两座博物馆各自售票。', '步行穿过市集无须购票，店内消费另计。', '交通指南与地图', '克鲁亚市中心', '游览须知'],
  sq: ['Lloji', 'Koha e sugjeruar', 'Orari', 'Biletat', 'Rrugë tradicionale tregtare', 'Itinerar në këmbë', 'Muze historik', 'Muze në banesë historike', 'Udhëzues për biletat', 'Dyqanet kanë orare të ndryshme; vizitojini gjatë ditës.', 'Ecja në pazar dhe në hapësirat e jashtme të kalasë është falas. Muzetë kanë bileta më vete.', 'Ecja në pazar është falas. Blerjet paguhen më vete.', 'Udhëzime dhe hartë', 'Qendra e Krujës', 'Para vizitës'],
  de: ['Art', 'Empfohlene Dauer', 'Öffnungszeiten', 'Eintritt', 'Historische Marktstraße', 'Rundgang zu Fuß', 'Historisches Museum', 'Museum im historischen Wohnhaus', 'Billett- und Besuchsinformation', 'Die Geschäfte haben eigene Öffnungszeiten. Für einen Einkaufsbummel empfiehlt sich der Tag.', 'Basar und offene Burgwege sind frei zugänglich. Die Museen verkaufen eigene Karten.', 'Der Basarbesuch ist kostenlos. Einkäufe werden separat bezahlt.', 'Anfahrt und Karte', 'Stadtzentrum Krujë', 'Vor dem Besuch'],
  fr: ['Type', 'Durée conseillée', 'Horaires', 'Billets et tarifs', 'Rue marchande traditionnelle', 'Itinéraire à pied', 'Musée historique', 'Maison-musée', 'Guide des billets et horaires', 'Les boutiques fixent leurs horaires. Privilégiez la journée pour les visiter.', 'Le bazar et les chemins extérieurs du château se parcourent gratuitement. Chaque musée vend son billet.', 'La promenade dans le bazar est gratuite. Les achats sont à part.', 'Accès et carte', 'Centre de Krujë', 'Avant la visite'],
  it: ['Tipo', 'Tempo consigliato', 'Orari', 'Biglietti e costi', 'Via del mercato tradizionale', 'Itinerario a piedi', 'Museo storico', 'Casa-museo', 'Guida ai biglietti e agli orari', 'Le botteghe hanno orari propri. Visita il mercato durante il giorno.', 'Il bazar e i percorsi esterni del castello sono gratuiti. I musei vendono biglietti separati.', 'La passeggiata al bazar è gratuita. Gli acquisti si pagano a parte.', 'Come arrivare e mappa', 'Centro di Krujë', 'Prima della visita'],
  nl: ['Type', 'Aanbevolen bezoekduur', 'Openingstijden', 'Toegang en tickets', 'Traditionele marktstraat', 'Wandelroute', 'Historisch museum', 'Historisch woonhuismuseum', 'Gids voor tickets en openingstijden', 'Winkels hanteren eigen uren. Ga overdag als je winkels wilt bezoeken.', 'De bazaar en de buitenpaden van het kasteel zijn gratis. De musea verkopen aparte tickets.', 'Wandelen door de bazaar is gratis. Aankopen betaal je apart.', 'Route en kaart', 'Centrum van Krujë', 'Voor je bezoek'],
} satisfies Record<Locale, readonly string[]>;

export const localVisitDuration = {
  bazaar: '20–45',
  half: '180–240',
  skanderbeg: '45–60',
  ethnographic: '30–45',
} as const;

export const minuteUnits = { en: 'min', zh: '分钟', sq: 'min', de: 'Min.', fr: 'min', it: 'min', nl: 'min' } as const;
