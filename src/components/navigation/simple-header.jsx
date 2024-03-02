import React from 'react';
import {motion} from 'framer-motion';
import './style.scss';
import RandomizerText from '../../animations/font-randomizer';

export default function NavHeader() {
  return (
    <motion.section className='nav-header'>
        <RandomizerText text={"OCEAN"}/>
    </motion.section>
  )
}
