<template>
  <section class="testimonial-section">
    <div class="testimonial-content">
      <div class="testimonial-text">
        <h4>Transformá tu historia en oportunidades</h4>
        <blockquote>
          Nuestra IA esta preparada para ayudarte a destacar lo mejor de vos. En minutos, generás un CV profesional, optimizado y personalizado según tu perfil, experiencia y el tipo de trabajo que buscás. Potenciá tu búsqueda laboral con tecnología que entiende quién sos y hacia dónde querés ir.
        </blockquote>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  background-image: url("./src/assets/bg_nodos_blanco.png");
  background-color: #F79B38 ;
  border-radius: 1.5rem;
  margin: 0 auto 2.5rem auto;
  max-width: 900px;
  padding: 2.5rem 2rem 2.5rem 2rem;
  text-align: center;
  box-shadow: 0 2px 12px rgba(33,145,80,0.04);
}
.testimonial-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}
.testimonial-text h4 {
  color: #fff;
  text-shadow: 0px 2px 15px rgba(0,0,0,0.6);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.testimonial-text span {
  color: #fff;
  text-shadow: 0px 2px 15px rgba(0,0,0,0.6);
  font-size: 1rem;
  margin-bottom: 1.1rem;
  display: block;
}
.testimonial-text blockquote {
  font-size: 14px;
  color: #fff;
  text-shadow: 0px 2px 15px rgba(0, 0, 0, 0.6);
  font-style: italic;
  margin: 0 auto;
  max-width: 720px;
  line-height: 1.5;
}
.testimonial-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.2rem;
}
.testimonial-logo img {
  width: 32px;
  height: 32px;
}
.testimonial-logo span {
  color: #222;
  font-weight: 600;
  font-size: 1.1rem;
}
</style> 