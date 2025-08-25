import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 lg:py-12 bg-secondary/60 border-t border-border/40 mt-16 sm:mt-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center text-foreground/80 space-y-4 sm:space-y-6">
        <div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 flex-wrap">
          <a
            href="https://github.com/melojrx"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub: melojrx"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="mailto:jrmeloafrf@gmail.com"
            aria-label="Enviar email para jrmeloafrf@gmail.com"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=júnior-melo-a4817127"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
          </a>
          <a
            href="https://medium.com/@jrmeloafrf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            {/* Ícone Medium minimalista */}
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              viewBox="0 0 1043.63 592.71"
              role="img"
              aria-hidden="true"
              fill="currentColor"
            >
              <path d="M588.67 296.35c0 163.67-131.4 296.36-293.88 296.36S0 460 0 296.35 131.4 0 294.79 0s293.88 132.69 293.88 296.35M911.61 296.35c0 154.5-65.7 279.81-146.74 279.81s-146.73-125.31-146.73-279.81S683.84 16.54 764.88 16.54s146.73 125.31 146.73 279.81M1043.63 296.35c0 144.28-23.17 261.27-51.76 261.27s-51.76-117-51.76-261.27 23.17-261.27 51.76-261.27 51.76 117 51.76 261.27" />
            </svg>
          </a>
        </div>
        <p className="mt-6 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground/55">
          <img src="/logo-white.svg" alt="Logo" className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          <span>© {new Date().getFullYear()} Júnior Melo. Portfólio pessoal.</span>
        </p>
      </div>
    </footer>
  );
};