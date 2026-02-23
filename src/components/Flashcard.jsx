import { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ card, onRate, showAnswer, setShowAnswer }) {
  return (
    <div className="flashcard-container">
      <div className={`flashcard ${showAnswer ? 'flipped' : ''}`} onClick={() => setShowAnswer(!showAnswer)}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <p className="card-label">Question</p>
            <p className="card-text">{card.front}</p>
            <p className="tap-hint">Tap to reveal answer</p>
          </div>
          <div className="flashcard-back">
            <p className="card-label">Answer</p>
            <p className="card-text">{card.back}</p>
          </div>
        </div>
      </div>
      {showAnswer && (
        <div className="rating-buttons">
          <p className="rate-label">How well did you know this?</p>
          <div className="rate-row">
            <button className="rate-btn again" onClick={() => onRate(0)}>Again</button>
            <button className="rate-btn hard" onClick={() => onRate(1)}>Hard</button>
            <button className="rate-btn good" onClick={() => onRate(2)}>Good</button>
            <button className="rate-btn easy" onClick={() => onRate(3)}>Easy</button>
          </div>
        </div>
      )}
    </div>
  );
}
