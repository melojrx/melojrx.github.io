import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <Avatar className="w-48 h-48">
              <AvatarImage src="https://github.com/shadcn.png" alt="Júnior Melo" />
              <AvatarFallback>JM</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-lg text-foreground/80 space-y-4">
            <p>
              Olá! Sou Júnior Melo, um profissional apaixonado por resolver problemas complexos na interseção entre tecnologia, dados e negócios. Minha jornada começou na Economia, o que me deu uma base sólida para entender os desafios estratégicos das organizações.
            </p>
            <p>
              Hoje, atuo como Desenvolvedor Full Stack e Analista de Dados, combinando minha expertise técnica com uma visão analítica para construir soluções que não apenas funcionam, mas que geram valor real. Tenho um profundo interesse em engenharia de dados, automação de processos e na aplicação de IA para criar sistemas mais inteligentes e eficientes.
            </p>
            <p>
              Atualmente, como Servidor Público Federal no Ministério da Gestão e Inovação, aplico minhas habilidades para promover a transparência e a eficiência no setor público, um desafio que me motiva diariamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};