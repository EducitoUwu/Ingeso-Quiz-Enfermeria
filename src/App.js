import React, { useEffect, useState } from 'react';
import './styles/App.css';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import LoginScreen from './components/LoginScreen';
import { useAuth } from './contexts/AuthContext';
import { useScreen } from './contexts/ScreenContext';
import cases from './data/cases';
import { Howl } from 'howler';
import backgroundMusic from './assets/background.mp3';
import Cookies from 'js-cookie'; // Importamos la librería de cookies

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { screen } = useScreen();
  const [selectedCases, setSelectedCases] = useState([]);

  useEffect(() => {
    // Verificamos si el token existe y si no ha expirado
    const token = Cookies.get('token');
    const tokenExpiration = Cookies.get('tokenExpiration');
    const currentTime = new Date().getTime();

    if (token && tokenExpiration && currentTime < tokenExpiration) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      Cookies.remove('token');
      Cookies.remove('tokenExpiration');
    }

    const shuffledCases = cases.sort(() => Math.random() - 0.5).slice(0, 3);
    setSelectedCases(shuffledCases);

    if (isAuthenticated) {
      const music = new Howl({ src: [backgroundMusic], loop: true, volume: 0.03 });
      music.play();
      return () => music.stop();
    }
  }, [setIsAuthenticated, isAuthenticated]);

  if (!isAuthenticated) return <LoginScreen />;

  return (
    <>
      {screen === 'home' && <HomeScreen />}
      {screen === 'study' && <StudyMaterial />}
      {screen === 'quiz' && <Quiz questions={selectedCases} />}
    </>
  );
}

export default App;
