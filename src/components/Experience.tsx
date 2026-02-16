import { useTranslation } from 'react-i18next';

export const Experience = () => {
  const { t } = useTranslation();
  
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/40 to-background" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 text-center tracking-tight">{t('experience.title')}</h2>
        <div className="grid gap-8 sm:gap-10 max-w-5xl mx-auto">
          {/* Cargo Atual */}
          <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 bg-background/70 backdrop-blur border border-border/60 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
              <div className="grow space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">{t('experience.current.title')}</h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wide text-foreground/60 font-medium mt-1">{t('experience.current.type')}</p>
                </div>
                <div className="space-y-2 text-foreground/80 text-sm sm:text-base leading-relaxed">
                  <p><strong>{t('experience.current.organization').split(' ')[0]}:</strong> {t('experience.current.organization')}</p>
                  <p><strong>{t('experience.current.unit').split(' ')[0]}:</strong> {t('experience.current.unit')}</p>
                  <p>{t('experience.current.description1')}</p>
                  <p>{t('experience.current.description2')}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 text-[10px] sm:text-[11px] font-medium">
                  {['Airflow','Databricks','Python','SQL','Transparência','Governança de Dados','IA aplicada'].map(tag => (
                    <li key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Experiência Anterior - PRF */}
          <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 bg-background/70 backdrop-blur border border-border/60 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 sm:gap-6">
              <div className="grow space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-primary">{t('experience.previous.title')}</h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wide text-foreground/60 font-medium mt-1">{t('experience.previous.type')}</p>
                </div>
                <div className="space-y-2 text-foreground/80 text-sm sm:text-base leading-relaxed">
                  <p><strong>{t('experience.previous.organization').split(' ')[0]}:</strong> {t('experience.previous.organization')}</p>
                  <p><strong>{t('experience.previous.period').split(' ')[0]}:</strong> {t('experience.previous.period')}</p>
                  <p>{t('experience.previous.description1')}</p>
                  <p>{t('experience.previous.description2')}</p>
                </div>
                <ul className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 text-[10px] sm:text-[11px] font-medium">
                  {['Gestão Financeira','Análise de Dados','Dashboards','IA','Intranet','Orçamento Público','Administração'].map(tag => (
                    <li key={tag} className="px-2 py-0.5 rounded-full bg-secondary/60 text-foreground border border-border/50 whitespace-nowrap">{tag}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Atuação em Projetos */}
          <div className="relative rounded-2xl p-4 sm:p-6 lg:p-8 bg-background/70 backdrop-blur border border-border/60 shadow-sm">
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              {t('experience.projects.title')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 text-sm sm:text-base text-foreground/80">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t('experience.projects.solutions.title')}</h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>{t('experience.projects.solutions.item1')}</li>
                  <li>{t('experience.projects.solutions.item2')}</li>
                  <li>{t('experience.projects.solutions.item3')}</li>
                  <li>{t('experience.projects.solutions.item4')}</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t('experience.projects.data.title')}</h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>{t('experience.projects.data.item1')}</li>
                  <li>{t('experience.projects.data.item2')}</li>
                  <li>{t('experience.projects.data.item3')}</li>
                  <li>{t('experience.projects.data.item4')}</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t('experience.projects.devops.title')}</h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>{t('experience.projects.devops.item1')}</li>
                  <li>{t('experience.projects.devops.item2')}</li>
                  <li>{t('experience.projects.devops.item3')}</li>
                  <li>{t('experience.projects.devops.item4')}</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t('experience.projects.consulting.title')}</h4>
                <ul className="space-y-1 list-disc list-inside text-sm">
                  <li>{t('experience.projects.consulting.item1')}</li>
                  <li>{t('experience.projects.consulting.item2')}</li>
                  <li>{t('experience.projects.consulting.item3')}</li>
                  <li>{t('experience.projects.consulting.item4')}</li>
                </ul>
              </div>
            </div>
            <ul className="flex flex-wrap gap-1.5 sm:gap-2 pt-4 sm:pt-6 text-[10px] sm:text-[11px] font-medium">
              {['Django','React','React Native','Airflow','Databricks','Kubernetes','GitHub Actions','Postgres','Redis','Transparência','Arquitetura','Mentoria'].map(tag => (
                <li key={tag} className="px-2 py-0.5 rounded-full bg-secondary/60 text-foreground border border-border/50 whitespace-nowrap">{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};