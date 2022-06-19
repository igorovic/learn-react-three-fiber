import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Scene } from "three";

export default function Model(props: any) {
  const group = useRef();
  //@ts-ignore
  const gltf = useGLTF("/chair.glb");

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </group>
  );
}

useGLTF.preload("/chair.glb");
