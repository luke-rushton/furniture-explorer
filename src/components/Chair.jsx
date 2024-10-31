import React from "react";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

function Chair({ model, position, rotation, highlight }) {
  const { nodes, materials } = useGLTF("/rustic_comfort_chair.gltf");

  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

  return (
    <mesh
      scale={0.5}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      geometry={nodes["Rustic_Comfort_Chair_1029232208"].geometry}
      material={materials["Material.001"]}
      onPointerEnter={(e) => {
        e.stopPropagation();
        highlight(true);
        setMouseHover(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        highlight(false);
        setMouseHover(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        window.location.href =
          "https://furniture.bcitwebdeveloper.ca/product/the-tide-chair/";
      }}
    ></mesh>
  );
}

export default Chair;
