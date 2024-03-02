import React from 'react';
import './style.scss';
import { svgs } from '../../constants/arrays';

export default function AboutMe() {
  return (
    <section className='about-me'>
      <section className='left-side'>
        <p>
          Hello! I am a Front End React developer based in NYC.
          Currently building a strong and growing skill set in HTML5, CSS3/SCSS,
          JavaScript, Redux/Jotai, React, React Native, and TDD using Jest. I consistently improve a keen eye for design
          and a commitment to producing logical, accessible, and
          responsive code. I am dedicated to continuous learning and
          staying up-to-date with the latest trends and best coding
          practices, ensuring that I can be a useful team player and
          provide efficient solutions. Let's connect and discuss how I can
          contribute to your web development team!
        </p>
      </section>
      <section className='right-side'>
        <div>
        <h2>TECHSTACK</h2> 
        <div className='stack-container'>
          {svgs.map((logo, index) => (
            <div className='logo-container'>
              <img src={logo} width={75} key={index}/>
            </div>
          ))}
        </div>
        </div>
      </section>
    </section>
  )
}
