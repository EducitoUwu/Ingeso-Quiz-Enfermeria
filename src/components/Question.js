// src/components/Question.js
import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { QuestionContainer, QuestionImage, QuestionText, AnswerButton } from '../styles/AppStyles';

const Question = ({ currentQuestion, handleAnswer, selectedAnswer, isCorrect }) => {
  return (
    <QuestionContainer>
      <QuestionImage src={currentQuestion.image} alt="Pregunta de enfermería" />
      <QuestionText>{currentQuestion.question}</QuestionText>
      {currentQuestion.answers.map((answer, index) => (
        <AnswerButton
          key={index}
          onClick={() => handleAnswer(answer)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={selectedAnswer !== null}
          style={{
            backgroundColor: selectedAnswer === answer
              ? (isCorrect ? '#8e44ad' : '#c0392b')
              : '#d580ff'
          }}
        >
          {answer}
          {selectedAnswer === answer && (
            isCorrect ? <FaCheck style={{ marginLeft: '10px' }} /> : <FaTimes style={{ marginLeft: '10px' }} />
          )}
        </AnswerButton>
      ))}
    </QuestionContainer>
  );
};

export default Question;
