import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contato</h2>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" type="text" placeholder="Seu nome completo" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="seu.email@exemplo.com" />
          </div>
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea id="message" placeholder="Como posso te ajudar?" rows={5} />
          </div>
          <Button type="submit" className="w-full">Enviar Mensagem</Button>
        </form>
      </div>
    </section>
  );
};