/**
 * CTA Section — Esoteric Tarot
 * Compact final call-to-action with crystal image background.
 */

import { motion } from "framer-motion";

const CRYSTAL_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/tarot-crystal-NcUiEStDpaaQdVHDpFimkg.webp";

export default function CTASection() {
  return (
    <section className="relative py-20 border-t border-surface overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={CRYSTAL_IMG} alt="" className="w-full h-full object-cover object-center opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-void via-void/80 to-void" />
      </div>

      <div className="container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="ornament mb-6">
            <span className="text-gold text-base">☽ ✦ ☾</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-4 leading-tight">
            As cartas estão<br />
            <em className="text-gold not-italic">esperando por você.</em>
          </h2>

          <p className="font-body text-sm text-smoke mb-8 leading-relaxed">
            Escolha seu ritual, pague com segurança e receba sua leitura. Sem precisar mandar mensagem primeiro.
          </p>

          <a href="#rituais" className="btn-gold">
            Escolher meu Ritual
          </a>

          <div className="flex items-center justify-center gap-5 mt-8 flex-wrap">
            {["✓ Pagamento seguro", "✓ Garantia de 7 dias", "✓ Entrega rápida"].map((t) => (
              <span key={t} className="font-body text-xs text-smoke/50">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
