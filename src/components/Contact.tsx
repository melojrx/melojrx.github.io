import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useCallback } from "react";

const DEST_EMAIL = "jrmeloafrf@gmail.com";

export const Contact = () => {
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.querySelector<HTMLInputElement>("#name")?.value || "").trim();
    const email = (form.querySelector<HTMLInputElement>("#email")?.value || "").trim();
    const message = (form.querySelector<HTMLTextAreaElement>("#message")?.value || "").trim();

    const subject = encodeURIComponent(`Contato Portfólio - ${name || "Interessado"}`);
    const bodyLines = [
      `Nome: ${name || "(não informado)"}`,
      `Email de retorno: ${email || "(não informado)"}`,
      "",
      "Mensagem:",
      message || "(vazio)",
      "",
      "-- Enviado via formulário do portfólio --"
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    window.location.href = `mailto:${DEST_EMAIL}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 tracking-tight">Contato</h2>
        <p className="text-center text-foreground/70 mb-8 sm:mb-10 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
          Preencha o formulário ou use os links no rodapé para falar comigo.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 sm:space-y-6 bg-background/70 backdrop-blur rounded-xl border border-border/60 p-4 sm:p-6 lg:p-8 shadow-sm">
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="name" className="text-sm font-medium">Nome</Label>
            <Input 
              id="name" 
              name="name" 
              type="text" 
              placeholder="Seu nome completo" 
              autoComplete="name"
              className="h-10 sm:h-11" 
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="seu.email@exemplo.com" 
              autoComplete="email"
              className="h-10 sm:h-11" 
            />
          </div>
          <div className="space-y-1 sm:space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">Mensagem</Label>
            <Textarea 
              id="message" 
              name="message" 
              placeholder="Como posso te ajudar?" 
              rows={4}
              className="min-h-[100px] sm:min-h-[120px] resize-none" 
            />
          </div>
          <Button type="submit" className="w-full h-10 sm:h-11 text-sm sm:text-base">
            Enviar Mensagem
          </Button>
          <p className="text-[10px] sm:text-[11px] text-center text-foreground/50 leading-relaxed">
            O botão abrirá seu cliente de e-mail com a mensagem pré-preenchida.
          </p>
        </form>
      </div>
    </section>
  );
};