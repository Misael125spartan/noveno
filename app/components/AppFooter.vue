<script setup lang="ts">
</script>

<template>
  <footer class="app-footer">
    <div class="main-wrapper">
      <main>
        <header>
          <center><h1>Carta de Presentación</h1></center>
          <h1>Ing. De Jesús Sierra Angel Misael</h1>
          <h4>Ingeniería en Tecnologías de la Información y Comunicaciones</h4>
        </header>

        <h3>Sobre mí</h3>
        <p>Estudiante de la carrera de Ing. en Tecnologías de la Información y Comunicaciones con 5 años de carrera de la Escuela Tecnológica de la Gustavo A. Madero</p>

        <h4>Información Personal</h4>
        <p>Correo: dejesus.sierra.angelmisael@gmail.com</p>
        <p>Teléfono: 55 7848 6839</p>

        <p>Lista de herramientas</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
      </main>
    </div>

    <ColorModeButton />

  </footer>
</template>

<style scoped>
.app-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px; /* <-- ¡El truco está aquí! Cambiamos margin por padding */
  padding-bottom: 40px; 
  width: 100%;
}

.main-wrapper {
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.85); /* Un poco más oscuro para que resalte más el texto */
  padding: 40px;
  border-radius: 10px;
  max-width: 800px;
  margin: 0 20px;
  font-family: sans-serif;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
}

h1, h3, h4 {
  color: #00ff00;
  text-shadow: 0 0 5px #00ff00;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding-left: 20px;
  position: relative;
}

li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #00ff00;
}
</style>