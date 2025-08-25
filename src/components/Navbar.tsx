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
        <a href="#hero" className="group flex items-center space-x-2">
          {/* Logo unificado branco para consistência com o footer */}
          <span className="relative inline-flex">
            <img
              src="/logo-white.svg"
              alt="Logo"
              className="h-8 w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-md bg-primary/40 transition-opacity duration-300" />
          </span>
          <span className="text-lg font-bold tracking-tight bg-clip-text text-foreground/90 group-hover:text-primary transition-colors">
            Júnior Melo
          </span>
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