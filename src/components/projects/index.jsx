import React from "react";
import {motion} from 'framer-motion';
import "./style.scss";
import ProjectOption from "./project-option";
import { projects } from "../../constants/arrays";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import RandomizeColor from "../../animations/color-randomizer";
import SpinningStar from "../../animations/spinning-star";

export default function Projects() {
  const variants = {
    spinstar: {
      rotateY: 360,
      color: 'gold',
      transition: {
        ease: "easeInOut",
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror',
        delay: 0
      }
    }
  }

  return (
    <>
      <Parallax horizontal pages={projects.length}>
        <section className="projects-container">
          <ParallaxLayer>
          <h1>
            <motion.p
              variants={variants}
              whileHover={"spinstar"}
            >✶</motion.p>
            <RandomizeColor text={"PROJECTS"}/>
          </h1>
          </ParallaxLayer>
          {projects.map((project, index) => (
            <ParallaxLayer offset={index + 1} speed={1} key={index}>
              <ProjectOption project={project} curr={index} />
            </ParallaxLayer>
          ))}
          <ParallaxLayer offset={2} speed={1.5}>
            <div style={{
              width: 'fit-content', 
              height: 'fit-content',
              position: 'fixed',
              top: '20%',
              transform: 'scale(2)'
              
            }}>
              <SpinningStar text={"✶"}/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={0.2}>
            <div style={{
              width: 'fit-content', 
              height: 'fit-content',
              position: 'fixed',
              top: '60%',
              transform: 'scale(2)'
              
            }}>
              <SpinningStar text={"✶"}/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.3}>
            <div style={{
              width: 'fit-content', 
              height: 'fit-content',
              position: 'fixed',
              top: '10%',
              transform: 'scale(2)'
              
            }}>
              <SpinningStar text={"✶"}/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.7}>
            <div style={{
              width: 'fit-content', 
              height: 'fit-content',
              position: 'fixed',
              top: '60%',
              transform: 'scale(2)'
              
            }}>
              <SpinningStar text={"✶"}/>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6} speed={0.2}>
            <div style={{
              width: 'fit-content', 
              height: 'fit-content',
              position: 'fixed',
              top: '20%',
              transform: 'scale(2)'
              
            }}>
              <SpinningStar text={"✶"}/>
            </div>
          </ParallaxLayer>
        </section>
      </Parallax>
    </>
  );
}
