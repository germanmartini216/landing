<template>
  <section class="testimonial-section">
    <div class="testimonial-content">
      <div class="testimonial-text">
        <h4>Joséphine Miller</h4>
        <span>Peak Interactive</span>
        <blockquote>
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </blockquote>
      </div>
      <div class="testimonial-logo">
        <img src="https://primefaces.org/cdn/primevue/images/sakai/peak.svg" alt="Peak Logo" />
        <span>Peak</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-section {
  background: linear-gradient(90deg, #e0ffe7 0%, #f0fff4 100%);
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
  color: var(--color-principal);
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
}
.testimonial-text span {
  color: #888;
  font-size: 1rem;
  margin-bottom: 1.1rem;
  display: block;
}
.testimonial-text blockquote {
  font-size: 1.08rem;
  color: #222;
  font-style: italic;
  margin: 0 auto;
  max-width: 600px;
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