import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import Couch from "./components/Couch";
import Chair from "./components/Chair";
import { Shadow, OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import SideTable from "./components/SideTable";
import CoffeeTable from "./components/CoffeeTable";
import {
  EffectComposer,
  Outline,
  Select,
  Selection,
} from "@react-three/postprocessing";
import { Suspense, useState } from "react";
import { easing } from "maath";
import woodTexture from "./assets/wood-texture.jpg";
import Loading from "./components/Loading";

function CameraRig() {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [0 + (state.pointer.x * state.viewport.width) / 15, 1, 3],
      0.5,
      delta
    );
    state.camera.lookAt(1.2, -0.2, -0.5);
  });
}

function App() {
  const floor = useLoader(THREE.TextureLoader, woodTexture);
  floor.wrapS = THREE.RepeatWrapping;
  floor.wrapT = THREE.RepeatWrapping;
  floor.repeat.set(12, 12);

  //highlight effects
  const [couchHover, isCouchHover] = useState(false);
  const [chairHover, isChairHover] = useState(false);
  const [coffeeTableHover, isCoffeeTableHover] = useState(false);
  const [sideTableHover, isSideTableHover] = useState(false);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 1, 3] }}>
          <CameraRig />
          <ambientLight intensity={Math.PI / 4} />
          <pointLight
            position={[1, 1, 1]}
            decay={0.5}
            intensity={Math.PI / 1.5}
          />
          <Selection>
            {/*effect */}
            <EffectComposer multisampling={0} autoClear={false}>
              <Outline
                blur
                visibleEdgeColor="white"
                hiddenEdgeColor="white"
                edgeStrength={10}
                width={1000}
                pulseSpeed={0.5}
              />
            </EffectComposer>
            {/* models */}
            <Select enabled={couchHover}>
              <Couch
                model="couch-grey"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                highlight={isCouchHover}
              />
            </Select>
            <Select enabled={chairHover}>
              <Chair
                model="rustic_comfort_chair"
                position={[2, 0, 1]}
                rotation={[0, Math.PI / -4, 0]}
                highlight={isChairHover}
              />
            </Select>
            <Select enabled={sideTableHover}>
              <SideTable
                model="side_table"
                position={[2, -0.2, 1.7]}
                rotation={[0, Math.PI / -4, 0]}
                highlight={isSideTableHover}
              />
            </Select>
            <Select enabled={coffeeTableHover}>
              <CoffeeTable
                model="coffee_table"
                position={[0.3, -0.2, 1.2]}
                rotation={[0, 0, 0]}
                highlight={isCoffeeTableHover}
              />
            </Select>
          </Selection>
          <mesh position={[1, 1, -0.7]} castShadow receiveShadow>
            <boxGeometry args={[15, 6, 0.5]} />
            <meshStandardMaterial color={"#e3e3ca"} />
          </mesh>
          <mesh position={[2.7, 1, -0.7]} castShadow receiveShadow>
            <boxGeometry args={[0.5, 6, 15]} />
            <meshStandardMaterial color={"beige"} />
          </mesh>
          <mesh position={[0, -0.5, -0.7]} castShadow receiveShadow>
            <boxGeometry args={[15, 0.2, 15]} />
            <meshStandardMaterial map={floor} />
          </mesh>
          <Shadow
            color="black"
            opacity={0.5}
            position={[2, -0.39, 1]}
            scale={2}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[-0.5, -0.39, 0]}
            scale={2}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[0.5, -0.39, 0]}
            scale={2}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[2.4, -0.39, -0.4]}
            scale={2}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[2, -0.39, 1.7]}
            scale={0.75}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[0.7, -0.39, 1.2]}
            scale={2}
          />
          <Shadow
            color="black"
            opacity={0.5}
            position={[-0.3, -0.39, 1.2]}
            scale={2}
          />
        </Canvas>
      </Suspense>
    </>
  );
}

export default App;
