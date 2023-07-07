import { Canvas, useLoader } from "@react-three/fiber";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ({ url, position, rotation, scale }) => {
  const gltf = useLoader(GLTFLoader, url);

  return (
    <primitive
      object={gltf.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const Test = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model
        url="./shiba/scene.gltf"
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1}
      />
      <Model
        url="./high_detailed_dog/scene.gltf"
        position={[3, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={10}
      />
    </Canvas>
  );
};

export default Test;
