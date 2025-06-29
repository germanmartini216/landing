<template>
  <section class="pricing-section" id="precios">
    <h2>Nuestros planes y pagos</h2>
    <p class="pricing-sub">Precios inigualables mensuales</p>
    <div class="pricing-grid">
      <div class="pricing-card" v-for="plan in plans" :key="plan.title" :class="{ featured: plan.featured }">
        <div class="pricing-img">
        </div>
        <h3>{{ plan.title }}</h3>
        <div class="price">${{ plan.price }}<span>/ mensual</span></div>
        <ul>
          <li v-for="feature in plan.features" :key="feature">
            <i class="pi pi-check"></i> {{ feature }}
          </li>
        </ul>
        <a href="#contacto" class="pricing-btn">Contactar</a>
        <a href="#more-info" class="pricing-btn secundary">Ver todo</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    title: 'Gratis',
    price: 0,
    features: [
      'Alta de la cuenta',
      '2 plantillas disponibles',
      'Editar plantilla gratis',
      'Exportar gratis',
    ],
    featured: false,
  },
  {
    title: 'Escencial',
    price: 100,
    features: [
      'Alta de la cuenta',
      'Todas las plantillas',
      'Editar todas plantilla',
      'Exportar',
    ],
    featured: true,
  },
  {
    title: 'Plus',
    price: 200,
    features: [
      'Alta de la cuenta',
      'Todas las plantillas',
      'Editar todas plantilla',
      'Crear avisos',
    ],
    featured: false,
  },
];
</script>

<style scoped>
.pricing-section {
  padding: 2.5rem 1rem 2.5rem 1rem;
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}
.pricing-section h2 {
  font-size: 2rem;
  color: #222;
  margin-bottom: 0.3rem;
}
.pricing-sub {
  color: #888;
  margin-bottom: 2.2rem;
}
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 2rem;
  justify-items: center;
}
.pricing-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 48px rgba(1, 1, 1, 0.15);
  padding: 2.2rem 1.5rem 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
  border: 2px solid transparent;
  width: 100%;
  max-width: 290px;
}
.pricing-card.featured {
  border: 2px solid #05AB9E;
  box-shadow: 0 4px 48px rgba(1, 1, 1, 0.15);
  transform: scale(1.04);
}
.pricing-img img {
  width: 90px;
  margin-bottom: 1.2rem;
}
.pricing-card h3 {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-principal);
}
.price {
  font-size: 2.1rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 1.1rem;
}
.price span {
  font-size: 1rem;
  color: #888;
  font-weight: 400;
}
.pricing-card ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  text-align: left;
}
.pricing-card li {
  color: #222;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.pricing-card li i {
  color: var(--color-principal);
  font-size: 1.1rem;
}
.pricing-btn {
  display: inline-block;
  background: var(--color-principal);
  color: #fff;
  font-weight: 600;
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(33,145,80,0.08);
  transition: background 0.2s;
}
.pricing-btn:hover {
  background: var(--color-secundario);
}

.secundary{
  background-color: #fff;
  color: #05ab9e;
  margin-top: 7px;
}

.secundary:hover {
  background-color: #fff;
}
</style> 