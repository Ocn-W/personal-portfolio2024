import React from 'react'
import './style.scss'
import { getPastelColor, projects } from '../../constants/arrays'
import InfoCursor from '../../animations/info-cursor'


export default function Projects() {
  return (<>
    <section className='projects-container'>
        <h1>PROJECTS</h1>
        <section className='selection-container'>
          {projects.map((project, index) => (
            <div className='project-option' key={index + 1}>
              <p style={{transform: "scaleY(1.5)", fontSize: '18px'}}>✶</p>
              <p>0{index}</p>
            </div>
          ))}
        </section>
        
    </section>
  </>)
}
