/**
 * Hero Section — Esoteric Tarot
 * Compact, atmospheric, image-driven. Dark background + gold text.
 */

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/tarot-hero-JR54n2PCwiEAsgew6WQuy9.webp";

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-14">
      {/* Background gradients for text readability (left fade only to preserve the fish image on the right) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void/10 to-void/40" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-5">
              ✦ O peixinho pendulado
            </p>

            {/* Headline */}
            <h1 className="font-display font-medium text-parchment leading-[1.1] text-[clamp(2.4rem,5vw,3.8rem)] mb-5">
              Navegando nas<br />
              <em className="text-gold not-italic">sombras de Lilith</em>
            </h1>

            {/* Sub */}
            <div className="font-body text-smoke text-[14px] md:text-[15px] leading-relaxed mb-8 max-w-xl pr-4 md:pr-0 space-y-4">
              <p>
                “O Peixinho é meu guia desde a primeira encarnação, trazendo alegria e conexão profunda. Ele me acompanhou em experiências profundas e me ensinou a navegar pelas águas da consciência. Hoje, ele nada nas sombras da energia de Lilith, guiando cada leitura e cada imersão com força, clareza e transformação.”
              </p>
              <p>
                Aqui, cada tiragem, cada jogo e cada mandala é conduzido com atenção, cuidado e intenção. O Peixinho Pendulado é o fio que conecta leveza, profundidade e autoconhecimento, enquanto Lilith traz a coragem, a verdade e a força que despertam o seu poder interior. Navegue com consciência. Descubra, transforme e abrace a sua luz e sombra.
              </p>
              <div className="text-[13px] md:text-[14px] border-t border-surface/50 pt-4 mt-5">
                <p className="mb-2"><strong className="text-parchment font-medium">Sou Liz Torres</strong>, taróloga com 15 anos de experiência dedicados a iluminar caminhos.</p>
                <p>Minha missão é utilizar o Tarot como uma poderosa ferramenta de autoconhecimento, despertando a força que já habita em você, trazendo clareza para suas decisões e serenidade para trilhar uma jornada com propósito e equilíbrio.</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#rituais" className="btn-gold">
                Ver Modalidades
              </a>
              <a href="#faq" className="btn-ghost">
                Tirar Dúvidas
              </a>
            </div>

            {/* Trust */}
            <p className="mt-6 font-body text-xs text-smoke/60 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold/60" />
              Pagamento seguro · Resposta em até 24h · Mais de 500 leituras realizadas
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#rituais"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/40 hover:text-gold transition-colors"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
