import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import './style.scss';
import RandomizerText from '../../animations/font-randomizer';
import RandomizeColor from '../../animations/color-randomizer';

export default function NavHeader({scrollProp}) {
  return (
    <motion.section className='nav-header'>
      <div className="navbar-container">
      <ul>
        <li ref={scrollProp} onClick={() => scrollProp.current.scrollTo(0)} style={{display: 'flex', justifyContent: 'center'}}>
          <h1><RandomizerText text={"OCEAN"}/>{" "}<span style={{ color: "rgba(255,255,255,0.8)" }}>✦</span></h1>
        </li>
        <li ref={scrollProp} onClick={() => scrollProp.current.scrollTo(1)}>
          <p>ABOUT</p>
        </li>
        <li ref={scrollProp} onClick={() => scrollProp.current.scrollTo(2)}>
          <p>PROJECTS</p>
        </li>
        <li>
        <p onClick={() => window.location = 'mailto:ocean.wrng@gmail.com'}>CONTACT</p>
        </li>
        <li>
          <Link to={'gallery'}><span style={{ color: "rgba(255,255,255,0.8)" }}>✶</span>{" "}<RandomizeColor text={"ART"}/></Link>
        </li>
      </ul>
    </div>
    </motion.section>
  )
}
