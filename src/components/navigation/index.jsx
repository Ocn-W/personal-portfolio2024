import React from 'react'
import './style.scss'
import RandomizeColor from '../../animations/color-randomizer'

export default function NavOptions() {
  return (
    <div className='nav-container'>
        <ul>
          <li><a href={""}>RESUME</a></li>
          <li><a href={''}>PROJECTS</a></li>
          <li><a href={""}>CONTACT</a></li>
          <li><a href={''}><RandomizeColor text={"ART"}/></a></li>
        </ul>
    </div>
  )
}
