<script setup lang="ts"></script>

<template>
  <div class="tab-container">
    <input type="radio" name="tab" id="tab1" class="tab tab--1" checked />
    <NuxtLink to="/Perfil" class="tab_label">Perfil</NuxtLink>

    <input type="radio" name="tab" id="tab2" class="tab tab--2" />
    <NuxtLink to="/Sobre_Mi" class="tab_label">Sobre Mí</NuxtLink>

    <input type="radio" name="tab" id="tab3" class="tab tab--3" />
    <NuxtLink to="/Contactame" class="tab_label">Contáctame</NuxtLink>

    <input type="radio" name="tab" id="tab3" class="tab tab--3" />
    <NuxtLink to="/Proyectos" class="tab_label">proyectos</NuxtLink>

    


    <div class="indicator"></div>
  </div>
</template>

<style scoped>
.tab-container {
  display: flex;
  position: relative;
  background-color: #fff; /* Fondo blanco de la barra */
  padding: 5px;
  border-radius: 8px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto 20px auto; /* Centra la barra y da espacio abajo */
}

.tab_label {
  flex: 1;
  padding: 10px;
  text-align: center;
  color: #6d5dfc; /* Color de texto morado/azul */
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  z-index: 1;
  cursor: pointer;
}

.tab { display: none; } /* Esconde los radio buttons */

/* El cuadro blanco que indica la pestaña activa */
.indicator {
  position: absolute;
  width: 33.33%; /* Dividido entre 3 pestañas */
  height: 85%;
  top: 7.5%;
  left: 0;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
}

/* Lógica para mover el indicador (ejemplo para 3 pestañas) */
#tab1:checked ~ .indicator { transform: translateX(5px); }
#tab2:checked ~ .indicator { transform: translateX(100%); }
#tab3:checked ~ .indicator { transform: translateX(200%); }
</style>
