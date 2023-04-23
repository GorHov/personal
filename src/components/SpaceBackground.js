import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { useRef, useState } from 'react'


export default function SpaceBackground() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Stars />
    </Canvas>
    </div>
  )
}

function Stars(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(4000), { radius: 2 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 30
    ref.current.rotation.y -= delta / 30
  })
  return (
    <group  rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}