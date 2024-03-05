import React from "react";
import { motion } from "framer-motion";
import RandomizeColor from "./color-randomizer";

export default function TypingText({ text }) {
// splitting text into letters
  const letters = Array.from(text);

  console.log(letters)

// Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

// Variants for each letter
  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    highlight: {
      backgroundColor: 'rgba(255,255,255,0.8)',

      transition: {
        type: 'spring',
        duration: 0.2
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"

    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} custom={index}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};