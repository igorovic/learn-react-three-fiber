import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props: any) {
  const group = useRef();
  //@ts-ignore
  const { nodes, materials } = useGLTF("/chair.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
        visible={false}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1.geometry}
        material={nodes.mesh_1.material}
        position={[0, 0, 0.83]}
        //rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_5.geometry}
        material={nodes.mesh_5.material}
        position={[0, 0, 0.83]}
        //rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_6.geometry}
        material={nodes.mesh_6.material}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_7.geometry}
        material={nodes.mesh_7.material}
        position={[0, 0, 0.83]}
        //rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_8.geometry}
        material={nodes.mesh_8.material}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_9.geometry}
        material={nodes.mesh_9.material}
        position={[0, 0, 0.83]}
        //rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_10.geometry}
        material={nodes.mesh_10.material}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_11.geometry}
        material={nodes.mesh_11.material}
        position={[0, 0, 0.83]}
        //rotation={[-Math.PI / 2, 0, 0]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_12.geometry}
        material={nodes.mesh_12.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_13.geometry}
        material={nodes.mesh_13.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_14.geometry}
        material={nodes.mesh_14.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_15.geometry}
        material={nodes.mesh_15.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_16.geometry}
        material={nodes.mesh_16.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_17.geometry}
        material={nodes.mesh_17.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_18.geometry}
        material={nodes.mesh_18.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_19.geometry}
        material={nodes.mesh_19.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_20.geometry}
        material={nodes.mesh_20.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_21.geometry}
        material={nodes.mesh_21.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_22.geometry}
        material={nodes.mesh_22.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_23.geometry}
        material={nodes.mesh_23.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_24.geometry}
        material={materials.greyad0f9f5e}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_4.geometry}
        material={materials.rm814026656}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2.geometry}
        material={nodes.mesh_2.material}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3.geometry}
        material={nodes.mesh_3.material}
      />
    </group>
  );
}

useGLTF.preload("/chair.glb");
