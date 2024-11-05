import React, { useState } from 'react';
import '../styles/Quiz.css';
import { useScreen } from '../contexts/ScreenContext';
import Header from './Header';
import Table from './Table';
import Question from './Question';

const Quiz = ({ questions }) => {
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resetSelection, setResetSelection] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const { setScreen } = useScreen();

  const handleNextCase = () => {
    if (currentCaseIndex < questions.length - 1) {
      setResetSelection(true);
      setTimeout(() => {
        setResetSelection(false);
        setCurrentCaseIndex((prevIndex) => prevIndex + 1);
        setSubmitted(false);
        setShowQuestions(false);
      }, 300);
    } else {
      setShowResult(true);
    }
  };

  const handleSubmitTable = () => {
    setSubmitted(true);
  };

  const handleShowQuestions = () => {
    setShowQuestions(true);
  };

  const currentCase = questions[currentCaseIndex];

  if (!currentCase || !currentCase.table) {
    return <div>Cargando caso...</div>;
  }

  return (
    <>
      <Header useColorLogo />
      {showResult ? (
        <div className="quiz-container">
          <h1>¡Quiz Completado!</h1>
          <button className="quiz-button" onClick={() => setScreen('home')}>
            Volver a inicio
          </button>
        </div>
      ) : showIntroduction ? (
        <div className="quiz-container">
          <h1>Algunas instrucciones antes de iniciar</h1>
          <p>Cada caso clínico comenzará con una imagen y una descripción de este. Debes analizar la información entregada y realizar la valoración de la lesión según el diagrama de valoración que corresponda a cada caso.</p>
          <button
            className="quiz-button"
            onClick={() => setShowIntroduction(false)}
          >
            Empezar Quiz
          </button>
        </div>
      ) : (
        <div className="quiz-container">
          <h1>Quiz de Enfermería</h1>
          <div className="question-container">
            <img src={currentCase.image} alt="Caso clínico" />
            <p>{currentCase.description}</p>

            {!submitted && (
              <p className="instruction">Según el análisis del caso clínico presentado, seleccione en el siguiente diagrama el puntaje que corresponde a la valoración realizada (tabla deslizable):</p>
            )}

            {!showQuestions ? (
              <Table
                aspects={currentCase.table.aspects || []}
                correctAspects={currentCase.correctAspects || {}}
                evaluation={currentCase.table.evaluation || []}
                onSubmit={handleSubmitTable}
                resetSelection={resetSelection}
                readOnly={submitted}
                submitted={submitted}
              />
            ) : (
              <Question
                questions={currentCase.questions}
                onNextCase={handleNextCase}
              />
            )}

            {submitted && !showQuestions && (
              <>
                <p className="table-feedback">{currentCase.feedback}</p>
                <button className="quiz-button" onClick={handleShowQuestions}>
                  Ver Preguntas
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Quiz;
