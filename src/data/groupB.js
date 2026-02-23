import { getInitialCard } from '../spacedRepetition';

export const groupBDeck = {
  id: 'group-b-dry',
  name: 'Group B — Dry Climates',
  description: 'BSh, BWh, BSk, BWk — Steppe & Desert climates, causes, rainfall variability, temperature extremes',
  cards: [
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
  ],
};
