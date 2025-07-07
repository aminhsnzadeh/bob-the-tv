import { useGLTF } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import { Object3D, AnimationMixer, MeshStandardMaterial, VideoTexture, LinearFilter, RGBFormat } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Props {
    position?: [number, number, number] | [0, 0, 0];
}

export default function Bob({ position = [0, 0, 0] }: Props) {
    const { scene, animations } = useGLTF('./glbs/tv-man.glb');
    const mixer = useMemo(() => new AnimationMixer(scene), [scene]);
    const bobRef = useRef<Object3D | null>(null);

    useEffect(() => {
        const bobTop = scene.getObjectByName('Cube003_2');

        if (bobTop) {
            bobRef.current = bobTop;
        }

        scene.traverse((obj) => {
            if (obj.isObject3D) {
                if(obj.name != "tv" && obj.name != "Cube001" && obj.name != "Cube002" && obj.name != "Cube002_1") {
                    obj.receiveShadow = true;
                }
                obj.castShadow = true;
            }
        });
        const monitorMesh = scene.getObjectByName('screen') as THREE.Mesh;
        if (monitorMesh) {
            const video = document.createElement('video');
            video.src = '/textures/glitch.mp4';
            video.loop = true;
            video.muted = true;
            video.play();

            const videoTexture = new VideoTexture(video);
            videoTexture.minFilter = LinearFilter;
            videoTexture.magFilter = LinearFilter;
            videoTexture.format = RGBFormat;

            const material = monitorMesh.material as MeshStandardMaterial;
            material.map = videoTexture;

            material.transparent = true;
            material.opacity = 1;
            material.alphaTest = 1;
            // Optional: make it glow a bit
            material.emissive = new THREE.Color(0x629277);
            material.emissiveMap = videoTexture;
            material.emissiveIntensity = 0.3;


            material.needsUpdate = true;
        }

        if (animations.length) {
            const action = mixer.clipAction(animations[0]);
            action.play();

            return () => {
                mixer.stopAllAction();
            };
        }
    }, [scene, animations, mixer]);

    useFrame((state, delta) => {
        mixer.update(delta);
    });

    return <primitive object={scene} position={position} rotation={[0, 0, 0]} />;
}
