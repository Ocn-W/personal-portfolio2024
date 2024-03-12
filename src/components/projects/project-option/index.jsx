import React from "react";
import { motion } from "framer-motion";
import "./style.scss";

export default function ProjectOption({ project, curr }) {
  const variants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    initialText: {
      opacity: 0,
      x: -50,
    },
    initialInfo: {
      opacity: 0,
      y: 50,
    },
    initialInfo2: {
      opacity: 0,
      x: 50,
    },
    fadeIn: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
    fadeInText: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.5,
        duration: 1,
      },
    },
    fadeInInfo: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 0.6,
        duration: 0.5,
      },
    },
    fadeInInfo2: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 0.8,
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        initial="initial"
        whileInView="fadeIn"
        variants={variants}
        className="project-view"
      >
        <motion.p
          variants={variants}
          initial="initialText"
          whileInView="fadeInText"
          className="project-num"
        >
          //0{curr}
        </motion.p>
        <section style={{ display: "flex", width: "95%", gap: "10px" }}>
          <motion.div className="project-img">
            <img src={project.image} />
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialInfo2"
            whileInView="fadeInInfo2"
            className="project-info"
          >
            <div style={{ fontSize: "24px" }}>{project.name}</div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <p>TECHSTACK</p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "monospace",
                }}
              >
                {project.techstack}
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <p>MAIN LIBRARIES</p>
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "90%",
                  fontFamily: "monospace",
                }}
              >
                {project.dependencies}
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <p>DESCRIPTION</p>
              <div
                style={{
                  fontSize: "14px",
                  padding: "0 30px",
                  fontFamily: "monospace",
                }}
              >
                {project.description}
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={variants}
            initial="initialInfo"
            whileInView="fadeInInfo"
            className="project-link"
          >
            <motion.a target="_blank" href={project.demoUrl}>
              VISIT WEBSITE
            </motion.a>
          </motion.div>
        </section>
      </motion.div>
    </>
  );
}
