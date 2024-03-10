import React from 'react'
import './style.scss'

export default function ResumeBtn({open}) {
  return (
    <button className='resumeBtn-container' onClick={() => open()}>
        <h2>
          RESUME
        </h2>
    </button>
  )
}
