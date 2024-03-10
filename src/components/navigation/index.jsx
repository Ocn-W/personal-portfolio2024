import React from 'react'
import './style.scss'
import RandomizeColor from '../../animations/color-randomizer'

export default function NavOptions({scrollProp}) {
  return (
    <div className='nav-container'>
        <ul>
          <li ref={scrollProp} onClick={() => scrollProp.current.scrollTo(1)}><p>ABOUT</p></li>
          <li ref={scrollProp} onClick={() => scrollProp.current.scrollTo(2)}><p>PROJECTS</p></li>
          <li><p onClick={() => window.location = 'mailto:ocean.wrng@gmail.com'}>CONTACT</p></li>
          <li><p><span style={{ color: "rgba(255,255,255,0.8)" }}>✶</span>{" "}<RandomizeColor text={"ART"}/></p></li>
        </ul>
    </div>
  )
}
