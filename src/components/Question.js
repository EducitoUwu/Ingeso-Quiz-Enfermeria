import React, { useState } from 'react';
import '../styles/Question.css';
import Lottie from 'react-lottie';
import correctAnimation from '../assets/correct.json';
import wrongAnimation from '../assets/wrong.json';
import confettiAnimation from '../assets/confetti.json';  // Asegúrate de tener el archivo de confeti
import { Howl } from 'howler';
import correctSound from '../assets/correct.mp3';
import wrongSound from '../assets/wrong.mp3';

const Question = ({ questions, onNextCase }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [showAnimation, setShowAnimation] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);  // Estado para el confeti


  const playSound = (sound) => {
    const soundEffect = new Howl({ src: [sound], volume: 0.02 });
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

    // Mostrar animación de confeti solo si es correcta
    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false); // Ocultar confeti después de un tiempo
      }, 2000);  // Duración de la animación de confeti
    }
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

  const confettiOptions = {
    loop: true,
    autoplay: true,
    animationData: confettiAnimation,
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
          {showConfetti && (
            <Lottie
              options={confettiOptions}
              height={400}  // Puedes ajustar el tamaño
              width={400}
              style={{
                position: 'absolute',
                top: '100%', // Más cerca del borde inferior
                left: '50%',
                transform: 'translate(-50%, -50%)', // Mantener centrado horizontalmente
                zIndex: 100,
              }}
              
            />
          )}
          <button className="quiz-button" onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? 'Siguiente Pregunta' : 'Siguiente Caso'}
          </button>
          {/* Mostrar feedback después de enviar la respuesta */}
          <p className="question-feedback">{currentQuestion.feedback}</p>
        </>
      )}
    </div>
  );
};

export default Question;
