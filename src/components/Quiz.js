import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css';
import Table from './Table';
import { useScreen } from '../contexts/ScreenContext';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { setScreen } = useScreen();
  const [resetSelection, setResetSelection] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNextQuestion = () => {
    setSubmitted(false);
    if (currentQuestionIndex < questions.length - 1) {
      setResetSelection(true);
      setTimeout(() => {
        setResetSelection(false);
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 300);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (showResult) {
    return (
      <div className="quiz-container">
        <h1>¡Quiz Completado!</h1>
        <button className="quiz-button" onClick={() => setScreen('home')}>
          Volver a inicio
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Quiz de Enfermería</h1>
      <div className="question-container">
        <img src={currentQuestion.image} alt="Caso clínico" />
        <p>{currentQuestion.description}</p>

        {submitted ? (
          <Table
            aspects={currentQuestion.table.aspects}
            correctAspects={currentQuestion.correctAspects}
            readOnly={true}
          />
        ) : (
          <Table
            aspects={currentQuestion.table.aspects}
            evaluation={currentQuestion.table.evaluation}
            onSubmit={handleSubmit}
            resetSelection={resetSelection}
          />
        )}

        {submitted && (
          <button className="quiz-button" onClick={handleNextQuestion}>
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
