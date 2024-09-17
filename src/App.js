import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// Estilos
const AppContainer = styled.div`
  font-family: 'Comic Sans MS', cursive;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8e6ff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  color: #a64ca6;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Button = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #d580ff;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b366ff;
  }
`;

const QuestionContainer = styled.div`
  background-color: #f0d9ff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(102, 0, 153, 0.2);
`;

const QuestionImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const QuestionText = styled.h2`
  color: #993399;
  font-size: 1.5em;
  margin-bottom: 15px;
`;

const AnswerButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #d580ff;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #b366ff;
  }
`;

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ScoreText = styled.h2`
  color: #993399;
  font-size: 2em;
`;

const MaterialContainer = styled.div`
  background-color: #f0d9ff;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(102, 0, 153, 0.2);
`;

const MaterialImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const MaterialText = styled.p`
  color: #993399;
  font-size: 1.2em;
`;

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [screen, setScreen] = useState('home'); // Nuevo estado para cambiar entre pantallas

  useEffect(() => {
    const shuffledQuestions = allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
    setQuestions(shuffledQuestions.map(q => ({
      ...q,
      answers: q.allAnswers.sort(() => 0.5 - Math.random()).slice(0, 4)
    })));
  }, []);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === questions[currentQuestionIndex].correctAnswer;
    setIsCorrect(correct);
    if (correct) {
      setScore(score + 1);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setShowResult(true);
      }
      setSelectedAnswer(null);
      setIsCorrect(null);
    }, 1500);
  };

  const restartQuiz = () => {
    setQuestions(allQuestions.sort(() => 0.5 - Math.random()).slice(0, 10).map(q => ({
      ...q,
      answers: q.allAnswers.sort(() => 0.5 - Math.random()).slice(0, 4)
    })));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setScreen('home'); // Volver a la pantalla de inicio
  };

  if (screen === 'home') {
    return (
      <AppContainer>
        <Title>Bienvenido al Quiz de Enfermería</Title>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setScreen('quiz')}
        >
          Comenzar Quiz
        </Button>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setScreen('study')}
        >
          Material de Estudio
        </Button>
      </AppContainer>
    );
  }

  if (screen === 'study') {
    return (
      <AppContainer>
        <Title>Material de Estudio</Title>
        <MaterialContainer>
          <MaterialImage src="https://example.com/material1.jpg" alt="Material de estudio 1" />
          <MaterialText>Descripción del material de estudio 1...</MaterialText>
          {/* Añade más imágenes y texto de material de estudio según necesites */}
        </MaterialContainer>
        <Button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setScreen('home')}
        >
          Volver al Inicio
        </Button>
      </AppContainer>
    );
  }

  if (questions.length === 0) return <AppContainer><Title>Cargando...</Title></AppContainer>;

  if (showResult) {
    return (
      <AppContainer>
        <Title>¡Quiz Completado!</Title>
        <ResultContainer>
          <ScoreText>Tu puntuación: {score} / 10</ScoreText>
          <Button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={restartQuiz}
          >
            Reiniciar Quiz
          </Button>
        </ResultContainer>
      </AppContainer>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <AppContainer>
      <Title>Quiz de Enfermería</Title>
      <QuestionContainer>
        <QuestionImage src={currentQuestion.image} alt="Pregunta de enfermería" />
        <QuestionText>{currentQuestion.question}</QuestionText>
        {currentQuestion.answers.map((answer, index) => (
          <AnswerButton
            key={index}
            onClick={() => handleAnswer(answer)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={selectedAnswer !== null}
            style={{
              backgroundColor: selectedAnswer === answer
                ? (isCorrect ? '#8e44ad' : '#c0392b')
                : '#d580ff'
            }}
          >
            {answer}
            {selectedAnswer === answer && (
              isCorrect ? <FaCheck style={{ marginLeft: '10px' }} /> : <FaTimes style={{ marginLeft: '10px' }} />
            )}
          </AnswerButton>
        ))}
      </QuestionContainer>
    </AppContainer>
  );
}

// Datos de ejemplo de preguntas y respuestas
const allQuestions = [
  {
    id: 1,
    image: "https://vhqxvfxmjmxbdvxqbxvx.supabase.co/storage/v1/object/public/images/nurse1.jpg",
    question: "¿Qué tipo de vendaje se muestra en la imagen?",
    correctAnswer: "Vendaje en espiral",
    allAnswers: ["Vendaje en espiral", "Vendaje en ocho", "Vendaje circular", "Vendaje en espiga", "Vendaje recurrente", "Vendaje en corbata", "Vendaje en guante"]
  },
  {
    id: 2,
    image: "https://vhqxvfxmjmxbdvxqbxvx.supabase.co/storage/v1/object/public/images/nurse2.jpg",
    question: "¿Qué instrumento médico se muestra en la imagen?",
    correctAnswer: "Estetoscopio",
    allAnswers: ["Estetoscopio", "Tensiómetro", "Otoscopio", "Laringoscopio", "Oftalmoscopio", "Fonendoscopio", "Pulsioxímetro"]
  },
  // ... Añade más preguntas según sea necesario
];
