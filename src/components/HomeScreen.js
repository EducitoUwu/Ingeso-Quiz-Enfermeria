// src/components/HomeScreen.js
import React from 'react';
import { Title, Button, AppContainer } from '../styles/AppStyles';

const HomeScreen = ({ setScreen }) => {
  return (
    <AppContainer>
      <Title>Bienvenido al Quiz de Enfermería</Title>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setScreen('quiz')}
      >
        Comenzar Quiz
      </Button>
      <Button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setScreen('study')}
      >
        Material de Estudio
      </Button>
    </AppContainer>
  );
};

export default HomeScreen;
