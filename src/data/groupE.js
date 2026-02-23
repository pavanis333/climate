import { getInitialCard } from '../spacedRepetition';

export const groupEDeck = {
  id: 'group-e-cold-polar',
  name: 'Group E — Polar Climates',
  description: 'ET (Tundra) and EF (Ice Cap) — permafrost, icebergs, extreme cold beyond 70° latitude',
  cards: [
    getInitialCard('kp-e-location',
      'Where do Polar Climates (Group E) exist?',
      'Poleward beyond 70° latitude in both hemispheres.',
      { choices: ['30°–50° latitude', '50°–70° latitude', 'Beyond 70° latitude (poleward)', '0°–30° latitude'], correct: 2 }
    ),
    getInitialCard('kp-e-types',
      'What are the two types of Polar Climates?',
      '(i) ET — Tundra, (ii) EF — Ice Cap.',
      { choices: ['Ea and Eb', 'ET (Tundra) and EF (Ice Cap)', 'Ef and Em', 'Es and Ew'], correct: 1 }
    ),
    getInitialCard('kp-et',
      'What does "ET" represent in Koeppen\'s classification?',
      'ET = Tundra climate — no true summer. Warmest month is below 10°C but above 0°C. Found in Arctic coasts, Antarctic Peninsula.',
      { choices: ['Polar ice cap — perennial ice', 'Tundra — no true summer', 'Subarctic — severe winter', 'Highland climate'], correct: 1 }
    ),
    getInitialCard('kp-et-name',
      'Why is the Tundra climate called "Tundra"?',
      'Named after the type of vegetation found there — low growing mosses, lichens, and flowering plants that survive the harsh conditions.',
      { choices: ['Named after a Russian city', 'Named after the vegetation — low mosses, lichens, flowering plants', 'Named after the local people', 'Named after the ice formations'], correct: 1 }
    ),
    getInitialCard('kp-et-permafrost',
      'What is permafrost and where is it found?',
      'Permafrost is permanently frozen subsoil found in tundra (ET) regions. The ground remains frozen year-round even though the surface may thaw briefly in summer.',
      { choices: ['Temporarily frozen soil in winter', 'Permanently frozen subsoil in tundra regions', 'Frozen ocean water', 'Ice on mountain peaks'], correct: 1 }
    ),
    getInitialCard('kp-et-vegetation',
      'What kind of vegetation grows in Tundra (ET) climate and why?',
      'Only low-growing plants — mosses, lichens, and flowering plants. The short growing season and waterlogging (from permafrost preventing drainage) limit plant growth.',
      { choices: ['Tall deciduous trees', 'Dense evergreen forests', 'Low-growing mosses, lichens, flowering plants — due to short growing season and waterlogging', 'No vegetation at all'], correct: 2 }
    ),
    getInitialCard('kp-et-daylight',
      'What is special about daylight in tundra regions during summer?',
      'During summer, tundra regions have very long duration of daylight (up to 24 hours near the poles — midnight sun phenomenon).',
      { choices: ['Very short daylight in summer', 'Very long daylight duration in summer', 'Equal day and night year-round', 'No daylight at any time'], correct: 1 }
    ),
    getInitialCard('kp-et-waterlogging',
      'Why do tundra regions experience waterlogging?',
      'Permafrost (permanently frozen subsoil) prevents water from draining downward. When the surface thaws in summer, water accumulates on top, causing waterlogging.',
      { choices: ['Due to heavy rainfall', 'Due to permafrost blocking drainage', 'Due to ocean flooding', 'Due to rivers overflowing'], correct: 1 }
    ),
    getInitialCard('kp-ef',
      'What does "EF" represent in Koeppen\'s classification?',
      'EF = Ice Cap climate — perennial ice. Even in summer, temperature is below freezing point. Found in interior Greenland and Antarctica.',
      { choices: ['Tundra', 'Ice Cap — perennial ice, below freezing even in summer', 'Subarctic', 'Mid-latitude desert'], correct: 1 }
    ),
    getInitialCard('kp-ef-location',
      'Where does Ice Cap Climate (EF) occur?',
      'Over interior Greenland and Antarctica. Example: Plateau Station, Antarctica at 79°S.',
      { choices: ['Arctic coasts', 'Interior Greenland and Antarctica', 'Northern Canada', 'Siberia'], correct: 1 }
    ),
    getInitialCard('kp-ef-precip',
      'What is the precipitation pattern in EF (Ice Cap) climate?',
      'Very little precipitation. However, snow and ice accumulate over time because temperatures never rise above freezing to cause melting.',
      { choices: ['Heavy rainfall year-round', 'Very little precipitation — but snow/ice accumulates as it never melts', 'Moderate monsoon rainfall', 'No precipitation at all'], correct: 1 }
    ),
    getInitialCard('kp-ef-icebergs',
      'How do icebergs form in Ice Cap (EF) climate?',
      'Snow and ice accumulate → mounting pressure causes deformation of ice sheets → ice sheets break off → these fragments move as icebergs floating in Arctic and Antarctic waters.',
      { choices: ['Volcanic eruptions push ice into the sea', 'Accumulated ice pressure deforms sheets → they break off as icebergs', 'Ocean waves carve ice from coasts', 'Earthquakes split the ice'], correct: 1 }
    ),
    getInitialCard('kp-et-ef-diff',
      'What is the key difference between ET (Tundra) and EF (Ice Cap)?',
      'ET: warmest month between 0°C and 10°C — some thawing, supports tundra vegetation. EF: no month above 0°C — perennial ice, no vegetation possible.',
      { choices: ['ET has summer rainfall, EF does not', 'ET has some months above 0°C with vegetation; EF never above 0°C, no vegetation', 'ET is at higher altitude than EF', 'No real difference, just location'], correct: 1 }
    ),
    getInitialCard('kp-ef-plateau',
      'Which station is a classic example of EF (Ice Cap) climate?',
      'Plateau Station, Antarctica at 79°S — temperatures remain below freezing even in summer.',
      { choices: ['McMurdo Station', 'Plateau Station, Antarctica, 79°S', 'Vostok Station', 'Amundsen-Scott Station'], correct: 1 }
    ),
  ],
};
