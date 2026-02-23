import { getInitialCard } from '../spacedRepetition';

export const groupDDeck = {
  id: 'group-d-cold-snow',
  name: 'Group D — Cold Snow-forest Climates',
  description: 'Df (Cold Humid Winter) and Dw (Cold Dry Winter) — severe winters, large continental areas, 40°–70°N',
  cards: [
    getInitialCard('kp-df',
      'What does "Df" represent in Koeppen\'s classification?',
      'Df = Cold climate with humid winter — no dry season with severe winters. Found in interior N. America, Northern Europe, NE Asia.',
      { choices: ['Subarctic — winter dry', 'Cold climate with humid winter, severe winters', 'Marine west coast', 'Tundra'], correct: 1 }
    ),
    getInitialCard('kp-dw',
      'What does "Dw" represent in Koeppen\'s classification?',
      'Dw = Cold climate with dry winter. Found mainly over Northeastern Asia. Winter is extremely severe.',
      { choices: ['Humid continental', 'Cold climate with dry winter — NE Asia', 'Tundra', 'Polar ice cap'], correct: 1 }
    ),
    getInitialCard('kp-d-location',
      'Where do Cold Snow-forest Climates (Group D) occur?',
      'In large continental areas of the northern hemisphere between 40°–70°N latitudes — in Europe, Asia, and North America.',
      { choices: ['Southern hemisphere tropics', 'Northern hemisphere, 40°–70°N, in Europe, Asia, North America', 'Equatorial regions', 'Only in Antarctica'], correct: 1 }
    ),
    getInitialCard('kp-d-hemisphere',
      'Why do D-type climates occur only in the Northern Hemisphere?',
      'Because large continental landmasses exist between 40°–70° latitude only in the Northern Hemisphere. The Southern Hemisphere at these latitudes is mostly ocean.',
      { choices: ['Due to Earth\'s tilt', 'Large continental landmasses at 40°–70° exist only in the Northern Hemisphere', 'Due to ocean currents', 'They also occur in the Southern Hemisphere'], correct: 1 }
    ),
    getInitialCard('kp-d-types',
      'What are the two types of Cold Snow-forest Climate?',
      '(i) Df — cold climate with humid winter, (ii) Dw — cold climate with dry winter.',
      { choices: ['Da and Db', 'Df (humid winter) and Dw (dry winter)', 'Ds and Dm', 'Dc and Dd'], correct: 1 }
    ),
    getInitialCard('kp-d-severity',
      'How does the severity of winter change within Group D climates?',
      'The severity of winter is more pronounced at higher latitudes — the further poleward, the colder and harsher the winters become.',
      { choices: ['Winters are uniform across all D climates', 'Severity increases with higher latitude (more poleward = harsher)', 'Winters become milder poleward', 'Severity depends only on altitude'], correct: 1 }
    ),
    getInitialCard('kp-df-location',
      'Where does Df (Cold Climate with Humid Winter) occur in relation to other climate zones?',
      'Poleward of marine west coast climate (Cfb) and mid-latitude steppe (BSk). It occurs in the transition toward colder polar climates.',
      { choices: ['Equatorward of tropical climates', 'Poleward of marine west coast (Cfb) and mid-latitude steppe (BSk)', 'In the tropics', 'Only on islands'], correct: 1 }
    ),
    getInitialCard('kp-df-character',
      'What are the characteristics of Df (Cold Climate with Humid Winter)?',
      'Winters are cold and snowy. Frost-free season is short. Annual ranges of temperature are large. Weather changes are abrupt and short.',
      { choices: ['Mild winters, long summers', 'Cold snowy winters, short frost-free season, large annual temp range, abrupt weather changes', 'Uniform temperature year-round', 'Dry throughout the year'], correct: 1 }
    ),
    getInitialCard('kp-df-weather',
      'What is unique about weather changes in Df climate?',
      'Weather changes are abrupt and short — conditions can shift rapidly due to the interaction of polar and tropical air masses.',
      { choices: ['Weather is very stable', 'Weather changes are abrupt and short', 'Only gradual seasonal changes', 'No weather variation at all'], correct: 1 }
    ),
    getInitialCard('kp-dw-location',
      'Where does Dw (Cold Climate with Dry Winter) mainly occur?',
      'Mainly over Northeastern Asia (e.g., eastern Siberia, parts of northern China/Manchuria).',
      { choices: ['Western Europe', 'Mainly Northeastern Asia', 'South America', 'Australia'], correct: 1 }
    ),
    getInitialCard('kp-dw-monsoon',
      'What causes the monsoon-like wind reversal in Dw climate regions?',
      'The development of a pronounced winter anticyclone (high pressure) and its weakening in summer causes a monsoon-like reversal of winds over Northeastern Asia.',
      { choices: ['ITCZ migration', 'Winter anticyclone development and its summer weakening → monsoon-like wind reversal', 'Ocean currents', 'Orographic effects'], correct: 1 }
    ),
    getInitialCard('kp-dw-winter-temp',
      'How severe are winters in Dw climate?',
      'Extremely low winter temperatures — many locations experience below-freezing temperatures for up to 7 months in a year. Poleward, summer temperatures are also lower.',
      { choices: ['Mild winters above 0°C', 'Below freezing for up to 7 months; extremely low temperatures', 'Similar to Mediterranean winters', 'Cold but above -10°C'], correct: 1 }
    ),
    getInitialCard('kp-dw-precip',
      'When does precipitation occur in Dw climate and how much?',
      'Precipitation occurs mainly in summer. Annual precipitation is very low — only 12–15 cm.',
      { choices: ['Year-round, 100–200 cm', 'Mainly in summer; very low at 12–15 cm annually', 'Mainly in winter; 50–75 cm', 'No precipitation at all'], correct: 1 }
    ),
    getInitialCard('kp-df-vs-dw',
      'What is the key difference between Df and Dw climates?',
      'Df has precipitation throughout the year (humid winter). Dw has dry winters with precipitation mainly in summer. Dw also has more extreme winter temperatures due to the anticyclone.',
      { choices: ['No difference', 'Df: year-round precipitation; Dw: dry winter, summer rain, more extreme cold', 'Df is drier than Dw', 'Dw has milder winters'], correct: 1 }
    ),
  ],
};
