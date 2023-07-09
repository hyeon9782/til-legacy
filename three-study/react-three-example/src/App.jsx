import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { USDZLoader } from "three/examples/jsm/loaders/USDZLoader";
import Shiba from "./components/Shiba";
import { OrbitControls } from "@react-three/drei";
import Test from "./components/Test";
import Room from "./components/Room";
import Box from "./components/Box";
import FirstScene from "./components/FirstScene";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./shiba/scene.gltf");
  // const usdz = useLoader(USDZLoader, "./Shiba.usdz");

  return (
    <>
      <primitive object={gltf.scene} position={[0, 0, 0]} scale={3} />
    </>
  );
};

function App() {
  return (
    <div>
      {/* <Canvas style={{ width: "100vw", height: "100vh" }}>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls minDistance={5} maxDistance={20} />
        </Suspense>
      </Canvas> */}
      {/* <Test /> */}
      {/* <Canvas>
        <Room />
      </Canvas> */}
      {/* <Box /> */}
      <FirstScene />
    </div>
  );
}

export default App;
