import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ShiftText({textOne, textTwo}) {
  const textOneSplit = textOne.split("");
  const textTwoSplit = textTwo.split("");
  const mainText = [{textOne, textTwo}];
  const [onView, setOnView] = useState(1);
  const [isHover, setIsHover] = useState(false);
  const timer = useRef(null);

  function textChange() {
    timer.current = setTimeout(() => {
      setOnView(onView === 0 ? 1 : 0);
    }, 950);
  }

  function stopTimer() {
    clearTimeout(timer.current);
  }
  
  const variants = {
    initial: {
      opacity: 0.8,
      fontSize: "60px"
    },
    shrinkFadeOut: {
      opacity: 0,
      fontSize: "50px",
      transition: { 
        ease: "circInOut",  
        duration: 1,
      },
    },
  }
  return (     
  <>
  <motion.div
    onHoverStart={() => textChange()}
    onHoverEnd={() => stopTimer()}
  >
    {mainText.map((letter, i) => (
    <motion.span
      variants={variants}
      initial={'initial'}
      whileHover={["shrinkFadeOut"]}

      key={i}
      style={{
        cursor: 'crosshair',
        color: 'white',
        fontFamily: 'against',
        width: 'fit-content',
      }}
    >
      {onView === 0 ? letter.textOne : letter.textTwo}
    </motion.span>
    ))}
  </motion.div>
    </> 
  )
}
