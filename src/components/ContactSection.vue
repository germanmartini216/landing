<template>
  <section class="contact-section" id="contacto">
    <h2>Contacto</h2>
    <form class="contact-form" @submit.prevent>
      <div class="form-row">
        <label for="nombre_input">Nombre</label>
        <input type="text" placeholder="Nombre" id="nombre_input" required />
      </div>
      <div class="form-row">
        <label for="email_input">Correo</label>
        <input type="email" placeholder="Email" id="email_input" required />
      </div>
      <div class="form-row">
        <label for="mensaje_input">Mensaje</label>
        <textarea placeholder="Mensaje" rows="5" id="mensaje_input" required></textarea>
      </div>
      <button type="submit">Enviar mensaje</button>
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
  font-size: 28px;
  color: #010101;
  font-weight: 600;
  margin-bottom: 2rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.form-row {
  width: 100%;
  text-align: left;
}

.form-row > label{
  color: #010101;
}

input, textarea {
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1.5px solid #D0D0D0;
  border-radius: 9px;
  font-size: 12px;
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