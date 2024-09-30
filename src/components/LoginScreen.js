import React from 'react';
import { AppContainer } from '../styles/AppStyles';
import { Title } from '../styles/TextStyles';
import { Button } from '../styles/ButtonStyles';
import styled from 'styled-components';
import logo from '../assets/escudo-ucn-white.png';
import { auth, provider, signInWithPopup } from '../firebaseConfig';

const Logo = styled.img`
  width: 150px;
  margin: 0 auto 20px;
  display: block;
`;

const LoginScreen = ({ setIsAuthenticated }) => {
  const handleGoogleLogin = async () => {
    try {
      // Iniciar sesión con Google usando Firebase
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Verificar si el correo tiene el dominio @alumnos.ucn.cl
      if (user.email.endsWith('@alumnos.ucn.cl')) {
        localStorage.setItem('isAuthenticated', true);
        setIsAuthenticated(true); // Actualiza el estado para indicar que el usuario está autenticado
      } else {
        alert('Solo se permiten correos de @alumnos.ucn.cl');
        auth.signOut();
      }
    } catch (error) {
      console.error('Error al iniciar sesión con Google:', error);
      alert('Ocurrió un error al intentar iniciar sesión. Por favor, inténtalo nuevamente.');
    }
  };

  return (
    <AppContainer>
      <Logo src={logo} alt="Logo Universidad Católica del Norte" />
      <Title>Bienvenido al Quiz de Enfermería</Title>
      <Button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleGoogleLogin}>
        Iniciar sesión con Gmail
      </Button>
    </AppContainer>
  );
};

export default LoginScreen;
