import React from "react";
import { motion } from "framer-motion";

export default function TextMarquee({text}) {
  const variants = {
    marquee: {
      x: [0, -1000, -500, -750, -250],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "mirror",
          type: 'spring',
          dampening: 100,
          ramp: 12,
          duration: 10,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.div
      style={{
        whiteSpace: 'nowrap',
        borderRadius: '50px',
        width: '50%'
      }}
      variants={variants}
      animate="marquee"
    >
      <motion.p>
        {text}
      </motion.p>
    </motion.div>
  );
};