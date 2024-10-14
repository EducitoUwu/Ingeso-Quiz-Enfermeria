import descriptions from './descriptions';
import tables from './tables';
import questions from './questions';
import caso1 from '../assets/Caso-1.png';
import caso2 from '../assets/Caso-2.png';
import caso3 from '../assets/Caso-3.png';

const getQuestionsForCase = (caseId) => {
  const questionIdsByCase = {
    1: [1, 2, 3, 4, 5], //Caso 1
    2: [6, 7, 8, 9, 10], //Caso 2
    3: [11, 12, 13, 14, 15], //Caso 3
  };
  return questions.filter((q) => questionIdsByCase[caseId].includes(q.id));
};

const cases = [
  {
    id: 1,
    image: caso1,
    description: descriptions.case1,
    table: tables.find((table) => table.name === 'Ulcera venosa'),
    correctAspects: {
      'Aspecto': 3,                         // Amarillo pálido
      'Mayor extensión': 3,                 // > 5-10 cm
      'Profundidad': 2,                     // 0.1-0.9 cm
      'Exudado cantidad': 3,                // Moderado
      'Exudado calidad': 2,                 // Seroso
      'Tejido esfacelado o necrótico': 3,   // 25%-75%
      'Tejido granulatorio': 3,             // < 75%-25%
      'Edema': 3,                           // ++
      'Dolor': 2,                           // 2-3
      'Piel circundante': 4,                // Macerada
    },
    correctEvaluation: 'Tipo 4',
    questions: getQuestionsForCase(1),
  },
  {
    id: 2,
    image: caso2,
    description: descriptions.case2,
    table: tables.find((table) => table.name === 'Ulcera de pié diabético'),
    correctAspects: {
      'Aspecto': 3,                         // Amarillo pálido
      'Mayor extensión': 5,                 // > 10 cm
      'Profundidad': 5,                     // > 3 cm
      'Exudado cantidad': 3,                // Moderado
      'Exudado calidad': 3,                 // Turbio hemático
      'Tejido esfacelado o necrótico': 4,   // > 50%-75%
      'Tejido granulatorio': 3,             // < 75%-50%
      'Edema': 2,                           // +
      'Dolor': 1,                           // 0-1
      'Piel circundante': 4,                // Macerada
    },
    correctEvaluation: 'Grado 3',
    questions: getQuestionsForCase(2),
  },
  {
    id: 3,
    image: caso3,
    description: descriptions.case3,
    table: tables.find((table) => table.name === 'Heridas y Úlceras'),
    correctAspects: {
      'Aspecto': 3,                         // Amarillo pálido
      'Mayor extensión': 3,                 // > 3-6 cm
      'Profundidad': 2,                     // < 1 cm
      'Exudado cantidad': 3,                // Moderado
      'Exudado calidad': 3,                 // Turbio o Hemático
      'Tejido esfacelado o necrótico': 3,   // > 25%-50%
      'Tejido granulatorio': 3,             // < 75%-50%
      'Edema': 2,                           // +
      'Dolor': 1,                           // 0-1
      'Piel circundante': 3,                // Macerada
    },
    correctEvaluation: 'Tipo 3',
    questions: getQuestionsForCase(3),
  },
];

export default cases;
