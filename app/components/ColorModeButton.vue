<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { computed } from 'vue'

const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(v: boolean) {
    colorMode.value = v ? 'dark' : 'light'
  }
})
</script>

<template>
  <div class="button-container">
    <label class="switch">
      <input type="checkbox" v-model="isDark">
      <span class="slider"></span>
    </label>
  </div>
</template>

<style scoped>
/* Centrado normal, fluirá con el texto */
.button-container {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
}

/* El cuadro del switch */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Ocultar el checkbox original de HTML */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* El diseño del deslizador */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  transition: .4s;
  border-radius: 34px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

/* La bolita del interruptor */
.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: #bc5ee7;
  transition: .4s;
  border-radius: 50%;
}

/* Cuando está activado (Modo Oscuro) */
input:checked + .slider {
  background-color: #222222;
}

input:checked + .slider:before {
  transform: translateX(26px);
  background-color: #00ff00;
  box-shadow: 0 0 8px #00ff00;
}
</style>