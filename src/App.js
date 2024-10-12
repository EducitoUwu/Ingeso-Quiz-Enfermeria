import React, { useEffect, useState } from 'react';
import './styles/App.css';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import LoginScreen from './components/LoginScreen';
import cases from './data/cases';
import { useAuth } from './contexts/AuthContext';
import { useScreen } from './contexts/ScreenContext';

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { screen } = useScreen();
  const [selectedCases, setSelectedCases] = useState([]);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    if (authenticated) {
      setIsAuthenticated(true);
    }

    // Seleccionamos casos de manera aleatoria (ejemplo con 3 casos)
    const shuffledCases = cases.sort(() => 0.5 - Math.random()).slice(0, 3);
    setSelectedCases(shuffledCases);
  }, [setIsAuthenticated]);

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <>
      {screen === 'home' && <HomeScreen />}
      {screen === 'study' && <StudyMaterial />}
      {screen === 'quiz' && <Quiz questions={selectedCases} />} {/* Pasamos los casos como preguntas */}
    </>
  );
}

export default App;
