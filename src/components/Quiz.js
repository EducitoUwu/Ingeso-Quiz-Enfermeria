import React, { useState } from 'react';
import '../styles/Quiz.css';
import Question from './Question';
import { useScreen } from '../contexts/ScreenContext';

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const { setScreen } = useScreen();

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(prevScore => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      } else {
        setShowResult(true);
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1500);
  };

  if (showResult) {
    return (
      <div className="quiz-container">
        <h1>¡Quiz Completado!</h1>
        <div>
          <p>Tu puntuación: {score} / 10</p>
          <button className="quiz-button" onClick={() => setScreen('home')}>Volver a inicio</button>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1>Quiz de Enfermería</h1>
      <Question 
        currentQuestion={questions[currentQuestionIndex]} 
        handleAnswer={handleAnswer} 
        selectedAnswer={selectedAnswer} 
        isCorrect={isCorrect} 
      />
    </div>
  );
};

export default Quiz;
