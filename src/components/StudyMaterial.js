import React from 'react';
import '../styles/StudyMaterial.css';
import { useScreen } from '../contexts/ScreenContext';

const StudyMaterial = () => {
  const { setScreen } = useScreen();

  return (
    <div className="study-container">
      <h1>Material de Estudio</h1>
      <div>
        <img src="https://example.com/material1.jpg" alt="Material de estudio 1" />
        <p>Descripción del material de estudio 1...</p>
      </div>
      <button className="study-button" onClick={() => setScreen('home')}>Volver al Inicio</button>
    </div>
  );
};

export default StudyMaterial;
