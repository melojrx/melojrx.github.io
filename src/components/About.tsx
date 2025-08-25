import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const About = () => {
  return (
    <section id="about" className="pt-24 pb-16 md:pt-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 lg:mb-16">Sobre Mim</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          <div className="flex-shrink-0 order-1 lg:order-none">
            <Avatar className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 ring-4 ring-primary/20 mx-auto">
              <AvatarImage src={new URL("../../assets/profile.png", import.meta.url).pathname} alt="Júnior Melo" />
              <AvatarFallback className="text-xl sm:text-2xl">JM</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-base sm:text-lg lg:text-xl text-foreground/80 space-y-4 sm:space-y-6 order-2 lg:order-none max-w-none lg:max-w-2xl">
            <p className="leading-relaxed">
              Olá! Sou Júnior Melo, um profissional apaixonado por resolver problemas complexos na interseção entre tecnologia, dados e negócios. Minha jornada começou na Economia, o que me deu uma base sólida para entender os desafios estratégicos das organizações.
            </p>
            <p className="leading-relaxed">
              Hoje, atuo como Desenvolvedor Full Stack e Analista de Dados, combinando minha expertise técnica com uma visão analítica para construir soluções que não apenas funcionam, mas que geram valor real. Tenho um profundo interesse em engenharia de dados, automação de processos e na aplicação de IA para criar sistemas mais inteligentes e eficientes.
            </p>
            <p className="leading-relaxed">
              Atualmente, como Servidor Público Federal no Ministério da Gestão e Inovação, aplico minhas habilidades para promover a transparência e a eficiência no setor público, um desafio que me motiva diariamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};