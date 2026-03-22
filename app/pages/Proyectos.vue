<script setup lang="ts">
// Definición de la lista de proyectos según el reporte [cite: 1151-1170]
const proyectos = [
  {
    titulo: 'Aplicación Pokémon',
    descripcion: 'Desarrollo de una Pokedex funcional con consumo de API externa.',
    tecnologias: ['Vue', 'Nuxt', 'JavaScript'],
    link: '#',
  },
  {
    titulo: 'Clasificador de Imágenes Halo',
    descripcion: 'Proyecto de Machine Learning enfocado en reconocimiento de imágenes temáticas.',
    tecnologias: ['TensorFlow.js', 'Node.js'],
    link: '#',
  },
  {
    titulo: 'Portafolio SSR 2026A',
    descripcion: 'Sitio web profesional con renderizado del lado del servidor y efectos dinámicos.',
    tecnologias: ['Nuxt', 'CSS Avanzado', 'SSR'],
    link: '#',
  },
]
</script>

<template>
  <div class="container">
    <section class="proyectos">
      <h1 class="proyectos__title">Mis Proyectos</h1>
      <p class="proyectos__subtitle">
        Galería de trabajos realizados en la carrera de Ing. en Tecnologías de la Información.
      </p>

      <div class="proyectos__grid">
        <div
          v-for="(proyecto, index) in proyectos"
          :key="index"
          class="proyecto__card"
        >
          <div class="proyecto__content">
            <h2 class="proyecto__title">{{ proyecto.titulo }}</h2>
            <p class="proyecto__desc">{{ proyecto.descripcion }}</p>
            
            <div class="proyecto__tech">
              <span
                v-for="(tech, i) in proyecto.tecnologias"
                :key="i"
                class="tech"
              >
                {{ tech }}
              </span>
            </div>

            <a :href="proyecto.link" target="_blank" class="proyecto__link">
              Ver proyecto →
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Corrección de selectores globales  */
*, *::before, *::after {
  box-sizing: border-box;
}

.container {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  /* Transparencia para ver la lluvia Matrix */
  background: rgba(22, 0, 31, 0.85); 
}

.proyectos {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.proyectos__title {
  color: #00ff00; /* Verde Matrix */
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.proyectos__subtitle { /* Punto corregido aquí  */
  color: #cbd5e1;
  font-size: 1rem;
  margin-bottom: 40px;
}

.proyectos__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.proyecto__card {
  background: #020617;
  border: 1px solid rgba(0, 255, 0, 0.3); /* Borde verde sutil [cite: 1295] */
  border-radius: 16px;
  padding: 20px;
  text-align: left;
  transition: all 0.3s ease;
}

.proyecto__card:hover {
  transform: translateY(-8px); /* Elevación más pronunciada [cite: 1303] */
  border-color: #00ff00; /* Brillo verde al pasar el mouse [cite: 1314] */
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

.proyecto__title {
  color: #ffffff;
  font-size: 1.3rem;
  margin-bottom: 10px;
}

.proyecto__desc {
  color: #94a3b8;
  font-size: 0.95rem;
  margin-bottom: 16px;
  line-height: 1.6;
}

.proyecto__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 18px;
}

.tech {
  font-size: 0.7rem;
  padding: 5px 10px;
  border-radius: 20px; /* Estilo de píldora */
  background: rgba(0, 255, 0, 0.1);
  color: #00ff00;
  border: 1px solid rgba(0, 255, 0, 0.3);
}

.proyecto__link {
  font-size: 0.9rem;
  color: #00ff00;
  text-decoration: none;
  font-weight: bold;
}

.proyecto__link:hover {
  text-decoration: underline;
}

@media (max-width: 500px) {
  .container { padding: 30px 14px; }
  .proyectos__subtitle { font-size: 0.9rem; }
}
</style>s