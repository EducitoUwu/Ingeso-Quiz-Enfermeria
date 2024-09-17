// src/styles/AppStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AppContainer = styled.div`
  font-family: 'Comic Sans MS', cursive;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8e6ff;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #a64ca6;
  font-size: 2.5em;
  margin-bottom: 20px;
`;

export const Button = styled(motion.button)`
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

export const QuestionContainer = styled.div`
  background-color: #f0d9ff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(102, 0, 153, 0.2);
`;

export const QuestionImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const QuestionText = styled.h2`
  color: #993399;
  font-size: 1.5em;
  margin-bottom: 15px;
`;

export const AnswerButton = styled(motion.button)`
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

export const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const ScoreText = styled.h2`
  color: #993399;
  font-size: 2em;
`;

export const MaterialContainer = styled.div`
  background-color: #f0d9ff;
  border-radius: 15px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(102, 0, 153, 0.2);
`;

export const MaterialImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export const MaterialText = styled.p`
  color: #993399;
  font-size: 1.2em;
`;
