import React from "react";
//store all questions
const questions = [
  {
    questionText:
      "According to Genesis chapter 7 how many days was the earth flooded for ?",
    answerOptions: [
      { answerText: "40", isCorrect: false },
      { answerText: "60", isCorrect: false },
      { answerText: "150", isCorrect: true },
      { answerText: "127", isCorrect: false },
    ],
  },
  {
    questionText: "What was the 4th plague of Egypt?",
    answerOptions: [
      { answerText: "Plague of Frogs", isCorrect: false },
      { answerText: "Swarms of flies", isCorrect: true },
      { answerText: "Plague of boils", isCorrect: false },
      { answerText: "Death of all livestock", isCorrect: false },
    ],
  },
  {
    questionText: "who was the first King of Israel?",
    answerOptions: [
      { answerText: "David", isCorrect: false },
      { answerText: "Saul", isCorrect: true },
      { answerText: "Solomon", isCorrect: false },
      { answerText: "Samuel", isCorrect: false },
    ],
  },
  {
    questionText: "How many days was Jesus fasting in the wilderness for?",
    answerOptions: [
      { answerText: "7", isCorrect: false },
      { answerText: "21", isCorrect: false },
      { answerText: "30", isCorrect: false },
      { answerText: "40", isCorrect: true },
    ],
  },
];

const Data = () => {
  return <div>Data</div>;
};

export default Data;
