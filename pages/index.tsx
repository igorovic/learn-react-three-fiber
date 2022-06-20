import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { Checkbox } from "@mantine/core";

import { useLoader } from "@react-three/fiber";
//import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  Environment,
  PresentationControls,
  OrbitControls,
} from "@react-three/drei";
import Model from "../models/Chair2";
import { Html, useProgress } from "@react-three/drei";
import { Camera } from "three";
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<any>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

/* function Chair() {
  const gltf = useLoader(GLTFLoader, "/chair.glb");
  return (
    <Suspense fallback={null}>
      <primitive object={gltf.scene} />
    </Suspense>
  );
}
 */

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const Home: NextPage<any> = () => {
  const [parts, setParts] = useState<string[]>([]);
  const [visible, setVisible] = useState<string[]>([]);
  useEffect(() => {
    if (parts.length === 0) {
      const loader = new GLTFLoader();
      loader.load("http://localhost:3000/chair.glb", (model) => {
        const names = model.scene.children.map((O) => O.name);
        setParts(names);
        setVisible(names);
      });
    }
  }, []);

  return (
    <>
      <div>
        <p>Select mesh</p>
        {parts.map((p) => (
          <Checkbox
            key={p}
            label={p}
            defaultChecked
            value={p}
            onChange={(ev) => {
              console.debug(ev.target.checked);

              setVisible((prev) => {
                if (ev.target.checked === true) {
                  return [...prev, ev.target.value];
                } else {
                  return prev.filter((nn) => nn !== ev.target.value);
                }
              });
            }}
          />
        ))}
      </div>
      <div style={{ width: "100%", height: "50%" }}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
          {/* <Chair /> */}
          <Suspense fallback={<Loader />}>
            <Model parts={visible} />
          </Suspense>
          <OrbitControls
            makeDefault
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.75}
          />
          {/* <Environment preset="dawn" background={false} /> */}
        </Canvas>
      </div>
    </>
  );
};

export default Home;

/* export const getStaticProps: GetStaticProps = async () => {
  const loader = new GLTFLoader();
  const model = await loader.loadAsync("http://localhost:3000/chair.glb");
  console.debug("model", model);


  return {
    props: {},
  };
}; */

{
  /* <PresentationControls
          global={false} // Spin globally or by dragging the model
          cursor={true} // Whether to toggle cursor style on drag
          snap={false} // Snap-back to center (can also be a spring config)
          speed={1} // Speed factor
          zoom={1} // Zoom factor when half the polar-max is reached
          rotation={[0, 0, 0]} // Default rotation
          polar={[0, Math.PI / 2]} // Vertical limits
          azimuth={[-Infinity, Infinity]} // Horizontal limits
          config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
        >
          <Model />
        </PresentationControls> */
}
