import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState, useEffect } from "react";
import { Menu, X, Headphones } from "lucide-react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Sobre", href: "#about" },
  { name: "Competências", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Recomendações", href: "#testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contato", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile para ajustar o link do logo
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const homeLink = isMobile ? "#about" : "#hero";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link to={homeLink} className="group flex items-center space-x-2 flex-shrink-0" onClick={closeMenu}>
            {/* Logo unificado branco para consistência com o footer */}
            <span className="relative inline-flex">
              <img
                src="/logo-white.svg"
                alt="Logo"
                className="h-7 w-7 sm:h-8 sm:w-8 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
              />
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-md bg-primary/40 transition-opacity duration-300" />
            </span>
            <span className="text-base sm:text-lg font-bold tracking-tight bg-clip-text text-foreground/90 group-hover:text-primary transition-colors">
              Júnior Melo
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                  onClick={closeMenu}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            ))}
          </div>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <Button variant="outline" size="sm" className="hidden sm:inline-flex gap-2 group transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-primary/50" asChild>
              <a href="#contact">
                <Headphones className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Fale Comigo
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.href.startsWith('/') ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="px-3 py-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-foreground/80">Tema</span>
                  <ThemeToggle />
                </div>
                <Button variant="outline" size="sm" className="gap-2 group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-primary/50 active:scale-[0.98]" asChild>
                  <a href="#contact" onClick={closeMenu}>
                    <Headphones className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                    Fale Comigo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};