import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Check, X, Trash2, Loader2, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  message: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
}

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isActionLoading, setIsActionLoading] = useState<string | null>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error: any) {
      toast.error("Erro ao carregar depoimentos");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: string, status: 'approved' | 'rejected') => {
    setIsActionLoading(id);
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ status })
        .eq('id', id);

      if (error) throw error;
      
      setTestimonials(prev => prev.map(t => t.id === id ? { ...t, status } : t));
      toast.success(`Depoimento ${status === 'approved' ? 'aprovado' : 'rejeitado'}!`);
    } catch (error: any) {
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
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setTestimonials(prev => prev.filter(t => t.id !== id));
      toast.success("Depoimento excluído!");
    } catch (error: any) {
      toast.error("Erro ao excluir depoimento");
      console.error(error);
    } finally {
      setIsActionLoading(null);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-void text-foreground">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-2 flex items-center gap-2">
              <Sparkles size={12} className="text-gold" />
              Painel de Controle
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-parchment">
              Gerenciar Depoimentos
            </h1>
          </div>
          <Button onClick={fetchTestimonials} variant="outline" className="border-gold/20 text-gold hover:bg-gold/10">
            Atualizar Lista
          </Button>
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
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className={`glass-panel border-gold/10 overflow-hidden ${t.status === 'pending' ? 'border-l-4 border-l-gold' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-display text-lg text-parchment">{t.name}</span>
                          <span className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            t.status === 'approved' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                            t.status === 'rejected' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                            'bg-gold/10 text-gold border border-gold/20'
                          }`}>
                            {t.status === 'approved' ? 'Aprovado' : t.status === 'rejected' ? 'Rejeitado' : 'Pendente'}
                          </span>
                        </div>
                        <div className="flex gap-1 mb-3">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={12} className={i < t.rating ? "fill-gold text-gold" : "text-gold/20"} />
                          ))}
                          <span className="text-xs text-smoke/60 ml-2">• {t.service}</span>
                        </div>
                        <p className="text-smoke text-sm leading-relaxed italic mb-4">
                          "{t.message}"
                        </p>
                        <p className="text-[10px] text-smoke/40 uppercase tracking-widest">
                          Enviado em: {new Date(t.created_at).toLocaleDateString('pt-BR')}
                        </p>
                      </div>

                      <div className="flex md:flex-col gap-2 justify-center">
                        {t.status !== 'approved' && (
                          <Button 
                            size="sm" 
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => updateStatus(t.id, 'approved')}
                            disabled={isActionLoading === t.id}
                          >
                            {isActionLoading === t.id ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} className="mr-1" />}
                            Aprovar
                          </Button>
                        )}
                        {t.status !== 'rejected' && (
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                            onClick={() => updateStatus(t.id, 'rejected')}
                            disabled={isActionLoading === t.id}
                          >
                            {isActionLoading === t.id ? <Loader2 size={14} className="animate-spin" /> : <X size={14} className="mr-1" />}
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
