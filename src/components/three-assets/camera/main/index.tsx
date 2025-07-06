import { PerspectiveCamera } from '@react-three/drei';
import { useRef } from 'react';

export default function MainCamera() {

    const camRef = useRef(null)

    // an example to toggling the focus mode. On render click on red cube to see it
    return (
        <>
            <PerspectiveCamera
                ref={camRef}
                makeDefault
                position={[0, 0, 5]}
                fov={60}
            />
        </>
    )
}