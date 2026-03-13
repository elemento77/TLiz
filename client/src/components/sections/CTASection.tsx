/**
 * CTA Section — Final Call to Action
 * Glassmorphism panel with atmospheric gold accents.
 */

import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-strong px-6 py-12 md:px-10 max-w-lg mx-auto"
        >
          <div className="ornament mb-6">
            <span className="text-gold text-base">☽ ✦ ☾</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-4 leading-tight text-shadow-lg">
            O Tarot está<br />
            <em className="text-gold not-italic">esperando por você.</em>
          </h2>

          <p className="font-body text-sm text-smoke mb-8 leading-relaxed">
            Escolha seu jogo, realize o pagamento com segurança e receba sua leitura.
            Tudo de forma simples, clara e direta.
          </p>

          <a href="#rituais" className="btn-gold">
            Escolher meu Jogo
          </a>

          <div className="flex items-center justify-center gap-5 mt-8 flex-wrap">
            {[
              "Pagamento seguro",
              "Garantia de 7 dias",
              "Entrega rápida",
            ].map((text) => (
              <span
                key={text}
                className="font-body text-xs text-smoke/60 flex items-center gap-1.5"
              >
                <span className="text-gold text-[10px]">✓</span> {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
