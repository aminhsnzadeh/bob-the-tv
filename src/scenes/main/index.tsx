import {Canvas} from "@react-three/fiber";
import {MainCamera} from "../../components/three-assets/camera";
import {Torus} from "../../components/three-assets/objects";
import MainLight from "../../components/three-assets/lights/main";
import {OrbitControls} from "@react-three/drei";

export default function Scene() {

    return (
        <>
            <Canvas shadows >
                <MainCamera />
                <MainLight />
                <Torus position={[0, 0, 0]} color={'red'} />
                <OrbitControls />
            </Canvas>

        </>
    )
}
