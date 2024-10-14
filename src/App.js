import React, { useEffect, useState } from 'react';
import './styles/App.css';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import LoginScreen from './components/LoginScreen';
import { useAuth } from './contexts/AuthContext';
import { useScreen } from './contexts/ScreenContext';
import cases from './data/cases';

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { screen } = useScreen();
  const [selectedCases, setSelectedCases] = useState([]);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(Boolean(authenticated));

    const shuffledCases = cases.sort(() => Math.random() - 0.5).slice(0, 3);
    setSelectedCases(shuffledCases);
  }, [setIsAuthenticated]);

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <>
      {screen === 'home' && <HomeScreen />}
      {screen === 'study' && <StudyMaterial />}
      {screen === 'quiz' && <Quiz questions={selectedCases} />}
    </>
  );
}

export default App;
