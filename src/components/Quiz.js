// src/components/Quiz.js
import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Title, AppContainer, QuestionContainer, QuestionImage, QuestionText, AnswerButton, ResultContainer, ScoreText, Button } from '../styles/AppStyles';
import Question from './Question';

const Quiz = ({ questions, setScreen }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1500);
  };

  if (showResult) {
    return (
      <AppContainer>
        <Title>¡Quiz Completado!</Title>
        <ResultContainer>
          <ScoreText>Tu puntuación: {score} / 10</ScoreText>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setScreen('home')}
          >
            Reiniciar Quiz
          </Button>
        </ResultContainer>
      </AppContainer>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <AppContainer>
      <Title>Quiz de Enfermería</Title>
      <Question 
        currentQuestion={currentQuestion} 
        handleAnswer={handleAnswer} 
        selectedAnswer={selectedAnswer} 
        isCorrect={isCorrect} 
      />
    </AppContainer>
  );
};

export default Quiz;
