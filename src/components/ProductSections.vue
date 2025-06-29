<template>
  <section class="product-section" id="productos">
    <div class="product-block">
      <div class="product-img product-img-mobile">
        <img src="../assets/chica.png" alt="Chica" />
      </div>
      <div class="product-info">
        <h3>Nuestras Plantillas</h3>
        <p>Contamos con una variedad de plantillas de currículum diseñadas para destacar tu perfil profesional de forma clara, moderna y efectiva. Cada una está optimizada para resaltar tus fortalezas y adaptarse a diferentes industrias y niveles de experiencia.</p>
        <h4>Elegí el diseño que mejor hable de vos</h4>
        <p>Desde estilos más formales hasta opciones creativas, nuestras plantillas se adaptan a tu personalidad y objetivos. Solo completá tus datos, y PotentIA se encarga del resto.</p>
      </div>
    </div>
    <div class="product-block reverse">
      <div class="product-info">
        <h3>Probá nuestra IA</h3>
        <p>Con solo responder algunas preguntas, nuestra inteligencia artificial analiza tus respuestas, identifica tus fortalezas y genera un perfil profesional que resalta lo mejor de vos. Es rápido, simple y pensado para ayudarte a destacarte frente a los empleadores.</p>
        <h4>Descubrí tu potencial en minutos</h4>
        <p>Nuestra IA transforma tus habilidades y experiencias en un resumen profesional claro y poderoso. Ideal para quienes no saben por dónde empezar o quieren optimizar su CV con ayuda inteligente.</p>
      </div>
      <div class="product-img product-img-laptop">
        <img src="../assets/robot.png" alt="Robot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.product-section {
  max-width: 1200px;
  margin: 0 auto 2.5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}
.product-block {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 2px 12px rgba(33,145,80,0.04);
  padding: 2rem;
  box-shadow: 0 4px 48px rgba(1, 1, 1, 0.15);
}
.product-block.reverse {
  flex-direction: row-reverse;
}
.product-img {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-img-mobile img {
  width: 310px;
}
.product-img-laptop img {
  width: 340px;
}
.product-info {
  flex: 2;
  min-width: 220px;
}
.product-info h3 {
  color: #05AB9E;
  font-size: 22px;
  font-weight: 800;
  margin-bottom: 0.7rem;
}
.product-info h4 {
  color: #010101;
  font-size: 16px;
  font-weight:600;
  margin-bottom: 0.5rem;
}
.product-info p {
  color: #555;
  font-size: 1rem;
  margin-bottom: 0.7rem;
}
@media (max-width: 900px) {
  .product-block, .product-block.reverse {
    flex-direction: column;
    padding: 1.5rem 0.5rem;
    gap: 1.5rem;
  }
  .product-img-mobile img, .product-img-laptop img {
    width: 90vw;
    max-width: 320px;
  }
}
</style> 