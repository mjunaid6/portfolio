import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Vertex shader for liquid distortion
const vertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Fragment shader with smooth liquid distortion
const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uMouseIntensity;
  
  varying vec2 vUv;
  varying vec3 vPosition;
  
  // Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }
  
  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                     + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
                            dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }
  
  void main() {
    vec2 uv = vUv;
    
    // Normalize mouse position
    vec2 mouse = uMouse * 0.5 + 0.5;
    
    // Distance from mouse
    float dist = distance(uv, mouse);
    float mouseEffect = smoothstep(0.5, 0.0, dist) * uMouseIntensity;
    
    // Time-based animation
    float time = uTime * 0.15;
    
    // Multiple layers of noise for organic liquid feel
    float noise1 = snoise(uv * 2.0 + time * 0.5);
    float noise2 = snoise(uv * 4.0 - time * 0.3) * 0.5;
    float noise3 = snoise(uv * 8.0 + time * 0.2) * 0.25;
    
    float combinedNoise = noise1 + noise2 + noise3;
    
    // Add mouse interaction to distortion
    combinedNoise += mouseEffect * snoise((uv - mouse) * 3.0 + time) * 2.0;
    
    // Dark premium color palette
    vec3 darkBase = vec3(0.02, 0.025, 0.04);
    vec3 midTone = vec3(0.04, 0.05, 0.08);
    vec3 highlight = vec3(0.08, 0.09, 0.12);
    vec3 accent = vec3(0.85, 0.65, 0.25); // Warm gold accent
    
    // Create color based on noise
    float colorMix = combinedNoise * 0.5 + 0.5;
    colorMix = smoothstep(0.3, 0.7, colorMix);
    
    vec3 color = mix(darkBase, midTone, colorMix);
    color = mix(color, highlight, smoothstep(0.6, 0.9, colorMix) * 0.5);
    
    // Subtle accent glow near mouse
    float accentGlow = smoothstep(0.4, 0.0, dist) * mouseEffect * 0.15;
    color += accent * accentGlow;
    
    // Vignette effect
    float vignette = 1.0 - smoothstep(0.4, 1.2, length(uv - 0.5));
    color *= vignette * 0.9 + 0.1;
    
    gl_FragColor = vec4(color, 1.0);
  }
`;

interface LiquidMeshProps {
  mousePosition: { x: number; y: number };
  prefersReducedMotion: boolean;
}

function LiquidMesh({ mousePosition, prefersReducedMotion }: LiquidMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });
  const targetIntensity = useRef(0);
  const currentIntensity = useRef(0);
  
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    uMouseIntensity: { value: 0 },
  }), []);
  
  useEffect(() => {
    targetMouse.current = mousePosition;
    targetIntensity.current = 1;
    
    const timeout = setTimeout(() => {
      targetIntensity.current = 0.3;
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [mousePosition]);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const material = meshRef.current.material as THREE.ShaderMaterial;
    
    // Smooth interpolation
    const lerpFactor = 0.05;
    currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * lerpFactor;
    currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * lerpFactor;
    currentIntensity.current += (targetIntensity.current - currentIntensity.current) * lerpFactor;
    
    material.uniforms.uTime.value = prefersReducedMotion ? 0 : state.clock.elapsedTime;
    material.uniforms.uMouse.value.set(currentMouse.current.x, currentMouse.current.y);
    material.uniforms.uMouseIntensity.value = prefersReducedMotion ? 0 : currentIntensity.current;
  });
  
  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function LiquidBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleMotionChange);
    
    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  useEffect(() => {
    if (isMobile || prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, prefersReducedMotion]);
  
  // Disable on mobile for performance
  if (isMobile) {
    return (
      <div 
        className="fixed inset-0 -z-10"
        style={{ 
          background: 'linear-gradient(180deg, hsl(220 20% 4%) 0%, hsl(220 25% 8%) 100%)'
        }}
      />
    );
  }
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{ 
          antialias: true,
          alpha: false,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
      >
        <LiquidMesh 
          mousePosition={mousePosition} 
          prefersReducedMotion={prefersReducedMotion}
        />
      </Canvas>
    </div>
  );
}
