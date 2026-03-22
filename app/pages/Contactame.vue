<script setup lang="ts">
import { reactive, ref } from 'vue'

const form = reactive({
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
})

const loading = ref(false)
const enviado = ref(false)
const errorMsg = ref('')

const handleSubmit = async () => {
  errorMsg.value = ''
  enviado.value = false

  if (!form.nombre || !form.email || !form.asunto || !form.mensaje) {
    errorMsg.value = 'Por favor completa todos los campos.'
    return
  }

  loading.value = true
  try {
    // Simulación de envío de 800ms según el manual
    await new Promise((resolve) => setTimeout(resolve, 800))
    enviado.value = true
    form.nombre = ''; form.email = ''; form.asunto = ''; form.mensaje = ''
  } catch (error) {
    errorMsg.value = 'Ocurrió un error al enviar el mensaje.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <section class="contacto">
      <div class="proyecto__card contacto__card">
        <div class="proyecto__content">
          <h1 class="proyectos__title">Hablemos de tu proyecto</h1>
          <p class="proyectos__subtitle">
            Si tienes una idea o propuesta, mándame un mensaje y nos pondremos en contacto.
          </p>

          <form class="contacto__form" @submit.prevent="handleSubmit">
            <div class="contacto__group">
              <label for="nombre">Nombre</label>
              <input id="nombre" v-model="form.nombre" type="text" placeholder="Tu nombre" />
            </div>

            <div class="contacto__group">
              <label for="email">Correo electrónico</label>
              <input id="email" v-model="form.email" type="email" placeholder="tucorreo@email.com" />
            </div>

            <div class="contacto__group">
              <label for="asunto">Asunto</label>
              <input id="asunto" v-model="form.asunto" type="text" placeholder="Ej. Desarrollo de software" />
            </div>

            <div class="contacto__group">
              <label for="mensaje">Mensaje</label>
              <textarea id="mensaje" v-model="form.mensaje" rows="4" placeholder="Cuéntame sobre tu idea..." />
            </div>

            <button class="proyecto__button" type="submit" :disabled="loading">
              {{ loading ? 'Enviando...' : 'Enviar mensaje →' }}
            </button>

            <p v-if="enviado" class="contacto__success">¡Transmisión completada con éxito!</p>
            <p v-if="errorMsg" class="contacto__error">{{ errorMsg }}</p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }

/* CONTENEDOR (Transparente para ver la lluvia Matrix) */
.container {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  background: rgba(22, 0, 31, 0.85); 
  display: flex;
  justify-content: center;
  align-items: center;
}

.contacto { width: 100%; max-width: 600px; }

/* TARJETA (Copiando el estilo exacto de Proyectos) */
.proyecto__card {
  background: #020617; /* Fondo negro profundo */
  border: 1px solid rgba(0, 255, 0, 0.3); /* Borde verde sutil */
  border-radius: 16px;
  padding: 30px;
  transition: all 0.3s ease;
}

.proyecto__card:hover {
  border-color: #00ff00; /* Brillo verde total al pasar el mouse */
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.2);
}

/* TÍTULOS (Estilo Proyectos) */
.proyectos__title {
  color: #00ff00;
  font-size: 2rem;
  margin-bottom: 10px;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
}

.proyectos__subtitle {
  color: #cbd5e1;
  text-align: center;
  margin-bottom: 30px;
  font-size: 0.95rem;
}

/* FORMULARIO Y GRUPOS */
.contacto__form { display: flex; flex-direction: column; gap: 15px; }
.contacto__group { display: flex; flex-direction: column; gap: 8px; }

.contacto__group label {
  color: #ffffff;
  font-size: 0.85rem;
  font-weight: bold;
}

/* INPUTS (Estilo Matrix) */
.contacto__group input, .contacto__group textarea {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid rgba(0, 255, 0, 0.2);
  background: rgba(0, 255, 0, 0.05);
  color: #ffffff;
  outline: none;
  transition: border-color 0.2s ease;
}

.contacto__group input:focus, .contacto__group textarea:focus {
  border-color: #00ff00;
  box-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
}

/* BOTÓN NEÓN (Como los links de proyectos) */
.proyecto__button {
  margin-top: 10px;
  background: #00ff00;
  color: #000;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.proyecto__button:hover {
  background: #00cc00;
  box-shadow: 0 0 15px rgba(0, 255, 0, 0.6);
  transform: translateY(-2px);
}

.proyecto__button:disabled {
  background: #334155;
  color: #94a3b8;
  cursor: not-allowed;
}

/* MENSAJES */
.contacto__success { color: #00ff00; text-align: center; margin-top: 15px; font-weight: bold; }
.contacto__error { color: #f87171; text-align: center; margin-top: 15px; }

@media (max-width: 500px) {
  .proyecto__card { padding: 20px; }
  .proyectos__title { font-size: 1.6rem; }
}
</style>