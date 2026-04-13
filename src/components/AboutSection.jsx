import profileImage from "../assets/profile.jpg";

function AboutSection() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <div className="about-text">
          <span className="hero-pill">Olá, eu sou o Ronaldo!</span>
          <h2>Sobre mim</h2>
          <p>
            Sou Ronaldo, desenvolvedor em formação focado em construir produtos digitais
            simples, funcionais e bonitos. Este é o meu MVP de portfólio.
          </p>
          <p>
            Gosto de trabalhar com HTML, CSS e JavaScript, criando experiências claras e
            responsivas para web. Tenho interesse especial em interfaces que unam
            organização visual e usabilidade.
          </p>
          <p>
            Atualmente estou fortalecendo minha base em front-end, estudando boas práticas
            de acessibilidade, versionamento com Git e criação de layouts que funcionem bem
            em telas pequenas.
          </p>
          <p>
            Meu objetivo é evoluir para criar produtos completos, do layout ao código,
            com foco em qualidade, consistência e entrega rápida.
          </p>
          <h3>O que eu entrego</h3>
          <ul>
            <li>Layouts responsivos, interfaces limpas e código organizado.</li>
            <li>Foco em clareza visual e navegação direta para o usuário.</li>
          </ul>
        </div>
        <div className="about-side">
          <img src={profileImage} alt="Foto de Ronaldo" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
