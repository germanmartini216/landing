<template>
  <section class="hero-section" id="inicio">
    <div class="hero-content">
      <h1>Diseñá el curriculum vitae <br><span>que tu talento merece.</span></h1>
      <p>Haz un Curriculum en minutos con nuestro inteligente e intuitivo constructor de Curriculums.</p>
      <a href="https://www.potentia.com.ar" target="_blank" class="hero-btn">Empezar aquí.</a>
    </div>
    <div class="hero-img">
      <img src="https://primefaces.org/cdn/primevue/images/sakai/hero.png" alt="Dashboard" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: block;
  background-color: #EAF8F9;
  padding: 3.5rem 2rem 2.5rem 2rem;
  margin-bottom: 2.5rem;
  width: 100%;
  max-height: 420px;
  position: relative;
  overflow: hidden;
}
.hero-content {
  width: 100%;
  z-index: 1;
}
.hero-content h1 {
  font-size: 2.7rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  color: #222;
  line-height: 1.1;
}
.hero-content h1 span {
  color: var(--color-principal);
}
.hero-content p {
  font-size: 1.15rem;
  color: #555;
  margin-bottom: 2.2rem;
}
.hero-btn {
  display: inline-block;
  background: var(--color-principal);
  color: #fff;
  font-weight: 600;
  padding: 0.9rem 2.2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(33,145,80,0.08);
  transition: background 0.2s;
}
.hero-btn:hover {
  background: var(--color-secundario);
}
.hero-img {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.hero-img img {
  width: 410px;
  max-width: 40vw;
  border-radius: 1.5rem;
  box-shadow: 0 4px 24px rgba(33,145,80,0.08);
}
@media (max-width: 900px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
    min-height: unset;
  }
  .hero-img {
    justify-content: center;
    margin-top: 2rem;
  }
  .hero-img img {
    width: 90vw;
    max-width: 350px;
  }
}
</style> 