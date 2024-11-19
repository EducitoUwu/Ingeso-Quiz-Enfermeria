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
        feedback: 'De acuerdo con los signos clínicos y la localización, esta lesión es característica de una úlcera venosa.'
    },
    {
        id: 2,
        question: 'Según la valoración realizada en el caso presentado, seleccione el tipo de úlcera venosa al que corresponde',
        options: [
            'Infectada',
            'Con colonización crítica',
            'Con colonización baja',
        ],
        answers: ['Con colonización baja',
                'Con colonización crítica',
                'Infectada',],
        feedback: 'Las especies microbianas transitorias logran crecer y multiplicarse, pero en cantidades más bajas que en la colonización crítica. Clínicamente la lesión presentará 100% de tejido de granulación y el exudado es seroso. El exudado frecuentemente es bajo, pero también se puede encontrar exudado moderado a abundante, en especial en pacientes con edema de la extremidad. Puede presentar piel macerada, pigmentada, descamada o sana, no presenta calor local y la piel eritematosa. Corresponde a la fase proliferativa de la cicatrización. '
    },
    {
        id: 3,
        question: '¿Qué apósito primario utilizará en este caso?',
        options: [
            'Hidrogel',
            'Inhib. de la metaloproteasa',
            'Colágeno',
            'Espuma hidrofílica',
            'Tull silicona',
            'Transparentes no adhesivos (poliéster, nylon)',
            'DACC',
            'PHMB',
            'RINGER+PHMB'
        ],
        answers: ['Espuma hidrofílica', 'RINGER+PHMB', 'PHMB', 'DACC'],
        feedback: 'La espuma hidrofílica es adecuada para manejar el exudado moderado presente en la úlcera venosa, pero al haber una colonización crítica se sugiere utilizar cualquier apósito  bacteriostático'
    },
    {
        id: 4,
        question: '¿Qué apósito secundario utilizará en este caso?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Ambos'], 
        feedback: 'En este caso, un apósito tradicional  especial es válida como secundario.'
    },
    {
        id: 5,
        question: '¿Cada cuánto tiempo programa la curación? (días)',
        options: ['1', '3-4', '7'],
        answers: ['3-4'],
        feedback: 'La frecuencia de cambio es cada 3 a 4 días ya que no se encuentra infectada y el tiempo máximo de duración de la espuma hidrofílica corresponde a 3 a 4 días, o SOS.'
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
        feedback: 'El caso muestra características típicas de un pie diabético, incluyendo sensibilidad disminuida y lesión plantar.'
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
        feedback: 'El contacto con el hueso y la infección sugieren un pie diabético de grado 3 con compromiso óseo.'
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
        feedback: 'Apósitos con plata son recomendados para el manejo de heridas con alta carga bacteriana y exudado.'
    },
    {
        id: 9,
        question: '¿Qué apósito secundario utilizará en este caso?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Ambos'],
        feedback: 'Para este tipo de úlcera, ambos tipos de apósitos secundarios pueden ser utilizados según la situación.'
    },
    {
        id: 10,
        question: '¿Cada cuánto tiempo programa la curación? (días)',
        options: ['1', '3-4', '7'],
        answers: ['1'],
        feedback: 'Dado el nivel de infección y exudado, es necesario realizar la curación diariamente para un control adecuado.'
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
        feedback: 'La lesión en la zona sacra debido a estasis prolongada es un claro indicativo de una lesión por presión.'
    },
    {
        id: 12,
        question: 'Según la valoración realizada en el caso presentado, seleccione el tipo de lesión por presión al que corresponde',
        options: [
            'Tipo 2',
            'Tipo 3 y 4 sin infección',
            'Tipo 3 y 4 infectada',
        ],
        answers: ['Tipo 3 y 4 infectada'],
        feedback: 'La infección y el exudado turbio sugieren una lesión por presión avanzada, clasificada en tipo 3 y 4.'
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
        feedback: 'Para este tipo de lesión con infección, gasas con plata o tull con plata son eficaces en el manejo bacteriano.'
    },
    {
        id: 14,
        question: '¿Qué apósito secundario utilizará en este caso?',
        options: ['Tradicional', 'Tradicional especial', 'Ambos'],
        answers: ['Ambos'],
        feedback: 'Ambos tipos de apósitos secundarios son adecuados para asegurar la protección y absorción del exudado.'
    },
    {
        id: 15,
        question: '¿Cada cuánto tiempo programa la curación? (días)',
        options: ['1', '3-4', '7'],
        answers: ['1'],
        feedback: 'Debido al exudado y la infección, se recomienda una curación diaria para mantener el control de la lesión.'
    },
];

export default questions;
