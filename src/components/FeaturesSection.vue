<template>
  <section class="features-section" id="caracteristicas">
    <h2>Características que nos destacan</h2>
    <div class="features-grid">
      <div class="feature-card" v-for="feature in features" :key="feature.title">
        <div class="feature-icon" :style="{background: feature.bg}">
          <img :src="feature.icon" alt="imagen icono" />
        </div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: '/src/assets/img_iconos/icon_img_1.png', title: 'Creá tu cuenta gratis', desc: 'Actualiza tu currículum con vista previa en vivo y formato instantáneo.', bg: '#fffbe6' },
  { icon: '/src/assets/img_iconos/icon_img_2.png', title: 'Fresh Design', desc: 'Elige entre plantillas modernas y profesionales que son fáciles de personalizar.', bg: '#f3f8ff' },
  { icon: '/src/assets/img_iconos/icon_img_3.png', title: 'Exportá con un clic', desc: 'Descarga tu currículum al instante como un PDF de alta calidad con un solo clic.', bg: '#f6f6ff' },
  { icon: '/src/assets/img_iconos/icon_img_4.png', title: 'Edición fácil', desc: 'Actualiza tu currículum con vista previa en vivo y formato instantáneo.', bg: '#e6fff7' },
  { icon: '/src/assets/img_iconos/icon_img_5.png', title: 'Postulaciones', desc: 'Presentate como postulante para aquellos avisos de tu interes', bg: '#fff6f6' },
  { icon: '/src/assets/img_iconos/icon_img_6.png', title: 'Creá avisos laborales', desc: 'Publicá avisos laborales y recibí postulantes.', bg: '#f6f6ff' },
  { icon: '/src/assets/img_iconos/icon_img_7.png', title: 'Soporte', desc: 'Tené atención técnica constante sobre nuestros servicios', bg: '#e6fff7' },
  { icon: '/src/assets/img_iconos/icon_img_8.png', title: 'Inteligencia artificial', desc: 'Utilizá nuestra Inteligencia artificial para mejorar tu curriculum.', bg: '#f3f8ff' },
];
</script>

<style scoped>
.features-section {
  padding: 2.5rem 1rem 2.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}
.features-section h2 {
  font-size: 26px;
  color: #010101;
  font-weight:600;
  margin-bottom: 16px;
}
.features-sub {
  color: #888;
  margin-bottom: 2.2rem;
}
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.feature-card {
  background: #E7F8F4;
  border-radius: 12px;
  box-shadow: 1px 5px 8px rgba(1, 1, 1, 0.16);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.1s;
}
.feature-card:hover {
  box-shadow: 1px 5px 16px rgba(1, 1, 1, 0.16);
  transform: translateY(-4px) scale(1.03);
}
.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  margin-bottom: 1.1rem;
  color: var(--color-principal);
}

.feature-icon img{
  width:80px;
  height: auto;
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #010101;
}
.feature-card p {
  color: #2E2E2E;
  font-size: 12px;
}
</style> 