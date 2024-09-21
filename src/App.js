// src/App.js
import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import StudyMaterial from './components/StudyMaterial';
import Quiz from './components/Quiz';
import { allQuestions } from './data/questions';

function App() {
  const [questions, setQuestions] = useState([]);
  const [screen, setScreen] = useState('home');

  useEffect(() => {
    // Mezcla todas las preguntas y selecciona 10
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    
    // Para cada pregunta, asegúrate de que la respuesta correcta esté en las 4 opciones
    setQuestions(shuffledQuestions.map(q => {
      const incorrectAnswers = q.allAnswers.filter(ans => ans !== q.correctAnswer);
      const randomIncorrectAnswers = incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3);
      
      // Aseguramos que la respuesta correcta esté entre las opciones
      const answers = [...randomIncorrectAnswers, q.correctAnswer].sort(() => 0.5 - Math.random());
      
      return {
        ...q,
        answers
      };
    }));
  }, []);
  

  return (
    <>
      {screen === 'home' && <HomeScreen setScreen={setScreen} />}
      {screen === 'study' && <StudyMaterial setScreen={setScreen} />}
      {screen === 'quiz' && <Quiz questions={questions} setScreen={setScreen} />}
    </>
  );
}

export default App;