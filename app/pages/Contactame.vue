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

  loading.value = true // Corregido: antes decía 'oading' 
  try {
    // Simulación de envío de 800ms según el reporte [cite: 792]
    await new Promise((resolve) => setTimeout(resolve, 800))
    enviado.value = true
    
    // Limpieza de campos tras el envío [cite: 794-797]
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
      <div class="contacto__card">
        <p class="contacto__tag">Contáctame</p>
        <h1 class="contacto__title">Hablemos de tu proyecto</h1>
        
        <p class="contacto__text">
          Si tienes una idea, una propuesta o quieres trabajar conmigo, mándame un mensaje.
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
            <input id="asunto" v-model="form.asunto" type="text" placeholder="Ej. Desarrollo de landing page" />
          </div>

          <div class="contacto__group">
            <label for="mensaje">Mensaje</label>
            <textarea id="mensaje" v-model="form.mensaje" rows="6" placeholder="Cuéntame un poco sobre tu proyecto..." />
          </div>

          <button class="contacto__button" type="submit" :disabled="loading">
            {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
          </button>

          <p v-if="enviado" class="contacto__success">Tu mensaje se envió correctamente.</p>
          <p v-if="errorMsg" class="contacto__error">{{ errorMsg }}</p>
        </form>
        
        </div>
    </section>
  </div>
</template>

<style scoped>
*, *::before, *::after { box-sizing: border-box; }

.container {
  width: 100%;
  min-height: 100vh;
  padding: 24px 16px;
  /* Cambiado a rgba para que se vea la lluvia Matrix de fondo  */
  background: rgba(22, 0, 31, 0.85); 
}

.contacto { width: 100%; display: flex; justify-content: center; }

.contacto__card { width: 100%; max-width: 520px; padding: 24px 18px; }

.contacto__tag { text-align: center; color: #7dd3fc; font-size: 0.85rem; margin-bottom: 8px; }

.contacto__title {
  margin: 0 0 12px;
  text-align: center;
  color: #ffffff;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.2;
}

.contacto__text {
  margin: 0 auto 20px;
  text-align: center;
  color: #e5e7eb;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 420px;
}

.contacto__form { display: flex; flex-direction: column; gap: 12px; }

.contacto__group { display: flex; flex-direction: column; gap: 6px; }

.contacto__group label {
  text-align: center;
  color: #ffffff;
  font-size: 0.85rem;
  opacity: 0.85;
}

.contacto__group input, .contacto__group textarea {
  width: 100%;
  padding: 10px 14px;
  border-radius: 12px;
  border: 1px solid #1e293b;
  background: #020617;
  color: #ffffff;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s ease;
}

.contacto__group textarea { min-height: 110px; resize: vertical; }

.contacto__button {
  margin-top: 6px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background: #2563eb;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.contacto__button:hover { opacity: 0.95; transform: translateY(-1px); background: #3b82f6; }

.contacto__success { color: #4ade80; text-align: center; margin-top: 10px; }

.contacto__error { color: #f87171; text-align: center; margin-top: 10px; }
</style>