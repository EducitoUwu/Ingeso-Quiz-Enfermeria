import React, { useState, useEffect } from 'react';
import '../styles/Table.css';

const Table = ({ aspects = [], evaluation = [], onSubmit, resetSelection, correctAspects, readOnly = false, submitted }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(aspects.length).fill(null));
  const [totalScore, setTotalScore] = useState(0);
  const [currentEvaluationType, setCurrentEvaluationType] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, text: '', position: { x: 0, y: 0 } });

  useEffect(() => {
    setTotalScore(selectedOptions.reduce((a, b) => (a || 0) + (b || 0), 0));
  }, [selectedOptions]);

  useEffect(() => {
    if (resetSelection) {
      setSelectedOptions(Array(aspects.length).fill(null));
      setCurrentEvaluationType(null);
      setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
    }
  }, [resetSelection, aspects.length]);

  const handleOptionSelect = (aspectIndex, score, definition, event) => {
    if (!readOnly) {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions[aspectIndex] = score;
      setSelectedOptions(newSelectedOptions);

      if (definition) {
        const rect = event.target.getBoundingClientRect();
        setTooltip({
          visible: true,
          text: definition,
          position: { x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 10 }
        });
      } else {
        setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
      }
    }
  };

  // Ocultar tooltip al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltip.visible && !event.target.closest('.option-cell')) {
        setTooltip({ visible: false, text: '', position: { x: 0, y: 0 } });
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [tooltip.visible]);

  useEffect(() => {
    const currentEval = evaluation?.find(
      (e) => totalScore >= e.range[0] && totalScore <= e.range[1]
    );
    setCurrentEvaluationType(currentEval ? currentEval.type : null);
  }, [totalScore, evaluation]);

  const handleSubmit = () => {
    if (selectedOptions.every((option) => option !== null)) {
      onSubmit(selectedOptions);
    }
  };

  const getMaxOptions = () => aspects.length > 0 
    ? Math.max(...aspects.map((aspect) => aspect.options.length)) 
    : 0;

  return (
    <>
      <div className="table-container">
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
                {aspect.options.map((option, optIndex) => {
                  const isCorrect = correctAspects && correctAspects[aspect.name] === option.score;
                  const isSelected = selectedOptions[index] === option.score;
                  const isIncorrect = isSelected && !isCorrect;

                  return (
                    <td
                      key={optIndex}
                      className={`option-cell 
                        ${submitted && isCorrect ? 'correct' : ''} 
                        ${submitted && isIncorrect ? 'incorrect' : ''}
                        ${isSelected && !readOnly ? 'selected' : ''}`}
                      onClick={(e) => handleOptionSelect(index, option.score, option.definition, e)}
                    >
                      {option.label}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {tooltip.visible && (
        <div
          className="tooltip"
          style={{ top: tooltip.position.y, left: tooltip.position.x }}
        >
          {tooltip.text}
        </div>
      )}

      {!readOnly && (
        <>
          <div className="total-score">
            <strong>Puntaje total:</strong> {totalScore}
          </div>

          <div className="evaluation-list">
            <h3>Tipos de Evaluación:</h3>
            {evaluation.map((e, index) => (
              <div
                key={index}
                className={`evaluation-item ${currentEvaluationType === e.type ? 'active' : ''}`}
              >
                <strong>{e.type}</strong> (Puntos: {e.range[0]} - {e.range[1]})
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
      )}
    </>
  );
};

export default Table;
