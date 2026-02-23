import { getInitialCard } from './spacedRepetition';
import { koeppenDeck } from './data/koeppenClimate';

// Landforms basics deck
const landformsBasics = {
  id: 'landforms-basics',
  name: 'Landforms — Basics',
  description: 'Fundamental concepts of landforms for UPSC Geography',
  cards: [
    getInitialCard('lb-1',
      'What is a Peneplain?',
      'A peneplain is an almost flat, featureless plain formed by prolonged erosion by rivers and weathering. It represents the end stage of the cycle of erosion proposed by W.M. Davis.',
      { choices: ['A volcanic plateau', 'An almost flat plain formed by prolonged erosion', 'A coastal landform', 'A glacial deposit'], correct: 1 }
    ),
    getInitialCard('lb-2',
      'What are Inselbergs?',
      'Inselbergs are isolated residual hills or mountains rising abruptly from a peneplain. Example: Ayers Rock (Uluru) in Australia.',
      { choices: ['Underwater mountains', 'Isolated hills rising from a peneplain', 'Sand dunes in desert', 'Coral formations'], correct: 1 }
    ),
    getInitialCard('lb-3',
      'What is a Monadnock?',
      'A monadnock is an isolated hill or ridge of erosion-resistant rock rising above a peneplain. Named after Mount Monadnock in New Hampshire, USA.',
      { choices: ['A type of volcano', 'An erosion-resistant hill above a peneplain', 'A river delta', 'A tectonic plate boundary'], correct: 1 }
    ),
    getInitialCard('lb-4',
      'Differentiate between V-shaped and U-shaped valleys.',
      'V-shaped valleys are formed by river erosion (narrow, steep sides). U-shaped valleys are formed by glacial erosion (wide, flat floor, steep sides). V-shaped → rivers, U-shaped → glaciers.',
      { choices: ['Both formed by wind', 'V by glaciers, U by rivers', 'V by rivers, U by glaciers', 'Both formed by tectonic activity'], correct: 2 }
    ),
    getInitialCard('lb-5',
      'What is a Meander?',
      'A meander is a winding curve or bend in a river. Formed due to lateral erosion on the outer bank (cut bank) and deposition on the inner bank (point bar).',
      { choices: ['A straight river channel', 'A winding curve in a river', 'A waterfall', 'A river mouth'], correct: 1 }
    ),
    getInitialCard('lb-6',
      'What is an Oxbow Lake?',
      'An oxbow lake is a U-shaped lake formed when a meander is cut off from the main river channel. It forms when the river erodes through the narrow neck of a meander loop.',
      { choices: ['A lake on a mountain top', 'A lake formed from a cut-off meander', 'A man-made reservoir', 'A glacial lake'], correct: 1 }
    ),
  ],
};

export const sampleDecks = [koeppenDeck, landformsBasics];
