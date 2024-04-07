const quiz = [
  {
    id: 1,
    category: "javascript",
    difficulty: "Easy",
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      {
        answer_a: "<scripting>",
        answer_b: "<js>",
        answer_c: "<javascript>",
        answer_d: "<script></script>",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
    multiple_correct_answers: "false",
    name:"a",
    a:1,
    option:"d"
  },
  {
    id: 2,
    category: "javascript",
    difficulty: "Easy",
    question: "How do you create a function in JavaScript?",
    answers: [
      {
        answer_a: "function = myFunction()",
        answer_b: "function myFunction()",
        answer_c: "function:myFunction()",
        answer_d: "function",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"b",
    a:2,
    option:"b"
  },
  {
    id: 3,
    category: "javascript",
    difficulty: "Easy",
    question: "How to write an IF statement in JavaScript?",
    answers: [
      {
        answer_a: "if (i == 5)",
        answer_b: "if i == 5 then",
        answer_c: "if i = 5 then",
        answer_d: "if i = 5",
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"c",
    a:3,
    option:"a"
  },

  {
    id: 4,
    category: "javascript",
    difficulty: "Easy",
    question: "How do you declare a JavaScript variable?",
    answers: [
      {
        answer_a: "var carName",
        answer_b: "v carName",
        answer_c: "variable carName",
        answer_d: "varq a",
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"d",
    a:4,
    option:"a"
  },
  {
    id: 5,
    category: "javascript",
    difficulty: "Easy",
    question: "How can you add a comment in a JavaScript?",
    answers: [
      {
        answer_a: " <!--This is a comment-->",
        answer_b: "//This is a comment",
        answer_c: "'This is a comment",
        answer_d: "/This is a comment",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"e",
    a:5,
    option:"b"
  },
  {
    id: 6,
    category: "java",
    difficulty: "Easy",
    question: "Number of primitive data types in Java are?",
    answers: [
      {
        answer_a: 6,
        answer_b: 7,
        answer_c: 8,
        answer_d: 9,
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"f",
    a:1,
    option:"c"
  },
  {
    id: 7,
    category: "java",
    difficulty: "Easy",
    question:
      "When an array is passed to a method, what does the method receive?",
    answers: [
      {
        answer_a: "The reference of the array",
        answer_b: "A copy of the Array",
        answer_c: "Length of the Array",
        answer_d: "Copy of First Element",
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"g",
    a:2,
    option:"a"
  },
  {
    id: 8,
    category: "java",
    difficulty: "Easy",
    question: "Arrays in java are-",
    answers: [
      {
        answer_a: "Object references",
        answer_b: "Objects",
        answer_c: "Primitive data type",
        answer_d: "none",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"h",
    a:3,
    option:"b"
  },
  {
    id: 9,
    category: "java",
    difficulty: "Easy",
    question: "When is the object created with new keyword?",
    answers: [
      {
        answer_a: "At run time",
        answer_b: "At Compile time",
        answer_c: "Depends on the code",
        answer_d: "none",
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"i",
    a:4,
    option:"a"
  },
  {
    id: 10,
    category: "java",
    difficulty: "Easy",
    question: "compareTo() returns",
    answers: [
      {
        answer_a: "True",
        answer_b: "False",
        answer_c: "An int value",
        answer_d: "None",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"j",
    a:5,
    option:"c"
  },
  {
    id: 11,
    category: "react",
    difficulty: "Easy",
    question:
      "Which of the following is used in React.js to increase performance?",
    answers: [
      {
        answer_a: "Virtual DOM",
        answer_b: "Original Dom",
        answer_c: "Both A & B",
        answer_d: "None",
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"k",
    a:1,
    option:"a"
  },
  {
    id: 12,
    category: "react",
    difficulty: "Easy",
    question: "What is ReactJS ?",
    answers: [
      {
        answer_a: "Server-Side Framework",
        answer_b: "User Interface Framework",
        answer_c: "Both A & B",
        answer_d: "None",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "true",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"l",
    a:2,
    option:"b"
  },
  {
    id: 13,
    category: "react",
    difficulty: "Easy",
    question:
      "Identify the one which is used to pass data to components from outside   ",
    answers: [
      {
        answer_a: "Render with Arguments",
        answer_b: "setState",
        answer_c: "PropTypes",
        answer_d: "props",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "true",
    },
    multiple_correct_answers: "false",
    name:"m",
    a:3,
    option:"d"
  },
  {
    id: 14,
    category: "react",
    difficulty: "Easy",
    question: "How many elements can a valid react component return?",
    answers: [
      {
        answer_a: 1,
        answer_b: 2,
        answer_c: 3,
        answer_d: 4,
      },
    ],
    correct_answers: {
      answer_a_correct: "true",
      answer_b_correct: "false",
      answer_c_correct: "false",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"n",
    a:4,
  },
  {
    id: 15,
    category: "react",
    difficulty: "Easy",
    question: "Identify the smallest building block of React.JS.",
    answers: [
      {
        answer_a: "Props",
        answer_b: "Elements",
        answer_c: "Components",
        answer_d: "None of the Above",
      },
    ],
    correct_answers: {
      answer_a_correct: "false",
      answer_b_correct: "false",
      answer_c_correct: "true",
      answer_d_correct: "false",
    },
    multiple_correct_answers: "false",
    name:"o",
    a:5
  },
];
export default quiz;
