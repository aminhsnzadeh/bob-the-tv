
export default function MainLight() {

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight
                position={[0, 3, 5]}
                intensity={1}
                castShadow={true}
            />
        </>
    )
}