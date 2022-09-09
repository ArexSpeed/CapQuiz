import { Category, Quiz } from '../interfaces/quiz.interface';

export const categories: Category[] = [
  {
    id: '1',
    name: 'React',
  },
  {
    id: '2',
    name: 'Angular',
  },
  {
    id: '3',
    name: 'Vue',
  },
  {
    id: '4',
    name: 'Java',
  },
  {
    id: '5',
    name: 'PHP',
  },
];

export const quizData: Quiz[] = [
  {
    id: '1',
    category: 'React',
    questions: [
      {
        id: '11',
        question: 'Which company is creator of React?',
        answers: [
          {
            id: '111',
            content: 'Facebook',
            correct: true,
          },
          {
            id: '112',
            content: 'Google',
            correct: false,
          },
          {
            id: '113',
            content: 'Microsoft',
            correct: false,
          },
          {
            id: '114',
            content: 'Amazon',
            correct: false,
          },
        ],
      },
      {
        id: '12',
        question: 'Which code format is using by React?',
        answers: [
          {
            id: '121',
            content: 'RFX',
            correct: false,
          },
          {
            id: '122',
            content: 'JSX',
            correct: true,
          },
          {
            id: '123',
            content: 'CPP',
            correct: false,
          },
          {
            id: '124',
            content: 'XD',
            correct: false,
          },
        ],
      },
      {
        id: '13',
        question: 'Which hook is not exist in Ract?',
        answers: [
          {
            id: '131',
            content: 'useStatus',
            correct: true,
          },
          {
            id: '132',
            content: 'useState',
            correct: false,
          },
          {
            id: '133',
            content: 'useEffect',
            correct: false,
          },
          {
            id: '134',
            content: 'useContext',
            correct: false,
          },
        ],
      },
      {
        id: '14',
        question: 'What can you buils in React?',
        answers: [
          {
            id: '141',
            content: 'Desctop programs',
            correct: false,
          },
          {
            id: '142',
            content: 'Montage a movie',
            correct: false,
          },
          {
            id: '143',
            content: 'User interfaces',
            correct: true,
          },
          {
            id: '144',
            content: 'Write a server',
            correct: false,
          },
        ],
      },
      {
        id: '15',
        question: 'Which event listener is not using as function?',
        answers: [
          {
            id: '151',
            content: 'onClick',
            correct: false,
          },
          {
            id: '152',
            content: 'onSubmit',
            correct: false,
          },
          {
            id: '153',
            content: 'onMouseEnter',
            correct: false,
          },
          {
            id: '154',
            content: 'onHover',
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    category: 'Angular',
    questions: [
      {
        id: '21',
        question: 'What is Angular?',
        answers: [
          {
            id: '211',
            content: 'Angular is a development platform, built on TypeScript',
            correct: true,
          },
          {
            id: '212',
            content: 'It is a database service',
            correct: false,
          },
          {
            id: '213',
            content: 'It is an extension for React',
            correct: false,
          },
          {
            id: '214',
            content: 'It is a desktop programming language ',
            correct: false,
          },
        ],
      },
      {
        id: '22',
        question:
          'What are some of the advantages of Angular over other frameworks?',
        answers: [
          {
            id: '221',
            content: 'It is free to use',
            correct: false,
          },
          {
            id: '222',
            content: "Angular doesn't have any advantages",
            correct: false,
          },
          {
            id: '223',
            content:
              'Features that are provided out of the box, declarative UI, long-term Google support',
            correct: true,
          },
          {
            id: '224',
            content: 'Long-term Meta (Facebook) support',
            correct: false,
          },
        ],
      },
      {
        id: '23',
        question: 'Explain Components in Angular.',
        answers: [
          {
            id: '231',
            content:
              'Components are the basic building blocks, which control a part of the UI for any application. A component is defined using the @Component decorator. It has three three parts: template, stylesheet and class',
            correct: true,
          },
          {
            id: '232',
            content: 'In Angular components are the same as in React',
            correct: false,
          },
          {
            id: '233',
            content: 'It is a place where we can group modules',
            correct: false,
          },
          {
            id: '234',
            content:
              'Components are objects which get instantiated only once during the lifetime of an application',
            correct: false,
          },
        ],
      },
      {
        id: '24',
        question: 'What are lifecycle hooks in Angular?',
        answers: [
          {
            id: '241',
            content:
              'Hooks in Angular are objects to change the state of a component',
            correct: false,
          },
          {
            id: '242',
            content:
              "Every component in Angular has a lifecycle, different phases it goes through from the time of creation to the time it's destroyed. Angular provides hooks to tap into these phases and trigger changes at specific phases in a lifecycle",
            correct: true,
          },
          {
            id: '243',
            content:
              'Hooks in Angular are special components to render a page content',
            correct: false,
          },
          {
            id: '244',
            content: 'It is another way to name a simple function',
            correct: false,
          },
        ],
      },
      {
        id: '25',
        question: 'Can an angular application to render on the server-side?',
        answers: [
          {
            id: '251',
            content: 'No, Angular uses client-side rendering only',
            correct: false,
          },
          {
            id: '252',
            content:
              'Angular can not use both client-side or server-side rendering',
            correct: false,
          },
          {
            id: '253',
            content: 'Angular by default, uses client-side rendering only',
            correct: false,
          },
          {
            id: '254',
            content:
              'Yes, angular provides a technology called Angular Universal, which can be used to render applications on the server-side',
            correct: true,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    category: 'Vue',
    questions: [
      {
        id: '31',
        question: 'Who is creator of Vue.js?',
        answers: [
          {
            id: '311',
            content: 'Mark Zuckerberg',
            correct: false,
          },
          {
            id: '312',
            content: 'Evan You',
            correct: true,
          },
          {
            id: '313',
            content: 'Larry Viu',
            correct: false,
          },
          {
            id: '314',
            content: 'Brandon Eich',
            correct: false,
          },
        ],
      },
      {
        id: '32',
        question: 'How to use if statement in vue template?',
        answers: [
          {
            id: '321',
            content: 'v-if',
            correct: false,
          },
          {
            id: '322',
            content: ':if',
            correct: false,
          },
          {
            id: '323',
            content: 'Vif',
            correct: true,
          },
          {
            id: '324',
            content: '{if}',
            correct: false,
          },
        ],
      },
      {
        id: '33',
        question: 'What is Vuex.',
        answers: [
          {
            id: '331',
            content: 'Extension file',
            correct: false,
          },
          {
            id: '332',
            content: 'Hook',
            correct: false,
          },
          {
            id: '333',
            content: 'State ,amagement pattern',
            correct: true,
          },
          {
            id: '334',
            content: 'Component object',
            correct: false,
          },
        ],
      },
      {
        id: '34',
        question: 'Which of the directives below provide a two-way binding?',
        answers: [
          {
            id: '341',
            content: 'v-inline',
            correct: false,
          },
          {
            id: '342',
            content: 'v-model',
            correct: true,
          },
          {
            id: '343',
            content: 'v-on',
            correct: false,
          },
          {
            id: '344',
            content: 'v-outline',
            correct: false,
          },
        ],
      },
      {
        id: '35',
        question: 'What is the difference between v-html and v-text?',
        answers: [
          {
            id: '351',
            content: 'v-text sets the textContent of the node',
            correct: false,
          },
          {
            id: '352',
            content: 'v-html sets the innerHTML of the element',
            correct: false,
          },
          {
            id: '353',
            content: 'Both of the statements above are true.',
            correct: true,
          },
          {
            id: '354',
            content: 'Both of the statements are false.',
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: '4',
    category: 'Java',
    questions: [
      {
        id: '131',
        question: 'How do you insert COMMENTS in Java code?',
        answers: [
          {
            id: '1311',
            content: '/* This is a comment  ',
            correct: false,
          },
          {
            id: '1312',
            content: '# This is a comment',
            correct: false,
          },
          {
            id: '1313',
            content: '// This is a comment',
            correct: true,
          },
          {
            id: '1314',
            content: '/! This is a comment',
            correct: false,
          },
        ],
      },
      {
        id: '132',
        question: 'How do you create a variable with the numeric value 5?',
        answers: [
          {
            id: '1321',
            content: 'x = 5;',
            correct: false,
          },
          {
            id: '1322',
            content: 'int x = 5; ',
            correct: true,
          },
          {
            id: '1323',
            content: 'float x = 5;',
            correct: false,
          },
          {
            id: '1324',
            content: 'num x = 5',
            correct: false,
          },
        ],
      },
      {
        id: '133',
        question: 'Which method can be used to find the length of a string?',
        answers: [
          {
            id: '1331',
            content: 'length()',
            correct: true,
          },
          {
            id: '1332',
            content: 'getSize()',
            correct: false,
          },
          {
            id: '1333',
            content: 'getLength()',
            correct: false,
          },
          {
            id: '1334',
            content: 'len()',
            correct: false,
          },
        ],
      },
      {
        id: '134',
        question: 'Which operator can be used to compare two values?',
        answers: [
          {
            id: '1341',
            content: '=',
            correct: false,
          },
          {
            id: '1342',
            content: '==',
            correct: true,
          },
          {
            id: '1343',
            content: '===',
            correct: false,
          },
          {
            id: '1344',
            content: '<=>',
            correct: false,
          },
        ],
      },
      {
        id: '135',
        question: 'How do you call a method in Java?',
        answers: [
          {
            id: '1351',
            content: 'methodName();',
            correct: true,
          },
          {
            id: '1352',
            content: 'methodName[];',
            correct: false,
          },
          {
            id: '1353',
            content: 'methodName;',
            correct: false,
          },
          {
            id: '1354',
            content: '(methodName);',
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: '5',
    category: 'PHP',
    questions: [
      {
        id: '111',
        question: 'What does PHP stand for?',
        answers: [
          {
            id: '1111',
            content: 'PHP: Hypertext Preprocessor',
            correct: true,
          },
          {
            id: '1112',
            content: 'Personal Hypertext Processor',
            correct: false,
          },
          {
            id: '1113',
            content: 'Private Home Page',
            correct: false,
          },
          {
            id: '1114',
            content: 'Public Hypertext Page',
            correct: false,
          },
        ],
      },
      {
        id: '112',
        question: 'PHP server scripts are surrounded by delimiters, which?',
        answers: [
          {
            id: '1121',
            content: '<&>...</&> ',
            correct: false,
          },
          {
            id: '1122',
            content: '<?php...?>  ',
            correct: true,
          },
          {
            id: '1123',
            content: '<script>...</script>',
            correct: false,
          },
          {
            id: '1124',
            content: '<?php>...</?>',
            correct: false,
          },
        ],
      },
      {
        id: '113',
        question: "How do you write 'Hello World' in PHP",
        answers: [
          {
            id: '1131',
            content: "echo 'Hello World';",
            correct: true,
          },
          {
            id: '1132',
            content: "'Hello World';",
            correct: false,
          },
          {
            id: '1133',
            content: "Document.Write('Hello World');",
            correct: false,
          },
          {
            id: '1134',
            content: 'print(Hello World)',
            correct: false,
          },
        ],
      },
      {
        id: '114',
        question: 'All variables in PHP start with which symbol?',
        answers: [
          {
            id: '1141',
            content: 'var',
            correct: false,
          },
          {
            id: '1142',
            content: '!',
            correct: false,
          },
          {
            id: '1143',
            content: '$',
            correct: true,
          },
          {
            id: '1144',
            content: 'nothing',
            correct: false,
          },
        ],
      },
      {
        id: '115',
        question:
          'Which superglobal variable holds information about headers, paths, and script locations?',
        answers: [
          {
            id: '1151',
            content: '$_GET',
            correct: false,
          },
          {
            id: '1152',
            content: '$GLOBALS',
            correct: false,
          },
          {
            id: '1153',
            content: '$_SESSION',
            correct: false,
          },
          {
            id: '1154',
            content: '$_SERVER',
            correct: true,
          },
        ],
      },
    ],
  },
];
