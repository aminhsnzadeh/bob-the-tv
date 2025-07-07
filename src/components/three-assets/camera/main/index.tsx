import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)
    const isMobilePoint: boolean = window.innerWidth <= 768
    const responsivePosition: [number, number, number] = isMobilePoint ? [-8, 3, 14] : [-8, 3, 12]
    const responsiveYRotation = isMobilePoint ? -(Math.PI / 6) : -(Math.PI / 3)

    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                makeDefault position={responsivePosition}
                rotation={[0, responsiveYRotation, 0]}
                fov={50}
            />
        </>
    )
}