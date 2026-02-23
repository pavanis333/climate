const STORAGE_KEY = 'upsc_prep_data';

export function loadData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function resetAllData() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getDefaultData() {
  return {
    decks: [],
    quizHistory: [],
    version: 1,
  };
}
