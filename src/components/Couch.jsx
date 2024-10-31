import React from "react";
import { useGLTF } from "@react-three/drei";
import { useState, useEffect } from "react";

function Couch({ model, position, rotation, highlight }) {
  const { nodes, materials } = useGLTF("/couch-grey.gltf");

  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    document.body.style.cursor = mouseHover ? "pointer" : "auto";
  }, [mouseHover]);

  return (
    <mesh
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
      geometry={nodes["Rustic_Elegance_1018195033"].geometry}
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
          "https://furniture.bcitwebdeveloper.ca/product/the-coastal-couch/";
      }}
    ></mesh>
  );
}

export default Couch;
