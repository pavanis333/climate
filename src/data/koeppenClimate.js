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

    // --- Group B Detailed (Dry Climates from NCERT) ---
    getInitialCard('kp-b-character',
      'What is the defining characteristic of Koeppen\'s B (Dry) climates?',
      'Very low rainfall that is not adequate for the growth of plants. They cover a large area from 15°–60° N and S of the equator.',
      { choices: ['Heavy seasonal rainfall', 'Very low rainfall, inadequate for plant growth', 'Cold temperatures year-round', 'Perennial snow cover'], correct: 1 }
    ),
    getInitialCard('kp-b-lat-range',
      'What latitude range do Dry Climates (B) extend over?',
      'From 15° to 60° north and south of the equator — covering both low latitudes (subtropical) and middle latitudes.',
      { choices: ['0° to 15°', '15° to 60° N and S', '60° to 90°', '30° to 45° only'], correct: 1 }
    ),
    getInitialCard('kp-b-low-lat-cause',
      'Why do dry climates occur at low latitudes (15°–30°)?',
      'Due to subtropical high pressure where subsidence and temperature inversion prevent rainfall formation.',
      { choices: ['Due to ITCZ convergence', 'Due to subtropical high — subsidence and temperature inversion prevent rainfall', 'Due to cold ocean currents only', 'Due to orographic effects'], correct: 1 }
    ),
    getInitialCard('kp-b-west-margin',
      'Why do dry climates extend more equatorward on western continental margins?',
      'Due to cold ocean currents adjoining the coast (e.g., west coast of South America). Cold currents stabilize the air and suppress rainfall.',
      { choices: ['Due to warm currents', 'Due to cold currents that suppress rainfall', 'Due to mountain barriers', 'Due to monsoon winds'], correct: 1 }
    ),
    getInitialCard('kp-b-mid-lat-cause',
      'Why do dry climates occur in mid-latitudes (35°–60°)?',
      'They are confined to continental interiors where maritime-humid winds do not reach, often surrounded by mountains that block moisture.',
      { choices: ['Due to subtropical high pressure', 'Due to polar winds', 'Continental interiors — maritime winds blocked, often surrounded by mountains', 'Due to ocean currents'], correct: 2 }
    ),
    getInitialCard('kp-b-division',
      'How are Dry Climates divided and at what latitudes?',
      'BS (Steppe/semi-arid) and BW (Desert). Further: BSh & BWh at 15°–35° (subtropical), BSk & BWk at 35°–60° (mid-latitude).',
      { choices: ['Bf and Bm', 'BS (steppe) & BW (desert); h=15°-35°, k=35°-60°', 'Ba and Bb', 'Bw and Bs only'], correct: 1 }
    ),
    getInitialCard('kp-bsh-bwh-common',
      'What do BSh (Subtropical Steppe) and BWh (Subtropical Desert) have in common?',
      'They share common precipitation and temperature characteristics. Both have highly variable rainfall and high annual/diurnal temperature ranges.',
      { choices: ['Both have heavy rainfall', 'Common precipitation and temperature characteristics; highly variable rainfall', 'Both have cold winters', 'Both have dense forests'], correct: 1 }
    ),
    getInitialCard('kp-bsh-transition',
      'Where is BSh (Subtropical Steppe) located in relation to other climate zones?',
      'In the transition zone between humid and dry climates. It receives slightly more rainfall than the desert — enough for sparse grasslands.',
      { choices: ['Next to polar climates', 'In transition between humid and dry climates', 'In the equatorial belt', 'At the poles'], correct: 1 }
    ),
    getInitialCard('kp-b-variability',
      'Why does rainfall variability affect steppe (BS) more than desert (BW)?',
      'Steppe depends on its marginal rainfall for sparse grasslands. Variable rainfall more often causes famine in steppe regions, while deserts are already adapted to extreme aridity.',
      { choices: ['It doesn\'t — both are equally affected', 'Steppe depends on marginal rain for grasslands; variability causes famine', 'Desert has more population', 'Steppe has more mountains'], correct: 1 }
    ),
    getInitialCard('kp-b-desert-rain',
      'How does rain occur in subtropical deserts and why is it ineffective?',
      'Rain occurs in short, intense thundershowers that are ineffective in building soil moisture. Water runs off quickly before it can soak in.',
      { choices: ['Gentle, prolonged drizzle', 'Short intense thundershowers — ineffective for soil moisture', 'Steady monsoon rain', 'Snow and sleet'], correct: 1 }
    ),
    getInitialCard('kp-b-fog',
      'Why is fog common in coastal deserts?',
      'Fog forms in coastal deserts that border cold ocean currents. The cold current cools the moist air above it, causing condensation as fog (e.g., Atacama, Namib deserts).',
      { choices: ['Due to high rainfall', 'Due to cold ocean currents cooling moist air', 'Due to volcanic activity', 'Due to high altitude'], correct: 1 }
    ),
    getInitialCard('kp-b-highest-temp',
      'What is the highest shade temperature ever recorded, and where?',
      '58°C at Al Aziziyah, Libya on 13 September 1922. This occurred in a subtropical desert (BWh) climate.',
      { choices: ['56°C in Death Valley, USA', '58°C at Al Aziziyah, Libya', '60°C in Thar Desert, India', '55°C in Sahara, Egypt'], correct: 1 }
    ),
    getInitialCard('kp-b-temp-range',
      'What are the temperature characteristics of subtropical dry climates (BSh/BWh)?',
      'Maximum summer temperature is very high. Both annual range and diurnal (daily) range of temperature are high due to dry air and clear skies.',
      { choices: ['Low temperatures, low range', 'Very high max temp; high annual and diurnal ranges', 'Uniform moderate temperatures', 'Cold with low diurnal range'], correct: 1 }
    ),

    // --- Group C Detailed (Warm Temperate / Mid-Latitude from NCERT) ---
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
