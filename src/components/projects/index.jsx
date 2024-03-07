import React from 'react'
import {motion} from 'framer-motion'
import './style.scss'
import { getRandomColor, projects } from '../../constants/arrays'

export default function Projects() {
  const variants = {
    hovering: (index) => ({
      backgroundColor: getRandomColor(),
      borderRadius: '20%',
      transition: {
        ease: 'circInOut',
        duration: 1,
        type: 'spring'
      }
    })
  }
  return (<>
    <section className='projects-container'>
        <motion.h1>PROJECTS</motion.h1>
        <section className='selection-container'>
          {projects.map((project, index) => (
            <motion.div 
              className='project-option' 
              key={index + 1}
              variants={variants}
              custom={index}
              whileHover='hovering'
            >
              <p style={{transform: "scaleY(1.5)", fontSize: '18px'}}>✶</p>
              <p>0{index}</p>
            </motion.div>
          ))}
        </section>
        
    </section>
  </>)
}
