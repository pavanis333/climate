import { getInitialCard } from '../spacedRepetition';

export const groupCDeck = {
  id: 'group-c-warm-temperate',
  name: 'Group C — Warm Temperate Climates',
  description: 'Cwa, Cs, Cfa, Cfb — Mediterranean, Humid Subtropical, Marine West Coast',
  cards: [
    getInitialCard('kp-cfa',
      'What does "Cfa" represent in Koeppen\'s classification?',
      'Cfa = Humid subtropical climate — no dry season, warm summer. Found in SE USA, eastern China, SE South America.',
      { choices: ['Mediterranean climate', 'Marine west coast', 'Humid subtropical — no dry season, warm summer', 'Humid continental'], correct: 2 }
    ),
    getInitialCard('kp-cs',
      'What does "Cs" represent in Koeppen\'s classification?',
      'Cs = Mediterranean climate — dry hot summer, mild wet winter. Found around the Mediterranean Sea, California, central Chile.',
      { choices: ['Humid subtropical', 'Marine west coast', 'Mediterranean — dry hot summer', 'Subarctic'], correct: 2 }
    ),
    getInitialCard('kp-cfb',
      'What does "Cfb" represent in Koeppen\'s classification?',
      'Cfb = Marine west coast climate — no dry season, warm and cool summer. Found in western Europe, New Zealand, Pacific NW of North America.',
      { choices: ['Mediterranean', 'Humid subtropical', 'Marine west coast — no dry season, warm and cool summer', 'Tundra'], correct: 2 }
    ),
    getInitialCard('kp-cs-unique',
      'Which Koeppen climate type is characterized by dry summers and wet winters?',
      'Cs — Mediterranean climate. It is unique because most climates have dry winters, but Mediterranean has dry summers and wet winters.',
      { choices: ['Cfa — Humid subtropical', 'Cs — Mediterranean', 'Cfb — Marine west coast', 'Aw — Tropical wet and dry'], correct: 1 }
    ),
    getInitialCard('kp-c-location',
      'What is the latitude range of Warm Temperate (C) climates and where do they occur?',
      '30°–50° latitude, mainly on the eastern and western margins of continents. Generally warm summers with mild winters.',
      { choices: ['0°–15° near equator', '15°–30° in tropics', '30°–50° on eastern and western continental margins', '60°–90° near poles'], correct: 2 }
    ),
    getInitialCard('kp-c-types',
      'What are the four types under Koeppen\'s C (Warm Temperate) group?',
      '(i) Cwa — Humid subtropical (dry winter, hot summer), (ii) Cs — Mediterranean, (iii) Cfa — Humid subtropical (no dry season, mild winter), (iv) Cfb — Marine west coast.',
      { choices: ['Cfa, Cfb, Cfc, Cfd', 'Cwa, Cs, Cfa, Cfb', 'Ca, Cb, Cc, Cd', 'Cs, Cw, Cf, Cm'], correct: 1 }
    ),
    getInitialCard('kp-cwa-location',
      'Where is Humid Subtropical (Cwa) climate found?',
      'Poleward of Tropic of Cancer and Capricorn — mainly North Indian plains and South China interior plains. Similar to Aw but with warm winters.',
      { choices: ['Mediterranean coast', 'North Indian plains and South China interior plains', 'Western Europe', 'Eastern USA'], correct: 1 }
    ),
    getInitialCard('kp-cwa-vs-aw',
      'How does Cwa differ from Aw climate?',
      'Cwa is similar to Aw (tropical wet and dry) except that winter temperature is warm rather than hot. It occurs poleward of the tropics.',
      { choices: ['Cwa has more rainfall', 'Cwa has warmer winters than Aw', 'No difference', 'Cwa has colder summers'], correct: 1 }
    ),
    getInitialCard('kp-cs-location',
      'Where is Mediterranean Climate (Cs) found? Name specific regions.',
      'Around the Mediterranean Sea, Central California, Central Chile, SE and SW coast of Australia. Located on west coasts between 30°–40° latitudes.',
      { choices: ['Eastern continental margins only', 'Mediterranean Sea, Central California, Central Chile, SE & SW Australia', 'Interior of continents', 'Polar regions'], correct: 1 }
    ),
    getInitialCard('kp-cs-mechanism',
      'What causes the seasonal pattern of Mediterranean (Cs) climate?',
      'Subtropical high dominates in summer → hot, dry. Westerly winds bring moisture in winter → mild, rainy. Hence: dry summer, wet winter.',
      { choices: ['ITCZ in summer, trade winds in winter', 'Subtropical high in summer (dry), westerlies in winter (rainy)', 'Monsoon winds year-round', 'Cold currents in summer, warm in winter'], correct: 1 }
    ),
    getInitialCard('kp-cs-temp-precip',
      'What are the temperature and precipitation characteristics of Mediterranean (Cs) climate?',
      'Summer avg ~25°C, winter below 10°C. Annual precipitation 35–90 cm. Hot dry summers, mild rainy winters.',
      { choices: ['Summer 35°C, winter -10°C, rainfall 200 cm', 'Summer ~25°C, winter <10°C, precipitation 35–90 cm', 'Uniform 20°C, rainfall 150 cm', 'Summer 15°C, winter 0°C, rainfall 50 cm'], correct: 1 }
    ),
    getInitialCard('kp-cfa-location',
      'Where is Humid Subtropical (Cfa) climate found?',
      'Eastern parts of continents in subtropical latitudes: eastern USA, southern & eastern China, southern Japan, NE Argentina, coastal South Africa, eastern coast of Australia.',
      { choices: ['Western continental margins', 'Eastern USA, S & E China, S Japan, NE Argentina, coastal S Africa, E Australia', 'Interior continental regions', 'Arctic coasts'], correct: 1 }
    ),
    getInitialCard('kp-cfa-rainfall',
      'What is the rainfall pattern of Cfa (Humid Subtropical) climate?',
      'Rainfall throughout the year (unstable air masses). Annual precipitation 75–150 cm. Thunderstorms in summer, frontal precipitation in winter.',
      { choices: ['Dry summer, wet winter', 'Rainfall year-round: 75–150 cm; summer thunderstorms, winter frontal rain', 'Only monsoon rainfall', 'Very low rainfall throughout'], correct: 1 }
    ),
    getInitialCard('kp-cfa-temp',
      'What are the temperature characteristics of Cfa climate?',
      'Mean summer temp ~27°C, winter 5°–12°C. The daily range of temperature is small.',
      { choices: ['Summer 35°C, winter -15°C, large daily range', 'Summer ~27°C, winter 5°–12°C, small daily range', 'Uniform 20°C year-round', 'Summer 15°C, winter -5°C'], correct: 1 }
    ),
    getInitialCard('kp-cfb-location',
      'Where is Marine West Coast (Cfb) climate found?',
      'Poleward from Mediterranean climate on west coasts: NW Europe, west coast of N. America north of California, southern Chile, SE Australia, New Zealand.',
      { choices: ['Eastern continental margins', 'NW Europe, W coast N. America (N of California), S Chile, SE Australia, New Zealand', 'Tropical regions', 'Interior Asia'], correct: 1 }
    ),
    getInitialCard('kp-cfb-character',
      'What are the key characteristics of Marine West Coast (Cfb) climate?',
      'Moderate temperatures due to marine influence. Winter warmer than expected for latitude. Summer 15°–20°C, winter 4°–10°C. Small annual and daily temp ranges. Year-round precipitation: 50–250 cm.',
      { choices: ['Extreme temperatures, dry', 'Moderate temp (marine influence); summer 15–20°C, winter 4–10°C; precipitation 50–250 cm year-round', 'Hot summers, cold winters', 'Very low precipitation'], correct: 1 }
    ),
    getInitialCard('kp-cfb-winter',
      'Why is winter in Cfb climate warmer than expected for its latitude?',
      'Due to marine (oceanic) influence — the ocean moderates temperatures, keeping winters milder than continental locations at the same latitude.',
      { choices: ['Due to volcanic activity', 'Due to marine/oceanic influence moderating temperatures', 'Due to ITCZ', 'Due to subtropical high pressure'], correct: 1 }
    ),
    getInitialCard('kp-cs-vs-cfa',
      'How do Cs (Mediterranean) and Cfa (Humid Subtropical) differ in precipitation pattern?',
      'Cs has dry summers and wet winters (western margins, 30°–40°). Cfa has rainfall throughout the year (eastern margins). Cs gets 35–90 cm; Cfa gets 75–150 cm.',
      { choices: ['No difference', 'Cs: dry summer/wet winter; Cfa: rain year-round. Cs on west, Cfa on east margins', 'Both have dry winters', 'Cs has more rainfall than Cfa'], correct: 1 }
    ),
  ],
};
