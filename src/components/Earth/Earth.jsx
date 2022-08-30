
import React, { useRef } from 'react';
import * as THREE from 'three';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import EarthDayMap from '../Assets/Earth/earthColorMapDay.jpg';
import EarthNightMap from '../Assets/Earth/earthColorMapNight.jpg';
import EarthCloudMap from '../Assets/Earth/earthClouds.jpg';
import EarthAlphaMap from '../Assets/Earth/earthAlphaMap.jpg';
import EarthNormalMap from '../Assets/Earth/earthNormalMap.jpg';

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthAlphaMap, EarthCloudMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()

    earthRef.current.rotation.y = elapsedTime / 36
    cloudsRef.current.rotation.y = elapsedTime / 34
    
  })

  return (
    <>
        {/* Lights, ambient used for development, not production */}
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={3.5} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={1}
        fade={true}
      />
      {/* Clouds */}
      <mesh ref={cloudsRef} position={[0, 0.4, 2.3]} >
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.5}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Earth */}
      <mesh ref={earthRef} position={[0, 0.4, 2.3]} >
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
        {/* Use for editing, not for production */}
        {/* <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        /> */}
      </mesh>
    </>
  );
}
