import React, { Suspense } from "react";
import {motion} from 'framer-motion';
import './style.scss';
import NavOptions from "../navigation";
import ScrollArrow from "../../animations/scroll-arrow";
import SpinningStar from "../../animations/spinning-star";
import ContentLoader from "../../animations/content-loader";

export default function Home({scrollProp}) {
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
    <Suspense fallback={<ContentLoader/>}>
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
          <NavOptions scrollProp={scrollProp}/>
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
