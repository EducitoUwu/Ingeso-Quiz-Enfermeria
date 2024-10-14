import React, { useState } from 'react';
import '../styles/Quiz.css';
import { useScreen } from '../contexts/ScreenContext';
import Table from './Table';
import Question from './Question';

const Quiz = ({ questions }) => {
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
    setSubmitted(true); // Marca la tabla como enviada
  };

  const handleShowQuestions = () => {
    setShowQuestions(true); // Muestra las preguntas después de la tabla
  };

  const currentCase = questions[currentCaseIndex];

  if (!currentCase || !currentCase.table) {
    return <div>Cargando caso...</div>;
  }

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
      <div className="question-container">
        <img src={currentCase.image} alt="Caso clínico" />
        <p>{currentCase.description}</p>

        {!showQuestions ? (
          <Table
            aspects={currentCase.table.aspects || []}
            correctAspects={currentCase.correctAspects || {}}
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
  );
};

export default Quiz;
