<script setup>
import { onMounted } from 'vue'

const images = Array.from({ length: 12 }, (_, i) => ({
  src: `https://picsum.photos/300/${200 + (i % 5) * 30}?random=${i + 1}`,
  alt: `Imagen ${i + 1}`
}))
</script>

<template>
  <section class="gallery-section" id="galeria">
    <h2>Galería</h2>
    <div class="gallery-fallback">
      <div v-for="(img, idx) in images" :key="idx" class="gallery-fallback-item">
        <img :src="img.src" :alt="img.alt" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 2.5rem 1rem 2.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}
.gallery-section h2 {
  font-size: 2rem;
  color: var(--color-principal);
  margin-bottom: 2rem;
}
.gallery-fallback {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.gallery-fallback-item {
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(33,145,80,0.04);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gallery-fallback-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
</style> 