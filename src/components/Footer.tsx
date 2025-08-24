import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 bg-secondary">
      <div className="container mx-auto px-4 text-center text-foreground/80">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-primary transition-colors"><Github /></a>
          <a href="#" className="hover:text-primary transition-colors"><Linkedin /></a>
          <a href="mailto:contato@juniormelo.dev" className="hover:text-primary transition-colors"><Mail /></a>
        </div>
        <p>Desenvolvido por Júnior Melo</p>
      </div>
    </footer>
  );
};