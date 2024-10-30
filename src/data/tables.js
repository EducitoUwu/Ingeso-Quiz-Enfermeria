const tables = [
    {
      name: 'Úlcera venosa',
      aspects: [
        {
          name: 'Aspecto',
          options: [
            { label: 'Eritematoso', score: 1, definition: 'Aspecto rosado pálido, frágil, sin perdido de la integridad cutánea' },
            { label: 'Enrojecido', score: 2, definition: 'Tejido de color rojo brillante con pérdida de la epidermis' },
            { label: 'Amarillo pálido', score: 3, definition: 'Tejido de color blanco o amarillo pálido, fácil de recortar, húmedo' },
            { label: 'Necrótico', score: 4, definition: 'Tejido muerto de color gris opaco o negro. La consistencia puede abarcar desde blando a seco y duro. A veces cuesta recortarlo' },
          ],
        },
        {
          name: 'Mayor extensión',
          options: [
            { label: '0-1 cm', score: 1 },
            { label: '> 1-5 cm', score: 2 },
            { label: '> 5-10 cm', score: 3 },
            { label: '> 10 cm', score: 4 },
          ],
        },
        {
          name: 'Profundidad',
          options: [
            { label: '0', score: 1 },
            { label: '0.1-0.9 cm', score: 2 },
            { label: '1-1.5 cm', score: 3 },
            { label: '> 1.5 cm', score: 4 },
          ],
        },
        {
          name: 'Exudado cantidad',
          options: [
            { label: 'Ausente', score: 1, definition: 'El apósito primario está seco al retirarlo' },
            { label: 'Escaso', score: 2, definition: 'El opósito primario está moderadamente humedecido' },
            { label: 'Moderado', score: 3, definition: 'El opósito primario está 100% humedecido y el secundario manchado' },
            { label: 'Abundante', score: 4, definition: 'El apósito primario y el secundario están totalmente mojados' },
          ],
        },
        {
          name: 'Exudado calidad',
          options: [
            { label: 'Sin exudado', score: 1, definition: 'No existe presencia de líquido. Formación de la dermis' },
            { label: 'Seroso', score: 2, definition: 'Líquido claro, transparente o de color amarillo claro. Presente con 100% de tejido de granulación' },
            { label: 'Hematócito o Turbio', score: 3, definition: ': Liquido más espeso que el anterior (seroso), de color blanco o rojo. Presente cuando no hay infección, pero hay esfacelo y/o placa necrótica' },
            { label: 'Purulento', score: 4, definition: 'Liquido espeso cremoso de color amarillo-verdoso. Habitualmente cuando hay infección' },
          ],
        },
        {
          name: 'Tejido esfacelado o necrótico',
          options: [
            { label: 'Ausente', score: 1 },
            { label: '< 25%', score: 2 },
            { label: '25%-75%', score: 3 },
            { label: '> 75%', score: 4 },
          ],
        },
        {
          name: 'Tejido granulatorio',
          options: [
            { label: '100%', score: 1 },
            { label: '99%-75%', score: 2 },
            { label: '< 75%-25%', score: 3 },
            { label: '< 25%', score: 4 },
          ],
        },
        {
          name: 'Edema',
          options: [
            { label: 'Ausente', score: 1, definition: 'No hay liquido subyacente alrededor de la úlcera' },
            { label: '+', score: 2, definition: 'Edema de hasta 3 cm alrededor de la úlcera' },
            { label: '++', score: 3, definition: 'Abarca el 50% de la zona afectada' },
            { label: '+++', score: 4, definition: 'Se presenta en toda la zona afectada' },
          ],
        },
        {
          name: 'Dolor',
          options: [
            { label: '0-1', score: 1 },
            { label: '2-3', score: 2 },
            { label: '4-6', score: 3 },
            { label: '7-10', score: 4 },
          ],
        },
        {
          name: 'Piel circundante',
          options: [
            { label: 'Sana', score: 1, definition: 'Piel indemne' },
            { label: 'Descamada pigmentada', score: 2, definition: 'Es la exfoliación de las células queratinizadas de tamaño variable, color plateado, blanco o tostado que indica sequedad de la piel y propensión a grietas y fisuras' },
            { label: 'Eritematosa', score: 3, definition: 'La piel se observa enrojecida, irritada. Si se acompaña de calor local puede ser signo de infección.' },
            { label: 'Macerada', score: 4, definition: 'Se produce al estar en contacto con el medio húmedo. La piel se observa blanca, húmeda, frágil, con epidermis que se elimina espontáneamente' },
          ],
        },
      ],
      evaluation: [
        { type: 'Tipo 1', range: [10, 15]},
        { type: 'Tipo 2', range: [16, 21]},
        { type: 'Tipo 3', range: [22, 27]},
        { type: 'Tipo 4', range: [28, 40]},
      ],
    },
    {
        name: 'Úlcera de pié diabético',
        aspects: [
          {
            name: 'Aspecto',
            options: [
              { label: 'Eritematoso', score: 1, definition: 'Aspecto rosado pálido, frágil, sin perdido de la integridad cutánea' },
              { label: 'Enrojecido', score: 2, definition: 'Tejido de color rojo brillante con pérdida de la epidermis' },
              { label: 'Amarillo pálido', score: 3, definition: 'Tejido de color blanco o amarillo pálido, fácil de recortar, húmedo' },
              { label: 'Necrótico grisáceo', score: 4, definition: 'Presencia de tejido muerto, de color gris opaco, de consistencia semi-blanda, con humedad escasa. A veces cuesta recortarlo' },
              { label: 'Necrótico negruzco', score: 5, definition: 'Tejido muerto, de color negro opaco, duro, seco, muy difícil de recortar'},
            ],
          },
          {
            name: 'Mayor extensión',
            options: [
              { label: '0-1 cm', score: 1 },
              { label: '> 1-3 cm', score: 2 },
              { label: '> 3-6 cm', score: 3 },
              { label: '> 6-10 cm', score: 4 },
              { label: '> 10 cm', score: 5 },
            ],
          },
          {
            name: 'Profundidad',
            options: [
              { label: '0', score: 1 },
              { label: '> 0-1 cm', score: 2 },
              { label: '> 1-2 cm', score: 3 },
              { label: '> 2-3 cm', score: 4 },
              {label: '> 3 cm', score: 5},
            ],
          },
          {
            name: 'Exudado cantidad',
            options: [
              { label: 'Ausente', score: 1, definition: 'EI apósito primario está seco al retirarlo' },
              { label: 'Escaso', score: 2, definition: 'EI opósito primario está hasta 50% humedecido' },
              { label: 'Moderado', score: 3, definition: 'EI opósito primario está 100% humedecido' },
              { label: 'Abundante', score: 4, definition: 'EI opósito primario está totalmente humedecido, traspasando el exudado al apósito secundario en 50% a 75%' },
              { label: 'Muy abundante', score: 5, definition: 'Tanto el apósito primario como el secundario están totalmente empapados, llegando a la maceración de los bordes de la úlcera' },
            ],
          },
          {
            name: 'Exudado calidad',
            options: [
              { label: 'Sin exudado', score: 1, definition: 'No existe presencia de líquido' },
              { label: 'Seroso', score: 2, definition: 'Líquido claro, transparente o de color amarillo claro' },
              { label: 'Turbio hemático', score: 3, definition: 'Liquido más espeso que el anterior (seroso), de color blanco o rojo' },
              { label: 'Purulento', score: 4, definition: 'Liquido espeso cremoso de color amarillo verdoso' },
              { label: 'Purulento gangrenoso', score: 5, definition: 'Líquido espeso, cremoso, de color verde o café, con trozos de tejido necrótico.' },
            ],
          },
          {
            name: 'Tejido esfacelado o necrótico',
            options: [
              { label: 'Ausente', score: 1 },
              { label: '< 25%', score: 2 },
              { label: '25%-50%', score: 3 },
              { label: '> 50%-75%', score: 4 },
              { label: '> 75%', score: 5 },
            ],
          },
          {
            name: 'Tejido granulatorio',
            options: [
              { label: '100%', score: 1 },
              { label: '99%-75%', score: 2 },
              { label: '< 75%-50%', score: 3 },
              { label: '< 50%-25%', score: 4 },
              { label: '< 25%', score: 5 },
            ],
          },
          {
            name: 'Edema',
            options: [
              { label: 'Ausente', score: 1, definition: 'No hay liquido subyacente alrededor de la úlcera. Se mide a través de la presión dactilar' },
              { label: '+', score: 2, definition: 'Al presionar con la yema del dedo índice alrededor de la úlcera, la piel se hunde levemente' },
              { label: '++', score: 3, definition: 'El 50% de la extremidad inferior está edematosa' },
              { label: '+++', score: 4, definition: 'El 100% de la extremidad inferior esto edematosa' },
              { label: '++++', score: 5, definition: 'El 100% de la extremidad inferior esto edematosa' },
            ],
          },
          {
            name: 'Dolor',
            options: [
              { label: '0-1', score: 1 },
              { label: '2-3', score: 2 },
              { label: '4-6', score: 3 },
              { label: '7-8', score: 4 },
              { label: '9-10', score: 5 },
            ],
          },
          {
            name: 'Piel circundante',
            options: [
              { label: 'Sana', score: 1, definition: 'Piel indemne' },
              { label: 'Descamada', score: 2, definition: 'Es la exfoliación de las células queratinizadas de tamaño variable, color plateado, blanco o tostado que indica sequedad de la piel y propensión a grietas y fisuras' },
              { label: 'Eritematosa', score: 3, definition: 'La piel se observa enrojecida, irritada. Si se acompaña de calor local puede ser signo de infección' },
              { label: 'Macerada', score: 4, definition: 'Se produce al estar en contacto con el medio húmedo. La piel se observa blanca, húmeda, frágil, con epidermis que se elimina espontáneamente' },
              { label: 'Gangrena', score: 5, definition: 'Piel inflamada, con calor local, enrojecimiento y a veces de color oscuro (morado o café), frágil y dolorosa, que puede presentar crépitos a la palpación' },
            ],
          },
        ],
        evaluation: [
          { type: 'Grado 1', range: [10, 15]},
          { type: 'Grado 2', range: [16, 26]},
          { type: 'Grado 3', range: [27, 37]},
          { type: 'Grado 4', range: [38, 45]},
          { type: 'Grado 5', range: [46, 50]},
        ],
      },
      {
        name: 'Heridas y Úlceras',
        aspects: [
          {
            name: 'Aspecto',
            options: [
              { label: 'Eritematoso', score: 1, definition: 'Aspecto rosado pálido, frágil, sin perdido de la integridad cutánea' },
              { label: 'Enrojecido', score: 2, definition: 'Tejido de color rojo brillante con pérdida de la epidermis' },
              { label: 'Amarillo pálido', score: 3, definition: 'Tejido de color blanco o amarillo pálido, fácil de recortar, húmedo' },
              { label: 'Necrótico', score: 4, definition: 'Tejido muerto de color gris opaco o negro. La consistencia puede abarcar desde blando a seco y duro. A veces cuesta recortarlo' },
            ],
          },
          {
            name: 'Mayor extensión',
            options: [
              { label: '0-1 cm', score: 1 },
              { label: '> 1-3 cm', score: 2 },
              { label: '> 3-6 cm', score: 3 },
              { label: '> 6 cm', score: 4 },
            ],
          },
          {
            name: 'Profundidad',
            options: [
              { label: '0', score: 1 },
              { label: '< 1 cm', score: 2 },
              { label: '1-3 cm', score: 3 },
              { label: '> 3 cm', score: 4 },
            ],
          },
          {
            name: 'Exudado cantidad',
            options: [
              { label: 'Ausente', score: 1, definition: 'El apósito primario está seco al retirarlo' },
              { label: 'Escaso', score: 2, definition: 'El opósito primario está moderadamente humedecido' },
              { label: 'Moderado', score: 3, definition: 'El opósito primario está 100% humedecido y el secundario manchado' },
              { label: 'Abundante', score: 4, definition: 'El apósito primario y el secundario están totalmente mojados' },
            ],
          },
          {
            name: 'Exudado calidad',
            options: [
              { label: 'Sin exudado', score: 1, definition: 'No existe presencia de líquido. Formación de la dermis' },
              { label: 'Seroso', score: 2, definition: 'Líquido claro, transparente o de color amarillo claro. Presente con 100% de tejido de granulación' },
              { label: 'Hematócito o Turbio', score: 3, definition: ': Liquido más espeso que el anterior (seroso), de color blanco o rojo. Presente cuando no hay infección, pero hay esfacelo y/o placa necrótica' },
              { label: 'Purulento', score: 4, definition: 'Liquido espeso cremoso de color amarillo-verdoso. Habitualmente cuando hay infección' },
            ],
          },
          {
            name: 'Tejido esfacelado o necrótico',
            options: [
              { label: 'Ausente', score: 1 },
              { label: '> 0%-25%', score: 2 },
              { label: '> 25%-50%', score: 3 },
              { label: '> 50%', score: 4 },
            ],
          },
          {
            name: 'Tejido granulatorio',
            options: [
              { label: '100%', score: 1 },
              { label: '< 100%-75%', score: 2 },
              { label: '< 75%-50%', score: 3 },
              { label: '< 50%', score: 4 },
            ],
          },
          {
            name: 'Edema',
            options: [
              { label: 'Ausente', score: 1, definition: 'No hay liquido subyacente alrededor de la úlcera' },
              { label: '+', score: 2, definition: 'Edema de hasta 3 cm alrededor de la úlcera' },
              { label: '++', score: 3, definition: 'Abarca el 50% de la zona afectada' },
              { label: '+++', score: 4, definition: 'Se presenta en toda la zona afectada' },
            ],
          },
          {
            name: 'Dolor',
            options: [
              { label: '0-1', score: 1 },
              { label: '2-3', score: 2 },
              { label: '4-6', score: 3 },
              { label: '7-10', score: 4 },
            ],
          },
          {
            name: 'Piel circundante',
            options: [
              { label: 'Sana', score: 1, definition: 'Piel indemne' },
              { label: 'Descamada pigmentada', score: 2, definition: 'Es la exfoliación de las células queratinizadas de tamaño variable, color plateado, blanco o tostado que indica sequedad de la piel y propensión a grietas y fisuras' },
              { label: 'Eritematosa', score: 3, definition: 'La piel se observa enrojecida, irritada. Si se acompaña de calor local puede ser signo de infección.' },
              { label: 'Macerada', score: 4, definition: 'Se produce al estar en contacto con el medio húmedo. La piel se observa blanca, húmeda, frágil, con epidermis que se elimina espontáneamente' },
            ],
          },
        ],
        evaluation: [
          { type: 'Tipo 1', range: [10, 15]},
          { type: 'Tipo 2', range: [16, 21]},
          { type: 'Tipo 3', range: [22, 27]},
          { type: 'Tipo 4', range: [28, 40]},
        ],
      },
];

export default tables;
  