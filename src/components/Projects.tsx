import { ProjectCard } from "./ProjectCard";

// Usar BASE_URL garante que assets funcionem em GitHub Pages (subpasta)
const base = import.meta.env.BASE_URL;
const projectsData: Array<{
  title: string;
  description: string;
  tags?: string[];
  techGroups?: { label: string; items: string[] }[];
  imageUrl: string;
  siteUrl?: string;
  presentationUrl?: string;
  caseStudyUrl?: string;
  imageMode?: "cover" | "contain";
}> = [
  {
    title: "UrbanLive",
    description: "Plataforma completa que conecta cidadãos e governo para uma zeladoria urbana mais ágil, transparente e colaborativa.",
    techGroups: [
      { label: "Backend", items: ["Django", "API Django", "Gunicorn", "Celery"] },
      { label: "Frontend", items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript"] },
      { label: "Mobile", items: ["React Native"] },
      { label: "Infra", items: ["Docker", "NGINX", "Redis"] },
      { label: "Banco de Dados", items: ["Postgres"] },
    ],
  imageUrl: base + "urbanlive.png", // coloque o arquivo em public/urbanlive.png
  imageMode: "contain",
    siteUrl: "https://www.urbanlive.com.br/",
  presentationUrl: "https://www.canva.com/design/DAGs6KRx-yE/04S6ys2Nq_Ndqc6EpMXt2g/watch",
  },
  {
    title: "Costurai.com.br",
  description: "Transforme a gestão da sua confecção com eficiência e controle total. Simplifique processos, controle a produção e potencialize seus resultados.",
    techGroups: [
      { label: "Backend", items: ["Django", "API Django", "Gunicorn", "Celery"] },
      { label: "Frontend", items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript"] },
      { label: "Infra", items: ["Docker", "NGINX", "Redis"] },
      { label: "Banco de Dados", items: ["Postgres"] },
    ],
    imageUrl: base + "costurai1.png", // colocar arquivo em public/costurai1.png
  siteUrl: "https://www.costurai.com.br/",
  imageMode: "contain",
  },
  {
    title: "Indicaai",
  description: "Plataforma marketplace B2B/B2C inovadora que conecta pessoas e empresas com necessidades a fornecedores qualificados. Usuários publicam demandas e recebem orçamentos personalizados de profissionais cadastrados.",
    techGroups: [
      { label: "Backend", items: ["Django", "API Django", "Gunicorn", "Celery"] },
      { label: "Frontend", items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript", "PWA"] },
      { label: "Infra", items: ["Docker", "NGINX", "Redis"] },
      { label: "Banco de Dados", items: ["Postgres"] },
    ],
  imageUrl: base + "indicai.png", // colocar arquivo em public/indicai.png
  siteUrl: "https://necessito.online/",
  imageMode: "contain",
  },
  {
  title: "Portal de Dados Abertos do Governo Federal",
  description: "Projetos da Coordenação de Transparência e Relatórios Gerenciais (DELOG/MGI): API de Dados Abertos, Allice (integração Compras Gov), Chatbot COTIN (IA), Portal PNCP em Números, entre outros ativos de transparência e análise.",
  tags: ["API", "Dados Abertos", "ETL", "PowerBI", "Databricks", "Chatbot IA", "SQL"],
  imageUrl: base + "DadosAbertos.png", // colocar arquivo em public/DadosAbertos.png
  siteUrl: "https://www.gov.br/compras/pt-br/cidadao/compras-publicas-dados-abertos",
  imageMode: "contain",
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