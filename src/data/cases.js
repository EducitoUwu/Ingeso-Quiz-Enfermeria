import tables from './tables';
import caso1 from '../assets/Caso-1.png';
import caso2 from '../assets/Caso-2.png';
import caso3 from '../assets/Caso-3.png';

const cases = [
  {
    id: 1,
    image: caso1,
    description: `
      Usuaria de 56 años con antecedente de TVP hace 4 años, cursa con lesión en tercio inferior 
      de pierna derecha, específicamente en maleolo interno. Presenta pulsos en ambas EEII, no se observan 
      signos de insuficiencia arterial periférica.
      Al examen físico destaca edema ++ en EID, dolor eva 3, el apósito primario tiene 100% de exudado, 
      seroso, sin mal olor.
    `,
    table: tables.find((table) => table.name  === 'Ulcera venosa'),
    correctEvaluation: 'Tipo 4',
  },
  {
    id: 2,
    image: caso2,
    description: `
      Usuario de 66 años con antecedente de DMII IR hace 14 años, cursa con lesión plantar en pie izquierdo 
      producto de usar guatero para dormir. Presenta pulsos en ambas EEII, no se observan signos de insuficiencia 
      arterial periférica. Sensibilidad disminuida.
      Al examen físico destaca edema + en EII, dolor eva 1, el apósito primario tiene 100% de exudado, 
      turbio, con mal olor. Al valorar profundidad, se percibe que en la zona plantar se toca el hueso.
    `,
    table: tables.find((table) => table.name  === 'Ulcera de pié diabético'),
    correctEvaluation: 'Grado 3',
  },
  {
    id: 3,
    image: caso3,
    description: `
      Usuario de 78 años con antecedente de hospitalización por ACV isquémico secuelado, cursa con lesión 
      en zona sacra producto de la estasis prolongada.
      Al examen físico destaca edema + en zona sacra, dolor eva 5, el apósito primario tiene 100% de exudado, 
      turbio, con mal olor.
    `,
    table: tables.find((table) => table.name === 'Heridas y Úlceras'),
    correctEvaluation: 'Tipo 3',
  },
];

export default cases;
