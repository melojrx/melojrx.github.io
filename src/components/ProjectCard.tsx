import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const ProjectCard = ({ title, description, tags, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <img src={imageUrl} alt={title} className="rounded-t-lg aspect-video object-cover" />
        <CardTitle className="pt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-start p-0 h-auto">
          Ver Estudo de Caso <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};