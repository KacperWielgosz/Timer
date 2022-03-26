import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, OrbitControls, Environment } from '@react-three/drei'
import { LayerMaterial, Base, Depth, Noise } from 'lamina'
import { Leva } from 'leva'
import styles from './Background.module.scss'

const Background = () => {
  return(
    <Canvas className={styles.background}>
      <ambientLight intensity={0.7} />
      <directionalLight color={'red'} positon={0, 1, 0} intensity={1} dacay={4} />
      <OrbitControls autoRotate minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8}/>
      <Sphere args ={[1, 100, 200]} scale ={1.5}>
        <MeshDistortMaterial color="#d6ace6" attach="material" distort={1}
        roughness = {0.5} metalness={1}/>
      </Sphere>
      <Environment background resolution={1024}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 100, 200]} />
          <LayerMaterial side={THREE.BackSide}>
            <Depth colorA="#00ffff" colorB="#ff8f00" mode="normal" near={0} far={500} origin={[100, 100, 100]} />
            <Noise mapping="local" type="cell" scale={0.2} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>
    </Canvas>
  )
}

export default Background
