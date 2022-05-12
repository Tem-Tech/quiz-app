import React, { useEffect, useState } from "react";
import Data from "./Data";
import FinalScreen from "./FinalScreen";
import ReactDOM from "react-dom";

export default function Questions() {
  // establish variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [show, setShow] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);

  //check answer against correct answer and increment score if correct
  checkAnswer = (variant) => {
    setMyAnswer(variant);
    myAnswer === Data[currentQuestion].answer
      ? setScore(score + 1)
      : setScore(score);
    setShow(true);
  };

  // end quiz when all questions are answered
  const endQuiz = () => {
    const [finish, setFinish] = React.useState(false);
    const onClick = () => setFinish(true);
    if (currentQuestion === Data.length - 1) {
      setFinish(true);
      {
        finish ? <FinishButton /> : null;
      }
    }
  };
  const FinishButton = () => (
    <div id="finish-button" className="finish-button">
      <button
        className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
        onClick={FinalScreen(score)}
      >
        FINISH
      </button>
    </div>
  );

  currentQuestion === Data.length - 1 ? setFinish(true) && setShow(true) : null;
  // display score if all questions are completed using ternary operator condition ? expressionIfTrue : expressionIfFalse;

  return (
    <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
      <div className="wrapper">
        <h2 className="m-4 p-2 h-30 text-center text-2xl font-bold">
          {Data[currentQuestion].question}
        </h2>
        <span className="m-2 border-2 border-black mx-auto px-2 bg-gray-600 text-pink-400 rounded-lg text-center">
          {`${currentQuestion}/${Data.length - 1}`}
        </span>
        {Data[currentQuestion].variants.map((variant) => (
          <div className="m-2 h-14 border-2 border-black mx-auto text-center">
            <p onClick={() => checkAnswer(variant)}>{variant}</p>
          </div>
        ))}

        {show && (
          <p className="m-2 h-14 mx-auto text-center">
            Correct Answer: {Data[currentQuestion].answer}
          </p>
        )}
        {currentQuestion < Data.length - 1 && (
          <button
            className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={() => {
              setCurrentQuestion(currentQuestion + 1);
              endQuiz();
            }}
          >
            NEXT
          </button>
        )}
        {currentQuestion === Data.length - 1 && (
          <button
            className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={FinalScreen(score)}
          >
            FINISH
          </button>
        )}
      </div>
    </div>
  );
}
