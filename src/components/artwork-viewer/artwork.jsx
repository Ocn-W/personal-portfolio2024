import { React, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { artwork } from "../../constants/arrays";

export default function Artwork({ curr, props }) {
  const { nodes, materials } = useGLTF(artwork[curr].GLTF);
  //Edit Camera Position
  const cameraConfig = { fov: 60, position: [10, 0, 0], zoom: 1 };
  //Edit object Positon (X|Y|Z)
  const objectPosition = [0, -4, 0];

  return (
    <Canvas
      style={{ height: "100%", width: "100%" }}
      className="artwork-container"
    >
      <Suspense fallback={<ContentLoader/>}>
        <PerspectiveCamera makeDefault {...cameraConfig} />
        <group {...props} dispose={null}>
          <mesh
            castShadow
            receiveShadow
            position={objectPosition}
            geometry={nodes.Painting_Cube_Wood.geometry}
            material={materials.Wood}
          />
          <mesh
            castShadow
            receiveShadow
            position={objectPosition}
            geometry={nodes.Painting_Cube_Painting.geometry}
            material={materials.Painting}
          />
          <mesh
            castShadow
            receiveShadow
            position={objectPosition}
            geometry={nodes.Painting_Cube_Material.geometry}
            material={materials.Material}
          />
        </group>
        <OrbitControls
          enableZoom={false}
          minDistance={1}
          maxDistance={100}
          object={artwork.map((art) => art.GLTF)}
        />
        <ambientLight intensity={5} />
      </Suspense>
    </Canvas>
  );
}

artwork.forEach((item) => useGLTF.preload(item.GLTF));