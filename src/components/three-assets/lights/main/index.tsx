
export default function MainLight() {

    return (
        <>
            <ambientLight intensity={0.5} color="#171E14"  />
            <directionalLight
                position={[5, 10, 5]}
                intensity={6}
                color="#171E14"
            />
        </>
    )
}