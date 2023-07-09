import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// npx gltfjsx scene.gltf로 생성(아래 링크 유튭 참조!)
function Model(props) {
  const gltf = useLoader(GLTFLoader, "/shiba/scene.gltf"); // 동작만 확인했기 때문에 일단 any로 둠
  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={3}
    />
  );
}

function Room() {
  const object3d = useRef(null);
  useFrame((state, delta) => (object3d.current.rotation.y += 0.005));
  return (
    // object3D: 빈 지역 공간
    <object3D ref={object3d}>
      <OrbitControls />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </object3D>
  );
}

export default Room;
