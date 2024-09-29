import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 15px;
  background-color: #005cbb; /* Azul Pantone más intenso */
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.2em;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004080; /* Azul más oscuro al hacer hover */
  }
`;

export const AnswerButton = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #005cbb; /* Azul Pantone más intenso */
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004080; /* Azul más oscuro al hacer hover */
  }
`;
