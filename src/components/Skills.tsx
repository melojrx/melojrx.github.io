import { Badge } from "@/components/ui/badge";

const skillsData = {
  "Frontend": ["React", "React Native", "TypeScript", "Tailwind CSS"],
  "Backend": ["Python", "Django", "Django Templates", "Node.js"],
  "Dados & IA": ["SQL", "ETL", "Apache AirFlow", "Databricks", "PowerBI", "Streamlit"],
  "DevOps & Infra": ["Docker", "Docker Compose", "NGINX", "Postgres", "Celery", "Redis"],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Competências</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="p-6 rounded-lg border">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};