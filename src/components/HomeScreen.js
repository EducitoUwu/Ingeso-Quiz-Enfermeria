import React from 'react';
import '../styles/HomeScreen.css';
import { useAuth } from '../contexts/AuthContext';
import { useScreen } from '../contexts/ScreenContext';
import logo from '../assets/escudo-ucn-white.png';

const HomeScreen = () => {
  const { setIsAuthenticated } = useAuth();
  const { setScreen } = useScreen();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setScreen('login');
    window.location.reload();
  };

  return (
    <div className="home-screen">
      <img className="home-logo" src={logo} alt="Logo Universidad Católica del Norte" />
      <h1 className="home-title">Bienvenido al Quiz de Enfermería</h1>
      <button className="home-button" onClick={() => setScreen('quiz')}>Comenzar Quiz</button>
      <button className="home-button" onClick={() => setScreen('study')}>Material de Estudio</button>
      <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default HomeScreen;
