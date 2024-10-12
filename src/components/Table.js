import React, { useState } from 'react';
import '../styles/Table.css';

const Table = ({ aspects, evaluation }) => {
  const [selectedOptions, setSelectedOptions] = useState(Array(aspects.length).fill(null));
  const [totalScore, setTotalScore] = useState(0);

  const handleOptionSelect = (aspectIndex, score) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[aspectIndex] = score;

    setSelectedOptions(newSelectedOptions);
    setTotalScore(newSelectedOptions.reduce((a, b) => (a || 0) + (b || 0), 0));
  };

  const isSelectedEvaluation = (range) => {
    return totalScore >= range[0] && totalScore <= range[1];
  };

  return (
    <>
      <table className="score-table">
        <thead>
          <tr>
            <th>Aspecto</th>
            {[1, 2, 3, 4].map((num) => (
              <th key={num}>{num}</th>
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

      <div className="evaluation-list">
        <h3>Evaluación:</h3>
        {evaluation.map((e, index) => (
          <div
            key={index}
            className={`evaluation-item ${
              isSelectedEvaluation(e.range) ? 'active' : ''
            }`}
          >
            <strong>{e.type}</strong>: {e.description} (Puntos: {e.range[0]} - {e.range[1]})
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
