import { getStats } from '../spacedRepetition';
import './Progress.css';

export default function Progress({ decks, quizHistory, onReset }) {
  return (
    <div className="progress-container">
      <h2 className="progress-title">📊 Progress Tracker</h2>
      
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

      {quizHistory.length > 0 && (
        <div className="quiz-history">
          <h3>Recent Quizzes</h3>
          {quizHistory.slice(-5).reverse().map((q, i) => (
            <div key={i} className="quiz-record">
              <span>{new Date(q.date).toLocaleDateString()}</span>
              <span className="quiz-record-score">{q.score}/{q.total}</span>
              <span className="quiz-record-pct">{Math.round((q.score / q.total) * 100)}%</span>
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
