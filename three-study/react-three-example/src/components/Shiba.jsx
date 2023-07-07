import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Shiba = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/shiba/scene.gltf");
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
};

useGLTF.preload("/shiba/scene.gltf");

export default Shiba;
