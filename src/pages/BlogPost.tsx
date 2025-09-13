import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Share2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  content?: string;
  excerpt?: string;
  date: string;
  readTime: string;
  tags: string[];
}

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  // Carregar post do localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      const posts: BlogPost[] = JSON.parse(savedPosts);
      const foundPost = posts.find(post => post.id === id);
      setPost(foundPost || null);
    }
  }, [id]);

  const handleShare = async () => {
    if (!post) return;
    
    const postUrl = `${window.location.origin}/blog/${id}`;
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

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Função para converter Markdown em HTML
  const convertMarkdownToHtml = (markdown: string) => {
    // Handle case where markdown is undefined or null
    if (!markdown) return "";
    
    return markdown
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/# (.*?)(\n|$)/g, "<h1>$1</h1>")
      .replace(/## (.*?)(\n|$)/g, "<h2>$1</h2>")
      .replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>")
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0;" />')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">$1</a>')
      .replace(/`(.*?)`/g, "<code class='bg-muted px-1 py-0.5 rounded text-sm'>$1</code>")
      .replace(/^- (.*?)(\n|$)/gm, "<li>$1</li>")
      .replace(/(<li>[^]*?<\/li>)/g, "<ul class='list-disc pl-5 my-4 space-y-1'>$1</ul>")
      .replace(/\n/g, "<br />");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
        <div className="flex justify-between items-center mb-6">
          <Button asChild variant="outline">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Button 
            variant="outline" 
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </Button>
        </div>
        
        <article>
          <header className="mb-8 sm:mb-10">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold flex-1">{post.title}</h1>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-muted-foreground text-sm sm:text-base">
              <time dateTime={post.date}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          <div 
            className="prose prose-neutral dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(post.content || post.excerpt || "") }}
          />
        </article>
        
        <div className="mt-8 pt-8 border-t border-border">
          <Button 
            variant="outline" 
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4" />
            Compartilhar este artigo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;