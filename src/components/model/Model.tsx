import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

export default function Model() {
    const mesh = useRef();
    const {nodes} = useGLTF('/glass-crane.glb');
    const {viewport} = useThree();

    console.log(nodes);
    
    useFrame(() => {
        mesh.current.rotation.x += 0.005;
        mesh.current.rotation.y += 0.003;
    });

    const materialProps = useControls({
        thickness: {value: 0, min: 0, max: 3, step: 0.05},
        roughness: {value: 0, min: 0, max: 1, step: 0.1},
        transmission: {value: 1, min: 0, max: 1, step: 0.1},
        ior: {value: 0, min: 0, max: 3, step: 0.1},
        chromaticAbberration: {value: 0.1, min: 0, max: 0.1},
        backside: {value: true},
        opacity: {value: 0.6, min: 0, max: 1, step: 0.1},
    });


    return (
        <group scale={viewport.width / 5}>
            <mesh ref={mesh} {...nodes.Object_3 }>
                <MeshTransmissionMaterial 
                {...materialProps} 
                transparent={true} />

            </mesh>
        </group>
    )
}