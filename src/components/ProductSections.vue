<template>
  <section class="product-section" id="productos">
    <div class="product-block">
      <div class="product-img product-img-mobile">
        <img src="../assets/chica.jpg" alt="Chica" />
      </div>
      <div class="product-info">
        <h3>Powerful Everywhere</h3>
        <p>Amet consectetur adipiscing elit...</p>
        <h4>Conque Quisque Egestas</h4>
        <p>Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</p>
      </div>
    </div>
    <div class="product-block reverse">
      <div class="product-info">
        <h4>Celerisque Eu Ultrices</h4>
        <p>Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</p>
      </div>
      <div class="product-img product-img-laptop">
        <img src="../assets/robot.jpg" alt="Robot" />
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
  padding: 2.5rem 2rem;
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
  width: 260px;
  max-width: 40vw;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(33,145,80,0.08);
}
.product-img-laptop img {
  width: 340px;
  max-width: 45vw;
  border-radius: 1.2rem;
  box-shadow: 0 4px 24px rgba(33,145,80,0.08);
}
.product-info {
  flex: 2;
  min-width: 220px;
}
.product-info h3 {
  color: #219150;
  font-size: 1.5rem;
  margin-bottom: 0.7rem;
}
.product-info h4 {
  color: #222;
  font-size: 1.1rem;
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