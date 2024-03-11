import React, { useState, Suspense, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./style.scss";
import ShiftText from "../../animations/text-shift";
import TypingText from "../../animations/text-typing";
import TextMarquee from "../../animations/text-marquee";
import ScrollArrow from "../../animations/scroll-arrow";
import ResumeBtn from "../resume-btn";
import { resume } from "../../constants/arrays";
import ContentLoader from "../../animations/content-loader";

export default function AboutMe() {
  const [showResume, setShowResume] = useState(false);
  const [toggleResume, setToggleResume] = useState("tech");
  const controls = useAnimation();

  useEffect(() => {
    controls.start("spinstar");
  }, [toggleResume]);

  function displayResume() {
    setShowResume(!showResume);
  }
  function closeDisplay() {
    setShowResume(false);
  }
  function switchResumeT() {
    setToggleResume("tech");
  }
  function switchResumeOT() {
    setToggleResume('non-tech')
  }

  const variants = {
    selected: {
      opacity: 1,
      transition: {
        ease: 'circInOut',
        type: 'spring'
      }
    },
    notSelected: {
      opacity: 0.3,
      transition: {
        ease: 'circInOut',
        type: 'spring'
      }
    },
    hoverOption: {
      opacity: 0.5,
      transition: {
        ease: 'circInOut',
        type: 'spring'
      }
    },
    closeBtn: {
      color: "red",
      opacity: 0.8,
      transition: {
        ease: 'circInOut',
        type: 'spring'
      }
    },
    spinstar: {
      rotateY: [0, 360],
      transition: {
        ease: "easeInOut",
        duration: 0.5,
        repeat: 1,
      }
    }
  }

  return (
    <section className="about-me">
      <section className="left-side">
        <div
          style={{
            transform: "scaleY(3)",
            lineHeight: 1,
            marginLeft: "25px",
          }}
        >
          <ShiftText textOne={"WEB DESIGNER"} textTwo={"FRONT-END DEVELOPER"} />
        </div>
      </section>
      <section className="right-side">
        {!showResume ? (
          <>
            <section className="text-container">
              <div className="info-title">
                <TextMarquee text={"⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆"} />
              </div>
              <div className="info-text">
                <TypingText text={"NEW YORK CITY"} />
              </div>
            </section>
            <section className="text-container">
              <div className="info-title">
                <TextMarquee text={"⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆"} />
              </div>
              <div className="info-text" style={{ fontSize: "26px" }}>
                <TypingText
                  text={"HTML CSS/SCSS JAVASCRIPT REACT R3F FRAMER VITE"}
                />
              </div>
            </section>
            <section className="text-container">
              <div className="info-title">
                <TextMarquee text={"⋆ PROGRAMS ⋆ PROGRAMS ⋆ PROGRAMS ⋆"} />
              </div>
              <div className="info-text" style={{ fontSize: "26px" }}>
                <TypingText
                  text={" ADOBE ILLUSTRATOR FIGMA BLENDER GIMP CANVA"}
                />
              </div>
            </section>
          </>
        ) : (
          <motion.section className="resume-container">
            <div className="resume-btns-container">
              <motion.button variants={variants} whileHover={'closeBtn'} onClick={() => closeDisplay()} style={{width: 'fit-container'}}>CLOSE</motion.button>
              <div className="resume-types" style={{width: '70%'}}>
                <motion.p 
                  onClick={() => switchResumeT()} 
                  variants={variants}
                  whileHover={toggleResume === 'non-tech' && "hoverOption"} 
                  animate={toggleResume === 'tech' ? "selected" : "notSelected"}
                >
                  TECHNICAL
                </motion.p>
                <motion.p 
                  variants={variants} 
                  animate={controls}
                >
                  ✦
                </motion.p>
                <motion.p 
                  onClick={() => switchResumeOT()} 
                  variants={variants} 
                  whileHover={toggleResume === 'tech' && "hoverOption"} 
                  animate={toggleResume === 'non-tech' ? "selected" : "notSelected"}
                >
                  NON-TECHNICAL
                </motion.p>
              </div>
            </div>
              <Suspense fallback={<ContentLoader/>}>
                <object
                  data={
                    toggleResume === "tech" ? resume.technical : resume.nonTech
                  }
                  width="100%"
                  height="100%"
                  type="application/pdf"
                />
              </Suspense>
          </motion.section>
        )}
      </section>
      <motion.div
        initial={{ border: "1px solid rgba(255,255,255,0.8)" }}
        whileHover={{ border: "3px solid rgba(255,255,255,0.8)" }}
        whileTap={{ border: "1px solid rgba(255,255,255,0.8" }}
        transition={{ ease: "easeInOut", duration: 0.2 }}
        className="resume-btn"
      >
        <ResumeBtn open={displayResume} />
      </motion.div>
      <div className="scroll-footer">
        <ScrollArrow />
      </div>
    </section>
  );
}
