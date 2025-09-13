import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Em um sistema real, você usaria autenticação segura
    // Por enquanto, vamos usar uma senha simples definida no código
    const ADMIN_PASSWORD = "admin123"; // Você deve mudar isso em produção
    
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem("adminAuthenticated", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Senha incorreta. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-lg border border-border p-6 shadow-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Área Administrativa</h1>
            <p className="text-muted-foreground mt-2">
              Faça login para gerenciar suas postagens
            </p>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                  className="mt-1"
                />
              </div>
              
              {error && (
                <div className="text-destructive text-sm">{error}</div>
              )}
              
              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;