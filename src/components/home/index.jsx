import React, { Suspense } from "react";
import {motion} from 'framer-motion';
import './style.scss';
import NavOptions from "../navigation";
import ScrollArrow from "../../animations/scroll-arrow";
import SpinningStar from "../../animations/spinning-star";

export default function Home() {
  const variants = {
    initial: {
      opacity: 0
    },
    display: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      }
    }
  };

  return (
    <Suspense fallback={null}>
      <main>
        <motion.section 
          variants={variants}
          initial="initial"
          whileInView='display'
          className="intro"
        >
          <h1>OCEAN</h1>
          <span>
            <SpinningStar text={'✦'}/>
          </span>
        </motion.section>
        <motion.section 
          variants={variants}
          initial="initial"
          whileInView='display'
          className="nav">
          <NavOptions/>
        </motion.section>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView='display' 
          className="scroll-footer">
          <ScrollArrow />
        </motion.div>
      </main>
    </Suspense>
  );
}
