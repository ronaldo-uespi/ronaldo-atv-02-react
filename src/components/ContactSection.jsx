function ContactSection() {
  return (
    <section id="contato" className="section contact-section">
      <div className="container contact-wrap">
        <div>
          <h2>Contato</h2>
          <p>Vamos conversar? Preencha o formulário ao lado.</p>
        </div>
        <form className="contact-form">
          <label>
            Nome
            <input type="text" name="name" placeholder="Seu nome" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="seuemail@email.com" required />
          </label>
          <label>
            Mensagem
            <textarea
              name="message"
              rows="4"
              placeholder="Como posso ajudar?"
              required
            ></textarea>
          </label>
          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
