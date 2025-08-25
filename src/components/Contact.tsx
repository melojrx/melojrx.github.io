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
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 tracking-tight">Contato</h2>
        <p className="text-center text-foreground/70 mb-10 text-sm md:text-base">Preencha o formulário ou use os links no rodapé para falar comigo.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-background/70 backdrop-blur rounded-xl border border-border/60 p-6 md:p-8 shadow-sm">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" type="text" placeholder="Seu nome completo" autoComplete="name" />
          </div>
            <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="seu.email@exemplo.com" autoComplete="email" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" name="message" placeholder="Como posso te ajudar?" rows={5} />
          </div>
          <Button type="submit" className="w-full">Enviar Mensagem</Button>
          <p className="text-[11px] text-center text-foreground/50">O botão abrirá seu cliente de e-mail com a mensagem pré-preenchida.</p>
        </form>
      </div>
    </section>
  );
};