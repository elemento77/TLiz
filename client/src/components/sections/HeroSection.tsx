/**
 * Hero Section — Neo-Brutalist
 * Bold oversized typography, asymmetric layout, strong CTA
 * Uses generated hero background image
 */

import { ArrowDown, Zap } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/hero-bg-eyc2Q2fK52xhkNKM7SGqCi.webp";

export default function HeroSection() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container relative py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Text block — takes 7 columns on desktop */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 brutal-border-thin bg-white px-4 py-2 mb-6 brutal-shadow">
              <Zap size={16} className="text-burnt-orange" />
              <span className="font-display font-semibold text-xs uppercase tracking-widest text-charcoal">
                Sem enrolação. Sem surpresas.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-charcoal leading-[0.95] tracking-tight text-[clamp(2.5rem,6vw,5rem)] mb-6">
              Tudo que você precisa,{" "}
              <span className="text-burnt-orange relative inline-block">
                num só lugar
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8C50 2 250 2 298 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg md:text-xl text-charcoal/70 max-w-xl mb-8 leading-relaxed">
              Veja os planos, entenda exatamente o que está incluso e compre direto — sem precisar ligar, 
              mandar mensagem ou esperar resposta.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#planos"
                className="brutal-btn bg-burnt-orange text-white px-8 py-4 text-base uppercase tracking-wider text-center"
              >
                Ver Planos e Preços
              </a>
              <a
                href="#faq"
                className="brutal-btn bg-white text-charcoal px-8 py-4 text-base uppercase tracking-wider text-center"
              >
                Tirar Dúvidas
              </a>
            </div>

            {/* Trust micro-copy */}
            <p className="mt-6 font-body text-sm text-charcoal/50 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-forest-green rounded-full" />
              Pagamento seguro via Mercado Pago — Pix, cartão ou boleto
            </p>
          </motion.div>

          {/* Visual block — takes 5 columns on desktop */}
          <motion.div
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative card stack */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-charcoal rounded-sm" />
              <div className="relative brutal-border bg-white p-8 rounded-sm">
                <img
                  src={HERO_IMG}
                  alt="Composição visual abstrata neo-brutalista"
                  className="w-full h-auto rounded-sm"
                />
                {/* Floating badge */}
                <div className="absolute -top-5 -right-5 bg-burnt-orange text-white brutal-border px-4 py-2 rotate-3">
                  <span className="font-display font-bold text-sm uppercase">100% Online</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16 lg:mt-24"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#prova-social" className="brutal-border-thin bg-white p-3 hover:bg-charcoal hover:text-cream transition-all">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
