<script setup lang="ts"></script>

<template>
  <div class="loader-container">
    <div class="spinner"></div>
    <p>Cargando sistema...</p>
  </div>
</template>

<style scoped>
.loader-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(0, 255, 0, 0.1);
  border-top: 5px solid #00ff00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 15px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>