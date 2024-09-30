import React from 'react';
import { AppContainer } from '../styles/AppStyles';
import { Title } from '../styles/TextStyles';
import { Button } from '../styles/ButtonStyles';
import styled from 'styled-components';
import logo from '../assets/escudo-ucn-white.png';

const Logo = styled.img`
  width: 150px;
  margin: 0 auto 20px;
  display: block;
`;

const HomeScreen = ({ setScreen }) => {
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setScreen('login'); // Cambiar la pantalla a 'login'
    window.location.reload(); // Recargar la página para asegurarse de que se actualice correctamente
  };

  return (
    <AppContainer>
      <Logo src={logo} alt="Logo Universidad Católica del Norte" />
      <Title>Bienvenido al Quiz de Enfermería</Title>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setScreen('quiz')}>
        Comenzar Quiz
      </Button>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setScreen('study')}>
        Material de Estudio
      </Button>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLogout}>
        Cerrar Sesión
      </Button>
    </AppContainer>
  );
};

export default HomeScreen;
