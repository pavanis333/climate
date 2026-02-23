import { useState, useEffect } from 'react';
import Flashcard from './components/Flashcard';
import Quiz from './components/Quiz';
import Progress from './components/Progress';
import { loadData, saveData, resetAllData, getDefaultData } from './storage';
import { reviewCard, getDueCards, getStats } from './spacedRepetition';
import { sampleDecks } from './sampleData';
import './App.css';

function App() {
  const [data, setData] = useState(() => {
    const saved = loadData();
    if (saved && saved.decks && saved.decks.length > 0) return saved;
    return { ...getDefaultData(), decks: sampleDecks };
  });

  const [view, setView] = useState('home'); // home, flashcards, quiz, progress
  const [activeDeck, setActiveDeck] = useState(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [quizResult, setQuizResult] = useState(null);

  useEffect(() => {
    saveData(data);
  }, [data]);

  const dueCards = activeDeck ? getDueCards(activeDeck.cards) : [];

  function handleSelectDeck(deck, mode) {
    setActiveDeck(deck);
    setCardIndex(0);
    setShowAnswer(false);
    setQuizResult(null);
    setView(mode);
  }

  function handleRate(quality) {
    const updated = reviewCard(dueCards[cardIndex], quality);
    setData(prev => ({
      ...prev,
      decks: prev.decks.map(d =>
        d.id === activeDeck.id
          ? { ...d, cards: d.cards.map(c => c.id === updated.id ? updated : c) }
          : d
      ),
    }));
    // Update activeDeck ref too
    setActiveDeck(prev => ({
      ...prev,
      cards: prev.cards.map(c => c.id === updated.id ? updated : c),
    }));
    setShowAnswer(false);
    if (cardIndex < dueCards.length - 1) {
      setCardIndex(i => i + 1);
    } else {
      setCardIndex(0);
    }
  }

  function handleQuizFinish(result) {
    setQuizResult(result);
    setData(prev => ({
      ...prev,
      quizHistory: [...prev.quizHistory, { ...result, date: Date.now(), deckId: activeDeck.id }],
    }));
    setView('quiz-result');
  }

  function handleReset() {
    if (window.confirm('Are you sure? This will erase ALL progress and quiz history.')) {
      resetAllData();
      setData({ ...getDefaultData(), decks: sampleDecks });
      setView('home');
      setActiveDeck(null);
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="logo" onClick={() => { setView('home'); setActiveDeck(null); }}>
          🏔️ Landforms
        </h1>
        <nav className="nav">
          <button className={`nav-btn ${view === 'home' ? 'active' : ''}`} onClick={() => { setView('home'); setActiveDeck(null); }}>Home</button>
          <button className={`nav-btn ${view === 'progress' ? 'active' : ''}`} onClick={() => setView('progress')}>Progress</button>
        </nav>
      </header>

      <main className="app-main">
        {view === 'home' && (
          <div className="home">
            <div className="hero">
              <h2>UPSC Prelims — Landforms</h2>
              <p className="hero-sub">Flashcards & Quizzes with Spaced Repetition</p>
            </div>
            <div className="deck-list">
              {data.decks.map(deck => {
                const stats = getStats(deck.cards);
                return (
                  <div key={deck.id} className="deck-card">
                    <h3>{deck.name}</h3>
                    <p className="deck-desc">{deck.description}</p>
                    <div className="deck-stats">
                      <span>{stats.total} cards</span>
                      <span className="due-badge">{stats.due} due</span>
                    </div>
                    <div className="deck-actions">
                      <button className="btn-primary" onClick={() => handleSelectDeck(deck, 'flashcards')}>
                        📖 Study
                      </button>
                      <button className="btn-secondary" onClick={() => handleSelectDeck(deck, 'quiz')}>
                        📝 Quiz
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {view === 'flashcards' && activeDeck && (
          <div className="study-view">
            <div className="study-header">
              <button className="btn-back" onClick={() => setView('home')}>← Back</button>
              <h2>{activeDeck.name}</h2>
              <span className="due-count">{dueCards.length} due</span>
            </div>
            {dueCards.length > 0 ? (
              <>
                <div className="card-counter">Card {cardIndex + 1} of {dueCards.length}</div>
                <Flashcard
                  card={dueCards[cardIndex]}
                  onRate={handleRate}
                  showAnswer={showAnswer}
                  setShowAnswer={setShowAnswer}
                />
              </>
            ) : (
              <div className="all-done">
                <p className="done-emoji">🎉</p>
                <p className="done-text">All caught up! No cards due right now.</p>
                <p className="done-sub">Come back later for more review.</p>
              </div>
            )}
          </div>
        )}

        {view === 'quiz' && activeDeck && (
          <div className="study-view">
            <div className="study-header">
              <button className="btn-back" onClick={() => setView('home')}>← Back</button>
              <h2>Quiz: {activeDeck.name}</h2>
            </div>
            <Quiz cards={activeDeck.cards} onFinish={handleQuizFinish} />
          </div>
        )}

        {view === 'quiz-result' && quizResult && (
          <div className="study-view result-view">
            <h2>Quiz Complete! 🎯</h2>
            <div className="result-score">
              <span className="big-score">{quizResult.score}/{quizResult.total}</span>
              <span className="big-pct">{Math.round((quizResult.score / quizResult.total) * 100)}%</span>
            </div>
            <div className="result-actions">
              <button className="btn-primary" onClick={() => { setView('quiz'); setQuizResult(null); }}>Retry Quiz</button>
              <button className="btn-secondary" onClick={() => setView('home')}>Home</button>
            </div>
          </div>
        )}

        {view === 'progress' && (
          <Progress decks={data.decks} quizHistory={data.quizHistory} onReset={handleReset} />
        )}
      </main>
    </div>
  );
}

export default App;
