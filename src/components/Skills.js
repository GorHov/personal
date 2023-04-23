import { Text, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 1.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  // eslint-disable-next-line no-sequences
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#fa2720" : "white"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      onClick={() => console.log("clicked")}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const wordArray = ["JavaScript", "HTML", "TypeScript", "React.JS","SASS", "Vue.JS", "Node.js", "CSS","Redux", "MongoDB", "Bootstrap", "GraphQL","Express", "MySQL", "Material UI", "GIT","Three.js", "Canvas","REST API", "Saga", "Next JS", "Nuxt JS","Quasar"]; // Add your words here
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    let wordIndex = 0;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const word = wordArray[wordIndex];
        wordIndex = (wordIndex + 1) % wordArray.length; // Move to the next word or loop back to the first

        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          word,
        ]);
      }
    }
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow">
              <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}
              style={{height: '600px'}}>
                <fog attach="fog" args={["#202025", 0, 80]} />
                <Cloud count={8} radius={20} />
                <TrackballControls />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};