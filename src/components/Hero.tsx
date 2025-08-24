import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Júnior Melo
        </h1>
        <p className="mt-4 text-xl md:text-2xl font-medium text-foreground">
          Desenvolvedor Full Stack & Analista de Dados
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
          Especialista em transformar dados brutos e processos complexos em soluções de software robustas e intuitivas, da concepção ao deploy.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#projects">Ver Meus Projetos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};