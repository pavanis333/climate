import { useState } from 'react';
import './Quiz.css';

export default function Quiz({ cards, onFinish }) {
  const quizCards = cards.filter(c => c.options);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [results, setResults] = useState([]);

  if (quizCards.length === 0) {
    return <div className="quiz-empty"><p>No MCQ questions available in this deck yet.</p><button className="btn-secondary" onClick={onFinish}>Go Back</button></div>;
  }

  const card = quizCards[current];
  const isLast = current >= quizCards.length - 1;

  function handleSelect(idx) {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === card.options.correct;
    if (correct) setScore(s => s + 1);
    setResults(r => [...r, { id: card.id, question: card.front, correct, selected: idx, correctIdx: card.options.correct }]);
  }

  function handleNext() {
    if (isLast) {
      onFinish({ score: score, total: quizCards.length, results });
      return;
    }
    setCurrent(c => c + 1);
    setSelected(null);
    setAnswered(false);
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <span>Question {current + 1} / {quizCards.length}</span>
        <span className="quiz-score">Score: {score}</span>
      </div>
      <div className="quiz-card">
        <p className="quiz-question">{card.front}</p>
        <div className="quiz-choices">
          {card.options.choices.map((choice, idx) => {
            let cls = 'quiz-choice';
            if (answered) {
              if (idx === card.options.correct) cls += ' correct';
              else if (idx === selected) cls += ' wrong';
            } else if (idx === selected) {
              cls += ' selected';
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                <span className="choice-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="choice-text">{choice}</span>
              </button>
            );
          })}
        </div>
        {answered && (
          <div className="quiz-explanation">
            <p className="explanation-text">{card.back}</p>
          </div>
        )}
      </div>
      {answered && (
        <button className="btn-primary quiz-next" onClick={handleNext}>
          {isLast ? 'See Results' : 'Next Question →'}
        </button>
      )}
    </div>
  );
}
