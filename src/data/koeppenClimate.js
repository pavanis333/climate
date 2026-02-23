import { getInitialCard } from '../spacedRepetition';

// Deck: Koeppen Climate Classification
export const koeppenDeck = {
  id: 'koeppen-climate',
  name: 'Koeppen Climate Classification',
  description: 'Climatic types, letter codes, and characteristics according to Koeppen\'s scheme (NCERT Table 11.2)',
  cards: [
    // --- Letter notation basics ---
    getInitialCard('kp-notation-f',
      'In Koeppen\'s classification, what does the small letter "f" indicate?',
      '"f" indicates no dry season — precipitation occurs throughout the year.',
      { choices: ['Summer dry season', 'Winter dry season', 'No dry season', 'Monsoon climate'], correct: 2 }
    ),
    getInitialCard('kp-notation-m',
      'In Koeppen\'s classification, what does the small letter "m" indicate?',
      '"m" stands for monsoon climate — a short dry season compensated by heavy rainfall in the wet season.',
      { choices: ['No dry season', 'Monsoon climate', 'Mid-latitude', 'Marine climate'], correct: 1 }
    ),
    getInitialCard('kp-notation-w',
      'In Koeppen\'s classification, what does the small letter "w" indicate?',
      '"w" indicates winter dry season.',
      { choices: ['Warm summer', 'Winter dry season', 'Wet throughout', 'West coast climate'], correct: 1 }
    ),
    getInitialCard('kp-notation-s',
      'In Koeppen\'s classification, what does the small letter "s" indicate?',
      '"s" indicates summer dry season. Example: Mediterranean climate (Cs) has dry hot summers.',
      { choices: ['Subarctic climate', 'Summer dry season', 'Steppe climate', 'Snow climate'], correct: 1 }
    ),

    // --- Group A: Tropical Humid ---
    getInitialCard('kp-af',
      'What is the Koeppen code for Tropical Wet climate and what are its characteristics?',
      'Code: Af — Tropical wet climate with no dry season. Rainfall throughout the year. Found in equatorial regions like the Amazon and Congo basins.',
      { choices: ['Am — Monsoonal, short dry season', 'Af — No dry season', 'Aw — Winter dry season', 'Cfa — Warm summer, no dry season'], correct: 1 }
    ),
    getInitialCard('kp-am',
      'What is the Koeppen code for Tropical Monsoon climate?',
      'Code: Am — Monsoonal climate with a short dry season. Heavy rainfall compensates for the brief dry period. Example: coastal western India.',
      { choices: ['Af', 'Am', 'Aw', 'Dw'], correct: 1 }
    ),
    getInitialCard('kp-aw',
      'What does the Koeppen code "Aw" represent?',
      'Aw = Tropical wet and dry climate with a winter dry season. Distinct wet and dry seasons. Example: large parts of India, East Africa.',
      { choices: ['Tropical wet — no dry season', 'Tropical monsoon — short dry', 'Tropical wet and dry — winter dry season', 'Subtropical steppe'], correct: 2 }
    ),

    // --- Group B: Dry ---
    getInitialCard('kp-bsh',
      'What does the Koeppen code "BSh" stand for?',
      'BSh = Subtropical steppe — a low-latitude semi-arid or dry climate. "B" = dry, "S" = steppe, "h" = hot/low-latitude.',
      { choices: ['Mid-latitude steppe', 'Subtropical desert', 'Subtropical steppe — low-latitude semi-arid', 'Humid subtropical'], correct: 2 }
    ),
    getInitialCard('kp-bwh',
      'What does the Koeppen code "BWh" represent?',
      'BWh = Subtropical desert — low-latitude arid or dry climate. "W" = waste/true desert, "h" = hot. Example: Sahara, Thar Desert.',
      { choices: ['Mid-latitude desert', 'Subtropical steppe', 'Subtropical desert — low-latitude arid', 'Tropical wet and dry'], correct: 2 }
    ),
    getInitialCard('kp-bsk',
      'What does the Koeppen code "BSk" represent?',
      'BSk = Mid-latitude steppe — semi-arid or dry climate. "k" = cold/mid-latitude. Example: Great Plains of North America.',
      { choices: ['Subtropical steppe', 'Mid-latitude steppe — semi-arid', 'Mid-latitude desert', 'Subarctic'], correct: 1 }
    ),
    getInitialCard('kp-bwk',
      'What does "BWk" mean in Koeppen\'s classification?',
      'BWk = Mid-latitude desert — arid or dry climate at mid-latitudes. "k" = cold. Example: Gobi Desert, Patagonian Desert.',
      { choices: ['Mid-latitude steppe', 'Subtropical desert', 'Mid-latitude desert — arid', 'Cold snow-forest'], correct: 2 }
    ),
    getInitialCard('kp-b-hs-diff',
      'In Koeppen\'s B-group, what is the difference between "h" and "k" suffixes?',
      '"h" = hot, low-latitude (subtropical). "k" = cold, mid-latitude. So BSh is subtropical steppe, BSk is mid-latitude steppe.',
      { choices: ['"h" = humid, "k" = continental', '"h" = hot/low-latitude, "k" = cold/mid-latitude', '"h" = highland, "k" = karst', '"h" = heavy rain, "k" = light rain'], correct: 1 }
    ),
    getInitialCard('kp-b-sw-diff',
      'In Koeppen\'s B-group, what is the difference between "S" and "W"?',
      '"S" = Steppe (semi-arid), "W" = Waste/Desert (fully arid). BS = semi-arid steppe, BW = true desert.',
      { choices: ['"S" = summer, "W" = winter', '"S" = steppe (semi-arid), "W" = desert (arid)', '"S" = subtropical, "W" = warm', '"S" = savanna, "W" = woodland'], correct: 1 }
    ),

    // --- Group C: Warm Temperate ---
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

    // --- Group D: Cold Snow-forest ---
    getInitialCard('kp-df',
      'What does "Df" represent in Koeppen\'s classification?',
      'Df = Humid continental climate — no dry season with severe winters. Found in interior N. America, Northern Europe, NE Asia.',
      { choices: ['Subarctic — winter dry', 'Humid continental — no dry season, severe winter', 'Marine west coast', 'Tundra'], correct: 1 }
    ),
    getInitialCard('kp-dw',
      'What does "Dw" represent in Koeppen\'s classification?',
      'Dw = Subarctic climate — winter dry and very severe. Found in eastern Siberia, parts of interior Canada.',
      { choices: ['Humid continental', 'Subarctic — winter dry and very severe', 'Tundra', 'Polar ice cap'], correct: 1 }
    ),

    // --- Group E: Cold ---
    getInitialCard('kp-et',
      'What does "ET" represent in Koeppen\'s classification?',
      'ET = Tundra climate — no true summer. Warmest month is below 10°C but above 0°C. Found in Arctic coasts, Antarctic Peninsula.',
      { choices: ['Polar ice cap — perennial ice', 'Tundra — no true summer', 'Subarctic — severe winter', 'Highland climate'], correct: 1 }
    ),
    getInitialCard('kp-ef',
      'What does "EF" represent in Koeppen\'s classification?',
      'EF = Polar ice cap climate — perennial ice. No month above 0°C. Found in interior Greenland and Antarctica.',
      { choices: ['Tundra', 'Polar ice cap — perennial ice', 'Subarctic', 'Mid-latitude desert'], correct: 1 }
    ),
    getInitialCard('kp-et-ef-diff',
      'What is the key difference between ET (Tundra) and EF (Polar ice cap)?',
      'ET (Tundra): warmest month is between 0°C and 10°C — no true summer but some thawing. EF (Polar ice cap): no month above 0°C — perennial ice cover.',
      { choices: ['ET has summer rainfall, EF does not', 'ET has some months above 0°C, EF never above 0°C', 'ET is at higher altitude than EF', 'No real difference, just location'], correct: 1 }
    ),

    // --- Cross-group / comparison ---
    getInitialCard('kp-groups-count',
      'How many major climate groups are there in Koeppen\'s classification?',
      'Five major groups: A (Tropical Humid), B (Dry), C (Warm Temperate/Mid-latitude), D (Cold Snow-forest), E (Cold/Polar).',
      { choices: ['Three', 'Four', 'Five', 'Six'], correct: 2 }
    ),
    getInitialCard('kp-basis',
      'What two factors form the basis for subdividing Koeppen\'s climate groups into types?',
      'Seasonality of precipitation (dry seasons) and temperature characteristics. Small letters (f, m, w, s, h, k, a, b) indicate these subdivisions.',
      { choices: ['Altitude and latitude', 'Precipitation seasonality and temperature', 'Ocean currents and wind patterns', 'Vegetation and soil type'], correct: 1 }
    ),
    getInitialCard('kp-group-a',
      'Which Koeppen group represents Tropical Humid Climates and what are its three types?',
      'Group A — Tropical Humid: Af (Tropical wet), Am (Tropical monsoon), Aw (Tropical wet and dry).',
      { choices: ['A: Af, Am, Aw', 'A: Af, As, Aw', 'B: BSh, BWh, BSk', 'C: Cfa, Cs, Cfb'], correct: 0 }
    ),
    getInitialCard('kp-group-b',
      'List all four types under Koeppen\'s B (Dry Climate) group.',
      'BSh (Subtropical steppe), BWh (Subtropical desert), BSk (Mid-latitude steppe), BWk (Mid-latitude desert).',
      { choices: ['BSh, BWh, BSk, BWk', 'Bf, Bm, Bw, Bs', 'BSa, BSb, BWa, BWb', 'Bh, Bk, Bs, Bw'], correct: 0 }
    ),

    // --- Group A Detailed (from NCERT) ---
    getInitialCard('kp-a-location',
      'Between which latitudes do Tropical Humid Climates (Group A) exist?',
      'Between the Tropic of Cancer (23.5°N) and Tropic of Capricorn (23.5°S). The sun is overhead throughout the year, and the ITCZ keeps the climate hot and humid.',
      { choices: ['Between 30°N and 30°S', 'Between Tropic of Cancer and Tropic of Capricorn', 'Between the Equator and 15°N/S', 'Between 40°N and 40°S'], correct: 1 }
    ),
    getInitialCard('kp-a-itcz',
      'What role does the ITCZ play in Tropical Humid Climates?',
      'The Inter Tropical Convergence Zone (ITCZ) is a low-pressure belt near the equator where trade winds converge. It causes the climate to be hot and humid with high annual rainfall.',
      { choices: ['It causes dry conditions', 'It makes the climate hot and humid with high rainfall', 'It creates cold fronts', 'It blocks monsoon winds'], correct: 1 }
    ),
    getInitialCard('kp-a-temp-range',
      'What is the annual range of temperature in Tropical Humid Climates?',
      'The annual range of temperature is very low (negligible). Daily max ~30°C, min ~20°C. Annual rainfall is high.',
      { choices: ['Very high (>30°C range)', 'Moderate (10-15°C range)', 'Very low / negligible', 'Variable depending on altitude'], correct: 2 }
    ),
    getInitialCard('kp-af-location',
      'Where is Tropical Wet Climate (Af) found? Name the major regions.',
      'Found near the equator: Amazon Basin (South America), western equatorial Africa, and islands of East Indies (Southeast Asian archipelago).',
      { choices: ['Indian subcontinent and Australia', 'Amazon Basin, western equatorial Africa, East Indies', 'Mediterranean coast and California', 'Central Asia and Siberia'], correct: 1 }
    ),
    getInitialCard('kp-af-rainfall',
      'What is the rainfall pattern in Tropical Wet Climate (Af)?',
      'Significant rainfall occurs in every month of the year, typically as thunder showers in the afternoon. No dry season exists.',
      { choices: ['Rainfall only in summer months', 'Rainfall in every month, as afternoon thunder showers', 'Rainfall only in winter', 'Erratic rainfall with long droughts'], correct: 1 }
    ),
    getInitialCard('kp-af-temp',
      'What are the temperature characteristics of Af (Tropical Wet) climate?',
      'Temperature is uniformly high. Maximum ~30°C, minimum ~20°C on any day. Annual range of temperature is negligible.',
      { choices: ['Hot summers, cold winters', 'Uniformly high: max ~30°C, min ~20°C, negligible annual range', 'Cool throughout with mild summers', 'Extreme diurnal variation'], correct: 1 }
    ),
    getInitialCard('kp-af-vegetation',
      'What type of vegetation is found in Af climate?',
      'Tropical evergreen forests with dense canopy cover and large biodiversity.',
      { choices: ['Deciduous forests', 'Tropical evergreen forests with dense canopy and high biodiversity', 'Grasslands and savannas', 'Coniferous forests'], correct: 1 }
    ),
    getInitialCard('kp-am-location',
      'Where is Tropical Monsoon Climate (Am) found?',
      'Indian sub-continent, North Eastern part of South America, and Northern Australia.',
      { choices: ['Amazon Basin and Congo', 'Indian sub-continent, NE South America, Northern Australia', 'Mediterranean region', 'East Indies only'], correct: 1 }
    ),
    getInitialCard('kp-am-rainfall',
      'What is the rainfall pattern in Tropical Monsoon Climate (Am)?',
      'Heavy rainfall occurs mostly in summer. Winter is dry. The short dry season is compensated by very heavy monsoon rains.',
      { choices: ['Uniform rainfall throughout the year', 'Heavy rainfall in summer, dry winter', 'Dry summer, wet winter', 'No distinct wet or dry season'], correct: 1 }
    ),
    getInitialCard('kp-aw-location',
      'Where is Tropical Wet and Dry Climate (Aw) found?',
      'North and south of Af climate regions. Major areas: north and south of Amazon forest in Brazil, adjoining parts of Bolivia and Paraguay, Sudan, and south of Central Africa.',
      { choices: ['Near the equator only', 'N & S of Af regions: Brazil, Bolivia, Paraguay, Sudan, south Central Africa', 'Only in Asia', 'Mediterranean coast'], correct: 1 }
    ),
    getInitialCard('kp-aw-borders',
      'What climate types border the Aw climate on the western and eastern parts of the continent?',
      'Aw borders dry climate (B) on the western part and Cf or Cw (warm temperate) on the eastern part of the continent.',
      { choices: ['Af on west, E on east', 'Dry climate (B) on west, Cf or Cw on east', 'D on west, A on east', 'E on west, B on east'], correct: 1 }
    ),
    getInitialCard('kp-aw-vs-af',
      'How does Aw climate differ from Af and Am in terms of rainfall?',
      'Annual rainfall in Aw is considerably less than Af and Am, and is variable. The wet season is shorter, the dry season is longer, and drought is more severe.',
      { choices: ['Aw has more rainfall than Af', 'Aw has less and more variable rainfall; shorter wet season, longer dry season', 'No difference in rainfall', 'Aw has no dry season at all'], correct: 1 }
    ),
    getInitialCard('kp-aw-temp',
      'What are the temperature characteristics of Aw (Tropical Wet and Dry) climate?',
      'Temperature is high throughout the year. The diurnal (daily) range of temperature is greatest in the dry season.',
      { choices: ['Low temperatures year-round', 'High temp year-round; greatest diurnal range in dry season', 'Moderate with cold winters', 'Uniform with no diurnal variation'], correct: 1 }
    ),
    getInitialCard('kp-aw-vegetation',
      'What type of vegetation is found in Aw climate?',
      'Deciduous forests and tree-shredded (scattered tree) grasslands / savannas.',
      { choices: ['Tropical evergreen forests', 'Coniferous forests', 'Deciduous forests and tree-scattered grasslands', 'Tundra vegetation'], correct: 2 }
    ),
    getInitialCard('kp-af-am-aw-compare',
      'Arrange Af, Am, and Aw in decreasing order of annual rainfall.',
      'Af > Am > Aw. Tropical wet has the most rainfall (year-round), monsoon has heavy but seasonal rain, and wet-and-dry has the least and most variable rainfall.',
      { choices: ['Aw > Am > Af', 'Am > Af > Aw', 'Af > Am > Aw', 'All have equal rainfall'], correct: 2 }
    ),
  ],
};
