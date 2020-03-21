import React, { useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import QuestionDisplay from "./comp/QuestionDisplay/QuestionDisplay";
import ScoreBoard from "./comp/ScoreBoard/ScoreBoard";

function App() {
  const [questions, setQuestions] = useState();
  const [answerDisplay, setAnswerDisplay] = useState();
  const [correctScore, setCorrectScore] = useState(0);

  async function fetchQuestions() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=25&type=boolean"
    );
    const data = await res.json();
    setQuestions(data.results[0]);
    setAnswerDisplay("");
  }

  return (
    <div className="app">
      <motion.h1
        eanimat={{
          scale: [1, 1.2, 1.4, 1.2, 1, 1.2, 1.4, 1.2, 1]
        }}
        className="mainHeader"
      >
        TRUE OR FALSE
      </motion.h1>
      {questions ? (
        <section className="questionDisplay">
          <QuestionDisplay
            answerDisplay={answerDisplay}
            setAnswerDisplay={setAnswerDisplay}
            fetchQuestions={fetchQuestions}
            questions={questions}
            correctScore={correctScore}
            setCorrectScore={setCorrectScore}
          />
        </section>
      ) : (
        <section className="nextQuestionButton">
          <button onClick={fetchQuestions}>BEGIN</button>
        </section>
      )}
      <section className="scoreBoard">
        <ScoreBoard correctScore={correctScore} />
      </section>
    </div>
  );
}

export default App;
