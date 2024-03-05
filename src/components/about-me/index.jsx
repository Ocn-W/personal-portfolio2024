import React from 'react';
import './style.scss';
import ShiftText from '../../animations/text-shift';
import TypingText from '../../animations/text-typing';
import TextMarquee from '../../animations/text-marquee';
import SpinningStar from '../../animations/spinning-star';

export default function AboutMe() {
  return (
    <section className='about-me' style={{cursor: 'crosshair'}}>
      <section className='left-side'>
        <div style={{
          transform: "scaleY(3)", 
          lineHeight: 1, 
          marginLeft: '25px'
        }}>
          <ShiftText 
            textOne={"WEB DESIGNER"} 
            textTwo={"FRONT-END DEVELOPER"} 
          />
        </div>
      </section>
      <section className='right-side'>
        <section className='text-container'>
        <div className='info-title'>
          <TextMarquee 
            text={"⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆ LOCATION ⋆"}
          />
        </div>
        <div className='info-text'>  
          <TypingText 
            text={"NEW YORK CITY"}
          />
        </div>
        </section>
        <section className='text-container'>
        <div className='info-title'>
          <TextMarquee 
            text={"⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆ TECHSTACK ⋆"}
          />
        </div>
        <div className='info-text' style={{fontSize: "40px"}}>  
          <TypingText 
            text={"HTML CSS SASS JAVASCRIPT REACT R3F VITE NEXTJS FIGMA CANVA BLENDER ADOBE ILLUSTRATOR GIMP"}
          />
        </div>
        </section>
      </section>
    </section>
  )
}
