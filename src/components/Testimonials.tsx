import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Linkedin } from "lucide-react";
import { useTranslation } from 'react-i18next';

type Testimonial = {
  id: string;
  avatarUrl?: string;
  linkedinUrl?: string;
};

// Lista de recomendações com dados estáticos que não precisam ser traduzidos
const testimonialsData: Testimonial[] = [
  {
    id: "hugo",
    avatarUrl: "/hugo_souto.png",
    linkedinUrl: "https://www.linkedin.com/in/hugo-souto",
  },
  {
    id: "joedson",
    avatarUrl: "/joedson_camilo.png",
    linkedinUrl: "https://www.linkedin.com/in/joedson-camilo-661062191/",
  },
  {
    id: "luiz",
    avatarUrl: "/luiz_guedes.png",
    linkedinUrl: "https://www.linkedin.com/in/epicguedes/",
  },
  {
    id: "magnum",
    avatarUrl: "/magnum.png",
    linkedinUrl: "https://www.linkedin.com/in/magnum-costa-de-oliveira-8a3376131/",
  },
];

export const Testimonials = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-secondary/30 border-y border-border/40"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-3xl opacity-70" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary/80 mb-3">{t('testimonials.subtitle')}</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 tracking-tight">{t('testimonials.title')}</h2>
          <p className="text-foreground/70 text-sm sm:text-base">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="mt-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonialsData.map((testimonial) => {
                const name = t(`testimonials.items.${testimonial.id}.name`);
                const role = t(`testimonials.items.${testimonial.id}.role`);
                const company = t(`testimonials.items.${testimonial.id}.company`, { defaultValue: '' });
                const text = t(`testimonials.items.${testimonial.id}.text`);
                const context = t(`testimonials.items.${testimonial.id}.context`, { defaultValue: '' });
                const date = t(`testimonials.items.${testimonial.id}.date`, { defaultValue: '' });
                
                return (
                  <CarouselItem key={testimonial.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 shadow-lg shadow-primary/5">
                      <CardHeader className="flex flex-row items-start gap-4 pb-3">
                        <Avatar className="h-12 w-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                          {testimonial.avatarUrl ? (
                            <AvatarImage src={testimonial.avatarUrl} alt={name} />
                          ) : (
                            <AvatarFallback>{name.slice(0, 2).toUpperCase()}</AvatarFallback>
                          )}
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold leading-tight">{name}</div>
                          <div className="text-xs text-foreground/70 mt-0.5">
                            {role}
                            {company ? (
                              <>
                                {" "}
                                <span className="text-foreground/40">•</span> {company}
                              </>
                            ) : null}
                          </div>
                          {(context || date) && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {context && (
                                <Badge variant="outline" className="text-[10px] font-medium">
                                  {context}
                                </Badge>
                              )}
                              {date && (
                                <span className="inline-flex items-center rounded-full bg-secondary/60 px-2 py-0.5 text-[10px] text-foreground/70">
                                  {date}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                        {testimonial.linkedinUrl ? (
                          <a
                            href={testimonial.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary inline-flex items-center gap-1 whitespace-nowrap hover:underline"
                            aria-label={`Ver perfil no LinkedIn de ${name}`}
                          >
                            <Linkedin className="h-4 w-4" /> {t('testimonials.badge.profile')}
                          </a>
                        ) : null}
                      </CardHeader>
                      <CardContent>
                        <blockquote className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                          <span className="mr-1 text-primary/60">"</span>
                          {text}
                          <span className="ml-1 text-primary/60">"</span>
                        </blockquote>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Badge variant="secondary" className="text-[10px] tracking-wide uppercase">{t('testimonials.badge.recommendation')}</Badge>
                          {company ? (
                            <Badge variant="outline" className="text-[10px]">{company}</Badge>
                          ) : null}
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-10 bg-background/80 shadow-lg" />
            <CarouselNext className="hidden md:flex -right-10 bg-background/80 shadow-lg" />
          </Carousel>
          <p className="mt-6 text-center text-xs text-foreground/60 md:hidden">{t('testimonials.swipeHint')}</p>
        </div>

        <div className="mt-12 text-center text-xs sm:text-sm text-foreground/60">
          {t('testimonials.footer')}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
