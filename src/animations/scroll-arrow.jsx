import React from 'react'
import { motion } from 'framer-motion';
import scrollPointerDown from '../assets/svgs/scrollpointer_down.svg';
import basicLine from '../assets/svgs/basic-line_white.svg';

export default function ScrollArrow() {
  const variants = {
    initial: { 
      y: -2,
      opacity: 0
    },
    initialLine: { 
      y: 0,
      opacity: 1
    },
    pulse: {
      y: 5,
      transition: { ease: "easeInOut", duration: 2, delay: 0.2, repeat: Infinity, repeatType: 'mirror' },
      opacity: 0.8
    },
    scroll: {
      opacity: 0
    }
  };

  return (
    <motion.div
      style={{display: 'flex'}}
    >
      <motion.img 
        src={basicLine}
        variants={variants} 
        initial={'initialLine'}
        width={75}
      />
      <motion.img 
        src={scrollPointerDown} 
        style={{cursor: 'pointer'}}      
        variants={variants}
        initial={'initial'}
        whileInView={'pulse'}
        onTransitionEnd={() => {'scroll'}}
        width={25}
      />
      <motion.img 
        src={basicLine}
        variants={variants}
        initial={'initialLine'} 
        width={75}
      />
    </motion.div>
  )
}
