<template>
  <div class="content-wrapper">
    <section class="about-section">
      <h1>Sobre mí</h1>
      <p>
        Estudiante de la carrera de Ing. en Tecnologías de la Información y Comunicaciones 
        con 5 años de carrera de la Escuela Tecnológica de la Gustavo A. Madero.
      </p>

      <h3>Habilidades</h3>
      <div class="skills-list">
        <span>HTML5</span>
        <span>CSS3</span>
        <span>JavaScript</span>
        <span>Git</span>
        <span>Ética Hacker</span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}
.about-section {
  background-color: rgba(0, 0, 0, 0.8);
  padding: 30px;
  border-radius: 15px;
  color: white;
  text-align: center;
  border: 1px solid #00ff00;
  max-width: 600px;
}
h1, h3 { color: #00ff00; }
.skills-list { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; margin-top: 15px; }
</style>