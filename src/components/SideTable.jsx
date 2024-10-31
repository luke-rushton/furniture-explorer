import React from "react";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

function SideTable({ model, position, rotation, highlight }) {
  const { nodes, materials } = useGLTF("/side_table.gltf");

  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

  return (
    <mesh
      scale={0.25}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      geometry={nodes["Rustic_Elegance_1030163554"].geometry}
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
          "https://furniture.bcitwebdeveloper.ca/product/the-harbor-side-table/";
      }}
    ></mesh>
  );
}

export default SideTable;
