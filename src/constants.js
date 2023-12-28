export const jsQuizz = {
    questions: [
      {
        question:
          "What is the largest US state (by landmass)?",
        choices: [
          "Texas",
          "Alaska",
          "California",
          "Arizona",
        ],
        type: "MCQs",
        correctAnswer: "Alaska",
      },
      {
        question: "What is the strongest muscle in the human body?",
        choices: [
          "Jaw",
          "Heart",
          "Glutes",
          "None of the above",
        ],
        type: "MCQs",
        correctAnswer: "Jaw",
      },
      {
        question:
          "Who was known as The King of Pop?",
        choices: ["Gandhi", "Eminem", "Michael Jackson", "Elton John"],
        type: "MCQs",
        correctAnswer: "Michael Jackson",
      },
      {
        question: "What is the hardest natural substance on planet Earth?",
        choices: ["Gold", "Silver", "Platinum", "Diamond"],
        type: "MCQs",
        correctAnswer: "Diamond",
      },
      {
        question: "What did Charles Babbage famously invent?",
        choices: [
          "Computer",
          "Microwave",
          "Television",
          "Telephone",
        ],
        type: "MCQs",
        correctAnswer: "Computer",
      },
    ],
  };


  export const resultInitialState = {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  };