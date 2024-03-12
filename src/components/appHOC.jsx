import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import {Parallax, ParallaxLayer } from '@react-spring/parallax';
import Home from './home';
import AboutMe from './about-me';
import NavHeader from './navigation/nav-header';
import Projects from './projects';
import '../App.scss'

export default function AppHOC() {
    const parallaxRef = useRef()
    return (
      <>
      <Parallax pages={3} ref={parallaxRef}> 
        <ParallaxLayer>
          <Home scrollProp={parallaxRef}/>
        </ParallaxLayer>
        <ParallaxLayer sticky={{start: 1, end: 2}} speed={1} style={{height: 'fit-content'}}>
          <NavHeader scrollProp={parallaxRef}/>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <AboutMe/>
        </ParallaxLayer>
        <ParallaxLayer offset={2}>
          <Projects/>
        </ParallaxLayer> 
      </Parallax>
      {/* PAGE TRANSITION DIV */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "easeInOut" }}}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" }}}
        style={{ originX: 1 }}
        className='transition-screen'
      />
      </>
    );
}
