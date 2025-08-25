// Cada skill pode opcionalmente ter um badge (url de imagem). Fallback para label simples.
interface SkillItem { label: string; badge?: string }

const skillsData: Record<string, SkillItem[]> = {
  "Frontend": [
    { label: "React", badge: "https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" },
    { label: "TypeScript", badge: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" },
    { label: "JavaScript", badge: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" },
    { label: "Tailwind CSS", badge: "https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white" },
    { label: "Bootstrap", badge: "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white" },
  ],
  "Mobile": [
    { label: "React Native", badge: "https://img.shields.io/badge/React%20Native-20232A?logo=react&logoColor=61DAFB" },
  ],
  "Backend & APIs": [
    { label: "Python", badge: "https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white" },
    { label: "Django", badge: "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white" },
    { label: "Node.js", badge: "https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" },
    { label: "Celery", badge: "https://img.shields.io/badge/Celery-37814A?logo=celery&logoColor=white" },
  ],
  "Dados & IA": [
    { label: "SQL", badge: "https://img.shields.io/badge/SQL-336791?logo=postgresql&logoColor=white" },
    { label: "Apache Airflow", badge: "https://img.shields.io/badge/Apache%20Airflow-017CEE?logo=apache-airflow&logoColor=white" },
    { label: "Databricks", badge: "https://img.shields.io/badge/Databricks-FF3621?logo=databricks&logoColor=white" },
    { label: "PowerBI", badge: "https://img.shields.io/badge/Power%20BI-F2C811?logo=powerbi&logoColor=black" },
    { label: "Streamlit", badge: "https://img.shields.io/badge/Streamlit-FF4B4B?logo=streamlit&logoColor=white" },
  ],
  "DevOps & Cloud": [
    { label: "Docker", badge: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white" },
    { label: "Kubernetes", badge: "https://img.shields.io/badge/Kubernetes-326CE5?logo=kubernetes&logoColor=white" },
    { label: "NGINX", badge: "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white" },
    { label: "Postgres", badge: "https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" },
    { label: "Redis", badge: "https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white" },
  ],
  "Versionamento & Colaboração": [
    { label: "Git", badge: "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white" },
    { label: "GitHub", badge: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white" },
  ],
  "Tooling & AI Assist": [
    { label: "VSCode", badge: "https://img.shields.io/badge/VS%20Code-007ACC?logo=visual-studio-code&logoColor=white" },
    { label: "Claude Code CLI", badge: "https://img.shields.io/badge/Claude%20Code-5721FF?logo=anthropic&logoColor=white" },
    { label: "Gemini CLI", badge: "https://img.shields.io/badge/Gemini%20CLI-1A73E8?logo=google&logoColor=white" },
    { label: "Cursor", badge: "https://img.shields.io/badge/Cursor-000000?logo=cursor&logoColor=white" },
    { label: "Trae", badge: "https://img.shields.io/badge/Trae-4F46E5?logo=lightning&logoColor=white" },
    { label: "Dyad", badge: "https://img.shields.io/badge/Dyad-6366F1?logo=supabase&logoColor=white" },
  ],
  "Design & UX": [
    { label: "Figma", badge: "https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white" },
    { label: "Canva Pro", badge: "https://img.shields.io/badge/Canva-00C4CC?logo=canva&logoColor=white" },
  ],
};

export const Skills = () => {
  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background decorativo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Competências</h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-14 text-sm md:text-base">
          Ecosistema de tecnologias que utilizo para entregar soluções escaláveis, observáveis e orientadas a dados.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div
              key={category}
              className="group relative p-[1px] rounded-xl bg-gradient-to-br from-primary/40 via-primary/10 to-transparent hover:from-primary/60 hover:via-primary/20 transition-colors"
            >
              <div className="h-full w-full rounded-xl bg-background/70 backdrop-blur-sm p-5 border border-border/60 group-hover:border-primary/50 transition-colors">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <li key={skill.label} className="flex">
                      {skill.badge ? (
                        <img
                          src={skill.badge}
                          alt={skill.label}
                          className="h-6 hover:scale-105 transition-transform"
                          loading="lazy"
                        />
                      ) : (
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold bg-secondary/70 text-secondary-foreground backdrop-blur-sm">
                          {skill.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};