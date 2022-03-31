import React, { useEffect, useState } from "react";
import Data from "./Data";
import ReactDOM from "react-dom";

export default function Questions() {
  // establish variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);

  //check answer against correct answer and increment score if correct
  useEffect(() => {
    if (myAnswer === Data[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      return null;
    }
  });

  // display score if all questions are completed using ternary operator condition ? expressionIfTrue : expressionIfFalse;
}
