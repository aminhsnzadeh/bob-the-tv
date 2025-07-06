import {Canvas} from "@react-three/fiber";
import {MainCamera} from "../../components/three-assets/camera";
import MainLight from "../../components/three-assets/lights/main";
import Bob from "../../components/three-assets/objects/bob";
import PointLights from "../../components/three-assets/lights/points";

export default function Scene() {

    return (
        <>
            <Canvas shadows  >
                <MainCamera />
                <MainLight />
                <Bob position={[0, 0, 0]} />
                <PointLights />
            </Canvas>

        </>
    )
}
