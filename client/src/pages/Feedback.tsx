import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Feedback() {
    const [rating, setRating] = useState<number>(0);
    const [hoveredRating, setHoveredRating] = useState<number>(0);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, visual only. Later this will send data to Supabase.
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-void text-foreground relative">
                <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/50 to-void pointer-events-none" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-md px-4 relative z-10"
                >
                    <Card className="bg-void/90 border border-gold-dim backdrop-blur-md text-center py-12 px-6">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-8 h-8 text-gold fill-gold" />
                        </div>
                        <h2 className="font-display text-2xl text-parchment mb-4">Gratidão pelo seu retorno!</h2>
                        <p className="font-body text-smoke text-sm leading-relaxed mb-8">
                            Sua avaliação foi enviada com sucesso e é muito importante para a minha jornada e para as próximas leituras.
                        </p>
                        <a href="/" className="font-body text-xs text-gold uppercase tracking-wider hover:text-parchment transition-colors">
                            ← Voltar ao Início
                        </a>
                    </Card>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-12 flex items-center justify-center bg-void text-foreground relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] min-w-[300px] bg-gold/5 rounded-full blur-3xl opacity-40" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-xl px-4 relative z-10"
            >
                <div className="text-center mb-10">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-3">
                        O que você achou?
                    </p>
                    <h1 className="font-display text-3xl md:text-4xl text-parchment">
                        Deixe seu depoimento
                    </h1>
                </div>

                <Card className="bg-void/80 border border-gold-dim shadow-2xl backdrop-blur-sm">
                    <CardContent className="pt-8 pb-8 px-6 md:px-10">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name */}
                            <div className="space-y-2">
                                <label htmlFor="name" className="font-body text-sm text-smoke block">Seu Nome ou Inicial</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Ex: Maria S."
                                    className="w-full bg-void/50 border border-gold-dim/50 rounded-none px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none transition-colors"
                                />
                            </div>

                            {/* Service */}
                            <div className="space-y-2">
                                <label htmlFor="service" className="font-body text-sm text-smoke block">Qual leitura você fez?</label>
                                <select
                                    id="service"
                                    name="service"
                                    required
                                    defaultValue=""
                                    className="w-full bg-void border border-gold-dim/50 rounded-none px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none appearance-none transition-colors cursor-pointer"
                                >
                                    <option value="" disabled>Selecione um ritual...</option>
                                    <option value="Tiragem Rápida">Tiragem Rápida (1 Pergunta)</option>
                                    <option value="Leitura Completa">Leitura Completa (Mesa Real)</option>
                                    <option value="Consulta Ao Vivo">Consulta Ao Vivo (Videochamada)</option>
                                </select>
                            </div>

                            {/* Rating */}
                            <div className="space-y-3 pt-2">
                                <label className="font-body text-sm text-smoke block">Sua Avaliação</label>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            type="button"
                                            onClick={() => setRating(star)}
                                            onMouseEnter={() => setHoveredRating(star)}
                                            onMouseLeave={() => setHoveredRating(0)}
                                            className="p-1 focus:outline-none transition-transform hover:scale-110"
                                        >
                                            <Star
                                                className={`w-8 h-8 transition-colors ${star <= (hoveredRating || rating)
                                                    ? "text-gold fill-gold"
                                                    : "text-gold-dim/30 fill-transparent"
                                                    }`}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2 pt-2">
                                <label htmlFor="message" className="font-body text-sm text-smoke block">Seu relato (como a leitura te ajudou?)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Escreva aqui como foi a sua experiência com o Tarot da Liz..."
                                    className="w-full bg-void/50 border border-gold-dim/50 rounded-none px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none transition-colors resize-y"
                                />
                            </div>

                            {/* Consent */}
                            <div className="flex items-start gap-3 pt-2">
                                <div className="flex items-center h-5">
                                    <input
                                        id="consent"
                                        name="consent"
                                        type="checkbox"
                                        required
                                        className="w-4 h-4 rounded-sm border-gold-dim/50 bg-void/50 text-gold focus:ring-gold/30 focus:ring-offset-0"
                                    />
                                </div>
                                <label htmlFor="consent" className="font-body text-xs text-smoke/70 leading-tight">
                                    Autorizo o uso do meu depoimento e primeiro nome na seção de avaliações do site do Tarot da Liz.
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="w-full btn-gold text-sm group flex justify-center py-6"
                                    disabled={rating === 0}
                                >
                                    Enviar meu depoimento
                                    <Send className="w-4 h-4 ml-2 opacity-70 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
