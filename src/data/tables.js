const tables = [
    {
      name: 'Ulcera venosa',
      aspects: [
        {
          name: 'Aspecto',
          options: [
            { label: 'Eritematoso', score: 1 },
            { label: 'Enrojecido', score: 2 },
            { label: 'Amarillo pálido', score: 3 },
            { label: 'Necrótico', score: 4 },
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
            { label: 'Ausente', score: 1 },
            { label: 'Escaso', score: 2 },
            { label: 'Moderado', score: 3 },
            { label: 'Abundante', score: 4 },
          ],
        },
        {
          name: 'Exudado calidad',
          options: [
            { label: 'Sin exudado', score: 1 },
            { label: 'Seroso', score: 2 },
            { label: 'Hematócito o Turbio', score: 3 },
            { label: 'Purulento', score: 4 },
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
            { label: 'Ausente', score: 1 },
            { label: '+', score: 2 },
            { label: '++', score: 3 },
            { label: '+++', score: 4 },
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
            { label: 'Sana', score: 1 },
            { label: 'Descamada pigmentada', score: 2 },
            { label: 'Eritematosa', score: 3 },
            { label: 'Macerada', score: 4 },
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
        name: 'Ulcera de pié diabético',
        aspects: [
          {
            name: 'Aspecto',
            options: [
              { label: 'Eritematoso', score: 1 },
              { label: 'Enrojecido', score: 2 },
              { label: 'Amarillo pálido', score: 3 },
              { label: 'Necrótico grisáceo', score: 4 },
              {label: 'Necrótico negruzco', score: 5},
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
              { label: 'Ausente', score: 1 },
              { label: 'Escaso', score: 2 },
              { label: 'Moderado', score: 3 },
              { label: 'Abundante', score: 4 },
              { label: 'Muy abundante', score: 5 },
            ],
          },
          {
            name: 'Exudado calidad',
            options: [
              { label: 'Sin exudado', score: 1 },
              { label: 'Seroso', score: 2 },
              { label: 'Turbio hemático', score: 3 },
              { label: 'Purulento', score: 4 },
              { label: 'Purulento gangrenoso', score: 5 },
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
              { label: 'Ausente', score: 1 },
              { label: '+', score: 2 },
              { label: '++', score: 3 },
              { label: '+++', score: 4 },
              { label: '++++', score: 5 },
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
              { label: 'Sana', score: 1 },
              { label: 'Descamada', score: 2 },
              { label: 'Eritematosa', score: 3 },
              { label: 'Macerada', score: 4 },
              { label: 'Gangrena', score: 5 },
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
              { label: 'Eritematoso', score: 1 },
              { label: 'Enrojecido', score: 2 },
              { label: 'Amarillo pálido', score: 3 },
              { label: 'Necrótico', score: 4 },
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
              { label: 'Ausente', score: 1 },
              { label: 'Escaso', score: 2 },
              { label: 'Moderado', score: 3 },
              { label: 'Abundante', score: 4 },
            ],
          },
          {
            name: 'Exudado calidad',
            options: [
              { label: 'Sin exudado', score: 1 },
              { label: 'Seroso', score: 2 },
              { label: 'Turbio o Hemático', score: 3 },
              { label: 'Purulento', score: 4 },
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
              { label: 'Ausente', score: 1 },
              { label: '+', score: 2 },
              { label: '++', score: 3 },
              { label: '+++', score: 4 },
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
              { label: 'Sana', score: 1 },
              { label: 'Descamada', score: 2 },
              { label: 'Macerada', score: 3 },
              { label: 'Eritematosa', score: 4 },
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
  