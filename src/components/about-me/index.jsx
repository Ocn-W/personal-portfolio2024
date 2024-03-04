import React from 'react';
import './style.scss';
import ShiftText from '../../animations/text-shift';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <section className='left-side'>
        <h2 style={{transform: "scaleY(3)", lineHeight: 1}}>
          <ShiftText 
            textOne={"WEB DESIGNER"} 
            textTwo={"FRONT-END DEVELOPER"} 
          />
        </h2>
      </section>
      <section className='right-side'>
        <div>
        <h2>TECHSTACK</h2> 
        </div>
      </section>
    </section>
  )
}
