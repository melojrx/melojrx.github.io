import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    const postUrl = `${window.location.origin}/blog/${post.id}`;
    const shareText = `Confira este artigo: ${post.title}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: shareText,
          url: postUrl,
        });
      } catch (err) {
        console.log("Sharing failed", err);
      }
    } else {
      // Fallback para desktop
      navigator.clipboard.writeText(postUrl);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <article className="pb-8 last:pb-0">
      <div className="flex justify-between items-start">
        <Link to={`/blog/${post.id}`} className="group no-underline flex-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleShare}
          className="ml-2 flex-shrink-0"
        >
          <Share2 className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="flex flex-wrap items-center text-sm text-muted-foreground mb-4 gap-2">
        <time dateTime={post.date}>{post.date}</time>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};