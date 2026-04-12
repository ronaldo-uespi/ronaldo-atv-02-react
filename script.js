const projects = [
  {
    title: "Landing Page para Startup",
    description: "Layout responsivo com foco em conversão e performance.",
    tags: ["HTML5", "CSS3", "Responsivo"],
    link: "#",
  },
  {
    title: "Dashboard de Vendas",
    description: "Interface para visualização rápida de métricas-chave.",
    tags: ["JavaScript", "Grid", "UI"],
    link: "#",
  },
  {
    title: "Portfólio Fotográfico",
    description: "Galeria com filtro por categorias e animações suaves.",
    tags: ["Flexbox", "Acessibilidade"],
    link: "#",
  },
];

const grid = document.getElementById("projects-grid");

function createTag(label) {
  const tag = document.createElement("span");
  tag.className = "tag";
  tag.textContent = label;
  return tag;
}

function renderProjects(list) {
  grid.innerHTML = "";

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "tags";
    project.tags.forEach((tag) => tags.appendChild(createTag(tag)));

    const link = document.createElement("a");
    link.className = "project-link";
    link.href = project.link;
    link.textContent = "Ver detalhes";

    card.append(title, description, tags, link);
    grid.appendChild(card);
  });
}

renderProjects(projects);
