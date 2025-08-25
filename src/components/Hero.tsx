// Hero minimalista responsivo com imagem de fundo otimizada

export const Hero = () => {
  const backgroundImage = new URL("../../assets/Developer Fundo MeloJrx.jpg", import.meta.url).pathname;
  
  return (
    <section 
      id="hero" 
      className="hidden md:flex min-h-screen items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay responsivo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/20" aria-hidden="true" />
      
      {/* Conteúdo central opcional para desktop */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center space-y-4 sm:space-y-6">
          {/* Título oculto mas acessível para SEO */}
          <h1 className="sr-only">Júnior Melo - Desenvolvedor Full Stack e Analista de Dados</h1>
          
          {/* Indicador de scroll para desktop */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};