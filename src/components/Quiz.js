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

  if (showResult) {
    return (
      <div className="quiz-container">
        <Header />
        <h1>¡Quiz Completado!</h1>
        <button className="quiz-button" onClick={() => setScreen('home')}>
          Volver a inicio
        </button>
      </div>
    );
  }

  if (showIntroduction) {
    return (
      <>
        <Header useColorLogo />
        <div className="quiz-container">
          <h1>Instrucciones del Quiz</h1>
          <p>En este quiz, se te presentará una imagen de un caso clínico junto a una breve descripción de este, debe responder la tabla de aspectos y las preguntas asociadas a esta</p>
          <button
            className="quiz-button"
            onClick={() => setShowIntroduction(false)}
          >
            Empezar Quiz
          </button>
        </div>
      </>
    );
  }
  return (
    <div className="quiz-container">
      <Header useColorLogo /> {/* Header dentro del contenedor */}
  
      <div className="quiz-content">
        <h1>Quiz de Enfermería</h1>
        <div className="question-container">
          <img src={currentCase.image} alt="Caso clínico" />
          <p>{currentCase.description}</p>
  
          {!submitted && (
            <p className="instruction">Selecciona los aspectos de la tabla.</p>
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
            <Question questions={currentCase.questions} onNextCase={handleNextCase} />
          )}
  
          {submitted && !showQuestions && (
            <button className="quiz-button" onClick={handleShowQuestions}>
              Ver Preguntas
            </button>
          )}
        </div>
      </div>
    </div>
  );  
};

export default Quiz;
