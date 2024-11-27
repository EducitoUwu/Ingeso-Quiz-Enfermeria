import React from 'react';
import '../styles/HomeScreen.css';
import { useAuth } from '../contexts/AuthContext';
import { useScreen } from '../contexts/ScreenContext';
import logo from '../assets/escudo-ucn-white.png';
import Cookies from 'js-cookie'; // Importamos la librería de cookies

const HomeScreen = () => {
  const { setIsAuthenticated } = useAuth();
  const { setScreen } = useScreen();

  const handleLogout = () => {
    // Eliminar las cookies del token y la expiración
    Cookies.remove('token');
    Cookies.remove('tokenExpiration');
    
    setIsAuthenticated(false); // Actualizamos el estado de autenticación
    setScreen('login'); // Cambiamos la pantalla a login
    window.location.reload(); // Recargamos la página para asegurar que el estado se actualiza
  };

  return (
    <div className="home-screen">
      <img className="home-logo" src={logo} alt="Logo Universidad Católica del Norte" />
      <h1 className="home-title">¡Pongamos a prueba cuánto sabes en heridas!</h1>
      <button className="home-button" onClick={() => setScreen('quiz')}>Comenzar Quiz</button>
      <button className="home-button" onClick={() => setScreen('study')}>Material de Estudio</button>
      <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
      <p className="home-description">Esta es una aplicación creada gracias a la colaboración entre estudiantes de Ing. Civil en Computación e Informática y la carrera de Enfermería de la Universidad Católica del Norte, y tiene como objetivo colaborar en el proceso de enseñanza-aprendizaje a través de un quiz con preguntas para identificar cuánto sabes sobre el manejo avanzado en heridas, cuáles son las áreas que puedes reforzar y desde dónde estudiarlo.</p>
    </div>
  );
};

export default HomeScreen;
