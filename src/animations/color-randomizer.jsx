import React, {useState} from "react";
import { motion } from "framer-motion";
import { getRandomColor } from "../constants/arrays";

export default function RandomizeColor({ text }) {
  const splitText = text.split("");
  function generateLetterColors() {
    return splitText.map(() => getRandomColor());
  }
  const [letterColors, setLetterColors] = useState(() =>
    generateLetterColors()
  );
  const handleHover = () => {
    setLetterColors(generateLetterColors()); // Generate new colors on each hover
  };

  const variants = {
    initial: { color: "#FFFFFF", opacity: 0.8 },
    pulsing: (index) => ({
      color: letterColors[index], // Randomize each letters color
      transition: { ease: "easeInOut", duration: 0.1 },
    }),
  };

  return (
    <>
      {splitText.map((letter, i) => (
        <motion.span
          whileHover={"pulsing"}
          initial={"initial"}
          variants={variants}
          custom={i}
          key={i}
          onHoverStart={handleHover}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
