import React from "react";
import { motion } from "framer-motion";
import "./QuestionDisplay.css";

function QuestionDisplay({
  questions,
  fetchQuestions,
  answerDisplay,
  setAnswerDisplay,
  correctScore,
  setCorrectScore
}) {
  function correctAnswer(e) {
    if (e.target.name === questions.correct_answer) {
      return setCorrectScore(correctScore + 1), setAnswerDisplay("CORRECT");
    } else {
      setAnswerDisplay("WRONG!");
    }
  }

  return (
    <section className="questionContainer">
      <motion.article animate={{ scale: 2.0 }} className="question">
        <h4>{questions.question}</h4>
      </motion.article>
      {!answerDisplay ? (
        <>
          <button className="trueButton" name="True" onClick={correctAnswer}>
            TRUE?
          </button>
          <button className="falseButton" name="False" onClick={correctAnswer}>
            FALSE?
          </button>
        </>
      ) : (
        <>
          <motion.section
            animate={{
              scale: [1, 1.2, 1.2, 1, 1],
              rotate: [0, 50, 0, -50, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"]
            }}
            className="answerContainer"
          >
            <h1>{answerDisplay}</h1>
          </motion.section>

          <motion.button className="nextButton" onClick={fetchQuestions}>
            NEXT QUESTION!
          </motion.button>
        </>
      )}
    </section>
  );
}

export default QuestionDisplay;
