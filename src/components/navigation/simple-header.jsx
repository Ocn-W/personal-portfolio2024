import React from 'react';
import {motion} from 'framer-motion';
import './style.scss';
import RandomizerText from '../../animations/font-randomizer';
import RandomizeColor from '../../animations/color-randomizer';

export default function NavHeader() {
  return (
    <motion.section className='nav-header'>
      <div className="navbar-container">
      <ul>
        <li style={{display: 'flex', justifyContent: 'center'}}>
          <RandomizerText text={"OCEAN"}/>
        </li>
        <li>
          <a href={""}>RESUME</a>
        </li>
        <li>
          <a href={""}>PROJECTS</a>
        </li>
        <li>
          <a href={""}>CONTACT</a>
        </li>
        <li>
          <a href={'/artwork-viewer'}><span style={{ color: "rgba(255,255,255,0.8)" }}>✶</span>{" "}<RandomizeColor text={"ART"}/></a>
        </li>
      </ul>
    </div>
    </motion.section>
  )
}
