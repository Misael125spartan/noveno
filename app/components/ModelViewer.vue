<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
// Importamos los controles de órbita
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const props = defineProps({
  modelPath: {
    type: String,
    default: '/dragon.stl'
  }
});

const container = ref(null);
let renderer, scene, camera, controls, animationId;

onMounted(() => {
  // 1. Escena
  scene = new THREE.Scene();
  
  // 2. Cámara (Ajustada para mejor encuadre)
  const width = container.value.clientWidth;
  const height = container.value.clientHeight;
  camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.set(0, 0, 8); 

  // 3. Renderizador
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.value.appendChild(renderer.domElement);

  // 4. OrbitControls (Interactividad con el ratón)
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Agrega inercia para que el movimiento sea suave
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 2; // Zoom mínimo
  controls.maxDistance = 15; // Zoom máximo

  // 5. Iluminación Estilo UNSC
  const light = new THREE.DirectionalLight(0x40e0d0, 2.5); 
  light.position.set(5, 10, 7.5);
  scene.add(light);
  scene.add(new THREE.AmbientLight(0x404040, 1.8));

  // 6. Carga del Modelo
  const loader = new STLLoader();
  loader.load(props.modelPath, (geometry) => {
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x556b2f, // Verde militar
      metalness: 0.8, 
      roughness: 0.3 
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    geometry.center(); // Asegura el centrado absoluto
    mesh.rotation.x = -Math.PI / 2;
    
    // Escala ajustada para el dragón
    mesh.scale.set(0.035, 0.035, 0.035); 
    
    scene.add(mesh);

    // Animación fluida
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Actualizamos los controles en cada frame
      controls.update(); 
      
      renderer.render(scene, camera);
    };
    animate();
  });

  const handleResize = () => {
    if (!container.value) return;
    const newWidth = container.value.clientWidth;
    const newHeight = container.value.clientHeight;
    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(newWidth, newHeight);
  };
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('resize', handleResize);
  if (controls) controls.dispose();
  if (renderer) renderer.dispose();
});
</script>

<template>
  <div class="viewer-wrapper">
    <div ref="container" class="canvas-container"></div>
    
    <div class="overlay-ui">
      <div class="status-indicator"></div>
      <div class="text-group">
        <p class="status-text">PROTOCOLO DE CONTROL: MANUAL</p>
        <p class="sub-text">PROYECTO INGENIERÍA TIC - ITGAM</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.viewer-wrapper {
  position: relative;
  width: 100%;
  height: 500px;
  background: radial-gradient(circle, #0a1414 0%, #020505 100%);
  border: 1px solid #1a3030;
  border-radius: 15px;
  overflow: hidden;
  cursor: grab; /* Indica que se puede arrastrar */
}

.viewer-wrapper:active {
  cursor: grabbing;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

.overlay-ui {
  position: absolute;
  bottom: 15px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  pointer-events: none;
}

.text-group {
  display: flex;
  flex-direction: column;
}

.status-indicator {
  width: 10px;
  height: 10px;
  background-color: #40e0d0;
  border-radius: 50%;
  box-shadow: 0 0 10px #40e0d0;
  animation: pulse 2s infinite;
}

.status-text {
  color: #40e0d0;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.75rem;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 0;
}

.sub-text {
  color: rgba(64, 224, 208, 0.6);
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.6rem;
  margin: 0;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.5; }
  100% { transform: scale(1); opacity: 1; }
}
</style>