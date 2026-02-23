import { getStats } from '../spacedRepetition';
import './Progress.css';

export default function Progress({ decks, quizHistory, onReset }) {
  // Quiz aggregate stats
  const totalQuizzes = quizHistory.length;
  const totalQuestionsAttempted = quizHistory.reduce((s, q) => s + q.total, 0);
  const totalCorrect = quizHistory.reduce((s, q) => s + q.score, 0);
  const avgScore = totalQuizzes > 0 ? Math.round((totalCorrect / totalQuestionsAttempted) * 100) : 0;
  const bestScore = totalQuizzes > 0 ? Math.max(...quizHistory.map(q => Math.round((q.score / q.total) * 100))) : 0;

  // Per-question accuracy from quiz results
  const questionStats = {};
  quizHistory.forEach(q => {
    if (q.results) {
      q.results.forEach(r => {
        if (!questionStats[r.id]) questionStats[r.id] = { correct: 0, attempts: 0, question: r.question };
        questionStats[r.id].attempts++;
        if (r.correct) questionStats[r.id].correct++;
      });
    }
  });
  const weakQuestions = Object.values(questionStats)
    .filter(q => q.attempts >= 1)
    .map(q => ({ ...q, pct: Math.round((q.correct / q.attempts) * 100) }))
    .sort((a, b) => a.pct - b.pct)
    .slice(0, 5);

  return (
    <div className="progress-container">
      <h2 className="progress-title">📊 Progress Tracker</h2>

      {/* Flashcard Progress */}
      <h3 className="section-heading">📖 Flashcard Progress</h3>
      {decks.map(deck => {
        const stats = getStats(deck.cards);
        const pct = deck.cards.length > 0 ? Math.round((stats.mastered / stats.total) * 100) : 0;
        return (
          <div key={deck.id} className="progress-deck">
            <div className="deck-header">
              <h3>{deck.name}</h3>
              <span className="deck-pct">{pct}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-value">{stats.total}</span>
                <span className="stat-label">Total</span>
              </div>
              <div className="stat-item">
                <span className="stat-value due">{stats.due}</span>
                <span className="stat-label">Due</span>
              </div>
              <div className="stat-item">
                <span className="stat-value learned">{stats.learned}</span>
                <span className="stat-label">Learned</span>
              </div>
              <div className="stat-item">
                <span className="stat-value mastered">{stats.mastered}</span>
                <span className="stat-label">Mastered</span>
              </div>
            </div>
          </div>
        );
      })}

      {/* Quiz Progress */}
      <h3 className="section-heading">📝 Quiz Progress</h3>
      <div className="progress-deck">
        <div className="stat-grid">
          <div className="stat-item">
            <span className="stat-value">{totalQuizzes}</span>
            <span className="stat-label">Quizzes Taken</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">{totalQuestionsAttempted}</span>
            <span className="stat-label">Questions</span>
          </div>
          <div className="stat-item">
            <span className="stat-value learned">{avgScore}%</span>
            <span className="stat-label">Avg Score</span>
          </div>
          <div className="stat-item">
            <span className="stat-value mastered">{bestScore}%</span>
            <span className="stat-label">Best Score</span>
          </div>
        </div>
      </div>

      {/* Recent Quiz History */}
      {quizHistory.length > 0 && (
        <div className="quiz-history">
          <h3>Recent Quizzes</h3>
          {quizHistory.slice(-10).reverse().map((q, i) => (
            <div key={i} className="quiz-record">
              <span className="quiz-record-date">{new Date(q.date).toLocaleDateString()} {new Date(q.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span className="quiz-record-deck">{decks.find(d => d.id === q.deckId)?.name || 'Unknown'}</span>
              <span className="quiz-record-score">{q.score}/{q.total}</span>
              <span className={`quiz-record-pct ${Math.round((q.score / q.total) * 100) >= 70 ? 'good' : 'needs-work'}`}>
                {Math.round((q.score / q.total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Weak Areas */}
      {weakQuestions.length > 0 && (
        <div className="quiz-history weak-areas">
          <h3>⚠️ Needs More Practice</h3>
          {weakQuestions.map((q, i) => (
            <div key={i} className="quiz-record weak-record">
              <span className="weak-question">{q.question}</span>
              <span className={`quiz-record-pct ${q.pct >= 70 ? 'good' : 'needs-work'}`}>
                {q.correct}/{q.attempts} ({q.pct}%)
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="reset-section">
        <button className="btn-danger" onClick={onReset}>
          🔄 Reset All Progress
        </button>
        <p className="reset-warning">This will clear all spaced repetition data and quiz history.</p>
      </div>
    </div>
  );
}
