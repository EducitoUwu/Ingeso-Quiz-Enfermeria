// src/components/StudyMaterial.js
import React from 'react';
import { Title, AppContainer, MaterialContainer, MaterialImage, MaterialText, Button } from '../styles/AppStyles';

const StudyMaterial = ({ setScreen }) => {
  return (
    <AppContainer>
      <Title>Material de Estudio</Title>
      <MaterialContainer>
        <MaterialImage src="https://example.com/material1.jpg" alt="Material de estudio 1" />
        <MaterialText>Descripción del material de estudio 1...</MaterialText>
        {/* Añade más imágenes y texto de material de estudio según necesites */}
      </MaterialContainer>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setScreen('home')}
      >
        Volver al Inicio
      </Button>
    </AppContainer>
  );
};

export default StudyMaterial;
