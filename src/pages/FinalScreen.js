import React, { useEffect, useState } from "react";
import Data from "./Data";

export default function FinalScreen(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [myAnswer, setMyAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finish, setFinish] = useState(false);
  const [clickAnswer, setClickAnswer] = useState(false);

  // reset data when button clicked
  const reset = () => {
    setCurrentQuestion(0);
    setFinish(false);
    setMyAnswer("");
    setScore(0);
  };

  if (finish) {
    return (
      <div className="container m-4 p-4 mx-auto h-min-screen grid grid-rows-1 grid-cols-1 items-center">
        <div className="wrapper">
          <h3 className="m-4 p-2 h-30 text-center text-2xl font-bold">
            {`Thats all! Your Final Score is
${score}/${Data.length - 1}`}
          </h3>
          <button
            className="w-full h-14 mt-2 px-2 rounded-lg bg-gray-600 text-pink-400 font-bold hover:bg-gray-800 hover:text-pink-600"
            onClick={() => reset()}
          >
            Reset Quiz
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
