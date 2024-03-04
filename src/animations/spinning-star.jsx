import React from 'react'
import {motion} from'framer-motion'

export default function SpinningStar({text}) {
  const randomDeg = () => Math.floor(Math.random() * 360);
  const randomY = () => Math.floor(Math.random() * 10)

  const variants = {
    initial: {
        opacity: 0.8,
        y: 0,
        rotateX: randomDeg(),
    },
    spin: {
        transition: {ease: "easeInOut", duration: 3, repeat: Infinity, repeatType: 'mirror'},
        opacity: 1,
        y: randomY(),
        rotateX: 360,
        rotateZ: randomDeg(),
        rotateY: randomDeg()
    },
    fade: {
        opacity: 0,
    }
  };

  return (
    <motion.p
      variants={variants}
      initial={'initial'}
      whileInView={'spin'}
      exit={() => {'fade'}}
      style={{color: 'rgba(255,255,255, 0.8)', fontSize: '100px', cursor: 'default'}}
    >
      {text}
    </motion.p>
  )
}
