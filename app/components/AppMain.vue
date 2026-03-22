<template>
  <div class="profile-card">
    <div class="avatar-wrapper">
      <img src="/tu-foto.jpeg" alt="Misael" class="avatar-img" />
    </div>

    <h1 class="user-name">Ing. De Jesús Sierra Angel Misael</h1>
    <h2 class="user-title">Ingeniería en Tecnologías de la Información y Comunicaciones</h2>

    <ButtonGitHub />
  </div>
</template>

<style scoped>
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 40px;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 0, 0.3);
  max-width: 550px;
  margin: 40px auto;
  color: white;
  text-align: center;
}

.avatar-wrapper {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 3px solid #00ff00;
  overflow: hidden;
  margin-bottom: 25px;
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.4);
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  color: #00ff00;
  font-size: 1.8rem;
  margin-bottom: 8px;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.3);
}

.user-title {
  font-size: 1rem;
  opacity: 0.85;
}
</style>