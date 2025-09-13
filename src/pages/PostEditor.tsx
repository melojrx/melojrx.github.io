import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useNavigate, useParams } from "react-router-dom";
import { TextareaMarkdown } from "@/components/TextareaMarkdown";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

const PostEditor = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const isEditing = !!id;
  
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [isPreview, setIsPreview] = useState(false);

  // Verificar autenticação
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
    
    // Se estiver editando, carregar os dados do post
    if (isEditing) {
      const savedPosts = localStorage.getItem("blogPosts");
      if (savedPosts) {
        const posts: BlogPost[] = JSON.parse(savedPosts);
        const post = posts.find(p => p.id === id);
        if (post) {
          setTitle(post.title);
          setExcerpt(post.excerpt);
          setContent(post.content);
          setTags(post.tags.join(", "));
        }
      }
    }
  }, [id, isEditing, navigate]);

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const post: BlogPost = {
      id: isEditing ? id! : Date.now().toString(),
      title,
      excerpt,
      content,
      date: new Date().toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
      readTime: calculateReadTime(content),
      tags: tags.split(",").map(tag => tag.trim()).filter(tag => tag)
    };
    
    // Salvar post
    const savedPosts = localStorage.getItem("blogPosts");
    let posts: BlogPost[] = savedPosts ? JSON.parse(savedPosts) : [];
    
    if (isEditing) {
      // Atualizar post existente
      posts = posts.map(p => p.id === id ? post : p);
    } else {
      // Adicionar novo post
      posts.unshift(post);
    }
    
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    navigate("/admin/dashboard");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              {isEditing ? "Editar Postagem" : "Nova Postagem"}
            </h1>
            <Button onClick={() => navigate("/admin/dashboard")} variant="outline">
              Voltar
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div>
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Digite o título da postagem"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="Digite um resumo da postagem"
                className="mt-1"
                rows={3}
                required
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags</Label>
              <Input
                id="tags"
                value={tags}
                onChange={(e) => setTags(e.target.value)}
                placeholder="Digite tags separadas por vírgula (ex: React, JavaScript, Frontend)"
                className="mt-1"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Label htmlFor="content">Conteúdo</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => setIsPreview(!isPreview)}
                >
                  {isPreview ? "Editar" : "Pré-visualizar"}
                </Button>
              </div>
              
              <TextareaMarkdown
                value={content}
                onChange={setContent}
                isPreview={isPreview}
                placeholder="Escreva sua postagem em Markdown..."
                className="min-h-[400px]"
              />
            </div>

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => navigate("/admin/dashboard")}>
                Cancelar
              </Button>
              <Button type="submit">
                {isEditing ? "Atualizar Postagem" : "Publicar Postagem"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditor;