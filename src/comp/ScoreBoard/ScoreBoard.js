import React from "react";
import { motion } from "framer-motion";

function ScoreBoard({ correctScore }) {
  return <motion.h1>Correct Answers: {correctScore}</motion.h1>;
}

export default ScoreBoard;
