const questions = [
    // Caso 1
    {
        id: 1,
        question: '¿A qué etiología corresponde el caso analizado?',
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
        question: 'Según la valoración realizada en el caso presentado, seleccione el tipo de úlcera venosa al que corresponde',
        options: [
            'Infectada',
            'Con colonización crítica',
            'Con colonización baja',
        ],
        answers: ['Con colonización baja'],
    },
    {
        id: 3,
        question: '¿Qué apósito primario utilizará en este caso?',
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
        question: '¿Qué apósito secundario utilizará en este caso?',
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
        question: '¿A qué etiología corresponde el caso analizado?',
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
        question: 'Según la valoración realizada en el caso presentado, seleccione el tipo de pie diabético al que corresponde',
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
        question: '¿Qué apósito primario utilizará en este caso?',
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
        question: '¿Qué apósito secundario utilizará en este caso?',
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
        question: '¿A qué etiología corresponde el caso analizado?',
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
        question: 'Según la valoración realizada en el caso presentado, seleccione el tipo de lesión por presión al que corresponde',
        options: [
            'Tipo 2',
            'Tipos 3 y 4 sin infección',
            'Tipos 3 y 4 infectada',
        ],
        answers: ['Tipos 3 y 4 infectada'],
    },
    {
        id: 13,
        question: '¿Qué apósito primario utilizará en este caso?',
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
        question: '¿Qué apósito secundario utilizará en este caso?',
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
