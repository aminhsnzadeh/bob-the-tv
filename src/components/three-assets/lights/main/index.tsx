
export default function MainLight() {

    return (
        <>
            <ambientLight intensity={0.5} color="#171E14"  />
            <directionalLight
                position={[5, 10, 5]}
                intensity={6}
                shadow-mapSize-width={2048}  // or 4096 for ultra
                shadow-mapSize-height={2048}
                color="#171E14"
            />
        </>
    )
}