import React from 'react';
import './App.scss'
import AppHOC from './components/appHOC';
import { Routes, Route, useLocation } from 'react-router-dom';
import InfoCursor from './animations/info-cursor';
import ArtworkViewer from './components/artwork-viewer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <>
    <InfoCursor/>
    <AnimatePresence initial={false} mode='wait'>
      <Routes location={location} key={location.key}>
        <Route path='/' element={<AppHOC/>}/>
        <Route path='gallery' element={<ArtworkViewer/>}/>
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App
