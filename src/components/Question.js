import React, { useState } from 'react';
import '../styles/Question.css';

const Question = ({ questions, onNextCase }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleOptionSelect = (option) => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true); // Muestra la retroalimentación de la pregunta
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setSubmitted(false);
    } else {
      onNextCase(); // Pasa al siguiente caso al finalizar todas las preguntas
    }
  };

  return (
    <div className="questions-container">
      <h3>{currentQuestion.question}</h3>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => {
          const isCorrect = currentQuestion.answers.includes(option);
          const isSelected = selectedOption === option;
          const isIncorrect = isSelected && !isCorrect;

          return (
            <li
              key={index}
              className={`option-item 
                ${submitted && isCorrect ? 'correct' : ''} 
                ${submitted && isIncorrect ? 'incorrect' : ''} 
                ${isSelected && !submitted ? 'selected' : ''}`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </li>
          );
        })}
      </ul>

      {!submitted ? (
        <button className="quiz-button" onClick={handleSubmit} disabled={!selectedOption}>
          Enviar
        </button>
      ) : (
        <button className="quiz-button" onClick={handleNextQuestion}>
          {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Siguiente Caso'}
        </button>
      )}
    </div>
  );
};

export default Question;
