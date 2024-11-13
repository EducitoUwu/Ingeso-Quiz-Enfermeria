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

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { screen } = useScreen();
  const [selectedCases, setSelectedCases] = useState([]);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(Boolean(authenticated));

    const shuffledCases = cases.sort(() => Math.random() - 0.5).slice(0, 3);
    setSelectedCases(shuffledCases);

    if (authenticated){
      const music = new Howl({ src: [backgroundMusic], loop: true, volume: 0.03 });
      music.play();
      return () => music.stop();
    }
    
    
    
  }, [setIsAuthenticated]);

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

