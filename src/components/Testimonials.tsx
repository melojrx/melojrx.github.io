import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  context?: string;
  date?: string;
};

// Edite esta lista com suas recomendações reais do LinkedIn.
// Dica: copie o texto da recomendação e valide com quem recomendou antes de publicar.
const testimonials: Testimonial[] = [
  {
    name: "Hugo Souto",
    role: "Engenheiro de Soluções de IA e Coordenador",
    company: "Secretaria de Governo Digital",
    text:
      "O Júnior veio para a equipe de dados dos sistemas de compras do Governo Federal com um perfil raro, de alguém que executa. Trouxe, junto com sua tranquilidade, sua ampla experiência no desenvolvimento de projetos web, de dados e de IA para liderar grandes projetos que hoje impactam todo o serviço público. É um profissional ávido por conhecimento e por se manter atualizado com tecnologias e frameworks estado-de-arte em dados e IA. Foi uma satisfação ser seu colega e é um prazer ser seu amigo.",
    linkedinUrl: "https://www.linkedin.com/in/hugo-souto",
    context: "Trabalhava na mesma equipe",
    date: "2 de setembro de 2025",
    avatarUrl: "/hugo_souto.png",
  },
  {
    name: "Joedson Camilo",
    role: "Diretor Nacional de Tecnologia da Informação e comunicação",
    company: undefined,
    text:
      "Profissional experiente e competente, com boa articulação, boa comunicação, trabalho em equipe. Liderança e Proatividade. Além de humidade e uma pessoa formidável. Super recomendo!!!! Portas da DTIC/PRF sempre abertas!",
    avatarUrl: "/joedson_camilo.png",
    linkedinUrl: "https://www.linkedin.com/in/joedson-camilo-661062191/",
    context: "Trabalhava com Júnior em equipes diferentes",
    date: "26 de agosto de 2024",
  },
  {
    name: "Luiz Guedes",
    role: "Founder @ StoryMode & EPICdigitais | Playful Creative EduTechie | GenZ Specialist | Educator | Consultant | PMO | BNI | IAA | BR Angels",
    text:
      "Melo é um profissional inovador, sempre conectado com tendências e oportunidades de crescimento. Foi um prazer trabalhar com ele em projetos de ponta tecnológica.",
    avatarUrl: "/luiz_guedes.png",
    linkedinUrl: "https://www.linkedin.com/in/epicguedes/",
    context: "Júnior era cliente de Luiz",
    date: "29 de agosto de 2024",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-secondary/40 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 tracking-tight">
          Recomendações
        </h2>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm sm:text-base">
          Depoimentos de profissionais com quem trabalhei diretamente. Conteúdo baseado em recomendações reais do LinkedIn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t) => (
            <Card key={t.name} className="h-full">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-12 w-12">
                  {t.avatarUrl ? (
                    <AvatarImage src={t.avatarUrl} alt={t.name} />
                  ) : (
                    <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                  )}
                </Avatar>
                <div className="min-w-0">
                  <div className="font-semibold leading-tight truncate">{t.name}</div>
                  <div className="text-xs text-foreground/70 truncate">
                    {t.role}
                    {t.company ? (
                      <>
                        {" "}
                        <span className="text-foreground/40">•</span> {t.company}
                      </>
                    ) : null}
                  </div>
                  {(t.context || t.date) && (
                    <div className="flex flex-wrap gap-1 mt-1">
                      {t.context && (
                        <span className="inline-block bg-primary/10 text-primary border border-primary/20 rounded px-2 py-0.5 text-[10px] font-medium">
                          {t.context}
                        </span>
                      )}
                      {t.date && (
                        <span className="inline-block bg-secondary/40 text-foreground/60 border border-border/40 rounded px-2 py-0.5 text-[10px] font-medium">
                          {t.date}
                        </span>
                      )}
                    </div>
                  )}
                </div>
                {t.linkedinUrl ? (
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto inline-flex items-center gap-1 text-xs text-primary hover:underline"
                    aria-label={`Ver perfil no LinkedIn de ${t.name}`}
                  >
                    <Linkedin className="h-4 w-4" /> Perfil
                  </a>
                ) : null}
              </CardHeader>
              <CardContent>
                <blockquote className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  <span className="mr-1 text-foreground/40">“</span>
                  {t.text}
                  <span className="ml-1 text-foreground/40">”</span>
                </blockquote>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-[10px]">Recomendação</Badge>
                  {t.company ? (
                    <Badge variant="outline" className="text-[10px]">{t.company}</Badge>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center text-xs sm:text-sm text-foreground/60">
          Quer ver mais? Consulte meu perfil no LinkedIn ou entre em contato para referências adicionais.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
