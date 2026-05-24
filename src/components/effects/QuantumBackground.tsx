"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial } from "@react-three/drei"
import * as THREE from "three"

function QuantumParticles({ count = 60 }) {
  const pointsRef = useRef<THREE.Points>(null!)

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r1 = ((i * 3) * 9301 + 49297) % 233280 / 233280
      const r2 = ((i * 3 + 1) * 9301 + 49297) % 233280 / 233280
      const r3 = ((i * 3 + 2) * 9301 + 49297) % 233280 / 233280
      pos[i * 3] = (r1 - 0.5) * 12
      pos[i * 3 + 1] = (r2 - 0.5) * 12
      pos[i * 3 + 2] = (r3 - 0.5) * 12
    }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    return geo
  }, [count])

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1
    }
  })

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#F5A623"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function QuantumCore() {
  const mesh = useRef<THREE.Mesh>(null!)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.2
      mesh.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.2
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.2, 1]} />
        <MeshDistortMaterial
          color="#2C3E7A"
          emissive="#F5A623"
          emissiveIntensity={0.15}
          wireframe
          transparent
          opacity={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function OrbitingRing({ radius, color, speed, offset = 0 }: { radius: number; color: string; speed: number; offset?: number }) {
  const dots = useRef<THREE.Group>(null!)

  const positions = useMemo(() => {
    const count = 30
    const pos: [number, number, number][] = []
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2
      pos.push([Math.cos(angle) * radius, Math.sin(angle) * radius * 0.1, Math.sin(angle) * radius])
    }
    return pos
  }, [radius])

  useFrame(({ clock }) => {
    if (dots.current) {
      dots.current.rotation.y = clock.getElapsedTime() * speed + offset
      dots.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1 + offset) * 0.1
    }
  })

  return (
    <group ref={dots}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 6, 6]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  )
}

function QuantumScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} color="#F5A623" />
      <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#2C3E7A" />
      <QuantumCore />
      <QuantumParticles count={80} />
      <OrbitingRing radius={2.5} color="#F5A623" speed={0.3} />
      <OrbitingRing radius={3.5} color="#E91E8C" speed={-0.2} offset={1} />
      <OrbitingRing radius={4.5} color="#2C3E7A" speed={0.15} offset={2} />
    </>
  )
}

export default function QuantumBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <QuantumScene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/60" />
    </div>
  )
}
