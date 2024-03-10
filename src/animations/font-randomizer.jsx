import React, {useEffect, useState, useRef} from "react";
import { motion } from "framer-motion";
import { getRandomFont } from "../constants/arrays";

export default function RandomizerText({ text }) {
  const [currFont, setCurrFont] = useState("lover modern");
  const intervalRef = useRef();

  const variants = {
    initial: { color: 'rgba(255,255,255, 0.8)', opacity: 1, fontFamily: 'lover modern'},
    changeFont: {
      fontFamily: currFont,
    },
  };

  const handleHoverStart = () => {
    intervalRef.current = setInterval(() => {
      return setCurrFont(getRandomFont());
    }, 150);
  };

  const handleHoverEnd = () => {
    clearInterval(intervalRef.current);
    setCurrFont("lover modern");
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      whileHover="changeFont"
      initial="initial"
      variants={variants}
      style={{width: '10%', fontWeight: 'bold'}}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {text}
    </motion.span>
  );
}
