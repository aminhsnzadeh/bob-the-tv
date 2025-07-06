import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)

    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                makeDefault position={[-8, 3, 12]}
                rotation={[0, -(Math.PI / 3), 0]}
                fov={50}
            />
        </>
    )
}