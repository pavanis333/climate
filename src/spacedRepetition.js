// Spaced repetition using SM-2 algorithm (simplified)
// Intervals: again=1min, hard=6min, good=1day*easeFactor, easy=3days*easeFactor

const INITIAL_EASE = 2.5;
const MIN_EASE = 1.3;

export function getInitialCard(id, front, back, options = null) {
  return {
    id,
    front,
    back,
    options, // for MCQ: { choices: [], correct: index }
    interval: 0, // days
    ease: INITIAL_EASE,
    repetitions: 0,
    dueDate: Date.now(),
    lastReview: null,
  };
}

// quality: 0=again, 1=hard, 2=good, 3=easy
export function reviewCard(card, quality) {
  const now = Date.now();
  let { interval, ease, repetitions } = card;

  if (quality < 2) {
    // Failed - reset
    repetitions = 0;
    interval = quality === 0 ? 0.0007 : 0.004; // ~1min or ~6min in days
  } else {
    repetitions += 1;
    if (repetitions === 1) {
      interval = 1;
    } else if (repetitions === 2) {
      interval = 3;
    } else {
      interval = Math.round(interval * ease);
    }
    if (quality === 3) {
      interval *= 1.3;
    }
  }

  // Update ease factor
  ease = ease + (0.1 - (3 - quality) * (0.08 + (3 - quality) * 0.02));
  if (ease < MIN_EASE) ease = MIN_EASE;

  return {
    ...card,
    interval,
    ease,
    repetitions,
    dueDate: now + interval * 86400000,
    lastReview: now,
  };
}

export function getDueCards(cards) {
  const now = Date.now();
  return cards.filter(c => c.dueDate <= now);
}

export function getStats(cards) {
  const now = Date.now();
  const total = cards.length;
  const due = cards.filter(c => c.dueDate <= now).length;
  const learned = cards.filter(c => c.repetitions >= 2).length;
  const mastered = cards.filter(c => c.repetitions >= 5 && c.interval >= 7).length;
  return { total, due, learned, mastered, newCount: total - learned };
}
