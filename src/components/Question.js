import React from 'react';
import '../styles/Question.css';
import Table from './Table';

const Question = ({ currentQuestion, onSubmit, resetSelection }) => {
  return (
    <div className="question-container">
      <img src={currentQuestion.image} alt="Caso clínico" />
      <p>{currentQuestion.description}</p>

      <Table
        aspects={currentQuestion.table.aspects}
        evaluation={currentQuestion.table.evaluation}
        onSubmit={onSubmit}
        resetSelection={resetSelection}
      />
    </div>
  );
};

export default Question;
