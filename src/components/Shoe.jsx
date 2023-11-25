import * as THREE from "three";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

function Shoe({ aiTexture }) {
    const { nodes } = useGLTF("/flower.glb");
    console.log(nodes);
    return (
        <group>
            <mesh
                castShadow
                geometry={nodes.Blossom.geometry}
                material={new THREE.MeshStandardMaterial()}
                material-roughness={4}
                scale={[15, -15, -15]}
                rotation={[-0.5, 0, -0.05]}
            >
                {/* <Decal
                    position={[0, 0, 0]}
                    rotation={[0, 5, 0]}
                    scale={-0.3}
                    map={useTexture(aiTexture)}
                /> */}
            </mesh>
            <mesh
                castShadow
                geometry={nodes.Stem.geometry}
                material={new THREE.MeshStandardMaterial()}
                material-roughness={4}
                scale={[15, -15, -15]}
                rotation={[-0.5, 0, -0.05]}
            ></mesh>
        </group>
    );
}

export default Shoe;
