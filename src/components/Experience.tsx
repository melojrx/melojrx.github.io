export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center tracking-tight">Experiência Profissional</h2>
        <div className="grid gap-10 max-w-5xl mx-auto">
          {/* Cargo Atual */}
          <div className="relative rounded-2xl p-6 md:p-8 bg-background/70 backdrop-blur border border-border/60 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="grow space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">Engenharia de Dados, IA & Transparência</h3>
                  <p className="text-sm uppercase tracking-wide text-foreground/60 font-medium mt-1">Servidor Público Federal</p>
                </div>
                <div className="space-y-2 text-foreground/80 text-sm leading-relaxed">
                  <p><strong>Órgão:</strong> Ministério da Gestão e Inovação em Serviços Públicos (MGI)</p>
                  <p><strong>Unidade:</strong> COTIN - Coordenação de Transparência e Informações Referenciais / DELOG / SEGES</p>
                  <p>Atuação em pipelines de dados (Airflow, Databricks, SQL), construção de camadas semânticas, automação de integração, modelagem analítica e aplicação de técnicas de IA para suporte a transparência pública e tomada de decisão.</p>
                  <p>Contribuição em estratégias de governança, catálogos de dados e padronização de indicadores, sempre alinhando performance técnica e impacto institucional.</p>
                </div>
                <ul className="flex flex-wrap gap-2 pt-2 text-[11px] font-medium">
                  {['Airflow','Databricks','Python','SQL','Transparência','Governança de Dados','IA aplicada'].map(tag => (
                    <li key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Atuação em Projetos */}
          <div className="relative rounded-2xl p-6 md:p-8 bg-background/70 backdrop-blur border border-border/60 shadow-sm">
            <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Atuação em Projetos de Desenvolvimento & Consultoria
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-foreground/80">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Soluções & Produtos</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Plataformas web full stack (Django, React, APIs REST)</li>
                  <li>Aplicativos mobile (React Native, OTA updates)</li>
                  <li>Marketplaces e sistemas multi-tenant</li>
                  <li>Dashboards interativos e painéis executivos</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Dados & Inteligência</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Pipelines ETL orquestrados (Airflow)</li>
                  <li>Modelagem analítica e semântica</li>
                  <li>Automação de relatórios e métricas</li>
                  <li>Aplicação de IA assistiva no ciclo de desenvolvimento</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">DevOps & Operações</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Containers (Docker) & orquestração (Kubernetes)</li>
                  <li>NGINX, Gunicorn, observabilidade básica</li>
                  <li>Integração contínua & automações</li>
                  <li>Estratégias de versionamento e release</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Consultoria & Apoio</h4>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Mapeamento de requisitos e arquitetura inicial</li>
                  <li>Mentoria em práticas de desenvolvimento assistido por IA</li>
                  <li>Padronização de código e guidelines técnicos</li>
                  <li>Workshops internos e transferência de conhecimento</li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2 pt-6 text-[11px] font-medium">
              {['Django','React','React Native','Airflow','Databricks','Kubernetes','GitHub Actions','Postgres','Redis','Transparência','Arquitetura','Mentoria'].map(tag => (
                <li key={tag} className="px-2 py-0.5 rounded-full bg-secondary/60 text-foreground border border-border/50">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};