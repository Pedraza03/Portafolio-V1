import { Suspense, useEffect, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload, Environment, Sphere } from '@react-three/drei'
import CanvasLoader from './Loader'


const Computer = ( {isMobile}) => {
    const computer = useGLTF('./desktop_pc/scene.gltf')

    useEffect(() => {
        if (computer.scene) {
            computer.scene.traverse((child) => {
                if (child.isMesh) {
                    child.frustumCulled = true;
                    child.material.needsUpdate = false;
                }
            });
        }

        return () => {
            computer.scene.traverse((child) => {
                if (child.isMesh && child.geometry) {
                    child.geometry.dispose();
                    child.material.dispose();
                }
            });
        }
    }, [computer]);

    return (
        <mesh>
            <ambientLight intensity={0.5} />
            
            <directionalLight
                position={[0, 10, 5]}
                intensity={1.5}
                castShadow
                shadow-mapSize={512}
            />

            <Environment preset="city" />
            
            <spotLight 
                position={[10, 5, 5]} 
                intensity={4}
                color="#ff00ff"
                angle={0.5}
                penumbra={0.5}
                distance={20}
            />
            
            <spotLight 
                position={[-10, 5, 5]} 
                intensity={4}
                color="#00ffff"
                angle={0.5}
                penumbra={0.5}
                distance={20}
            />
            <primitive 
                object={computer.scene}
                scale={isMobile ? 0.7 : 0.75}
                position={isMobile ? [0, -4.1, -1.2] : [0, -3.25, -1.1]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    )
}

const ComputerCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas 
            shadows 
            camera={{ 
                position: [30, 3, 5], 
                fov: isMobile ? 35 : 25
            }} 
            gl={{ 
                preserveDrawingBuffer: true,
                powerPreference: "high-performance",
            }}
            dpr={Math.min(window.devicePixelRatio, 2)}
        >
            <Environment preset="city" />
            
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer isMobile={isMobile}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default ComputerCanvas