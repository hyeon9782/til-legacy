import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Shiba from "./components/Shiba";
import { OrbitControls } from "@react-three/drei";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./shiba/scene.gltf");
  return (
    <>
      <primitive object={gltf.scene} position={[0, 0, 0]} scale={3} />
    </>
  );
};

function App() {
  return (
    <div>
      <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          {/* <Shiba /> */}
          <Model />
          <OrbitControls minDistance={5} maxDistance={20} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
