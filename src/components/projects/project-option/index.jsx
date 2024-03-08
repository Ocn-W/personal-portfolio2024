import React from "react";
import { motion } from "framer-motion";
import './style.scss';

export default function ProjectOption({ project, curr }) {
  return (
    <>
    <motion.div className="project-view">
        <p className="project-num">
            //0{curr}
        </p>
        <section style={{display: 'flex', width: '95%', gap: '10px'}}>
        <motion.div className="project-img">
            <img src={project.image}/>
        </motion.div>

        <motion.div className="project-info">
            <div style={{fontSize: '24px'}}>
                {project.name}
            </div>

            <div style={{display: 'flex'}}>
                {project.techstack}
            </div>

            <div style={{display: 'flex'}}>
                {project.dependencies}
            </div>

            <div style={{fontSize: '14px', padding: '0 30px'}}>
                {project.description}
            </div>
        </motion.div>

            <div className="project-link"> 
                <motion.a target="_blank" href={project.demoUrl}>
                    VISIT WEBSITE
                </motion.a>
            </div>

        </section>
    </motion.div>
    </>
  );
}
