import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Competências", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Contato", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <a href="#hero" className="text-lg font-bold text-primary">
          Júnior Melo
        </a>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        <Button variant="outline" size="sm" asChild>
            <a href="#contact">Fale Comigo</a>
        </Button>
      </nav>
    </header>
  );
};