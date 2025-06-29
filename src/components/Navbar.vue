<template>
  <nav class="navbar" :class="{ 'navbar-hidden': !isNavbarVisible }">
    <div class="navbar-logo">
      <img src="../assets/logo-potentia.png" alt="Logo potentIA" />
    </div>
    
    <!-- Botón hamburguesa para mobile -->
    <button class="navbar-toggle" @click="toggleMenu" :class="{ active: isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Overlay para cerrar el menú -->
    <div class="navbar-overlay" @click="closeMenu" :class="{ active: isMenuOpen }"></div>

    <!-- Menú lateral -->
    <div class="navbar-menu" :class="{ active: isMenuOpen }">
      <ul class="navbar-links">
        <li><a href="#inicio" @click="closeMenu">Inicio</a></li>
        <li><a href="#caracteristicas" @click="closeMenu">Características</a></li>
        <li><a href="#productos" @click="closeMenu">Productos</a></li>
        <li><a href="#precios" @click="closeMenu">Precios</a></li>

      </ul>
      <div class="navbar-actions">
        <a href="#contacto" class="contact-btn" @click="closeMenu">Contacto</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isNavbarVisible = ref(true)
let lastScrollY = 0

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

const handleScroll = () => {
  const currentScrollY = window.scrollY
  
  // Ocultar navbar al hacer scroll hacia abajo, mostrar al hacer scroll hacia arriba
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    // Scroll hacia abajo y no estamos en la parte superior
    isNavbarVisible.value = false
  } else {
    // Scroll hacia arriba o estamos en la parte superior
    isNavbarVisible.value = true
  }
  
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5rem 1.2rem 2rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: transform 0.3s ease;
}
.navbar-hidden {
  transform: translateY(-100%);
}
.navbar-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--color-principal);
}
.navbar-logo img {
  width: auto;
  height: 48px;
}

/* Botón hamburguesa */
.navbar-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
}
.navbar-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-principal);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}
.navbar-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.navbar-toggle.active span:nth-child(2) {
  opacity: 0;
}
.navbar-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Overlay */
.navbar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
}
.navbar-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* Menú lateral */
.navbar-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-links {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.navbar-links a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
  transition: color 0.2s;
}
.navbar-links a:hover {
  color: var(--color-principal);
}

.navbar-actions {
  display: flex;
  gap: 1rem;
}

.contact-btn {
  background: var(--color-principal);
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  padding: 0.4rem 1.1rem;
  border-radius: 1.5rem;
  transition: background 0.2s;
}
.contact-btn:hover {
  background: var(--color-secundario);
}

/* Responsive */
@media (max-width: 900px) {
  .navbar-toggle {
    display: flex;
  }
  
  .navbar-menu {
    position: fixed;
    top: 0;
    right: -300px;
    width: 300px;
    height: 100vh;
    background: #fff;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 5rem 2rem 2rem 2rem;
    box-shadow: -2px 0 10px rgba(0,0,0,0.1);
    transition: right 0.3s ease;
    z-index: 999;
  }
  
  .navbar-menu.active {
    right: 0;
  }
  
  .navbar-links {
    flex-direction: column;
    gap: 1.5rem;
    width: 100%;
  }
  
  .navbar-links a {
    font-size: 1.1rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    width: 100%;
    display: block;
  }
  
  .navbar-actions {
    margin-top: 2rem;
    width: 100%;
  }
  
  .contact-btn {
    width: 100%;
    text-align: center;
    padding: 0.8rem;
  }
}
</style> 