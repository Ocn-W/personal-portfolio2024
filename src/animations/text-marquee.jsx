import React from "react";
import { motion } from "framer-motion";

export default function TextMarquee({ text }) {
  const randomIndex = Math.floor(Math.random() * 6);

  const variants = {
    marquee: {
      //Not really a marquee, more twitchy
      x: [0, 200, -100],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          type: "spring",
          damping: 100,
          duration: 5 * randomIndex,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      style={{
        whiteSpace: "nowrap",
      }}
      variants={variants}
      whileInView="marquee"
    >
      <motion.p>{text}</motion.p>
    </motion.div>
  );
}