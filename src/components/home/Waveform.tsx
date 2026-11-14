"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { useReducedMotion } from "framer-motion"

// A field of points that moves like a speech spectrogram: bursts of
// "syllables" travel along x, higher rows carry higher frequencies, and the
// pointer drops a ripple into the field. Runs on the GPU in one draw call.

const vertex = /* glsl */ `
  uniform float uTime;
  uniform vec2 uPointer;
  uniform float uPixelRatio;
  attribute float aRow;
  varying float vH;
  varying float vRow;

  void main() {
    vec3 p = position;
    float t = uTime;
    float env = 0.5 + 0.5 * sin(p.x * 0.55 - t * 1.1) * sin(p.x * 0.21 + t * 0.45);
    env = smoothstep(0.15, 1.0, env);
    float freq = 0.6 + aRow * 3.2;
    float h = sin(p.x * freq - t * 2.6 + aRow * 9.0) * env * (1.0 - aRow * 0.55);
    float d = distance(p.xz, uPointer);
    h += 0.7 * exp(-d * d * 0.6) * sin(d * 4.0 - t * 5.0);
    p.y += h * 0.55;
    vH = h;
    vRow = aRow;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (1.6 + abs(h) * 2.6) * uPixelRatio * (7.0 / -mv.z);
  }
`

const fragment = /* glsl */ `
  uniform vec3 uLow;
  uniform vec3 uHigh;
  varying float vH;
  varying float vRow;

  void main() {
    vec2 c = gl_PointCoord - 0.5;
    if (dot(c, c) > 0.25) discard;
    vec3 col = mix(uLow, uHigh, vRow);
    float a = 0.18 + min(abs(vH), 1.0) * 0.82;
    gl_FragColor = vec4(col, a);
  }
`

function Field({ pointer }: { pointer: React.RefObject<THREE.Vector2> }) {
  const { size, gl } = useThree()
  const narrow = size.width < 768
  const cols = narrow ? 90 : 170
  const rows = narrow ? 26 : 40

  const geometry = useMemo(() => {
    const pos = new Float32Array(cols * rows * 3)
    const row = new Float32Array(cols * rows)
    let i = 0
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pos[i * 3] = (c / (cols - 1) - 0.5) * 18
        pos[i * 3 + 1] = 0
        pos[i * 3 + 2] = (r / (rows - 1)) * -6 + 1.5
        row[i] = r / (rows - 1)
        i++
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3))
    g.setAttribute("aRow", new THREE.BufferAttribute(row, 1))
    return g
  }, [cols, rows])

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: vertex,
        fragmentShader: fragment,
        transparent: true,
        depthWrite: false,
        uniforms: {
          uTime: { value: 0 },
          uPointer: { value: new THREE.Vector2(99, 99) },
          uPixelRatio: { value: gl.getPixelRatio() },
          uLow: { value: new THREE.Color("#4C8DFF") },
          uHigh: { value: new THREE.Color("#7C6CFF") },
        },
      }),
    [gl]
  )

  useEffect(() => () => {
    geometry.dispose()
    material.dispose()
  }, [geometry, material])

  useFrame((_, delta) => {
    const u = material.uniforms
    // eslint-disable-next-line react-hooks/immutability -- three.js uniforms are mutated per frame by design
    u.uTime.value += Math.min(delta, 0.05)
    // Ease the ripple toward the pointer so it trails a little.
    ;(u.uPointer.value as THREE.Vector2).lerp(pointer.current, 0.08)
  })

  return <points geometry={geometry} material={material} />
}

export default function Waveform() {
  const wrap = useRef<HTMLDivElement>(null)
  const pointer = useRef(new THREE.Vector2(99, 99))
  const [visible, setVisible] = useState(true)
  const reduce = useReducedMotion()

  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting))
    io.observe(el)
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - 0.5
      const y = (e.clientY - r.top) / r.height
      // Rough screen → plane mapping; good enough for a ripple.
      pointer.current.set(x * 16, 1.5 - y * 6)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      io.disconnect()
      window.removeEventListener("pointermove", onMove)
    }
  }, [reduce])

  if (reduce !== false) return null // also null before the preference is known
  return (
    <div ref={wrap} className="absolute inset-0" aria-hidden>
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 2.4, 7], fov: 50 }}
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
        onCreated={({ camera }) => camera.lookAt(0, -0.4, -1.5)}
      >
        <Field pointer={pointer} />
      </Canvas>
    </div>
  )
}
