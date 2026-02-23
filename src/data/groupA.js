import { getInitialCard } from '../spacedRepetition';

export const groupADeck = {
  id: 'group-a-tropical',
  name: 'Group A — Tropical Humid Climates',
  description: 'Af (Tropical Wet), Am (Tropical Monsoon), Aw (Tropical Wet & Dry) — locations, rainfall, temperature, vegetation',
  cards: [
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
