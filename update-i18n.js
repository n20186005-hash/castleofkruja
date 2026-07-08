import fs from 'fs';
import path from 'path';

function updateJson(locale, updater) {
  const filePath = path.join(process.cwd(), `src/messages/${locale}.json`);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  updater(content);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
}

// Update zh
updateJson('zh', (data) => {
  data.toc = {
    title: "本页目录",
    tickets: "门票信息",
    history: "历史传说",
    architecture: "建筑与考古",
    transport: "交通指南",
    reviews: "游客评价"
  };
  data.intro.description = "在亚得里亚海的微风与巴尔干半岛的崇山峻岭之间，克鲁亚城堡（Kalaja e Krujës）不仅是一座中世纪要塞，更是阻挡奥斯曼帝国铁蹄长达四分之一世纪的“欧洲之盾”。城堡内设有斯坎德培博物馆、国家民族学博物馆以及法提赫苏丹穆罕默德清真寺的遗迹，为游客提供深入了解阿尔巴尼亚历史的机会。";
  data.basicInfo.accessibilityValue = "温馨提示：通往城堡的古老鹅卵石路面保留了中世纪的原貌，路面不平且坡度较大。轮椅使用者或行动不便的访客可能需要协助，建议提前规划路线。";
  data.basicInfo.sunsetTip = "日落提示";
  data.basicInfo.sunsetTipValue = "建议在下午18:30左右抵达，此时在城堡墙头拍摄亚得里亚海日落光线最佳。";
  
  data.legends = {
    title: "传奇与神秘故事",
    subtitle: "深藏在古老城墙背后的奇闻异事",
    items: [
      {
        title: "斯坎德培的羊角头盔",
        content: "乔治·卡斯特里奥蒂·斯坎德培标志性的羊角头盔并非仅仅是装饰。传说这源于他曾在群山中被困时，靠一只山羊的指引找到出路，这一意象不仅是历史，更是阿尔巴尼亚民族精神的图腾。"
      },
      {
        title: "隐藏的供水密道",
        content: "在多次被奥斯曼帝国长期围困时，城堡依靠一条秘密的地下水渠维持生机。在1450年的著名围城战中，奥斯曼军队曾拼命寻找这条水源却无功而返，这种军事建筑的巧思令人叹为观止。"
      },
      {
        title: "萨里·萨尔提克与神秘主义",
        content: "在城堡上方的克鲁亚山，流传着苏菲派圣人萨里·萨尔提克 (Sari Salltik) 的传说。这些与贝克塔什教派相关的神秘元素，为克鲁亚增添了浓厚的宗教与文化神秘感。"
      }
    ]
  };

  data.architecture = {
    title: "建筑与考古细节",
    subtitle: "中世纪要塞的防御智慧",
    items: [
      {
        title: "城墙的防御机制",
        content: "城堡依山势而建，拥有半圆形堡垒和精心设计的瞭望孔。这些巧妙的防御工事解释了为何冷兵器时代的奥斯曼大军会对这几段城墙束手无策。"
      },
      {
        title: "法提赫苏丹穆罕默德清真寺遗址",
        content: "城堡内的清真寺废墟见证了从拜占庭时期到奥斯曼帝国时期的宗教与权力交替，是欧洲巴尔干半岛复杂历史的缩影。"
      },
      {
        title: "历史文献的印证",
        content: "16世纪历史学家马林·巴尔莱蒂（Marin Barleti）在文献中生动记录了克鲁亚围城战的惨烈与坚韧，这些古典文字至今仍是研究城堡历史的权威资料。"
      }
    ]
  };

  data.surroundings = {
    title: "周边与旧巴扎探索",
    subtitle: "感受原汁原味的当地生活",
    content: "既然来到了城堡，不妨顺道探索历史悠久的克鲁亚旧巴扎（Old Bazaar）。这里保留了传统的木质结构和石板路。您可以在巴扎周围和镇中心找到许多提供传统阿尔巴尼亚美食的餐馆。为了保持我们作为非营利科普平台的客观性，我们不推荐特定的商业店铺，但建议您尝试当地的烤肉（Tavë Dheu）和特色甜点，感受最纯正的巴尔干风味。"
  };

  data.references = {
    title: "参考文献",
    items: [
      "Barleti, Marin. (1508). Historia de vita et gestis Scanderbegi Epirotarum principis.",
      "Albanian Institute of Archaeology. Historical records on the fortification of Krujë.",
      "Ministry of Culture of Albania. National Cultural Heritage Register."
    ]
  };
});

// Update en
updateJson('en', (data) => {
  data.toc = {
    title: "Table of Contents",
    tickets: "Tickets & Hours",
    history: "Legends & History",
    architecture: "Architecture",
    transport: "How to Get Here",
    reviews: "Visitor Reviews"
  };
  data.intro.description = "Between the breezes of the Adriatic Sea and the rugged mountains of the Balkans, the Castle of Kruja (Kalaja e Krujës) is not just a medieval fortress, but the 'Shield of Europe' that held back the Ottoman Empire's cavalry for a quarter of a century. The castle houses the Skanderbeg Museum, the National Ethnographic Museum, and the remains of the Fatih Sultan Mehmed mosque, offering visitors a deep dive into Albanian history.";
  data.basicInfo.accessibilityValue = "Gentle reminder: The ancient cobblestone pathways leading to the castle retain their medieval character, featuring uneven surfaces and steep inclines. Wheelchair users or visitors with limited mobility may require assistance, and advance route planning is recommended.";
  data.basicInfo.sunsetTip = "Sunset Tip";
  data.basicInfo.sunsetTipValue = "It is recommended to arrive around 18:30. The light for photographing the Adriatic sunset from the castle walls is best at this time.";

  data.legends = {
    title: "Legends & Myths",
    subtitle: "The fascinating stories hidden behind the ancient walls",
    items: [
      {
        title: "Skanderbeg's Horned Helmet",
        content: "Gjergj Kastrioti Skanderbeg's iconic goat-horned helmet was not merely decorative. Legend has it that while trapped in the mountains, a goat guided him to safety. This imagery has become a totem of the Albanian national spirit."
      },
      {
        title: "The Hidden Water Tunnel",
        content: "During multiple prolonged sieges by the Ottoman Empire, the castle survived thanks to a secret underground water channel. In the famous siege of 1450, the Ottoman army desperately searched for this water source to no avail."
      },
      {
        title: "Sari Salltik & Mysticism",
        content: "On the Kruja mountain above the castle, legends of the Sufi saint Sari Salltik abound. These mystical elements associated with the Bektashi Order add a profound religious and cultural mystique to the site."
      }
    ]
  };

  data.architecture = {
    title: "Architecture & Archaeology",
    subtitle: "The defensive brilliance of a medieval stronghold",
    items: [
      {
        title: "Defensive Wall Mechanisms",
        content: "Built into the mountainous terrain, the castle features semi-circular bastions and carefully positioned loopholes, explaining why Ottoman armies were consistently thwarted by these walls."
      },
      {
        title: "Fatih Sultan Mehmed Mosque Ruins",
        content: "The mosque ruins within the castle bear witness to the transition of religion and power from the Byzantine to the Ottoman era, serving as a microcosm of the Balkans' complex history."
      },
      {
        title: "Historical Documentation",
        content: "16th-century historian Marin Barleti vividly recorded the brutality and resilience of the sieges of Kruja. His classical texts remain authoritative sources for studying the castle's history."
      }
    ]
  };

  data.surroundings = {
    title: "Explore the Old Bazaar & Surroundings",
    subtitle: "Experience authentic local life",
    content: "While visiting the castle, take time to explore the historic Old Bazaar of Kruja, with its traditional wooden architecture and cobblestone streets. You will find numerous restaurants offering traditional Albanian cuisine around the bazaar and town center. As a non-profit educational platform, we do not recommend specific commercial establishments, but we highly encourage you to try local specialties like Tavë Dheu to experience authentic Balkan flavors."
  };

  data.references = {
    title: "References",
    items: [
      "Barleti, Marin. (1508). Historia de vita et gestis Scanderbegi Epirotarum principis.",
      "Albanian Institute of Archaeology. Historical records on the fortification of Krujë.",
      "Ministry of Culture of Albania. National Cultural Heritage Register."
    ]
  };
});

// Update sq
updateJson('sq', (data) => {
  data.toc = {
    title: "Përmbajtja",
    tickets: "Biletat dhe Orari",
    history: "Legjendat dhe Historia",
    architecture: "Arkitektura",
    transport: "Si të arrini",
    reviews: "Vlerësimet"
  };
  data.intro.description = "Midis flladeve të detit Adriatik dhe maleve të thepisura të Ballkanit, Kalaja e Krujës nuk është thjesht një fortesë mesjetare, por 'Mburoja e Evropës' që ndali ushtrinë e Perandorisë Osmane për një çerek shekulli. Kalaja strehon Muzeun e Skënderbeut, Muzeun Kombëtar Etnografik dhe mbetjet e xhamisë së Sulltan Mehmetit Fatih, duke u ofruar vizitorëve një zhytje të thellë në historinë shqiptare.";
  data.basicInfo.accessibilityValue = "Këshillë: Rrugët e lashta me kalldrëm që të çojnë në kështjellë ruajnë karakterin e tyre mesjetar, me sipërfaqe të pabarabarta dhe pjerrësi. Përdoruesit e karrigeve me rrota ose vizitorët me lëvizshmëri të kufizuar mund të kenë nevojë për ndihmë; rekomandohet planifikimi paraprak.";
  data.basicInfo.sunsetTip = "Këshillë për Perëndimin e Diellit";
  data.basicInfo.sunsetTipValue = "Rekomandohet të mbërrini rreth orës 18:30. Drita për të fotografuar perëndimin e diellit mbi detin Adriatik nga muret e kështjellës është më e mira në këtë kohë.";

  data.legends = {
    title: "Legjendat dhe Mitet",
    subtitle: "Tregime magjepsëse të fshehura pas mureve të lashta",
    items: [
      {
        title: "Përkrenarja me brirë e Skënderbeut",
        content: "Përkrenarja ikonike e Gjergj Kastriot Skënderbeut nuk ishte thjesht dekorative. Legjenda thotë se ndërsa ishte i bllokuar në male, një dhi e udhëhoqi atë drejt shpëtimit. Ky imazh është bërë një totem i frymës kombëtare shqiptare."
      },
      {
        title: "Tuneli i fshehtë i ujit",
        content: "Gjatë rrethimeve të shumta nga Perandoria Osmane, kalaja mbijetoi falë një kanali të fshehtë uji nëntokësor. Në rrethimin e famshëm të vitit 1450, ushtria osmane kërkoi dëshpërimisht këtë burim uji, por pa sukses."
      },
      {
        title: "Sari Salltik dhe Misticizmi",
        content: "Në malin e Krujës mbi kala, gjenden legjenda të shumta për shenjtorin sufi Sari Salltik. Këto elemente mistike të lidhura me urdhrin Bektashi i shtojnë një mister të thellë fetar dhe kulturor këtij vendi."
      }
    ]
  };

  data.architecture = {
    title: "Arkitektura dhe Arkeologjia",
    subtitle: "Gjenialiteti mbrojtës i një fortese mesjetare",
    items: [
      {
        title: "Mekanizmat e Murit Mbrojtës",
        content: "E ndërtuar në terrenin malor, kështjella përmban bastione gjysmërrethore dhe frëngji të pozicionuara me kujdes, çka shpjegon pse ushtritë osmane pengoheshin vazhdimisht nga këto mure."
      },
      {
        title: "Rrënojat e Xhamisë së Sulltan Mehmetit Fatih",
        content: "Rrënojat e xhamisë brenda kalasë dëshmojnë tranzicionin e fesë dhe pushtetit nga epoka bizantine në atë osmane, duke shërbyer si një mikrokozmos i historisë komplekse të Ballkanit."
      },
      {
        title: "Dokumentimi Historik",
        content: "Historiani i shekullit të 16-të, Marin Barleti, regjistroi gjallërisht brutalitetin dhe qëndresën e rrethimeve të Krujës. Tekstet e tij klasike mbeten burime autoritare për studimin e historisë së kështjellës."
      }
    ]
  };

  data.surroundings = {
    title: "Eksploroni Pazarin e Vjetër dhe Rrethinat",
    subtitle: "Përjetoni jetën autentike lokale",
    content: "Ndërsa vizitoni kështjellën, gjeni kohë për të eksploruar Pazarin e Vjetër historik të Krujës, me arkitekturën e tij tradicionale prej druri dhe rrugët me kalldrëm. Përreth pazarit dhe qendrës së qytetit do të gjeni restorante të shumta që ofrojnë kuzhinë tradicionale shqiptare. Si një platformë edukative jofitimprurëse, ne nuk rekomandojmë biznese specifike, por ju inkurajojmë fuqimisht të provoni specialitete lokale si Tavë Dheu për të përjetuar shijet autentike të Ballkanit."
  };

  data.references = {
    title: "Referencat",
    items: [
      "Barleti, Marin. (1508). Historia de vita et gestis Scanderbegi Epirotarum principis.",
      "Instituti Shqiptar i Arkeologjisë. Të dhëna historike mbi fortifikimin e Krujës.",
      "Ministria e Kulturës e Shqipërisë. Regjistri Kombëtar i Trashëgimisë Kulturore."
    ]
  };
});
