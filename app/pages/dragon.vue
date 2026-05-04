<template>
  <div class="page-container">
    <h1>Visualización 3D del Dragón</h1>
    
    <!-- ClientOnly evita errores de SSR y LazyModelViewer lo carga bajo demanda -->
    <ClientOnly>
      <LazyModelViewer modelPath="/Dragon.stl" />
    </ClientOnly>
  </div>
</template>