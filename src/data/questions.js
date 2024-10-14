const questions = [
    // Caso 1
    {
        id: 1,
        question: '¿Etiología?',
        options: [
            'Pie diabético',
            'Lesión por presión',
            'Úlcera arterial',
            'Úlcera venosa',
            'Dermatitis asociada a incontinencia',
        ],
        answers: ['Úlcera venosa'],
    },
    {
        id: 2,
        question: '¿A qué pertenece la herida? (Úlcera venosa)',
        options: [
            'Infectada',
            'Con colonización crítica',
            'Con colonización baja',
        ],
        answers: ['Con colonización baja'],
    },
    {
        id: 3,
        question: '¿Apósito primario?',
        options: [
            'Hidrogel',
            'Inhib. de la metaloproteasa',
            'Colágeno',
            'Espuma hidrofílica',
            'Tul silicona',
            'Transparentes no adhesivos (poliéster, nylon)',
        ],
        answers: ['Espuma hidrofílica'],
    },
    {
        id: 4,
        question: '¿Apósito secundario?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Tradicional especial'],
    },
    {
        id: 5,
        question: '¿Frecuencia de cambio? (días)',
        options: ['1', '3-4', '7'],
        answers: ['3-4'],
    },
    // Caso 2
    {
        id: 6,
        question: '¿Etiología?',
        options: [
            'Pie diabético',
            'Lesión por presión',
            'Úlcera arterial',
            'Úlcera venosa',
            'Dermatitis asociada a incontinencia',
        ],
        answers: ['Pie diabético'],
    },
    {
        id: 7,
        question: '¿A qué pertenece la herida? (Pie diabético)',
        options: [
            'Grado 1, úlcera superficial sin infección',
            'Grado 2, sin infección compromiso de tendón',
            'Grado 2, infectado compromiso de tendón',
            'Grado 3, no infectado hueso expuesto sin compromiso',
            'Grado 3, infectado compromiso de hueso',
            'Grado 4, gangrena localizada',
            'Grado 5, gangrena todo el pie',
        ],
        answers: ['Grado 3, infectado compromiso de hueso'],
    },
    {
        id: 8,
        question: '¿Apósito primario?',
        options: [
            'Algínato con plata',
            'Carboximetilcelulosa con plata',
            'Gasa con plata',
            'Carbón activado con plata',
            'Espuma hidrofílica con plata',
            'Plata nanocristalina',
        ],
        answers: [
            'Algínato con plata',
            'Carboximetilcelulosa con plata',
            'Carbón activado con plata',
            'Espuma hidrofílica con plata',
            'Plata nanocristalina',
        ],
    },
    {
        id: 9,
        question: '¿Apósito secundario?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Ambos'],
    },
    {
        id: 10,
        question: '¿Frecuencia de cambio? (días)',
        options: ['1', '3-4', '7'],
        answers: ['1'],
    },
    // Caso 3
    {
        id: 11,
        question: '¿Etiología?',
        options: [
            'Pie diabético',
            'Lesión por presión',
            'Úlcera arterial',
            'Úlcera venosa',
            'Dermatitis asociada a incontinencia',
        ],
        answers: ['Lesión por presión'],
    },
    {
        id: 12,
        question: '¿A qué pertenece la herida? (Lesión por presión)',
        options: [
            'Tipo 2',
            'Tipos 3 y 4 sin infección',
            'Tipos 3 y 4 infectada',
        ],
        answers: ['Tipos 3 y 4 infectada'],
    },
    {
        id: 13,
        question: '¿Apósito primario?',
        options: [
            'Espuma con plata',
            'Gasa con plata',
            'Carboximetilcelulosa con plata',
            'Algínato con plata',
            'Tull con plata',
            'Carbón activado con plata',
            'Plata nanocristalina',
        ],
        answers: ['Gasa con plata', 'Tull con plata'],
    },
    {
        id: 14,
        question: '¿Apósito secundario?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Ambos'],
    },
    {
        id: 15,
        question: '¿Frecuencia de cambio? (días)',
        options: ['1', '3-4', '7'],
        answers: ['1'],
    },
];

export default questions;
