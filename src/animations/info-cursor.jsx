import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect } from "react";
import './anim-styles.scss';

export default function InfoCursor() {
    const cursorX = useMotionValue();
    const cursorY = useMotionValue();
  
    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);
  
    useEffect(() => {
      const moveCursor = (e) => {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      };
  
      window.addEventListener("mousemove", moveCursor);
  
      return () => {
        window.removeEventListener("mousemove", moveCursor);
      };
    }, []);

  return (
    <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
  );
}
