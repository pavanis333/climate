import { getInitialCard } from '../spacedRepetition';

export const groupDDeck = {
  id: 'group-d-cold-snow',
  name: 'Group D — Cold Snow-forest Climates',
  description: 'Df (Humid Continental) and Dw (Subarctic) — severe winters, continental interiors',
  cards: [
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
  ],
};
