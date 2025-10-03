"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";
import { Points as DreiPoints, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props: ThreeElements['group']) => {
  const ref = useRef<THREE.Group>(null);

  // Generar posiciones en la esfera asegurando que sean múltiplos de 3
  const [sphere] = useState(() => {
    const arr = random.inSphere(new Float32Array(5000 * 3), { radius: 1.2 });
    // Reemplaza cualquier NaN con 0
    for (let i = 0; i < arr.length; i++) {
      if (isNaN(arr[i])) arr[i] = 0;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]} {...props}>
      <DreiPoints positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </DreiPoints>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
