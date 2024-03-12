import React, { Suspense } from "react";
import { motion } from "framer-motion";
import "./style.scss";
import NavOptions from "../navigation";
import ScrollArrow from "../../animations/scroll-arrow";
import SpinningStar from "../../animations/spinning-star";
import ContentLoader from "../../animations/content-loader";
import { platformSvgs } from "../../constants/arrays";

export default function Home({ scrollProp }) {
  const variants = {
    initial: {
      opacity: 0,
    },
    display: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  return (
    <Suspense fallback={<ContentLoader />}>
      <main>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="display"
          className="intro"
        >
          <div className="intro-text">
            <h1>OCEAN</h1>
            <span>
              <SpinningStar text={"✦"} />
            </span>
          </div>
          <div className="intro-links">
            <a 
              target="#" 
              href="https://github.com/Ocn-W"
            >
              <motion.img
                loading="lazy"
                src={platformSvgs.linkedin}
                height={40}
                width={40}
                whileHover={{opacity: 1, transition: {ease: 'easeInOut', duration: 0.3}}}
                style={{ opacity: 0.8 }}
              />
            </a>
            <a                     
              target="#"
              href="https://www.linkedin.com/in/ocean-waring/"
            >
              <motion.img
                loading="lazy"
                src={platformSvgs.github}
                height={40}
                width={40}
                whileHover={{opacity: 1, transition: {ease: 'easeInOut', duration: 0.3}}}
                style={{ opacity: 0.8 }}
              />
            </a>
          </div>
        </motion.section>
        <motion.section
          variants={variants}
          initial="initial"
          whileInView="display"
          className="nav"
        >
          <NavOptions scrollProp={scrollProp} />
        </motion.section>
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="display"
          className="scroll-footer"
        >
          <ScrollArrow />
        </motion.div>
      </main>
    </Suspense>
  );
}
