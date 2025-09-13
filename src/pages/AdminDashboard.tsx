import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PlusCircle, Edit, Trash2, Eye } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  // Verificar autenticação
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      navigate("/admin/login");
    }
    
    // Carregar posts do localStorage
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Carregar posts de exemplo se não houver posts salvos
      const samplePosts = [
        {
          id: "1",
          title: "Getting Started with React Hooks",
          excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
          content: `# Getting Started with React Hooks

React Hooks have revolutionized the way we write React components. They allow us to use state and other React features without writing a class component.

## What are React Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They were introduced in React 16.8.

## Basic Hooks

The most commonly used hooks include:

- **useState**: For managing state in functional components
- **useEffect**: For handling side effects
- **useContext**: For consuming context

## Example: useState Hook

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

This simple example demonstrates how useState allows us to add state to a functional component.

## Benefits of Using Hooks

1. **Simpler Components**: No need to switch between function and class components
2. **Better Code Reuse**: Custom hooks allow for better logic reuse
3. **Easier Testing**: Functional components are easier to test
4. **Less Boilerplate**: No need for constructor or binding methods`,
          date: "May 15, 2023",
          readTime: "5 min read",
          tags: ["React", "JavaScript", "Frontend"]
        },
        {
          id: "2",
          title: "Understanding TypeScript Generics",
          excerpt: "A comprehensive guide to TypeScript generics and how they can make your code more flexible and reusable.",
          content: `# Understanding TypeScript Generics

TypeScript generics are a powerful feature that allows you to create reusable components that work with multiple types while preserving type safety.

## What are Generics?

Generics allow you to create components that can work over a variety of types rather than a single one. This provides a way to tell the compiler that the type of a value depends on the type of another value.

## Basic Generic Syntax

\`\`\`typescript
function identity<T>(arg: T): T {
    return arg;
}
\`\`\`

In this example, \`<T>\` is the type variable, a special kind of variable that works on types rather than values.

## Using Generics

Once you've written the generic identity function, you can call it in two ways:

\`\`\`typescript
// 1. Pass the type explicitly
let output = identity<string>("myString");

// 2. Let TypeScript infer the type (preferred)
let output = identity("myString");
\`\`\`

## Generic Interfaces

\`\`\`typescript
interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
\`\`\`

## Generic Classes

Generic classes work similarly to generic interfaces:

\`\`\`typescript
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
    return x + y;
};
\`\`\``,
          date: "June 2, 2023",
          readTime: "8 min read",
          tags: ["TypeScript", "Programming"]
        },
        {
          id: "3",
          title: "Building Responsive Layouts with Tailwind CSS",
          excerpt: "Explore techniques for creating responsive layouts using Tailwind CSS utility classes.",
          content: `# Building Responsive Layouts with Tailwind CSS

Tailwind CSS provides a comprehensive set of utility classes that make building responsive layouts straightforward and efficient.

## Mobile-First Approach

Tailwind uses a mobile-first breakpoint system, meaning unprefixed utilities apply to all screen sizes, and prefixed utilities apply to specific breakpoints:

- \`sm\`: 640px and up
- \`md\`: 768px and up
- \`lg\`: 1024px and up
- \`xl\`: 1280px and up
- \`2xl\`: 1536px and up

## Responsive Prefixes

\`\`\`html
<!-- This will be white on mobile and green on medium screens and up -->
<div class="text-white md:text-green-500">
  Responsive Text
</div>
\`\`\`

## Common Layout Patterns

### Flexbox

\`\`\`html
<div class="flex flex-col md:flex-row">
  <div class="md:w-1/2">Column 1</div>
  <div class="md:w-1/2">Column 2</div>
</div>
\`\`\`

### Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Practical Example: Responsive Card Grid

\`\`\`html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow-md p-6">
    <h3 class="text-xl font-bold mb-2">Card Title</h3>
    <p class="text-gray-700">Card content goes here...</p>
  </div>
  <!-- More cards... -->
</div>
\`\`\``,
          date: "June 20, 2023",
          readTime: "6 min read",
          tags: ["CSS", "Tailwind", "Frontend"]
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem("blogPosts", JSON.stringify(samplePosts));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin/login");
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir esta postagem?")) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <div className="flex gap-2">
              <Button onClick={handleLogout} variant="outline">
                Sair
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Postagens do Blog</h2>
          <Button onClick={() => navigate("/admin/posts/new")}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nova Postagem
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Nenhuma postagem encontrada.</p>
            <Button onClick={() => navigate("/admin/posts/new")}>
              Criar sua primeira postagem
            </Button>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <div key={post.id} className="border border-border rounded-lg p-4 bg-card">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{post.date} • {post.readTime}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/blog/${post.id}`)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate(`/admin/posts/edit/${post.id}`)}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDeletePost(post.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;