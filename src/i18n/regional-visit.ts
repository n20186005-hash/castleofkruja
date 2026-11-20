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
  "sq": {
    "intro": "Zbuloni vendin",
    "highlights": "Pikat kryesore",
    "type": "Lloji",
    "hours": "Orari dhe hyrja",
    "admission": "Biletat dhe tarifat",
    "route": "Itinerari i sugjeruar",
    "transport": "Transporti",
    "notes": "Para nisjes",
    "reviews": "Vlerësimet e vizitorëve",
    "mapReviews": "Hapni faqen në Google Maps",
    "stay": "Ku të qëndroni",
    "map": "Adresa dhe harta"
  },
  "de": {
    "intro": "Entdecken",
    "highlights": "Was den Besuch lohnt",
    "type": "Art",
    "hours": "Öffnungszeiten und Zugang",
    "admission": "Eintritt",
    "route": "Empfohlener Rundgang",
    "transport": "Anreise",
    "notes": "Vor der Abfahrt",
    "reviews": "Besucherbewertungen",
    "mapReviews": "Eintrag auf Google Maps öffnen",
    "stay": "Übernachtung",
    "map": "Adresse und Karte"
  },
  "fr": {
    "intro": "Découvrir",
    "highlights": "Les points forts",
    "type": "Type de site",
    "hours": "Horaires et accès",
    "admission": "Tarifs et billets",
    "route": "Parcours conseillé",
    "transport": "Transport",
    "notes": "Avant de partir",
    "reviews": "Avis des visiteurs",
    "mapReviews": "Ouvrir la fiche Google Maps",
    "stay": "Où loger",
    "map": "Adresse et carte"
  },
  "it": {
    "intro": "Esplora",
    "highlights": "Cosa vedere",
    "type": "Tipo di sito",
    "hours": "Orari e accesso",
    "admission": "Biglietti e tariffe",
    "route": "Percorso consigliato",
    "transport": "Trasporti",
    "notes": "Prima di partire",
    "reviews": "Recensioni dei visitatori",
    "mapReviews": "Apri la scheda su Google Maps",
    "stay": "Dove alloggiare",
    "map": "Indirizzo e mappa"
  },
  "nl": {
    "intro": "Ontdek de plek",
    "highlights": "Hoogtepunten",
    "type": "Type",
    "hours": "Openingstijden en toegang",
    "admission": "Toegang en tickets",
    "route": "Voorgestelde route",
    "transport": "Vervoer",
    "notes": "Voor vertrek",
    "reviews": "Bezoekersbeoordelingen",
    "mapReviews": "Open de vermelding op Google Maps",
    "stay": "Waar overnachten",
    "map": "Adres en kaart"
  },
} as const;

const additionalPractical = {
  "sq": {
    "type": {
      "bath": "Hamam historik",
      "mosque": "Xhami",
      "shrine": "Vend kulti",
      "ruins": "Vend arkeologjik",
      "bridge": "Urë historike prej guri",
      "park": "Zonë natyrore e mbrojtur",
      "monument": "Monument publik",
      "fort": "Fortifikim",
      "church": "Kishë ose rrënoja kishe",
      "reservoir": "Rezervuar i ujit të pijshëm",
      "arena": "Amfiteatër romak",
      "tower": "Kullë historike",
      "market": "Vend arkeologjik i një tregu",
      "museum": "Muze",
      "house": "Shtëpi-muze"
    },
    "access": {
      "outdoor": [
        "Vizitojeni ditën dhe ndiqni rrugën e hapur të shënuar në vend.",
        "Shikoni njoftimet vendore për tarifat e hyrjes ose të guidës."
      ],
      "worship": [
        "Gjatë lutjeve, qëndroni në hapësirën publike. Pyesni para se të hyni.",
        "Konfirmoni kushtet e vizitës me përgjegjësin para hyrjes."
      ],
      "park": [
        "Përdorni hyrjet e shënuara gjatë ditës dhe pyesni administratën për kufizimet sezonale.",
        "Pyesni administratën për tarifat e hyrjes ose të shërbimeve."
      ],
      "street": [
        "Shikojeni nga zona publike për këmbësorë pranë sheshit.",
        "Për ta parë nga sheshi nuk nevojitet biletë."
      ],
      "townTower": [
        "Shikojeni nga sheshi. Hyni ose ngjituni vetëm kur kulla është e hapur.",
        "Pamja nga sheshi është falas. Për hyrjen në kullë pyesni në vend."
      ],
      "water": [
        "Kontrolloni rrugën dhe pikën e lejuar të vrojtimit. Respektoni rregullat e rezervuarit.",
        "Konfirmoni veçmas transportin, parkimin dhe tarifat e pikave të lejuara."
      ],
      "ticket": [
        "Para nisjes kontrolloni ditën e hapjes, hyrjen e fundit dhe zonat e vizitueshme.",
        "Pyesni në sportel për tarifën e të rriturve dhe uljet."
      ],
      "lift": [
        "Kontrolloni veçmas shtegun dhe teleferikun, veçanërisht zbritjen e fundit.",
        "Teleferiku ka tarifë më vete. Kontrolloni çmimin te operatori para nisjes."
      ]
    },
    "stay": "Për vizita në disa vende, mund të qëndroni në {base}. Para rezervimit, konfirmoni transportin deri te destinacioni."
  },
  "de": {
    "type": {
      "bath": "Historisches Bad",
      "mosque": "Moschee",
      "shrine": "Heiligtum",
      "ruins": "Archäologische Stätte",
      "bridge": "Historische Steinbrücke",
      "park": "Naturschutzgebiet",
      "monument": "Öffentliches Denkmal",
      "fort": "Befestigung",
      "church": "Kirche oder Kirchenruine",
      "reservoir": "Trinkwasserstausee",
      "arena": "Römisches Amphitheater",
      "tower": "Historischer Turm",
      "market": "Archäologische Marktstätte",
      "museum": "Museum",
      "house": "Wohnhausmuseum"
    },
    "access": {
      "outdoor": [
        "Besuchen Sie die Stätte bei Tageslicht und folgen Sie den ausgeschilderten offenen Wegen.",
        "Örtliche Hinweise informieren über Eintritts- und Führungsgebühren."
      ],
      "worship": [
        "Bleiben Sie während des Gottesdienstes im öffentlichen Bereich. Fragen Sie vor dem Betreten nach.",
        "Klären Sie die Besuchsregeln vor dem Betreten mit dem Personal."
      ],
      "park": [
        "Nutzen Sie bei Tageslicht ausgeschilderte Zugänge und klären Sie saisonale Einschränkungen mit der Schutzgebietsverwaltung.",
        "Fragen Sie die Parkverwaltung nach Eintritts- oder Servicegebühren."
      ],
      "street": [
        "Das Denkmal ist vom öffentlichen Fußgängerbereich am Platz aus zu sehen.",
        "Die Besichtigung vom öffentlichen Platz ist kostenlos."
      ],
      "townTower": [
        "Besichtigen Sie den Turm vom Platz aus. Betreten Sie ihn nur bei ausdrücklich freigegebenem Zugang.",
        "Die Außenbesichtigung vom Platz ist kostenlos. Fragen Sie vor Ort nach dem Zugang zum Turm."
      ],
      "water": [
        "Prüfen Sie die Zufahrt und den zugelassenen Aussichtspunkt. Beachten Sie die Schutzregeln des Stausees.",
        "Prüfen Sie die Kosten für Fahrt, Parkplatz und zugelassene Aussichtspunkte separat."
      ],
      "ticket": [
        "Prüfen Sie vor der Abfahrt Öffnungstag, letzten Einlass und zugängliche Bereiche.",
        "Fragen Sie an der Kasse nach dem aktuellen Preis und Ermäßigungen."
      ],
      "lift": [
        "Prüfen Sie Wanderwege und Seilbahn getrennt, insbesondere die letzte Talfahrt.",
        "Die Seilbahn kostet extra. Prüfen Sie den Tarif beim Betreiber."
      ]
    },
    "stay": "Für mehrere Besuche bietet sich {base} als Ausgangspunkt an. Klären Sie die Anfahrt von der Unterkunft vor der Buchung."
  },
  "fr": {
    "type": {
      "bath": "Bains historiques",
      "mosque": "Mosquée",
      "shrine": "Sanctuaire",
      "ruins": "Site archéologique",
      "bridge": "Pont historique en pierre",
      "park": "Espace naturel protégé",
      "monument": "Monument public",
      "fort": "Fortification",
      "church": "Église ou ruines d’église",
      "reservoir": "Réservoir d’eau potable",
      "arena": "Amphithéâtre romain",
      "tower": "Tour historique",
      "market": "Vestiges d’un marché",
      "museum": "Musée",
      "house": "Maison-musée"
    },
    "access": {
      "outdoor": [
        "Prévoyez une visite de jour et suivez le parcours ouvert indiqué sur place.",
        "Consultez les affichages locaux pour les éventuels frais d’accès ou de visite guidée."
      ],
      "worship": [
        "Restez dans l’espace public pendant les offices. Renseignez-vous avant d’entrer.",
        "Confirmez les modalités de visite avec le personnel avant d’entrer."
      ],
      "park": [
        "Utilisez de jour les accès balisés et vérifiez les restrictions saisonnières auprès du gestionnaire.",
        "Renseignez-vous auprès du parc sur les éventuels frais d’accès ou de service."
      ],
      "street": [
        "Observez le monument depuis l’espace piéton public autour de la place.",
        "Aucun billet n’est nécessaire pour l’observer depuis la place."
      ],
      "townTower": [
        "Observez la tour depuis la place. N’y entrez que si l’accès est explicitement ouvert.",
        "La vue depuis la place est gratuite. Pour l’accès à la tour, renseignez-vous sur place."
      ],
      "water": [
        "Vérifiez l’état de la route et l’accès au belvédère autorisé. Respectez la réglementation du réservoir.",
        "Vérifiez séparément les frais de transport, de stationnement et d’accès aux points de vue autorisés."
      ],
      "ticket": [
        "Confirmez le jour d’ouverture, la dernière entrée et les espaces accessibles avant le départ.",
        "Demandez au guichet le plein tarif et les réductions éventuelles."
      ],
      "lift": [
        "Vérifiez séparément les sentiers et le téléphérique, notamment la dernière descente.",
        "Le téléphérique a son propre tarif. Consultez l’exploitant avant de partir."
      ]
    },
    "stay": "Pour visiter plusieurs sites, vous pouvez loger à {base}. Vérifiez les trajets depuis votre hébergement avant de réserver."
  },
  "it": {
    "type": {
      "bath": "Terme storiche",
      "mosque": "Moschea",
      "shrine": "Santuario",
      "ruins": "Sito archeologico",
      "bridge": "Ponte storico in pietra",
      "park": "Area naturale protetta",
      "monument": "Monumento pubblico",
      "fort": "Fortificazione",
      "church": "Chiesa o rovine di chiesa",
      "reservoir": "Bacino di acqua potabile",
      "arena": "Anfiteatro romano",
      "tower": "Torre storica",
      "market": "Resti archeologici di un mercato",
      "museum": "Museo",
      "house": "Casa museo"
    },
    "access": {
      "outdoor": [
        "Visita il sito di giorno e segui il percorso aperto indicato sul posto.",
        "Controlla gli avvisi per eventuali costi di accesso o di visita guidata."
      ],
      "worship": [
        "Durante le funzioni resta nello spazio pubblico. Chiedi prima di entrare.",
        "Conferma le modalità di visita con il personale prima di entrare."
      ],
      "park": [
        "Usa gli ingressi segnalati durante il giorno e verifica le restrizioni stagionali con l’ente del parco.",
        "Chiedi alla direzione del parco se sono previste tariffe di accesso o dei servizi."
      ],
      "street": [
        "Osserva il monumento dallo spazio pedonale pubblico intorno alla piazza.",
        "Non serve un biglietto per la vista dalla piazza."
      ],
      "townTower": [
        "Osserva la torre dalla piazza. Entra o sali solo se l’accesso è esplicitamente aperto.",
        "La vista dalla piazza è gratuita. Informati sul posto per entrare nella torre."
      ],
      "water": [
        "Verifica la viabilità e l’accesso al punto panoramico autorizzato. Rispetta le regole del bacino.",
        "Verifica separatamente i costi di trasporto, parcheggio e accesso ai punti panoramici autorizzati."
      ],
      "ticket": [
        "Prima di partire verifica il giorno di apertura, l’ultimo ingresso e le aree visitabili.",
        "Chiedi alla biglietteria il prezzo intero e le eventuali riduzioni."
      ],
      "lift": [
        "Verifica separatamente i sentieri e la funivia, soprattutto l’ultima corsa in discesa.",
        "La funivia ha una tariffa propria. Controlla il prezzo presso il gestore prima di partire."
      ]
    },
    "stay": "Per visitare più luoghi, puoi alloggiare a {base}. Verifica i collegamenti dall’alloggio prima di prenotare."
  },
  "nl": {
    "type": {
      "bath": "Historische baden",
      "mosque": "Moskee",
      "shrine": "Heiligdom",
      "ruins": "Archeologische vindplaats",
      "bridge": "Historische stenen brug",
      "park": "Beschermd natuurgebied",
      "monument": "Openbaar monument",
      "fort": "Vestingwerk",
      "church": "Kerk of kerkruïne",
      "reservoir": "Drinkwaterreservoir",
      "arena": "Romeins amfitheater",
      "tower": "Historische toren",
      "market": "Archeologische marktplaats",
      "museum": "Museum",
      "house": "Huismuseum"
    },
    "access": {
      "outdoor": [
        "Bezoek de plek bij daglicht en volg de aangegeven open route.",
        "Kijk ter plaatse of er kosten zijn voor toegang of een rondleiding."
      ],
      "worship": [
        "Blijf tijdens diensten in de openbare ruimte. Vraag toestemming voordat je naar binnen gaat.",
        "Vraag het personeel naar de bezoekregels voordat je naar binnen gaat."
      ],
      "park": [
        "Gebruik bij daglicht de aangegeven ingangen en vraag het parkbeheer naar seizoensbeperkingen.",
        "Vraag het parkbeheer naar eventuele kosten voor toegang of diensten."
      ],
      "street": [
        "Bekijk het monument vanuit het openbare voetgangersgebied bij het plein.",
        "Voor bezichtiging vanaf het plein heb je geen kaartje nodig."
      ],
      "townTower": [
        "Bekijk de toren vanaf het plein. Ga alleen naar binnen of omhoog als de toegang duidelijk open is.",
        "Bezichtiging vanaf het plein is gratis. Vraag ter plaatse naar toegang tot de toren."
      ],
      "water": [
        "Controleer de weg en de toegang tot het toegestane uitkijkpunt. Houd je aan de regels rond het stuwmeer.",
        "Controleer afzonderlijk de kosten van vervoer, parkeren en toegestane uitkijkpunten."
      ],
      "ticket": [
        "Controleer vóór vertrek de openingsdag, laatste toegang en welke delen open zijn.",
        "Vraag bij de kassa naar de actuele prijs voor volwassenen en eventuele kortingen."
      ],
      "lift": [
        "Controleer wandelroutes en kabelbaan afzonderlijk, vooral de laatste rit omlaag.",
        "Voor de kabelbaan geldt een apart tarief. Kijk voor vertrek bij de vervoerder."
      ]
    },
    "stay": "Voor meerdere uitstapjes kun je verblijven in {base}. Controleer vóór het boeken het vervoer tussen je verblijf en de bestemming."
  }
} as const;

export function regionalPractical(locale: RegionalLocale, type: string, accessKind: string, area: string) {
  const base = area === 'Durrës County' ? 'Durrës' : area === 'Tirana County' || area === 'Vorë' ? 'Tiranë' : area === 'Rrogozhinë' ? 'Kavajë' : area;
  const accessKey = accessKind as keyof typeof access;
  const typeKey = type as keyof typeof types;
  if (locale !== 'en' && locale !== 'zh') {
    const copy = additionalPractical[locale];
    const [hours, admission] = copy.access[accessKey];
    return { hours, admission, stay: copy.stay.replace('{base}', base), type: copy.type[typeKey] };
  }
  const i = locale === 'zh' ? 1 : 0;
  const [hours, admission] = access[accessKey][i];
  const stay = locale === 'zh'
    ? `安排多站串游时，可考虑以 ${base} 为住宿据点。订房前先核对从住宿到景点的往返交通。`
    : `For a multi-stop itinerary, consider staying in ${base}. Confirm transport between your accommodation and the site before booking.`;
  return { hours, admission, stay, type: types[type as keyof typeof types][i] };
}
