import React, { useState } from 'react';
import '../styles/Quiz.css';
import Question from './Question';
import { useScreen } from '../contexts/ScreenContext';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const { setScreen } = useScreen();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setShowResult(true);
    }
  };

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
      />
      <button className="quiz-button" onClick={handleNextQuestion}>
        Siguiente
      </button>
    </div>
  );
};

export default Quiz;
