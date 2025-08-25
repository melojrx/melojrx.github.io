import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechGroup {
  label: string;
  items: string[];
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[]; // legado simples
  techGroups?: TechGroup[]; // novo formato agrupado
  imageUrl: string;
  siteUrl?: string;
  presentationUrl?: string; // ex: link do Canva / pitch deck
  caseStudyUrl?: string; // reservado para futuro artigo/medium etc
  imageMode?: "cover" | "contain"; // controla enquadramento da imagem
}

export const ProjectCard = ({ title, description, tags, techGroups, imageUrl, siteUrl, presentationUrl, caseStudyUrl, imageMode = "cover" }: ProjectCardProps) => {
  const hasFooter = !!(siteUrl || presentationUrl || caseStudyUrl);
  return (
    <Card className="flex flex-col h-full transition-transform duration-300 hover:scale-[1.02]">
      <CardHeader className="p-4 sm:p-6">
        <div className="relative w-full aspect-video overflow-hidden rounded-lg bg-muted">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              if (!target.dataset.fallback) {
                target.src = import.meta.env.BASE_URL + "placeholder.svg";
                target.dataset.fallback = "true";
              }
            }}
            className={cn(
              "w-full h-full transition-[object-position] duration-300",
              imageMode === "cover" && "object-cover",
              imageMode === "contain" && "object-contain p-2"
            )}
          />
          {imageMode === "contain" && (
            <div className="pointer-events-none absolute inset-0 ring-1 ring-border/40 rounded-lg" />
          )}
        </div>
        <CardTitle className="pt-3 sm:pt-4 text-lg sm:text-xl leading-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow p-4 sm:p-6 pt-0">
        <p className="text-foreground/80 mb-4 text-sm sm:text-base leading-relaxed">{description}</p>
        {techGroups ? (
          <div className="space-y-3">
            {techGroups.map((group) => (
              <div key={group.label} className="flex flex-col gap-1.5">
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide uppercase text-muted-foreground/80">{group.label}</span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map(item => (
                    <Badge key={group.label+item} variant="outline" className="text-xs px-2 py-0.5 whitespace-nowrap">{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {(tags || []).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs whitespace-nowrap">{tag}</Badge>
            ))}
          </div>
        )}
      </CardContent>
      {hasFooter && (
        <CardFooter className="flex flex-col gap-2 sm:flex-row sm:gap-3 p-4 sm:p-6 pt-0">
          {siteUrl && (
            <Button asChild variant="secondary" size="sm" className="gap-2 flex-1 w-full sm:w-auto">
              <a href={siteUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visitar site do projeto ${title}`}>
                <Globe className="h-4 w-4" /> Site
              </a>
            </Button>
          )}
          {presentationUrl && (
            <Button asChild variant="outline" size="sm" className="gap-2 flex-1 w-full sm:w-auto">
              <a href={presentationUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver apresentação do projeto ${title}`}>
                <PlayCircle className="h-4 w-4" /> Pitch
              </a>
            </Button>
          )}
          {caseStudyUrl && (
            <Button asChild variant="ghost" size="sm" className="gap-2 flex-1 justify-start w-full sm:w-auto">
              <a href={caseStudyUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ler estudo de caso do projeto ${title}`}>
                Ver Estudo de Caso <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};