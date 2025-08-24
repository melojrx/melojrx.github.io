import { ProjectCard } from "./ProjectCard";

const projectsData = [
  {
    title: "UrbanLive",
    description: "Plataforma de análise de dados urbanos para tomada de decisão estratégica.",
    tags: ["React", "Python", "Postgres", "Docker"],
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Costurai.com.br",
    description: "Marketplace conectando costureiras a clientes, com sistema de gestão integrado.",
    tags: ["Django", "React Native", "SQL", "NGINX"],
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Indicaai",
    description: "Aplicativo de indicações de serviços com gamificação e recompensas.",
    tags: ["React Native", "Python", "Celery", "Redis"],
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Dashboard de Transparência",
    description: "Visualização de dados públicos para o Ministério da Gestão e Inovação.",
    tags: ["PowerBI", "Databricks", "ETL", "SQL"],
    imageUrl: "/placeholder.svg",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};