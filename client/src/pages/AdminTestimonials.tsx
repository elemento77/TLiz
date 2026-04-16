import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { motion } from "framer-motion";
import { supabase, adminEmailEnv } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Star, Check, X, Trash2, Loader2, Sparkles, LogOut } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  message: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
}

export default function AdminTestimonials() {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setAuthLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session?.user) {
      fetchTestimonials();
    } else {
      setTestimonials([]);
    }
  }, [session?.user?.id]);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error: unknown) {
      toast.error("Erro ao carregar depoimentos");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginLoading(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const email = String(fd.get("email") || "").trim();
    const password = String(fd.get("password") || "");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;

      const loggedEmail = data.user?.email?.trim().toLowerCase() ?? "";
      if (adminEmailEnv && loggedEmail !== adminEmailEnv) {
        await supabase.auth.signOut();
        toast.error("Esta conta não tem permissão para gerenciar depoimentos.");
        return;
      }

      toast.success("Login feito com sucesso.");
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Falha no login";
      toast.error(msg);
      console.error(error);
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.message("Você saiu da conta.");
  };

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    setIsActionLoading(id);
    try {
      const { error } = await supabase.from("testimonials").update({ status }).eq("id", id);

      if (error) throw error;

      setTestimonials((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
      toast.success(`Depoimento ${status === "approved" ? "aprovado" : "rejeitado"}!`);
    } catch (error: unknown) {
      toast.error("Erro ao atualizar status");
      console.error(error);
    } finally {
      setIsActionLoading(null);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este depoimento permanentemente?")) return;

    setIsActionLoading(id);
    try {
      const { error } = await supabase.from("testimonials").delete().eq("id", id);

      if (error) throw error;

      setTestimonials((prev) => prev.filter((t) => t.id !== id));
      toast.success("Depoimento excluído!");
    } catch (error: unknown) {
      toast.error("Erro ao excluir depoimento");
      console.error(error);
    } finally {
      setIsActionLoading(null);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen pt-24 flex justify-center items-center bg-void text-foreground">
        <Loader2 className="w-10 h-10 text-gold animate-spin" />
      </div>
    );
  }

  if (!session?.user) {
    return (
      <div className="min-h-screen pt-24 pb-12 bg-void text-foreground flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="glass-panel border-gold/10">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-2 flex items-center justify-center gap-2">
                  <Sparkles size={12} className="text-gold" />
                  Área restrita
                </p>
                <h1 className="font-display text-2xl text-parchment">Entrar no painel de depoimentos</h1>
                <p className="text-smoke text-sm mt-2">
                  Use o e-mail e a senha da conta criada no Supabase (Authentication).
                </p>
              </div>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="admin-email">E-mail</Label>
                  <Input
                    id="admin-email"
                    name="email"
                    type="email"
                    autoComplete="username"
                    required
                    className="bg-background/50 border-gold/20"
                    placeholder={adminEmailEnv || "seu@email.com"}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="admin-password">Senha</Label>
                  <Input
                    id="admin-password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="bg-background/50 border-gold/20"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold text-void hover:bg-gold/90"
                  disabled={loginLoading}
                >
                  {loginLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Entrar"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 bg-void text-foreground">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-2 flex items-center gap-2">
              <Sparkles size={12} className="text-gold" />
              Painel de Controle
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-parchment">Gerenciar Depoimentos</h1>
            {session.user.email ? (
              <p className="text-smoke/60 text-xs mt-1">{session.user.email}</p>
            ) : null}
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-gold/20 text-gold hover:bg-gold/10"
            >
              <LogOut size={16} className="mr-2" />
              Sair
            </Button>
            <Button
              onClick={fetchTestimonials}
              variant="outline"
              className="border-gold/20 text-gold hover:bg-gold/10"
            >
              Atualizar Lista
            </Button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 text-gold animate-spin" />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 glass-panel">
            <p className="text-smoke">Nenhum depoimento encontrado.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {testimonials.map((t) => (
              <motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <Card
                  className={`glass-panel border-gold/10 overflow-hidden ${t.status === "pending" ? "border-l-4 border-l-gold" : ""}`}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-display text-lg text-parchment">{t.name}</span>
                          <span
                            className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              t.status === "approved"
                                ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                : t.status === "rejected"
                                  ? "bg-red-500/10 text-red-400 border border-red-500/20"
                                  : "bg-gold/10 text-gold border border-gold/20"
                            }`}
                          >
                            {t.status === "approved"
                              ? "Aprovado"
                              : t.status === "rejected"
                                ? "Rejeitado"
                                : "Pendente"}
                          </span>
                        </div>
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={i < t.rating ? "fill-gold text-gold" : "text-gold/20"}
                            />
                          ))}
                          <span className="text-xs text-smoke/60 ml-2">• {t.service}</span>
                        </div>
                        <p className="text-smoke text-sm leading-relaxed italic mb-4">"{t.message}"</p>
                        <p className="text-[10px] text-smoke/40 uppercase tracking-widest">
                          Enviado em: {new Date(t.created_at).toLocaleDateString("pt-BR")}
                        </p>
                      </div>

                      <div className="flex md:flex-col gap-2 justify-center">
                        {t.status !== "approved" && (
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => updateStatus(t.id, "approved")}
                            disabled={isActionLoading === t.id}
                          >
                            {isActionLoading === t.id ? (
                              <Loader2 size={14} className="animate-spin" />
                            ) : (
                              <Check size={14} className="mr-1" />
                            )}
                            Aprovar
                          </Button>
                        )}
                        {t.status !== "rejected" && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            onClick={() => updateStatus(t.id, "rejected")}
                            disabled={isActionLoading === t.id}
                          >
                            {isActionLoading === t.id ? (
                              <Loader2 size={14} className="animate-spin" />
                            ) : (
                              <X size={14} className="mr-1" />
                            )}
                            Rejeitar
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-smoke/40 hover:text-red-400 hover:bg-red-500/5"
                          onClick={() => deleteTestimonial(t.id)}
                          disabled={isActionLoading === t.id}
                        >
                          <Trash2 size={14} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
