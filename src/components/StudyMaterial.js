import React from 'react';
import { AppContainer } from '../styles/AppStyles';
import { Title } from '../styles/TextStyles';
import { MaterialContainer } from '../styles/ContainerStyles';
import { MaterialImage } from '../styles/ImageStyles';
import { MaterialText } from '../styles/TextStyles';
import { Button } from '../styles/ButtonStyles';

const StudyMaterial = ({ setScreen }) => (
  <AppContainer>
    <Title>Material de Estudio</Title>
    <MaterialContainer>
      <MaterialImage src="https://example.com/material1.jpg" alt="Material de estudio 1" />
      <MaterialText>Descripción del material de estudio 1...</MaterialText>
    </MaterialContainer>
    <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setScreen('home')}>
      Volver al Inicio
    </Button>
  </AppContainer>
);

export default StudyMaterial;
