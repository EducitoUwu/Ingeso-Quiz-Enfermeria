import React, { useEffect } from 'react';
import './styles/App.css';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import LoginScreen from './components/LoginScreen';
import { allQuestions } from './data/questions';
import { useAuth } from './contexts/AuthContext';
import { useScreen } from './contexts/ScreenContext';

function App() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const { screen } = useScreen();
  const [questions, setQuestions] = React.useState([]);

  useEffect(() => {
    const authenticated = localStorage.getItem('isAuthenticated');
    if (authenticated) {
      setIsAuthenticated(true);
    }

    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    const preparedQuestions = shuffledQuestions.map(q => {
      const incorrectAnswers = q.allAnswers.filter(ans => ans !== q.correctAnswer);
      const answers = [...incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3), q.correctAnswer]
        .sort(() => 0.5 - Math.random());
      return { ...q, answers };
    });
    setQuestions(preparedQuestions);
  }, [setIsAuthenticated]);

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return (
    <>
      {screen === 'home' && <HomeScreen />}
      {screen === 'study' && <StudyMaterial />}
      {screen === 'quiz' && <Quiz questions={questions} />}
    </>
  );
}

export default App;
