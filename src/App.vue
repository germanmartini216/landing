<script setup>
// import 'primevue/resources/themes/saga-green/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css';
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TestimonialSection from './components/TestimonialSection.vue'
import ProductSections from './components/ProductSections.vue'
import Button from 'primevue/button';
import FooterSection from './components/FooterSection.vue'
import GallerySection from './components/GallerySection.vue'
import PricingSection from './components/PricingSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <div class="main-bg">
    <Navbar />
    <div class="main-container">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <ProductSections />
      <PricingSection />
      <!-- <GallerySection /> -->
      <ContactSection />
      <FooterSection />
    </div>
  </div>
</template>

<style>
:root {
  --color-principal: #05AB9E;
  --color-secundario: #29B6BB;
}
html, body, #app, .main-bg, .main-container {
  font-family: 'Exo 2', Arial, Helvetica, sans-serif !important;
  background: transparent !important;
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  width: 100vw;
  box-sizing: border-box;
  background-image: none;
}
body {
  padding-top: 80px; /* Compensar el navbar fijo */
}
.main-bg::before {
  content: '';
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 0;
  pointer-events: none;
  background: url('./src/assets/_Group_.svg') repeat center center;
  background-size: 500px auto;
  opacity: 0.18;
}
.main-bg, .main-container {
  position: relative;
  z-index: 1;
  background: transparent !important;
}
/* Ocultar cualquier sidebar flotante accidental */
[id*="vite-inspect"],
[class*="vite-inspect"],
[id*="vue-devtools"],
[class*="vue-devtools"],
.sidebar,
.aside,
#sidebar,
#aside {
  display: none !important;
}
.main-bg {
  min-height: 100vh;
  background: #fff;
  overflow-x: hidden;
}
.main-container {
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background: #fff;
  box-sizing: border-box;
}
</style>
