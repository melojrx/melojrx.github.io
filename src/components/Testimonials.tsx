import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
  {
    name: "Magnum Costa de Oliveira",
    role: "Coordenador de Transparência e Informações Gerenciais/DELOG/MGI",
    text:
      "Prezados, É com grande satisfação que recomendo José Maria Melo Junior como um excelente desenvolvedor fullstack, cuja contribuição tem sido absolutamente fundamental no desenvolvimento de APIs robustas e aplicações integradas com inteligência artificial. Ao longo de nossa colaboração, José demonstrou domínio técnico excepcional em todo o ciclo de desenvolvimento — do backend ao frontend —, com destaque para a criação de APIs escaláveis, seguras e otimizadas, além da integração fluida de modelos de IA em soluções reais de negócios. Sua capacidade de traduzir requisitos complexos em arquiteturas limpas, performáticas e de fácil manutenção é impressionante. Além da competência técnica, José se destaca pela proatividade, clareza na comunicação e foco em resultados. Ele não apenas entrega código de alta qualidade, mas também propõe melhorias arquiteturais e antecipa desafios, elevando o padrão de todo o time. Sem dúvidas, José Maria Melo Junior é um profissional raro no mercado — alguém que une profundidade técnica, visão de produto e paixão por inovação. Recomendo-o com total confiança para qualquer projeto que exija excelência em desenvolvimento fullstack e inteligência artificial.",
    avatarUrl: "/magnum.png",
    context: "Colaborava com Júnior em integrações de IA",
    linkedinUrl: "https://www.linkedin.com/in/magnum-costa-de-oliveira-8a3376131/",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-secondary/30 border-y border-border/40"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl opacity-70" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">Confiança construída em projetos reais</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">Recomendações</h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            Depoimentos de profissionais com quem trabalhei diretamente — uma amostra do impacto gerado em squads de dados,
            IA e produtos digitais.
          </p>
        </div>

        <div className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg shadow-primary/5">
                    <CardHeader className="flex flex-row items-start gap-4 pb-3">
                      <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                        {t.avatarUrl ? (
                          <AvatarImage src={t.avatarUrl} alt={t.name} />
                        ) : (
                          <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        )}
                      </Avatar>
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold leading-tight">{t.name}</div>
                        <div className="text-xs text-foreground/70 mt-0.5">
                          {t.role}
                          {t.company ? (
                            <>
                              {" "}
                              <span className="text-foreground/40">•</span> {t.company}
                            </>
                          ) : null}
                        </div>
                        {(t.context || t.date) && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {t.context && (
                              <Badge variant="outline" className="text-[10px] font-medium">
                                {t.context}
                              </Badge>
                            )}
                            {t.date && (
                              <span className="inline-flex items-center rounded-full bg-secondary/60 px-2 py-0.5 text-[10px] text-foreground/70">
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
                          className="text-xs text-primary inline-flex items-center gap-1 whitespace-nowrap hover:underline"
                          aria-label={`Ver perfil no LinkedIn de ${t.name}`}
                        >
                          <Linkedin className="h-4 w-4" /> Perfil
                        </a>
                      ) : null}
                    </CardHeader>
                    <CardContent>
                      <blockquote className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                        <span className="mr-1 text-primary/60">“</span>
                        {t.text}
                        <span className="ml-1 text-primary/60">”</span>
                      </blockquote>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-[10px] tracking-wide uppercase">Recomendação</Badge>
                        {t.company ? (
                          <Badge variant="outline" className="text-[10px]">{t.company}</Badge>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-10 bg-background/80 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-10 bg-background/80 shadow-lg" />
          </Carousel>
          <p className="mt-6 text-center text-xs text-foreground/60 md:hidden">Arraste para o lado para explorar mais recomendações.</p>
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-foreground/60">
          Quer ver mais? Consulte meu perfil no LinkedIn ou entre em contato para referências adicionais.
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
