import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { QuestionContainer } from '../styles/ContainerStyles';
import { QuestionImage } from '../styles/ImageStyles';
import { QuestionText } from '../styles/TextStyles';
import { AnswerButton } from '../styles/ButtonStyles';

const Question = ({ currentQuestion, handleAnswer, selectedAnswer, isCorrect }) => (
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
        style={{ backgroundColor: selectedAnswer === answer ? (isCorrect ? '#8e44ad' : '#c0392b') : '#d580ff' }}
      >
        {answer}
        {selectedAnswer === answer && (isCorrect ? <FaCheck style={{ marginLeft: '10px' }} /> : <FaTimes style={{ marginLeft: '10px' }} />)}
      </AnswerButton>
    ))}
  </QuestionContainer>
);

export default Question;
