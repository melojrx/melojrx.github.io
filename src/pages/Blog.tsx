import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BlogPostCard } from "@/components/BlogPostCard";
import { BlogPagination } from "@/components/BlogPagination";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  tags: string[];
}

const Blog = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 5;

  // Carregar posts do localStorage
  useEffect(() => {
    const savedPosts = localStorage.getItem("blogPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    } else {
      // Posts de exemplo caso não haja posts salvos
      const samplePosts: BlogPost[] = [
        {
          id: "1",
          title: "Explorando o Qwen3-Coder-Plus: O Futuro da Programação com IA",
          excerpt: "Descubra como o Qwen3-Coder-Plus está revolucionando o desenvolvimento de software com sua capacidade avançada de geração de código e assistência inteligente.",
          content: `# Explorando o Qwen3-Coder-Plus: O Futuro da Programação com IA

No mundo em constante evolução do desenvolvimento de software, a inteligência artificial tem desempenhado um papel cada vez mais importante. O Qwen3-Coder-Plus, a mais recente adição à família Qwen da Alibaba Cloud, representa um marco significativo nesse campo. Neste artigo, exploraremos os aspectos técnicos, casos de uso, configurações e opções gratuitas disponíveis para esta impressionante ferramenta de programação assistida por IA.

## O que é o Qwen3-Coder-Plus?

O Qwen3-Coder-Plus é um modelo de linguagem de grande escala especialmente projetado para tarefas de programação. Desenvolvido pela Alibaba Cloud, ele é baseado na arquitetura Qwen3 e foi otimizado especificamente para entender e gerar código em várias linguagens de programação. Com 7B de parâmetros, este modelo oferece um equilíbrio excepcional entre desempenho e eficiência.

## Aspectos Técnicos

### Arquitetura e Treinamento

O Qwen3-Coder-Plus foi treinado em um conjunto de dados extensivo que inclui:

- **15 trilhões de tokens** de código-fonte
- **200GB de dados de GitHub**
- **Documentos técnicos e tutoriais**
- **Stack Overflow e fóruns de desenvolvimento**

Essa base de treinamento robusta permite que o modelo compreenda não apenas a sintaxe das linguagens de programação, mas também as melhores práticas, padrões de design e padrões comuns de solução de problemas.

### Características Técnicas

- **Parâmetros:** 7 bilhões (7B)
- **Contexto:** Suporta até 128K tokens
- **Linguagens:** Mais de 80 linguagens de programação
- **Frameworks:** Compatível com frameworks populares como React, Vue, Angular, Django, Flask, etc.

## Casos de Uso

### 1. Geração de Código

O Qwen3-Coder-Plus pode gerar código completo a partir de descrições em linguagem natural:

\`\`\`python
# Exemplo: Crie uma função em Python que retorne os primeiros n números da sequência de Fibonacci

def fibonacci_sequence(n):
    """Retorna os primeiros n números da sequência de Fibonacci"""
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    
    sequence = [0, 1]
    for i in range(2, n):
        sequence.append(sequence[i-1] + sequence[i-2])
    
    return sequence
\`\`\`

### 2. Explicação de Código

O modelo pode explicar código complexo em termos simples:

\`\`\`javascript
// Código complexo
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Explicação
/*
Este é um exemplo de função debounce. Ela é usada para limitar a frequência com que uma função é executada. 
A função debounce retorna uma nova função que, quando chamada, cancela o temporizador anterior e 
estabelece um novo temporizador. A função original só será executada quando o temporizador terminar 
e não for cancelado por uma nova chamada.
*/
\`\`\`

### 3. Depuração de Código

O Qwen3-Coder-Plus pode identificar e corrigir erros em código:

\`\`\`python
# Código com erro
lista = [1, 2, 3, 4, 5]
for i in range(len(lista)):
    if lista[i] = 3:  # Erro de sintaxe
        print("Encontrado")

# Código corrigido
lista = [1, 2, 3, 4, 5]
for i in range(len(lista)):
    if lista[i] == 3:  # Correto
        print("Encontrado")
\`\`\`

### 4. Refatoração de Código

O modelo pode sugerir melhorias para tornar o código mais eficiente e legível:

\`\`\`javascript
// Código original
function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  return total;
}

// Código refatorado
const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};
\`\`\`

## Configurações e Instalação

### Opção 1: Usando Docker

\`\`\`bash
# Baixar a imagem do Docker
docker pull qwenllm/qwen-coder-plus:latest

# Executar o contêiner
docker run -it --gpus all -p 8000:8000 qwenllm/qwen-coder-plus:latest
\`\`\`

### Opção 2: Instalação Local

\`\`\`bash
# Clonar o repositório
git clone https://github.com/QwenLM/qwen-code.git
cd qwen-code

# Criar um ambiente virtual
python -m venv venv
source venv/bin/activate  # No Windows: venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

# Executar o servidor
python app.py
\`\`\`

### Opção 3: Usando Python

\`\`\`python
from transformers import AutoModelForCausalLM, AutoTokenizer

# Carregar o modelo
model_name = "Qwen/Qwen3-Coder-Plus"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

# Gerar código
prompt = """# Função Python para calcular o fatorial de um número

def"""

inputs = tokenizer(prompt, return_tensors="pt")
outputs = model.generate(**inputs, max_new_tokens=200)
code = tokenizer.decode(outputs[0], skip_special_tokens=True)
print(code)
\`\`\`

## Opções Gratuitas Disponíveis

### 1. Demonstração Online

A Alibaba Cloud oferece uma demonstração online gratuita do Qwen3-Coder-Plus através do seu playground:

- **Acesso:** [Qwen Playground](https://qwenlm.github.io/playground/)
- **Recursos:** Teste as capacidades do modelo sem instalação
- **Limitações:** Limite de uso por usuário

### 2. Código Aberto no GitHub

O modelo está disponível como código aberto:

- **Repositório:** [https://github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
- **Licença:** Licença Apache 2.0
- **Uso:** Gratuito para uso pessoal e comercial

### 3. Modelos Hugging Face

O modelo também está disponível na plataforma Hugging Face:

\`\`\`python
from transformers import pipeline

generator = pipeline('text-generation', model='Qwen/Qwen3-Coder-Plus')
result = generator("# Função para somar dois números em Python
")
print(result[0]['generated_text'])
\`\`\`

### 4. Integrações Gratuitas

Existem várias integrações gratuitas disponíveis:

- **VS Code Extension:** Extensão oficial para Visual Studio Code
- **Vim Plugin:** Plugin para usuários de Vim/Neovim
- **JetBrains Plugin:** Plugin para IDEs JetBrains (IntelliJ, PyCharm, etc.)

## Comparação com Outras Ferramentas

| Característica | Qwen3-Coder-Plus | GitHub Copilot | Tabnine |
|---------------|------------------|----------------|---------|
| Linguagens Suportadas | 80+ | 20+ | 30+ |
| Contexto Máximo | 128K tokens | 8K tokens | 3K tokens |
| Código Aberto | Sim | Não | Parcial |
| Preço | Gratuito* | $10/mês | $12/mês |
| Multimodal | Não | Não | Não |

*Gratuito para uso pessoal e comercial sob a licença Apache 2.0

## Conclusão

O Qwen3-Coder-Plus representa um avanço significativo na programação assistida por IA. Com sua arquitetura otimizada, ampla gama de linguagens suportadas e disponibilidade gratuita, ele se posiciona como uma ferramenta poderosa para desenvolvedores de todos os níveis.

As principais vantagens incluem:

1. **Desempenho excepcional** em geração e compreensão de código
2. **Suporte multilinguagem** abrangente
3. **Liberdade de uso** com licença de código aberto
4. **Facilidade de integração** com ferramentas existentes

À medida que a IA continua a transformar o desenvolvimento de software, ferramentas como o Qwen3-Coder-Plus tornam-se indispensáveis para desenvolvedores que buscam aumentar sua produtividade e qualidade de código.

Experimente o Qwen3-Coder-Plus hoje e descubra como a IA pode revolucionar sua experiência de programação!

---

*Para mais informações, visite o [repositório oficial no GitHub](https://github.com/QwenLM/qwen-code)*`,
          date: "12 de setembro de 2025",
          readTime: "12 min read",
          tags: ["IA", "Programação", "Qwen", "Desenvolvimento", "Código"]
        },
        {
          id: "2",
          title: "Getting Started with React Hooks",
          excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
          content: `# Getting Started with React Hooks

React Hooks are a powerful feature that allows you to use state and other React features without writing a class component. They were introduced in React 16.8 and have since become the standard way to write React components.

## What are Hooks?

Hooks are functions that let you "hook into" React state and lifecycle features from function components. They don't work inside classes — they let you use React without classes.

## Basic Hooks

### useState

The useState hook is the most common hook. It allows you to add state to functional components:

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

### useEffect

The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes:

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

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

## Rules of Hooks

1. Only call Hooks at the top level
2. Only call Hooks from React function components
3. Don't call Hooks inside loops, conditions, or nested functions

## Conclusion

React Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They offer a more flexible alternative to render props and higher-order components, and they reduce the amount of code you need to write.`,
          date: "May 15, 2023",
          readTime: "5 min read",
          tags: ["React", "JavaScript", "Frontend"]
        },
        {
          id: "3",
          title: "Understanding TypeScript Generics",
          excerpt: "A comprehensive guide to TypeScript generics and how they can make your code more flexible and reusable.",
          content: `# Understanding TypeScript Generics

TypeScript generics are a powerful feature that allows you to create reusable components that work with multiple types. They provide a way to create functions, classes, and interfaces that can work with any type while still maintaining type safety.

## What are Generics?

Generics allow you to create components that can work over a variety of types rather than a single one. This helps you create reusable components that are both flexible and type-safe.

## Generic Functions

Here's a simple generic function that returns whatever value is passed to it:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage
let output1 = identity<string>("myString");
let output2 = identity<number>(42);
\`\`\`

## Generic Interfaces

You can also create generic interfaces:

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
\`\`\`

## Constraints

You can constrain generics to ensure they have certain properties:

\`\`\`typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}
\`\`\`

## Conclusion

Generics are a fundamental feature of TypeScript that allow you to write flexible, reusable, and type-safe code. They're essential for building robust applications with TypeScript.`,
          date: "June 2, 2023",
          readTime: "8 min read",
          tags: ["TypeScript", "Programming"]
        },
        {
          id: "4",
          title: "Building Responsive Layouts with Tailwind CSS",
          excerpt: "Explore techniques for creating responsive layouts using Tailwind CSS utility classes.",
          content: `# Building Responsive Layouts with Tailwind CSS

Tailwind CSS provides a powerful set of utility classes for creating responsive layouts. Unlike traditional CSS frameworks that provide pre-designed components, Tailwind gives you low-level utility classes that you can compose to build any design.

## Mobile-First Approach

Tailwind uses a mobile-first approach with its breakpoints. This means that unprefixed utilities apply to all screen sizes, while prefixed utilities apply only at specific breakpoints and above.

## Breakpoints

Tailwind's default breakpoints are:

- \`sm\`: 640px
- \`md\`: 768px
- \`lg\`: 1024px
- \`xl\`: 1280px
- \`2xl\`: 1536px

## Responsive Design Examples

### Basic Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="bg-blue-100 p-4">Column 1</div>
  <div class="bg-green-100 p-4">Column 2</div>
  <div class="bg-red-100 p-4">Column 3</div>
</div>
\`\`\`

### Responsive Navigation

\`\`\`html
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <span class="font-semibold text-xl tracking-tight">My Site</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
      </svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
\`\`\`

## Conclusion

Tailwind CSS makes responsive design straightforward with its utility-first approach and mobile-first breakpoint system. By composing simple utility classes, you can create complex responsive layouts without writing custom CSS.`,
          date: "June 20, 2023",
          readTime: "6 min read",
          tags: ["CSS", "Tailwind", "Frontend"]
        },
        {
          id: "5",
          title: "State Management in Modern React Applications",
          excerpt: "Comparing different state management solutions for React applications and when to use each.",
          content: `# State Management in Modern React Applications

State management is a critical aspect of building complex React applications. As applications grow, managing state can become increasingly complex. In this article, we'll explore different state management solutions and when to use each.

## Local Component State

For simple applications or local component state, React's built-in useState and useReducer hooks are often sufficient.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## Context API

For sharing state between components without passing props down manually, React's Context API is a good solution for medium-sized applications.

\`\`\`javascript
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [user, setUser] = useState(null);
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
\`\`\`

## Redux

Redux is a predictable state container for JavaScript apps. It's a popular choice for large applications with complex state requirements.

\`\`\`javascript
// store.js
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);
\`\`\`

## Zustand

Zustand is a small, fast, and scalable bearbones state-management solution.

\`\`\`javascript
import create from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
\`\`\`

## Recoil

Recoil is a state management library for React that provides several capabilities that are difficult to implement with React alone, while being compatible with the newest features of React.

\`\`\`javascript
import { atom, useRecoilState } from 'recoil';

const countState = atom({
  key: 'count',
  default: 0,
});

function Counter() {
  const [count, setCount] = useRecoilState(countState);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## Choosing the Right Solution

1. **Local State**: Use useState and useReducer for component-local state
2. **Simple Sharing**: Use Context API for sharing state between components
3. **Complex Applications**: Consider Redux for large applications with complex state requirements
4. **Modern Alternatives**: Zustand and Recoil offer simpler APIs with less boilerplate

## Conclusion

Choosing the right state management solution depends on your application's complexity and requirements. Start simple with React's built-in hooks and only add more complex solutions when needed.`,
          date: "July 8, 2023",
          readTime: "10 min read",
          tags: ["React", "State Management"]
        },
        {
          id: "6",
          title: "Optimizing Web Performance with Code Splitting",
          excerpt: "Learn how to improve your application's loading times with code splitting techniques.",
          content: `# Optimizing Web Performance with Code Splitting

Code splitting is a technique used to reduce the initial bundle size of a web application by splitting the code into smaller chunks that can be loaded on demand. This can significantly improve the loading time and user experience of your application.

## What is Code Splitting?

Code splitting is the process of breaking down your code into smaller bundles that can be loaded separately. Instead of downloading one large bundle, users can download only the code they need for the current view or feature.

## Dynamic Imports

The most basic way to implement code splitting is through dynamic imports:

\`\`\`javascript
// Before code splitting
import { heavyFunction } from './utils';

// After code splitting
const module = await import('./utils');
const result = module.heavyFunction();
\`\`\`

## Route-Based Code Splitting

In React applications, you can split code by routes using React.lazy and Suspense:

\`\`\`javascript
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

## Component-Based Code Splitting

You can also split code at the component level:

\`\`\`javascript
import React, { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  const [show, setShow] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShow(true)}>Show Heavy Component</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}
    </div>
  );
}
\`\`\`

## Webpack Bundle Analyzer

To visualize your bundle and identify opportunities for code splitting, use the webpack-bundle-analyzer:

\`\`\`bash
npm install --save-dev webpack-bundle-analyzer
\`\`\`

\`\`\`javascript
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // ... other config
  plugins: [
    new BundleAnalyzerPlugin()
  ]
};
\`\`\`

## Preloading and Prefetching

You can also preload or prefetch modules that are likely to be needed soon:

\`\`\`javascript
// Preload - loads with higher priority
import(/* webpackPreload: true */ './CriticalComponent');

// Prefetch - loads with lower priority (during idle time)
import(/* webpackPrefetch: true */ './NotSoImportantComponent');
\`\`\`

## Conclusion

Code splitting is a powerful technique for improving web performance. By loading only the code that's needed, you can significantly reduce initial load times and improve the user experience. Remember to:

1. Use dynamic imports for on-demand loading
2. Implement route-based code splitting for large applications
3. Split heavy components that aren't always visible
4. Analyze your bundle to identify optimization opportunities
5. Use preload and prefetch strategically

With these techniques, you can create faster, more efficient web applications.`,
          date: "July 22, 2023",
          readTime: "7 min read",
          tags: ["Performance", "JavaScript"]
        },
        {
          id: "7",
          title: "Introduction to GraphQL for Frontend Developers",
          excerpt: "A practical introduction to GraphQL and how it can simplify data fetching in your applications.",
          content: `# Introduction to GraphQL for Frontend Developers

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a more efficient, powerful, and flexible alternative to REST APIs.

## What is GraphQL?

GraphQL was developed by Facebook in 2012 and open-sourced in 2015. It allows clients to request exactly the data they need, nothing more, nothing less. This solves many of the shortcomings of REST APIs.

## Key Concepts

### Schema

A GraphQL schema defines the capabilities of a GraphQL server. It defines the types of data that can be fetched or mutated:

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
}

type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
  post(id: ID!): Post
}
\`\`\`

### Queries

Queries are how you fetch data in GraphQL:

\`\`\`graphql
query {
  user(id: "1") {
    name
    email
    posts {
      title
      content
    }
  }
}
\`\`\`

### Mutations

Mutations are how you modify data in GraphQL:

\`\`\`graphql
mutation {
  createUser(name: "John Doe", email: "john@example.com") {
    id
    name
    email
  }
}
\`\`\`

## Using GraphQL in React

### Apollo Client

Apollo Client is the most popular GraphQL client for React:

\`\`\`javascript
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql',
  cache: new InMemoryCache()
});

const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

function Users() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Advantages of GraphQL

1. **No over-fetching**: Clients can request exactly the data they need
2. **No under-fetching**: Clients can get all required data in a single request
3. **Strongly typed**: Schemas provide type safety and better tooling
4. **Introspective**: Clients can query the schema to understand what's available
5. **Real-time**: Built-in support for subscriptions

## Challenges

1. **Learning curve**: Requires learning new concepts
2. **Caching**: More complex than REST caching
3. **File uploads**: Not natively supported (but possible with extensions)
4. **Complexity**: Can be overkill for simple applications

## Conclusion

GraphQL provides a powerful alternative to REST APIs, especially for complex applications with many data relationships. While it has a learning curve, the benefits of precise data fetching and reduced network requests make it valuable for many projects.

For frontend developers, GraphQL can significantly improve the development experience by providing exactly the data needed for each component without requiring backend changes.`,
          date: "August 5, 2023",
          readTime: "9 min read",
          tags: ["GraphQL", "API"]
        }
      ];
      setPosts(samplePosts);
      localStorage.setItem("blogPosts", JSON.stringify(samplePosts));
    }
  }, []);

  // Calculate pagination
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Developer Mode Blog",
          text: "Vamos juntos transformar ideias em soluções usando tecnologia.",
          url: window.location.href,
        });
      } catch (err) {
        console.log("Sharing failed", err);
      }
    } else {
      // Fallback para desktop
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-16">
        <header className="mb-12 text-center">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img
                src="/logo-white.svg"
                alt="Logo"
                className="h-10 w-10 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline">Compartilhar</span>
              </Button>
              <Button 
                variant="default" 
                size="sm" 
                onClick={() => navigate("/admin/login")}
                className="flex items-center gap-2"
              >
                <span>Admin</span>
              </Button>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Developer Mode Blog</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Vamos juntos transformar ideias em soluções usando tecnologia.
          </p>
        </header>

        <div className="space-y-10 sm:space-y-12">
          {currentPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 sm:mt-16">
            <BlogPagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        )}
      </div>
      
      {/* Floating Action Button for Admin Access */}
      <Button
        onClick={() => navigate("/admin/login")}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg md:hidden"
        size="icon"
      >
        <span>Admin</span>
      </Button>
    </div>
  );
};

export default Blog;