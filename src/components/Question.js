import React from 'react';
import '../styles/Question.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const Question = ({ currentQuestion, handleAnswer, selectedAnswer, isCorrect }) => (
  <div className="question-container">
    <img src={currentQuestion.image} alt="Pregunta de enfermería" />
    <p>{currentQuestion.question}</p>
    {currentQuestion.answers.map((answer, index) => (
      <button
        key={index}
        onClick={() => handleAnswer(answer)}
        disabled={selectedAnswer !== null}
        className={`question-button ${selectedAnswer === answer ? (isCorrect ? 'correct' : 'incorrect') : ''}`}
      >
        {answer}
        {selectedAnswer === answer && (
          <span className="icon">
            {isCorrect ? <FaCheck /> : <FaTimes />}
          </span>
        )}
      </button>
    ))}
  </div>
);

export default Question;
