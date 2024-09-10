'use client';
import { Canvas } from '@react-three/fiber';
import Model from '../model/Model';
import { Environment } from '@react-three/drei';
import { Leva } from 'leva';

export default function Scene() {
    return (
        <>
            <Leva hidden />
            <Canvas>
                <directionalLight intensity={3} position={([3, 3, 2])} />
                <Environment files="golden_bay_4k.exr" />
                {/* <Model /> */}
            </Canvas>
        </>
    )
}