import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.scss'
import Home from './components/home'
import AboutMe from './components/about-me';
import NavHeader from './components/navigation/simple-header';
import Projects from './components/projects';
import InfoCursor from './animations/info-cursor';

function App() {
  return (
    <>
    <InfoCursor/>
    <Parallax pages={3}>
      <ParallaxLayer>
        <Home/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 1, end: 2}} style={{height: 'fit-content'}}>
        <NavHeader/>
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
