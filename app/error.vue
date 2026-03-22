<template>
  <div class="container">
    <ColorModeButton />
    <AppHeader />
    
    <main class="error-wrapper">
      <LoaderPage />
      <div class="error-card">
        <h1>ERROR 500</h1>
        <p>Parece que hubo un glitch en la Matrix.</p>
        <button @click="handleClearError" class="back-btn">Reiniciar Sistema</button>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Función para limpiar el error y volver al inicio
const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped>
.error-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.error-card {
  background-color: rgba(0, 0, 0, 0.85);
  padding: 40px;
  border-radius: 10px;
  border: 1px solid #00ff00;
  text-align: center;
  color: white;
}

h1 {
  color: #00ff00;
  font-size: 3rem;
  margin-bottom: 10px;
}

.back-btn {
  margin-top: 20px;
  background-color: #00ff00;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
</style>