export const heritagePlaces = {
  'dollma-tekke': {
    name: 'Teqja e Dollmës', image: '/guides/dollma-tekke.webp',
    photo: 'Inside_Teqja_e_Dollmës.jpg', credit: 'Albinfo',
    source: 'https://visitdurres.al/wp-content/uploads/2023/09/per-web_monumentet_compressed.pdf#page=21',
  },
  'clock-tower': {
    name: 'Kulla e Sahatit, Kalaja e Krujës', image: '/guides/clock-tower.webp',
    photo: 'Kulla_e_Sahatit_Kruje_1.jpg', credit: 'CHwB Albania archives',
    source: 'https://kruja.gov.al/wp-content/uploads/2016/06/Kruja_Info_English.pdf',
  },
  'fatih-mosque-ruins': {
    name: 'Xhamia e Fatihut, Kalaja e Krujës', image: '/guides/skanderbeg-museum.webp',
    photo: 'The_Museum_of_Scanderbeg,_Kruja_Castle,_Albania_and_the_ruins_of_Fatih_Mosque_of_Kruja.jpg', credit: 'Gerimema2',
    source: 'https://kruja.gov.al/wp-content/uploads/2017/02/infopoint.pdf',
  },
} as const;

export const heritagePaths = {
  '/nearby/dollma-tekke': '/nearby/dollma-tekke',
  '/nearby/clock-tower': '/nearby/clock-tower',
  '/nearby/fatih-mosque-ruins': '/nearby/fatih-mosque-ruins',
} as const;

type Place = keyof typeof heritagePlaces;
export const heritageText = {
  en: {
    'dollma-tekke': ['Dollma Tekke', 'This Bektashi religious building stands at the southwest end of the fortress. The regional heritage guide dates its construction to 1779–1780. The municipal survey records the Dollma family’s historical upkeep. For present access, use the municipal information point or the notices at the shrine.', 'From the castle entrance, follow public lanes towards the southwestern edge. Compare the stone walls and arched windows from outside. If admitted, look at the decorated interior and ask before taking photos.', 'Can I go inside?', 'Treat it as a religious site. Follow local instructions and view the exterior if the door is closed.'],
    'clock-tower': ['Krujë Castle Clock Tower', 'The town’s municipal guide identifies this as one of the surviving towers inside the fortress. Its position on the rocky ridge makes the relationship between the walls and the terrain easy to see. The municipality publishes visitor information; check postings for current access.', 'From the castle gate, follow signs towards the upper ridge. Stop on the public path and step back to photograph the tower above its rock base. Avoid blocked areas.', 'Can I climb the tower?', 'Plan an exterior visit unless admission is explicitly indicated on site.'],
    'fatih-mosque-ruins': ['Fatih Mosque ruins in Krujë', 'This former mosque is marked separately from the Skanderbeg National Museum on the municipal heritage map. The surviving masonry in front of the museum gives a clear view of two different phases of building within the same fortress. Consult the municipal information point for site access.', 'Enter via the Old Bazaar and follow the museum signs. Stop at the open space near the museum and observe the low masonry and surviving vertical fragment. Photograph both structures from the public path for scale.', 'Is this the mosque in the Old Bazaar?', 'This pin is for the ruins inside the castle. The bazaar mosque is at a separate location.'],
  },
  zh: {
    'dollma-tekke': ['多尔马泰凯', '这座贝克塔什派宗教建筑位于城堡西南端。区域文化路线资料将其建造时间定为 1779–1780 年，市政府调查记录了多尔马家族历史上的维护。现时开放情况请向市政旅游服务点查询，或以现场告示为准。', '从城门沿公共巷道走向城堡西南角。先在外面看石墙与拱窗，获准进入后再观察室内装饰，拍照前先询问。', '能进去参观吗？', '按宗教场所礼仪参观，听从现场安排。入口关闭时请在外部观览。'],
    'clock-tower': ['克鲁亚城堡钟楼', '市政府旅游指南将它列为城内现存塔楼之一。岩脊上的塔楼能帮助理解城墙怎样借地形设防。市政府提供景点资料，当前开放范围请看现场公告。', '从城门沿开放步道向高处走，在不妨碍通行的位置退后取景，把塔身和下方岩基拍进同一画面。请绕开封闭路段。', '可以登塔吗？', '建议按外观参观安排，只有现场明确开放才进入。'],
    'fatih-mosque-ruins': ['克鲁亚法提赫清真寺遗址', '市政府遗产地图把这座清真寺遗址和斯坎德培国家博物馆分开标注。博物馆前方的残墙与近旁馆舍体现城堡内不同时期的建设。现场通行范围可向市政旅游服务点查询。', '从老巴扎方向进城门，沿博物馆指示走到馆前空地，观察矮墙与保留下来的竖向构件。可从公共步道把遗址与博物馆同框。', '这里是老巴扎里的清真寺吗？', '此处定位对应城堡内的遗址，老巴扎清真寺在另一处。'],
  },
  sq: {
    'dollma-tekke': ['Teqja e Dollmës', 'Teqja bektashiane ndodhet në skajin jugperëndimor të kalasë. Guida rajonale e daton më 1779–1780. Studimi i bashkisë përmend kujdesin historik të familjes Dollma. Për vizitën, ndiqni njoftimet vendore.', 'Nga porta e kalasë ecni nëpër rrugicat publike drejt jugperëndimit. Shikoni muret e gurta dhe dritaret me harqe. Kërkoni leje përpara se të fotografoni brenda.', 'A mund të hyj?', 'Ndiqni udhëzimet e vendit të kultit. Nëse hyrja është e mbyllur, shikojeni nga jashtë.'],
    'clock-tower': ['Kulla e Sahatit në kalanë e Krujës', 'Guida e bashkisë e përshkruan si një nga kullat e ruajtura të kalasë. Pozicioni mbi shkëmb tregon lidhjen e mureve me terrenin. Kontrolloni njoftimet për hyrjen.', 'Nga porta ndiqni shtegun e hapur drejt kreshtës. Nga shtegu, fotografoni së bashku kullën dhe bazën shkëmbore. Mos kaloni pengesat.', 'A mund të ngjitem në kullë?', 'Planifikoni ta shihni nga jashtë, përveçse kur hyrja lejohet shprehimisht në vend.'],
    'fatih-mosque-ruins': ['Rrënojat e Xhamisë së Fatihut', 'Harta e bashkisë shënon rrënojat si pikë më vete pranë Muzeut të Skënderbeut. Muret pranë muzeut tregojnë faza të ndryshme ndërtimi. Pyesni pikën turistike të bashkisë për qasjen.', 'Hyni nga Pazari i Vjetër dhe ndiqni tabelat e muzeut. Shikoni muraturën dhe fragmentin vertikal nga shtegu publik. Fotografoni rrënojat bashkë me muzeun.', 'A është xhamia e pazarit?', 'Këto rrënoja janë brenda kalasë. Xhamia e pazarit ndodhet diku tjetër.'],
  },
  de: {
    'dollma-tekke': ['Dollma-Tekke', 'Das Bektaschi-Heiligtum liegt im Südwesten der Festung. Die regionale Kulturerberoute datiert es auf 1779–1780. Die Gemeinde dokumentiert die frühere Betreuung durch die Familie Dollma und bietet Besucherinformationen an.', 'Vom Burgtor über die öffentlichen Gassen nach Südwesten gehen. Steinwände und Bogenfenster von außen betrachten. Vor Innenaufnahmen um Erlaubnis fragen.', 'Darf man hineingehen?', 'Beachten Sie die Hinweise am religiösen Ort. Bei geschlossener Tür ist ein Außenbesuch möglich.'],
    'clock-tower': ['Uhrturm der Burg Krujë', 'Der Gemeindeführer nennt den Uhrturm als einen der erhaltenen Türme der Festung. Am Felsgrat erkennt man, wie die Befestigung das Gelände nutzt. Aktuelle Zugangshinweise stehen vor Ort.', 'Vom Burgtor auf öffentlichen Wegen zum höheren Grat gehen. Turm und Felsbasis von einem freien Wegstück gemeinsam fotografieren.', 'Darf man hinaufsteigen?', 'Planen Sie einen Besuch von außen, sofern vor Ort kein Zugang ausgewiesen ist.'],
    'fatih-mosque-ruins': ['Ruine der Fatih-Moschee in Krujë', 'Die Gemeindekarte markiert die Moscheeruine als eigene Station neben dem Skanderbeg-Museum. Ruine und Museum zeigen verschiedene Bauphasen der Burg. Auskunft zum Zugang gibt der Touristeninformationspunkt.', 'Vom Basar durch das Burgtor den Museumsschildern folgen. Niedrige Mauern und den aufragenden Rest vom öffentlichen Weg aus betrachten und zusammen mit dem Museum fotografieren.', 'Ist das die Moschee am Basar?', 'Die Ruine liegt in der Burg. Die Basarmoschee befindet sich an einem anderen Ort.'],
  },
  fr: {
    'dollma-tekke': ['Tekke de Dollma', 'Ce sanctuaire bektachi se trouve au sud-ouest de la forteresse. Le guide régional le date de 1779–1780. La commune documente son entretien historique par la famille Dollma et renseigne sur la visite.', 'Depuis la porte du château, suivez les ruelles publiques vers le sud-ouest. Observez la pierre et les baies en arc, puis demandez avant de photographier à l’intérieur.', 'Peut-on entrer ?', 'Suivez les consignes du lieu de culte. Si la porte est fermée, observez le bâtiment de l’extérieur.'],
    'clock-tower': ['Tour de l’horloge du château de Krujë', 'La commune présente cette tour comme l’une de celles qui subsistent dans la forteresse. Sur la crête, on voit comment les remparts exploitent le relief. Consultez les consignes d’accès sur place.', 'Depuis la porte, gagnez la crête par les chemins publics. Cadrez la tour avec son socle rocheux depuis un passage dégagé.', 'Peut-on monter dans la tour ?', 'Prévoyez une visite extérieure sauf indication contraire sur place.'],
    'fatih-mosque-ruins': ['Vestiges de la mosquée Fatih à Krujë', 'La carte municipale identifie ces vestiges séparément du musée Skanderbeg. Les deux édifices témoignent de phases différentes du château. Le point touristique municipal renseigne sur l’accès.', 'Montez du vieux bazar et suivez les indications du musée. Observez les murs bas et le fragment vertical depuis le chemin public et photographiez-les avec le musée.', 'Est-ce la mosquée du bazar ?', 'Les vestiges sont dans le château. La mosquée du bazar se trouve à un autre endroit.'],
  },
  it: {
    'dollma-tekke': ['Tekke di Dollma', 'Il santuario bektashi sorge a sud-ovest della fortezza. La guida culturale regionale lo data al 1779–1780. Il comune documenta la cura storica della famiglia Dollma e fornisce informazioni per la visita.', 'Dalla porta segui i vicoli pubblici a sud-ovest. Osserva i muri di pietra e le finestre ad arco. Chiedi prima di fotografare all’interno.', 'Si può entrare?', 'Segui le indicazioni del luogo di culto. Se la porta è chiusa, visita l’esterno.'],
    'clock-tower': ['Torre dell’orologio del castello di Krujë', 'La guida comunale la indica tra le torri superstiti. La posizione sulla cresta rocciosa mostra il rapporto tra difese e terreno. Verifica sul posto le condizioni di accesso.', 'Dalla porta raggiungi la cresta seguendo i sentieri pubblici. Fotografa insieme la torre e la base rocciosa da un punto che lasci libero il passaggio.', 'Si può salire?', 'Organizza una visita esterna salvo indicazioni esplicite sul posto.'],
    'fatih-mosque-ruins': ['Rovine della moschea Fatih a Krujë', 'La mappa comunale indica le rovine come tappa distinta dal Museo Skanderbeg. I due edifici illustrano fasi diverse della fortezza. Per l’accesso consulta il punto informazioni comunale.', 'Entra dal Vecchio Bazar seguendo le indicazioni del museo. Dal sentiero pubblico osserva i muri bassi e il frammento verticale e inquadrali con il museo.', 'È la moschea del bazar?', 'Le rovine si trovano nel castello. La moschea del bazar è in un altro luogo.'],
  },
  nl: {
    'dollma-tekke': ['Dollma-tekke', 'Dit bektashi-heiligdom ligt in het zuidwesten van de vesting. De regionale erfgoedgids dateert het op 1779–1780. De gemeente beschrijft het vroegere beheer door de familie Dollma en geeft bezoekersinformatie.', 'Volg vanaf de poort de openbare steegjes naar het zuidwesten. Bekijk de stenen muren en boogramen. Vraag toestemming voor foto’s binnen.', 'Kan ik naar binnen?', 'Volg de aanwijzingen van het gebedshuis. Bekijk de buitenkant als de deur gesloten is.'],
    'clock-tower': ['Klokkentoren van het kasteel van Krujë', 'Volgens de gemeentegids is dit een van de overgebleven vestingtorens. De rotskam maakt zichtbaar hoe de muren het terrein benutten. Controleer de toegangsborden ter plaatse.', 'Volg vanaf de poort de openbare paden naar de hogere kam. Fotografeer de toren en de rotsbasis vanaf een vrij gedeelte van het pad.', 'Mag ik de toren beklimmen?', 'Bekijk hem van buiten, tenzij toegang ter plaatse uitdrukkelijk is aangegeven.'],
    'fatih-mosque-ruins': ['Ruïne van de Fatih-moskee in Krujë', 'Op de gemeentekaart vormt de ruïne een aparte stop naast het Skanderbegmuseum. De twee bouwwerken laten verschillende bouwfasen van de vesting zien. Vraag bij het informatiepunt naar toegang.', 'Loop via de Oude Bazaar naar de kasteelpoort en volg de museumborden. Bekijk de lage muren en het opstaande fragment vanaf het openbare pad en fotografeer ook het museum voor schaal.', 'Is dit de moskee bij de bazaar?', 'De ruïne ligt in het kasteel. De bazaaremoskee ligt op een andere plek.'],
  },
} satisfies Record<string, Record<Place, readonly [string, string, string, string, string]>>;

export const heritageObservations = {
  en: ['Look up at the decoration where the wall meets the dome; the ceiling gives the small prayer space much of its character.', 'Compare the tower’s narrow shaft and openings with the wider stretches of fortress wall on the ridge.', 'Look for the outline of the former prayer hall around the surviving upright fragment. Use the museum behind it to judge the scale.'],
  zh: ['抬头看墙面与穹顶交接处的装饰。天花装饰为尺度不大的礼拜空间增添了层次。', '把钟楼细长的塔身和开口与岩脊上更宽的城墙段对照，观察两者不同的形态。', '在尚存的竖向构件附近辨认昔日礼拜厅的轮廓。可用后方博物馆作尺度参照。'],
  sq: ['Shikoni zbukurimet ku muri takohet me kupolën; ato i japin karakter hapësirës së vogël të lutjes.', 'Krahasoni trupin e ngushtë dhe hapjet e kullës me pjesët më të gjera të mureve mbi kreshtë.', 'Kërkoni vijat e sallës së dikurshme rreth fragmentit vertikal. Përdorni muzeun në sfond për të kuptuar përmasat.'],
  de: ['Beachten Sie den Übergang von Wand zu Kuppel. Die Deckendekoration prägt den kleinen Gebetsraum.', 'Vergleichen Sie den schmalen Schaft und die Öffnungen mit den breiten Mauerabschnitten auf dem Grat.', 'Suchen Sie den Grundriss des früheren Gebetsraums um den aufragenden Rest. Das Museum dahinter dient als Maßstab.'],
  fr: ['Observez le décor à la jonction du mur et de la coupole. Le plafond donne son caractère à la petite salle de prière.', 'Comparez le fût et les ouvertures de la tour avec les pans plus larges des remparts sur la crête.', 'Repérez le contour de l’ancienne salle autour du fragment vertical. Le musée en arrière-plan donne l’échelle.'],
  it: ['Osserva la decorazione tra parete e cupola. Il soffitto caratterizza la piccola sala di preghiera.', 'Confronta il fusto e le aperture della torre con i tratti di mura più ampi sulla cresta.', 'Cerca la pianta della sala di preghiera attorno al frammento verticale. Il museo sullo sfondo aiuta a capire le dimensioni.'],
  nl: ['Bekijk de versiering waar de wand overgaat in de koepel. Het plafond geeft de kleine gebedsruimte karakter.', 'Vergelijk de smalle torenschacht en openingen met de bredere stukken vestingmuur op de kam.', 'Zoek rond het opstaande fragment naar de omtrek van de gebedsruimte. Het museum op de achtergrond geeft schaal.'],
} as const;

export const heritagePractical = {
  en: ['Site type', 'Bektashi shrine', 'Fortress clock tower', 'Mosque ruins', 'Opening and admission', 'Plan to view the exterior from public paths. Ask on site about interior access and any charges.', 'Accommodation base', 'Stay in central Krujë for a walking visit, and check whether your lodging is upslope or downslope of the bazaar.', 'Visitor reviews and map'],
  zh: ['景点类型', '贝克塔什派圣所', '城堡钟楼', '清真寺遗址', '开放时间与费用', '可从开放公共步道参观外观。室内开放、入场安排和收费请现场核实。', '住宿地点建议', '徒步游览可住在克鲁亚市中心，订房前先看住宿在老巴扎上坡还是下坡一侧。', '游客评价与地图'],
  sq: ['Lloji i vendit', 'Vend kulti bektashian', 'Kullë sahati e kalasë', 'Rrënoja xhamie', 'Orari dhe hyrja', 'Shikojeni nga shtigjet publike. Pyesni në vend për hyrjen dhe tarifat.', 'Ku të qëndroni', 'Për vizitë në këmbë, zgjidhni qendrën e Krujës dhe kontrolloni pjerrësinë nga akomodimi deri te pazari.', 'Vlerësime dhe hartë'],
  de: ['Art des Orts', 'Bektaschi-Heiligtum', 'Uhrturm der Burg', 'Moscheeruine', 'Öffnung und Eintritt', 'Besichtigen Sie den Ort von öffentlichen Wegen aus. Erfragen Sie Zugang und mögliche Gebühren vor Ort.', 'Übernachtung', 'Für einen Rundgang eignet sich das Zentrum von Krujë. Prüfen Sie vor der Buchung die Steigung zum Basar.', 'Bewertungen und Karte'],
  fr: ['Type de lieu', 'Sanctuaire bektachi', 'Tour de l’horloge de la forteresse', 'Ruines de mosquée', 'Horaires et accès', 'Observez le lieu depuis les voies publiques. Renseignez-vous sur place pour l’accès et les éventuels frais.', 'Où dormir', 'Pour une visite à pied, logez dans le centre de Krujë et vérifiez la pente du trajet vers le bazar.', 'Avis et carte'],
  it: ['Tipo di sito', 'Santuario bektashi', 'Torre dell’orologio del castello', 'Rovine di una moschea', 'Orari e accesso', 'Osserva il sito dai percorsi pubblici. Verifica sul posto accesso ed eventuali tariffe.', 'Dove alloggiare', 'Per una visita a piedi, scegli il centro di Krujë e controlla la pendenza del percorso verso il bazar.', 'Recensioni e mappa'],
  nl: ['Type plek', 'Bektashi-heiligdom', 'Klokkentoren van de vesting', 'Moskeeruïne', 'Opening en toegang', 'Bekijk de plek vanaf openbare paden. Vraag ter plaatse naar toegang en eventuele kosten.', 'Overnachten', 'Voor een wandelbezoek is het centrum van Krujë een goede uitvalsbasis. Controleer de helling naar de bazaar.', 'Beoordelingen en kaart'],
} as const;
