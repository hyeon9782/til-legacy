import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// npx gltfjsx scene.gltf로 생성(아래 링크 유튭 참조!)
function Model(props) {
  const { nodes, materials } = useGLTF("/scene.gltf"); // 동작만 확인했기 때문에 일단 any로 둠
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.mesh_all1_Texture1_0.geometry}
            material={materials.Texture1}
          />
        </group>
      </group>
    </group>
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
