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
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffledQuestions.map(q => ({
      ...q,
      answers: q.allAnswers.sort(() => 0.5 - Math.random()).slice(0, 4)
    })));
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