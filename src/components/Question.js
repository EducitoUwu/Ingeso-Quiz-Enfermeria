import React, { useState } from 'react';
import '../styles/Question.css';
import Lottie from 'react-lottie';
import correctAnimation from '../assets/correct.json';
import wrongAnimation from '../assets/wrong.json';
import { Howl } from 'howler';
import correctSound from '../assets/correct.mp3';
import wrongSound from '../assets/wrong.mp3';

const Question = ({ questions, onNextCase }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(null);

  const playSound = (sound) => {
    const soundEffect = new Howl({ src: [sound] });
    soundEffect.play();
  };

  const handleOptionSelect = (option) => {
    if (!submitted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.answers.includes(selectedOption);

    // Animación y sonido según el estado de la respuesta
    setShowAnimation(isCorrect ? 'correct' : 'wrong');
    playSound(isCorrect ? correctSound : wrongSound);
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setSubmitted(false);
      setShowAnimation(null);
    } else {
      onNextCase();
    }
  };

  const animationOptions = {
    loop: false,
    autoplay: true,
    animationData: showAnimation === 'correct' ? correctAnimation : wrongAnimation,
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="questions-container">
      <h3>{currentQuestion.question}</h3>
      <ul className="options-list">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = currentQuestion.answers.includes(option);
          const isIncorrect = isSelected && !isCorrect;

          return (
            <li
              key={index}
              className={`option-item 
                ${isSelected ? 'selected' : ''} 
                ${submitted && isCorrect ? 'correct' : ''} 
                ${submitted && isIncorrect ? 'incorrect' : ''}`}
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
        <>
          {showAnimation && <Lottie options={animationOptions} height={150} width={150} />}
          <button className="quiz-button" onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Siguiente Caso'}
          </button>
        </>
      )}
    </div>
  );
};

export default Question;


