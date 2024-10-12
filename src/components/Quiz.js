import React, { useState, useEffect } from 'react';
import '../styles/Quiz.css';
import Question from './Question';
import { useScreen } from '../contexts/ScreenContext';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { setScreen } = useScreen();
  const [resetSelection, setResetSelection] = useState(false);

  const handleNextQuestion = () => {
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

  useEffect(() => {
    if (resetSelection) {
      setResetSelection(false);
    }
  }, [currentQuestionIndex, resetSelection]);

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
      <Question
        currentQuestion={questions[currentQuestionIndex]}
        onSubmit={handleNextQuestion}
        resetSelection={resetSelection}
      />
    </div>
  );
};

export default Quiz;
