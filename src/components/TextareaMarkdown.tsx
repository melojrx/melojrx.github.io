import { useState, useRef } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Upload, Image as ImageIcon } from "lucide-react";

interface TextareaMarkdownProps {
  value: string;
  onChange: (value: string) => void;
  isPreview?: boolean;
  placeholder?: string;
  className?: string;
}

export const TextareaMarkdown = ({ 
  value, 
  onChange, 
  isPreview = false, 
  placeholder,
  className = ""
}: TextareaMarkdownProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertMarkdown = (markdown: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newValue = value.substring(0, start) + markdown + value.substring(end);
    
    onChange(newValue);
    
    // Manter o foco na posição correta
    setTimeout(() => {
      if (textareaRef.current) {
        const newCursorPos = start + markdown.length;
        textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
        textareaRef.current.focus();
      }
    }, 0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Em uma implementação real, você enviaria a imagem para um servidor
    // Por enquanto, vamos criar uma URL temporária
    const imageUrl = URL.createObjectURL(file);
    insertMarkdown(`![${file.name}](${imageUrl})`);
    
    // Limpar o input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFormatting = (format: string) => {
    if (!textareaRef.current) return;
    
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = value.substring(start, end);
    
    let markdown = "";
    switch (format) {
      case "bold":
        markdown = `**${selectedText}**`;
        break;
      case "italic":
        markdown = `*${selectedText}*`;
        break;
      case "heading":
        markdown = `# ${selectedText}`;
        break;
      case "link":
        markdown = `[${selectedText}](url)`;
        break;
      case "code":
        markdown = `\`${selectedText}\``;
        break;
      case "quote":
        markdown = `> ${selectedText}`;
        break;
      case "list":
        markdown = `- ${selectedText}`;
        break;
    }
    
    insertMarkdown(markdown);
  };

  const renderMarkdown = (content: string) => {
    // Esta é uma implementação simplificada de renderização de Markdown
    // Em produção, você pode usar uma biblioteca como marked ou react-markdown
    return content
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/# (.*?)(\n|$)/g, "<h1>$1</h1>")
      .replace(/## (.*?)(\n|$)/g, "<h2>$1</h2>")
      .replace(/### (.*?)(\n|$)/g, "<h3>$1</h3>")
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width: 100%;" />')
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      .replace(/`(.*?)`/g, "<code>$1</code>")
      .replace(/^- (.*?)(\n|$)/gm, "<li>$1</li>")
      .replace(/<li>(.*?)<\/li>(?=<li>)/g, "<li>$1")
      .replace(/(<li>.*<\/li>)/gs, "<ul>$1</ul>")
      .replace(/\n/g, "<br />");
  };

  return (
    <div className={`border border-border rounded-md ${className}`}>
      {!isPreview && (
        <div className="flex flex-wrap gap-1 p-2 border-b border-border bg-muted">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("heading")}
            title="Cabeçalho"
          >
            H1
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("bold")}
            title="Negrito"
          >
            <strong>B</strong>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("italic")}
            title="Itálico"
          >
            <em>I</em>
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("link")}
            title="Link"
          >
            Link
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("code")}
            title="Código"
          >
            Code
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("quote")}
            title="Citação"
          >
            Quote
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => handleFormatting("list")}
            title="Lista"
          >
            List
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            title="Inserir Imagem"
          >
            <ImageIcon className="h-4 w-4" />
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageUpload}
            accept="image/*"
            className="hidden"
          />
        </div>
      )}
      
      {isPreview ? (
        <div 
          className="p-4 prose prose-neutral dark:prose-invert max-w-none min-h-[400px]"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
        />
      ) : (
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="border-0 rounded-none resize-none min-h-[400px]"
        />
      )}
    </div>
  );
};