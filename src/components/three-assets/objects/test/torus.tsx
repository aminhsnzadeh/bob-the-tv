import { useRef } from "react"

interface torusTypes {
    position: [number, number, number]
    color: string
}

export default function Torus({ position, color = "purple" }: torusTypes) {

    const ref = useRef(null)


    return (
        <mesh castShadow={true} receiveShadow={true} ref={ref} position={position} rotation={[0, Math.PI / 1.5, 0]} >
            <torusGeometry args={[0.5, 0.2, 16, 100]} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}