import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Vector3, Mesh, Raycaster } from "three";

export default function Model(props: any) {
  const group = useRef();
  //@ts-ignore
  const { nodes, materials } = useGLTF("/chair.glb");
  console.debug(materials);
  const { parts = [], ...groupProps } = props;

  return (
    <group ref={group} {...groupProps} dispose={null}>
      {Object.entries<Mesh>(nodes).map(([name, geo]) => {
        return (
          <primitive key={name} object={geo} visible={parts.includes(name)} />
        );
      })}
    </group>
  );
}
useGLTF.preload("/chair.glb");
