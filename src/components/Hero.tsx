// Hero minimalista sem textos, somente imagem de fundo

export const Hero = () => {
  const backgroundImage = new URL("../../assets/Developer Fundo MeloJrx.jpg", import.meta.url).pathname;
  
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center text-center relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
  <div className="absolute inset-0" aria-hidden="true" />
    </section>
  );
};