/**
 * Feedback Page — Testimonial Collection
 * Glassmorphism design matching the main landing page theme.
 * Collects user testimonials with rating, name, and message.
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const RITUAL_OPTIONS = [
  "Pergunta Única",
  "Combo 3 Perguntas",
  "Sessão Estratégica",
  "Arcano Regente Pessoal",
  "Jogo das Sombras",
  "Mandala Anual",
  "Mandala Semestral",
];

function SuccessView() {
  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center text-foreground relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md px-4 relative z-10"
      >
        <div className="glass-panel-strong text-center py-12 px-6">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-display text-2xl text-parchment mb-4 text-shadow-md">
            Gratidão pelo seu retorno!
          </h2>
          <p className="font-body text-smoke text-sm leading-relaxed mb-8">
            Sua avaliação foi enviada com sucesso e é muito importante para a
            minha jornada e para as próximas leituras.
          </p>
          <a
            href="/"
            className="font-body text-xs text-gold uppercase tracking-wider hover:text-parchment transition-colors"
          >
            &larr; Voltar ao Início
          </a>
        </div>
      </motion.div>
    </div>
  );
}

function StarRatingInput({
  rating,
  hoveredRating,
  onRate,
  onHover,
  onLeave,
}: {
  rating: number;
  hoveredRating: number;
  onRate: (star: number) => void;
  onHover: (star: number) => void;
  onLeave: () => void;
}) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRate(star)}
          onMouseEnter={() => onHover(star)}
          onMouseLeave={onLeave}
          className="p-1 focus:outline-none transition-transform hover:scale-110"
        >
          <Star
            className={`w-8 h-8 transition-colors ${
              star <= (hoveredRating || rating)
                ? "text-gold fill-gold"
                : "text-gold-dim/30 fill-transparent"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Feedback() {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SuccessView />;
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center text-foreground relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl px-4 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-gold-dim mb-3 flex items-center justify-center gap-2">
            <Sparkles size={12} className="text-gold" />
            O que você achou?
            <Sparkles size={12} className="text-gold" />
          </p>
          <h1 className="font-display text-3xl md:text-4xl text-parchment text-shadow-lg">
            Deixe seu depoimento
          </h1>
        </div>

        {/* Form card */}
        <Card className="glass-panel-strong border-gold/15 shadow-2xl">
          <CardContent className="pt-8 pb-8 px-6 md:px-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="font-body text-sm text-smoke block"
                >
                  Seu Nome ou Inicial
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Ex: Maria S."
                  className="w-full bg-void/50 border border-gold/15 rounded-md px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none transition-colors backdrop-blur-sm"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <label
                  htmlFor="service"
                  className="font-body text-sm text-smoke block"
                >
                  Qual leitura você fez?
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className="w-full bg-void/70 border border-gold/15 rounded-md px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none appearance-none transition-colors cursor-pointer backdrop-blur-sm"
                >
                  <option value="" disabled>
                    Selecione um ritual...
                  </option>
                  {RITUAL_OPTIONS.map((ritual) => (
                    <option key={ritual} value={ritual}>
                      {ritual}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rating */}
              <div className="space-y-3 pt-2">
                <label className="font-body text-sm text-smoke block">
                  Sua Avaliação
                </label>
                <StarRatingInput
                  rating={rating}
                  hoveredRating={hoveredRating}
                  onRate={setRating}
                  onHover={setHoveredRating}
                  onLeave={() => setHoveredRating(0)}
                />
              </div>

              {/* Message */}
              <div className="space-y-2 pt-2">
                <label
                  htmlFor="message"
                  className="font-body text-sm text-smoke block"
                >
                  Seu relato (como a leitura te ajudou?)
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Escreva aqui como foi a sua experiência com o Tarot da Liz..."
                  className="w-full bg-void/50 border border-gold/15 rounded-md px-4 py-3 text-parchment font-body text-sm focus:border-gold focus:outline-none transition-colors resize-y backdrop-blur-sm"
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
                    className="w-4 h-4 rounded-sm border-gold/20 bg-void/50 text-gold focus:ring-gold/30 focus:ring-offset-0"
                  />
                </div>
                <label
                  htmlFor="consent"
                  className="font-body text-xs text-smoke/70 leading-tight"
                >
                  Autorizo o uso do meu depoimento e primeiro nome na seção de
                  avaliações do site do Tarot da Liz.
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
