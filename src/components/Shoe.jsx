import * as THREE from "three";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { useState } from "react";

function Shoe({ aiTexture }) {
    const [meshes, setMeshes] = useState([]);

    const { nodes } = useGLTF("/flower.glb");
    console.log(nodes);
    // for (key in nodes) {
    //     console.log(key)
    // }

    for (let key of Object.keys(nodes)) {
        // console.log(key)
        // console.log(nodes[key])
        if (nodes[key].constructor.name == "Mesh") {
            console.log(key) // Tshirt_male
            console.log(nodes[key])

            meshes.push(<mesh castShadow
                geometry={nodes[key].geometry}
                material={new THREE.MeshStandardMaterial()}
                // material-roughness={4}
                scale={[15, -15, -15]}
                rotation={[0, 0, Math.PI]}></mesh>)
        }
    }

    return (
        <group>
            {meshes}
                {/* <Decal
                    position={[0, 0, 0]}
                    rotation={[0, 5, 0]}
                    scale={-0.3}
                    map={useTexture(aiTexture)}
                /> */}
        </group>
    );
}

export default Shoe;
