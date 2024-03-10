import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from 'react';
import './App.scss'
import Home from './components/home'
import AboutMe from './components/about-me';
import NavHeader from './components/navigation/nav-header';
import Projects from './components/projects';
import InfoCursor from './animations/info-cursor';

function App() {
  const parallaxRef = useRef()
  return (
    <>
    <InfoCursor/>
    <Parallax pages={3} ref={parallaxRef}>
      <ParallaxLayer>
        <Home scrollProp={parallaxRef}/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 1, end: 2}} style={{height: 'fit-content'}}>
        <NavHeader scrollProp={parallaxRef}/>
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <AboutMe/>
      </ParallaxLayer>
      <ParallaxLayer offset={2}>
        <Projects/>
      </ParallaxLayer>
    </Parallax>
    </>
  );
}

export default App
