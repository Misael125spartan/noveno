<template>
  <div class="contact-wrapper">
    <div class="contact-card">
      <h2 class="terminal-title">Formulario de Contacto</h2>
      
      <form @submit.prevent="enviarDatos" class="terminal-form">
        <div class="input-group">
          <label>Nombre Completo:</label>
          <input v-model="form.nombre" type="text" required placeholder="Ingresa tu nombre..." />
        </div>
        
        <div class="input-group">
          <label>Correo Electrónico:</label>
          <input v-model="form.correo" type="email" required placeholder="correo@ejemplo.com" />
        </div>
        
        <div class="input-group">
          <label>Teléfono:</label>
          <input v-model="form.telefono" type="tel" required placeholder="A 10 dígitos..." />
        </div>
        
        <div class="input-group">
          <label>Proyecto:</label>
          <textarea v-model="form.proyecto" rows="4" required placeholder="Describe los requerimientos técnicos..."></textarea>
        </div>
        
        <button type="submit" class="submit-btn" :disabled="loading">
          {{ loading ? 'TRANSMITIENDO...' : 'ENVIAR DATOS' }}
        </button>
      </form>
      
      <p v-if="mensaje" class="status-msg">{{ mensaje }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  proyecto: ''
})

const loading = ref(false)
const mensaje = ref('')

// PEGA AQUÍ LA URL QUE COPIASTE DE GOOGLE APPS SCRIPT
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx8mcJpd2T258WJVpoaCC6wG6GKR7rPW0ylxVd3XA47O6Hw8X79wLzWGLdfwdHXKXarlg/exec' 

const enviarDatos = async () => {
  loading.value = true
  mensaje.value = ''
  
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(form.value),
      // Usamos text/plain para evitar que el navegador envíe un preflight (CORS) que bloquee la petición
      headers: {
        'Content-Type': 'text/plain;charset=utf-8', 
      }
    })
    
    mensaje.value = '¡Transmisión completada! Datos almacenados en el servidor.'
    form.value = { nombre: '', correo: '', telefono: '', proyecto: '' } // Limpiar formulario
    
  } catch (error) {
    console.error('Error de transmisión:', error)
    mensaje.value = 'Error al establecer conexión con la base de datos.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding: 20px;
}

.contact-card {
  background: rgba(0, 0, 0, 0.85); /* Fondo oscuro translúcido */
  border: 2px solid #00ff00;
  box-shadow: 0 0 15px #00ff00, inset 0 0 10px rgba(0, 255, 0, 0.2);
  border-radius: 10px;
  padding: 30px;
  width: 100%;
  max-width: 500px;
  color: #00ff00;
}

.terminal-title {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 25px;
  text-shadow: 0 0 8px #00ff00;
  border-bottom: 1px solid #00ff00;
  padding-bottom: 10px;
}

.input-group {
  margin-bottom: 18px;
  display: flex;
  flex-direction: column;
}

.input-group label {
  margin-bottom: 8px;
  font-weight: bold;
  letter-spacing: 1px;
}

.terminal-form input,
.terminal-form textarea {
  background: rgba(0, 20, 0, 0.5);
  border: 1px solid #00ff00;
  color: #00ff00;
  padding: 12px;
  border-radius: 4px;
  outline: none;
  transition: box-shadow 0.3s;
}

.terminal-form input::placeholder,
.terminal-form textarea::placeholder {
  color: rgba(0, 255, 0, 0.4);
}

.terminal-form input:focus,
.terminal-form textarea:focus {
  box-shadow: 0 0 12px #00ff00;
  background: rgba(0, 40, 0, 0.8);
}

.submit-btn {
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  color: #00ff00;
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  border-radius: 4px;
  transition: all 0.3s ease;
  margin-top: 10px;
}

.submit-btn:hover:not(:disabled) {
  background: #00ff00;
  color: #000;
  box-shadow: 0 0 20px #00ff00;
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.status-msg {
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  text-shadow: 0 0 5px #00ff00;
}
</style>