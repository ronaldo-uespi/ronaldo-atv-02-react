const projects = [
  {
    title: "Portfólio MVP",
    description: "Primeira versão do meu portfólio profissional, com foco em clareza e responsividade.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/ronaldo-uespi/ronaldo-atv-01",
  },
  {
    title: "Landing Page para Startup",
    description: "Layout responsivo com foco em conversão e apresentação clara do produto.",
    tags: ["Responsivo", "UX", "UI"],
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

const themeToggle = document.getElementById("theme-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark");
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
