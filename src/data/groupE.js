import { getInitialCard } from '../spacedRepetition';

export const groupEDeck = {
  id: 'group-e-cold-polar',
  name: 'Group E — Cold / Polar Climates',
  description: 'ET (Tundra) and EF (Polar Ice Cap) — extreme cold, no true summer',
  cards: [
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
  ],
};
