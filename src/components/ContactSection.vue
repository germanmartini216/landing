<template>
  <section class="contact-section" id="contacto">
    <h2>Contacto</h2>
    <form class="contact-form" @submit.prevent>
      <div class="form-row">
        <input type="text" placeholder="Nombre" required />
      </div>
      <div class="form-row">
        <input type="email" placeholder="Email" required />
      </div>
      <div class="form-row">
        <textarea placeholder="Mensaje" rows="5" required></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 2.5rem 1rem 2.5rem 1rem;
  max-width: 600px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}
.contact-section h2 {
  font-size: 2rem;
  color: var(--color-principal);
  margin-bottom: 2rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-row {
  width: 100%;
}
input, textarea {
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1.5px solid #e0e0e0;
  border-radius: 1rem;
  font-size: 1rem;
  font-family: 'Exo 2', Arial, Helvetica, sans-serif;
  outline: none;
  transition: border 0.2s;
  background: #fff;
  resize: none;
}
input:focus, textarea:focus {
  border: 1.5px solid var(--color-principal);
}
button[type="submit"] {
  background: var(--color-principal);
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.9rem 2.2rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  transition: background 0.2s;
  font-family: 'Exo 2', Arial, Helvetica, sans-serif;
}
button[type="submit"]:hover {
  background: var(--color-secundario);
}
</style> 