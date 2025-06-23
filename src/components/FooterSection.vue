<template>
  <footer class="footer-section">
    <div class="footer-brand">
      <img src="../assets/logo-potentia.png" alt="potentIA Logo" />
    </div>
    <div class="footer-links">
      <a href="#">Contacto</a>
      <span>|</span>
      <a href="#">Privacidad</a>
    </div>
    <div class="footer-bottom">
      <span>© 2024 potentIA. Todos los derechos reservados.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: #f8fafc;
  padding: 1.5rem 1rem 1rem 1rem;
  margin-top: 2.5rem;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0 -2px 12px rgba(33,145,80,0.04);
  text-align: center;
}
.footer-brand {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.7rem;
}
.footer-brand img {
  width: auto;
  height: 48px;
}
.footer-links {
  margin-bottom: 0.7rem;
}
.footer-links a {
  color: var(--color-principal);
  text-decoration: none;
  font-size: 1rem;
  margin: 0 0.5rem;
  transition: color 0.2s;
}
.footer-links a:hover {
  color: var(--color-secundario);
}
.footer-links span {
  color: #bbb;
  margin: 0 0.2rem;
}
.footer-bottom {
  color: #888;
  font-size: 0.98rem;
}
</style> 