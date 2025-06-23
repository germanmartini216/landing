<template>
  <section class="features-section" id="caracteristicas">
    <h2>Marvelous Features</h2>
    <p class="features-sub">Placerat in egestas erat...</p>
    <div class="features-grid">
      <div class="feature-card" v-for="feature in features" :key="feature.title">
        <div class="feature-icon" :style="{background: feature.bg}">
          <i :class="feature.icon"></i>
        </div>
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { icon: 'pi pi-check-square', title: 'Easy to Use', desc: 'Mauris ac malesuada pellentesque massa est.', bg: '#fffbe6' },
  { icon: 'pi pi-palette', title: 'Fresh Design', desc: 'Suspendisse euismod, nisi eu hendrerit.', bg: '#f3f8ff' },
  { icon: 'pi pi-book', title: 'Well Documented', desc: 'Curabitur non nulla sit amet nisl tempus.', bg: '#f6f6ff' },
  { icon: 'pi pi-desktop', title: 'Responsive Layout', desc: 'Nulla malesuada pellentesque massa est.', bg: '#e6fff7' },
  { icon: 'pi pi-code', title: 'Clean Code', desc: 'Condimentum facilisis convallis varius.', bg: '#fff6f6' },
  { icon: 'pi pi-moon', title: 'Dark Mode', desc: 'Curabitur non nulla sit amet nisl laoreet.', bg: '#f6f6ff' },
  { icon: 'pi pi-check', title: 'Ready to Use', desc: 'Mauris ac malesuada massa vitae.', bg: '#e6fff7' },
  { icon: 'pi pi-cog', title: 'Modern Practices', desc: 'Etiam malesuada bibendum mollis.', bg: '#f3f8ff' },
  { icon: 'pi pi-shield', title: 'Privacy', desc: 'Nunc eget sapien et magna pharetra.', bg: '#fffbe6' },
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
  font-size: 2rem;
  color: #222;
  margin-bottom: 0.3rem;
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
  background: #fff;
  border-radius: 1.2rem;
  box-shadow: 0 2px 12px rgba(33,145,80,0.04);
  padding: 2rem 1.2rem 1.5rem 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s;
}
.feature-card:hover {
  box-shadow: 0 6px 24px rgba(33,145,80,0.10);
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
.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-principal);
}
.feature-card p {
  color: #666;
  font-size: 0.98rem;
}
</style> 