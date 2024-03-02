import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './App.scss'
import Home from './components/home'
import AboutMe from './components/about-me';
import NavBar from './components/navigation/navigation-bar';
import NavHeader from './components/navigation/simple-header';

function App() {
  return (
    <>
    <Parallax pages={2}>
      <ParallaxLayer>
        <Home/>
      </ParallaxLayer>
      <ParallaxLayer sticky={{start: 1}}>
        <NavHeader/>
        <NavBar/>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <AboutMe/>
      </ParallaxLayer>
    </Parallax>
    </>
  );
}

export default App
