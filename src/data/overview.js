import { getInitialCard } from '../spacedRepetition';

export const overviewDeck = {
  id: 'koeppen-overview',
  name: 'Koeppen — Overview & Notation',
  description: 'Letter codes, notation system, and overview of all 5 climate groups',
  cards: [
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
  ],
};
