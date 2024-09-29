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
    const preparedQuestions = shuffledQuestions.map(q => {
      const incorrectAnswers = q.allAnswers.filter(ans => ans !== q.correctAnswer);
      const answers = [...incorrectAnswers.sort(() => 0.5 - Math.random()).slice(0, 3), q.correctAnswer]
        .sort(() => 0.5 - Math.random());
      return { ...q, answers };
    });
    setQuestions(preparedQuestions);
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
