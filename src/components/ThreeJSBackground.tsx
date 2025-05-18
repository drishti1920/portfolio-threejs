import { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";
import { Sphere } from "@react-three/drei";

function FloatingSphere({
  position,
  size,
  color,
  speed = 1,
  offset = 0,
}: {
  position: [number, number, number];
  size: number;
  color: string;
  speed?: number;
  offset?: number;
}) {
  // @ts-ignore
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y =
        position[1] + Math.sin((clock.getElapsedTime() + offset) * speed) * 0.5;
      ref.current.rotation.x = clock.getElapsedTime() * 0.2;
      ref.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={ref} args={[size, 16, 16]} position={position}>
      <meshStandardMaterial color={color} roughness={0.4} metalness={0.1} />
    </Sphere>
  );
}

function ResponsiveCamera() {
  const { viewport } = useThree();

  return (
    <perspectiveCamera
      position={[0, 0, viewport.width < 768 ? 15 : 10]}
      fov={50}
    />
  );
}

function Scene() {
  const { scrollYProgress } = useScroll();
  // @ts-ignore
  const group = useRef<THREE.Group>(null);

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      if (group.current) {
        group.current.rotation.y = latest * Math.PI * 0.8;
        group.current.position.z = latest * -2;
      }
    });
  }, [scrollYProgress]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <ResponsiveCamera />
      <group ref={group}>
        <FloatingSphere
          position={[-4, 0, -2]}
          size={1.2}
          color="#626F47"
          speed={0.6}
          offset={0}
        />
        <FloatingSphere
          position={[4, 1, 2]}
          size={0.8}
          color="#d4a373"
          speed={0.8}
          offset={2}
        />
        <FloatingSphere
          position={[0, -2, 0]}
          size={1.5}
          color="#d4a373"
          speed={0.4}
          offset={4}
        />
        <FloatingSphere
          position={[2, 3, -3]}
          size={0.7}
          color="#4a543a"
          speed={1}
          offset={6}
        />
      </group>
    </>
  );
}

export default function ThreeJSBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-40">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}
