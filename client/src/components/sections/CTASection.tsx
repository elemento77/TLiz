/**
 * CTA Section — Neo-Brutalist
 * Final call-to-action before footer — captures undecided users
 * Bold, energetic, action-oriented
 */

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

const CTA_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/cta-section-ig8WnWynTW7v9br97vXETP.webp";

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 border-t-3 border-charcoal bg-charcoal relative overflow-hidden">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img src={CTA_IMG} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Icon badge */}
            <div className="inline-flex items-center justify-center w-14 h-14 bg-burnt-orange brutal-border border-cream mb-6 mx-auto">
              <Zap size={28} className="text-cream" />
            </div>

            <h2 className="font-display font-bold text-3xl md:text-5xl text-cream leading-tight mb-6">
              Pronto para parar de perder{" "}
              <span className="text-burnt-orange">tempo</span> e começar a{" "}
              <span className="text-burnt-orange">vender</span>?
            </h2>

            <p className="font-body text-cream/70 text-lg mb-10 leading-relaxed">
              Escolha o plano ideal, pague de forma segura e receba seu site pronto. 
              Sem enrolação, sem surpresas, sem precisar ligar para ninguém.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#planos"
                className="brutal-btn bg-burnt-orange text-white px-8 py-4 text-base uppercase tracking-wider flex items-center justify-center gap-2 border-cream"
              >
                Quero Aumentar Minhas Vendas Agora
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Micro-trust */}
            <div className="flex items-center justify-center gap-6 mt-10 flex-wrap">
              {[
                "✓ Pagamento seguro",
                "✓ Garantia de 7 dias",
                "✓ Sem mensalidade",
                "✓ Entrega rápida",
              ].map((item) => (
                <span key={item} className="font-body text-sm text-cream/50">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
