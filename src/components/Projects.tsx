import { ProjectCard } from "./ProjectCard";
import { useTranslation } from 'react-i18next';

// Usar BASE_URL garante que assets funcionem em GitHub Pages (subpasta)
const base = import.meta.env.BASE_URL;

export const Projects = () => {
  const { t } = useTranslation();
  
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
      title: "Brabus Conveniência & Tabacaria",
      description: t('projects.items.brabus.description'),
      techGroups: [
        { label: t('projects.techGroups.frontend'), items: ["React 19", "TypeScript", "Tailwind CSS"] },
        { label: t('projects.techGroups.styling'), items: ["Lucide React", "Custom Animations"] },
        { label: t('projects.techGroups.infra'), items: ["Vite 7"] },
        { label: t('projects.techGroups.deploy'), items: ["Vercel"] },
      ],
      imageUrl: base + "brabus_screenshot.png",
      imageMode: "contain",
      siteUrl: "https://brabusconveniencia.vercel.app/",
      presentationUrl: "https://github.com/melojrx/tachyon-omega",
    },
    {
      title: "Obreiro Virtual",
      description: t('projects.items.obreiro.description'),
      techGroups: [
        { label: t('projects.techGroups.backend'), items: ["Django", "Django REST Framework", "Gunicorn", "Celery"] },
        { label: t('projects.techGroups.frontend'), items: ["React", "TypeScript", "Vite"] },
        { label: t('projects.techGroups.infra'), items: ["Docker", "Docker Compose", "NGINX", "Redis"] },
        { label: t('projects.techGroups.database'), items: ["PostgreSQL"] },
      ],
      imageUrl: base + "obreiro_screenshot.png",
      imageMode: "contain",
      siteUrl: "https://www.obreirovirtual.com/",
    },
    {
      title: "Costurai.com.br",
      description: t('projects.items.costurai.description'),
      techGroups: [
        { label: t('projects.techGroups.backend'), items: ["Django", "API Django", "Gunicorn", "Celery"] },
        { label: t('projects.techGroups.frontend'), items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript"] },
        { label: t('projects.techGroups.infra'), items: ["Docker", "NGINX", "Redis"] },
        { label: t('projects.techGroups.database'), items: ["Postgres"] },
      ],
      imageUrl: base + "costurai1.png",
      siteUrl: "https://www.costurai.com.br/",
      imageMode: "contain",
    },
    {
      title: "Indicaai",
      description: t('projects.items.indicaai.description'),
      techGroups: [
        { label: t('projects.techGroups.backend'), items: ["Django", "API Django", "Gunicorn", "Celery"] },
        { label: t('projects.techGroups.frontend'), items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript", "PWA"] },
        { label: t('projects.techGroups.infra'), items: ["Docker", "NGINX", "Redis"] },
        { label: t('projects.techGroups.database'), items: ["Postgres"] },
      ],
      imageUrl: base + "indicai.png",
      siteUrl: "https://necessito.online/",
      imageMode: "contain",
    },
    {
      title: "Portal de Dados Abertos do Governo Federal",
      description: t('projects.items.dadosabertos.description'),
      tags: ["API", "Dados Abertos", "ETL", "PowerBI", "Databricks", "Chatbot IA", "SQL"],
      imageUrl: base + "DadosAbertos.png",
      siteUrl: "https://www.gov.br/compras/pt-br/cidadao/compras-publicas-dados-abertos",
      imageMode: "contain",
    },
    {
      title: "LimpaPro",
      description: t('projects.items.limpapro.description'),
      techGroups: [
        { label: t('projects.techGroups.frontend'), items: ["React", "TypeScript", "Next.js"] },
        { label: t('projects.techGroups.styling'), items: ["Tailwind CSS", "Framer Motion"] },
        { label: t('projects.techGroups.deploy'), items: ["Vercel"] },
      ],
      imageUrl: base + "limpapro1.png",
      siteUrl: "https://limpapro.vercel.app/",
      imageMode: "contain",
    },
    {
      title: "Cowboy Ariza",
      description: t('projects.items.cowboy.description'),
      techGroups: [
        { label: t('projects.techGroups.backend'), items: ["Django"] },
        { label: t('projects.techGroups.frontend'), items: ["VueJS"] },
        { label: t('projects.techGroups.database'), items: ["Postgres"] },
        { label: t('projects.techGroups.infra'), items: ["Hostinger"] },
        { label: t('projects.techGroups.integrations'), items: ["Stripe", "Montreal DropShip"] },
      ],
      imageUrl: base + "cowboy_ariza.png",
      siteUrl: "https://cowboyariza.ca",
      imageMode: "contain",
    },
    {
      title: "UrbanLive",
      description: t('projects.items.urbanlive.description'),
      techGroups: [
        { label: t('projects.techGroups.backend'), items: ["Django", "API Django", "Gunicorn", "Celery"] },
        { label: t('projects.techGroups.frontend'), items: ["Django Templates", "HTML", "CSS", "Bootstrap", "JavaScript"] },
        { label: t('projects.techGroups.mobile'), items: ["React Native"] },
        { label: t('projects.techGroups.infra'), items: ["Docker", "NGINX", "Redis"] },
        { label: t('projects.techGroups.database'), items: ["Postgres"] },
      ],
      imageUrl: base + "urbanlive.png",
      imageMode: "contain",
      siteUrl: "https://www.urbanlive.com.br/",
      presentationUrl: "https://www.canva.com/design/DAGs6KRx-yE/04S6ys2Nq_Ndqc6EpMXt2g/watch",
    },
    {
      title: "Dead Souls",
      description: t('projects.items.deadsouls.description'),
      techGroups: [
        { label: t('projects.techGroups.frontend'), items: ["React 19", "TypeScript", "Canvas API"] },
        { label: t('projects.techGroups.styling'), items: ["TailwindCSS"] },
        { label: t('projects.techGroups.infra'), items: ["Vite"] },
        { label: t('projects.techGroups.integrations'), items: ["Google Gemini AI", "Web Audio API"] },
        { label: t('projects.techGroups.deploy'), items: ["Vercel"] },
      ],
      imageUrl: base + "dead_souls_screenshot.png",
      imageMode: "cover",
      siteUrl: "https://dead-souls.vercel.app/",
      presentationUrl: "https://github.com/melojrx/dead-souls",
    },
  ];
  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 tracking-tight">{t('projects.title')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};