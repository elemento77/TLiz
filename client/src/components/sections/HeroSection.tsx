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
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/65 to-void" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/40" />
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
              ✦ Leituras de Tarot Online
            </p>

            {/* Headline */}
            <h1 className="font-display font-medium text-parchment leading-[1.1] text-[clamp(2.4rem,5vw,3.8rem)] mb-5">
              As cartas revelam<br />
              <em className="text-gold not-italic">o que você já sente.</em>
            </h1>

            {/* Sub */}
            <p className="font-body text-smoke text-base leading-relaxed mb-8 max-w-sm">
              Escolha seu ritual, veja exatamente o que está incluso e agende sua leitura — sem precisar mandar mensagem primeiro.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#rituais" className="btn-gold">
                Ver os Rituais
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
