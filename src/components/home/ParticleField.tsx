"use client"

import { useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

// A slab of drifting points that part around the cursor. Colour runs from
// violet (far) to blue (near). One draw call; no post-processing.
const vert = /* glsl */ `
uniform float uTime; uniform vec2 uMouse; uniform float uSize;
attribute float aSeed; varying float vDepth;
void main() {
  vec3 p = position;
  p.y += sin(uTime * 0.25 + aSeed * 6.2831 + p.x * 0.4) * 0.18;
  p.x += cos(uTime * 0.2 + aSeed * 12.566) * 0.12;
  vec2 d = p.xy - uMouse;
  float f = exp(-dot(d, d) * 0.35);
  p.xy += normalize(d + 0.0001) * f * 0.7;
  p.z += f * 0.6;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vDepth = clamp((p.z + 3.0) / 6.0, 0.0, 1.0);
  gl_PointSize = uSize * (0.55 + vDepth) * (7.0 / -mv.z);
  gl_Position = projectionMatrix * mv;
}`
const frag = /* glsl */ `
uniform vec3 uFar; uniform vec3 uNear; uniform float uAlpha; varying float vDepth;
void main() {
  float r = length(gl_PointCoord - 0.5);
  if (r > 0.5) discard;
  gl_FragColor = vec4(mix(uFar, uNear, vDepth), smoothstep(0.5, 0.1, r) * uAlpha * (0.35 + vDepth * 0.65));
}`

function Points({ light, still }: { light: boolean; still: boolean }) {
  const { pointer } = useThree()
  const mouse = useRef(new THREE.Vector2(99, 99))
  const target = useRef(new THREE.Vector2())
  const { geo, uniforms } = useMemo(() => {
    const n = 2600
    const pos = new Float32Array(n * 3)
    const seed = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
      seed[i] = Math.random()
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1))
    return {
      geo: g,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: mouse.current },
        uSize: { value: 2.6 },
        uFar: { value: new THREE.Color(light ? "#5B4BEA" : "#8067FF") },
        uNear: { value: new THREE.Color(light ? "#2F6FE0" : "#4C8DFF") },
        uAlpha: { value: light ? 0.9 : 0.85 },
      },
    }
  }, [light])

  useFrame(({ clock, viewport }) => {
    if (still) return
    uniforms.uTime.value = clock.elapsedTime
    target.current.set((pointer.x * viewport.width) / 2, (pointer.y * viewport.height) / 2)
    mouse.current.lerp(target.current, 0.08)
  })

  return (
    <points geometry={geo} rotation={[-0.25, 0, 0]}>
      <shaderMaterial vertexShader={vert} fragmentShader={frag} uniforms={uniforms} transparent depthWrite={false} />
    </points>
  )
}

export default function ParticleField({ light, still }: { light: boolean; still: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 50 }}
      frameloop={still ? "demand" : "always"}
      gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <Points light={light} still={still} />
    </Canvas>
  )
}
