import React from "react";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

function CoffeeTable({ model, position, rotation, highlight }) {
  const { nodes, materials } = useGLTF("/coffee_table.gltf");

  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

  return (
    <mesh
      scale={1}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      geometry={nodes["Rustic_Elegance_1030164314"].geometry}
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
          "https://furniture.bcitwebdeveloper.ca/product/the-drift-coffee-table/";
      }}
    ></mesh>
  );
}

export default CoffeeTable;
