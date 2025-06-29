<template>
  <footer class="footer-section">
    <div class="footer-brand">
      <img src="../assets/logo_potentia_footer.png" alt="potentIA Logo" />
      <p>Impulsando tu carrera con IA</p>
    </div>
    <div class="footer-links">
      <div><img src="../assets/icon_inst.png" alt=""/></div>
      <div><img src="../assets/icon_tiktok.png" alt=""/></div>
      <div><img src="../assets/icon_facebook.png" alt=""/></div>
      <div><img src="../assets/icon_yt.png" alt=""/></div>
    </div>
    <div class="footer-bottom">
      <span>© 2025 potentIA. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: #010101;
  background-image: url("./src/assets/bg_nodos_blanco.png");
  background-position: 132% 0%;
    background-repeat: no-repeat;
  padding: 1.5rem 1rem 1rem 1rem;
  margin-top: 2.5rem;
  box-shadow: 0 -2px 12px rgba(33,145,80,0.04);
  text-align: center;
}
.footer-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.7rem;
}
.footer-brand img {
  width: auto;
  height: 60px;
}
.footer-brand p {
  color: #fff;
  font-size:12px;
}

.footer-links {
  margin-bottom: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.footer-links div{
  padding: 20px;
    margin: 0 7px;
    border-radius: 50px;
    background-color: #05AB9E;
    width: 40px;
    height: 40px;
    display: flex;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;
    justify-content: center;
}

.footer-links div img{
  width: 20px;
}


</style> 