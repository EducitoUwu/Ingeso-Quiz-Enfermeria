import React, { useState, useEffect } from 'react';
import '../styles/Table.css';

const Table = ({ aspects, evaluation, onSubmit, resetSelection }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(aspects.length).fill(null));
  const [totalScore, setTotalScore] = useState(0);
  const [currentEvaluationType, setCurrentEvaluationType] = useState(null);

  useEffect(() => {
    setTotalScore(selectedOptions.reduce((a, b) => (a || 0) + (b || 0), 0));
  }, [selectedOptions]);

  useEffect(() => {
    if (resetSelection) {
      setSelectedOptions(Array(aspects.length).fill(null));
      setCurrentEvaluationType(null);
    }
  }, [resetSelection, aspects.length]);

  const handleOptionSelect = (aspectIndex, score) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[aspectIndex] = score;
    setSelectedOptions(newSelectedOptions);
  };

  useEffect(() => {
    const currentEval = evaluation.find(
      (e) => totalScore >= e.range[0] && totalScore <= e.range[1]
    );
    setCurrentEvaluationType(currentEval ? currentEval.type : null);
  }, [totalScore, evaluation]);

  const handleSubmit = () => {
    if (selectedOptions.every((option) => option !== null)) {
      onSubmit();
    }
  };

  const getMaxOptions = () => {
    return Math.max(...aspects.map(aspect => aspect.options.length));
  };

  return (
    <>
      <table className="score-table">
        <thead>
          <tr>
            <th>Aspecto</th>
            {Array.from({ length: getMaxOptions() }).map((_, index) => (
              <th key={index}>{index + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {aspects.map((aspect, index) => (
            <tr key={index}>
              <td>{aspect.name}</td>
              {aspect.options.map((option, optIndex) => (
                <td
                  key={optIndex}
                  className={`option-cell ${
                    selectedOptions[index] === option.score ? 'selected' : ''
                  }`}
                  onClick={() => handleOptionSelect(index, option.score)}
                >
                  {option.label}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="total-score">
        <strong>Puntaje total:</strong> {totalScore}
      </div>

      <div className="current-evaluation">
        <strong>Evaluación actual:</strong> {currentEvaluationType || 'Sin evaluación'}
      </div>

      <div className="evaluation-list">
        <h3>Tipos de Evaluación:</h3>
        {evaluation.map((e, index) => (
          <div
            key={index}
            className={`evaluation-item ${
              currentEvaluationType === e.type ? 'active' : ''
            }`}
          >
            <strong>{e.type}</strong>: {e.description} (Puntos: {e.range[0]} - {e.range[1]})
          </div>
        ))}
      </div>

      <button
        className="submit-button"
        onClick={handleSubmit}
        disabled={!selectedOptions.every((option) => option !== null)}
      >
        Enviar
      </button>
    </>
  );
};

export default Table;
