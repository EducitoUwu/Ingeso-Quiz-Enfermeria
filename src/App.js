import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import LoginScreen from './components/LoginScreen';
import { allQuestions } from './data/questions';

function App() {
  const [questions, setQuestions] = useState([]);
  const [screen, setScreen] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si el usuario ya está autenticado al cargar la aplicación
    const authenticated = localStorage.getItem('isAuthenticated');
    if (authenticated) {
      setIsAuthenticated(true);
    }

    // Configurar las preguntas para el quiz
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    const preparedQuestions = shuffledQuestions.map(q => {
      const incorrectAnswers = q.allAnswers.filter(ans => ans !== q.correctAnswer);
      const answers = [...incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3), q.correctAnswer]
        .sort(() => 0.5 - Math.random());
      return { ...q, answers };
    });
    setQuestions(preparedQuestions);
  }, []);

  if (!isAuthenticated) {
    // Mostrar la pantalla de inicio de sesión si el usuario no está autenticado
    return <LoginScreen setIsAuthenticated={setIsAuthenticated} />;
  }

  return (
    <>
      {screen === 'home' && <HomeScreen setScreen={setScreen} />}
      {screen === 'study' && <StudyMaterial setScreen={setScreen} />}
      {screen === 'quiz' && <Quiz questions={questions} setScreen={setScreen} />}
    </>
  );
}

export default App;
