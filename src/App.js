import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { Earth } from './components/Earth/Earth';
import { TopSection } from './components/Main/main.jsx'

function App() {
  return (
    <div className="canvas-container">
      <TopSection />
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
