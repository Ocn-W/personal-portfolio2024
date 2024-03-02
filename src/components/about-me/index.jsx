import React from 'react';
import './style.scss';
import { svgs } from '../../constants/arrays';

export default function AboutMe() {
  return (
    <section className='about-me'>
         
        <section className='tech-stack'>
          <h2>TECHSTACK</h2> 
          <div className='stack-container'>
            {svgs.map((logo) => (
              <div className='logo-container'>
                <img src={logo} width={75}/>
              </div>
            ))}
          </div>
        </section>
    </section>
  )
}
