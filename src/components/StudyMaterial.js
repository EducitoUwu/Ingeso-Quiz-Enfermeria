import React from 'react';
import '../styles/StudyMaterial.css';
import Header from './Header';

const StudyMaterial = () => {
  return (
    <div className="study-container">
      <Header />
      <h1>Material de Estudio</h1>
      <div>
        <img src="https://example.com/material1.jpg" alt="Material de estudio 1" />
        <p>Descripción del material de estudio 1...</p>
      </div>
    </div>
  );
};

export default StudyMaterial;
