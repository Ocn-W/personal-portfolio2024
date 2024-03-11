import React from 'react';
import './App.scss'
import AppHOC from './components/appHOC';
import { Routes, Route } from 'react-router-dom';
import InfoCursor from './animations/info-cursor';
import ArtworkViewer from './components/artwork-viewer';

function App() {
  return (
    <>
    <InfoCursor/>
    <Routes>
      <Route path='/' element={<AppHOC/>}/>
      <Route path='gallery' element={<ArtworkViewer/>}/>
    </Routes>
    </>
  );
}

export default App
