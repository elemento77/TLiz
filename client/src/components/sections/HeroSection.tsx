/**
 * Hero Section — Immersive Tarot Experience
 * Glassmorphism panel over the background art for text legibility.
 * Dramatic typography with text shadows, atmospheric motion.
 */

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[94vh] flex items-center overflow-hidden pt-14">
      <div className="container relative z-10 py-16 md:py-20 flex flex-col items-center text-center">
        <motion.div
          className="glass-panel px-6 py-10 md:px-10 md:py-12 max-w-2xl w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <motion.p
            className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-5 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Sparkles size={12} className="text-gold" />
            O peixinho pendulado
            <Sparkles size={12} className="text-gold" />
          </motion.p>

          {/* Headline */}
          <h1 className="font-display font-medium text-parchment leading-[1.08] text-[clamp(2.4rem,5vw,3.8rem)] mb-5 text-shadow-lg">
            Navegando nas<br />
            <em className="text-gold not-italic">sombras de Lilith</em>
          </h1>

          {/* Story */}
          <div className="font-body text-smoke text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-xl mx-auto space-y-4">
            <p>
              "O Peixinho é meu guia desde a primeira encarnação, trazendo alegria e conexão profunda. Ele me acompanhou em experiências profundas e me ensinou a navegar pelas águas da consciência. Hoje, ele nada nas sombras da energia de Lilith, guiando cada leitura e cada imersão com força, clareza e transformação."
            </p>
            <p>
              Aqui, cada tiragem, cada jogo e cada mandala é conduzido com atenção, cuidado e intenção. O Peixinho Pendulado é o fio que conecta leveza, profundidade e autoconhecimento, enquanto Lilith traz a coragem, a verdade e a força que despertam o seu poder interior. Navegue com consciência. Descubra, transforme e abrace a sua luz e sombra.
            </p>

            {/* About Liz */}
            <div className="border-t border-gold/15 pt-4 mt-5">
              <p className="mb-2">
                <strong className="text-parchment font-medium">Sou Liz Torres</strong>, taróloga com 15 anos de experiência dedicados a iluminar caminhos.
              </p>
              <p>
                Minha missão é utilizar o Tarot como uma poderosa ferramenta de autoconhecimento, despertando a força que já habita em você, trazendo clareza para suas decisões e serenidade para trilhar uma jornada com propósito e equilíbrio.
              </p>
              <p className="mt-3 text-gold-dim text-[13px]">
                Método de tiragem: Tarô Millennium Thoth
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#rituais" className="btn-gold">
              Escolher meu Jogo
            </a>
            <a href="#faq" className="btn-ghost">
              Tirar Dúvidas
            </a>
          </div>

          {/* Trust badges */}
          <p className="mt-6 font-body text-xs text-smoke/60 flex items-center justify-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/60" />
            Pagamento seguro · Resposta em até 24h · Mais de 500 leituras realizadas
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#depoimentos"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
