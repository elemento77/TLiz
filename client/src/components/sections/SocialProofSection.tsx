/**
 * Social Proof — Esoteric Tarot
 * Compact testimonials strip + 3 stats. Dark, intimate.
 */

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Camila R.",
    text: "A leitura foi cirúrgica. Ela tocou em pontos que eu nem tinha falado. Me deu clareza num momento de muita confusão.",
    stars: 5,
  },
  {
    name: "Thiago M.",
    text: "Fui cético, mas saí da sessão com respostas que eu buscava há meses. Vale cada centavo.",
    stars: 5,
  },
  {
    name: "Fernanda L.",
    text: "Já fiz três leituras. Cada uma no momento certo. A entrega por escrito é um diferencial enorme.",
    stars: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section className="py-16 border-t border-surface">
      <div className="container">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 mb-14">
          {[
            { n: "500+", label: "Leituras realizadas" },
            { n: "98%", label: "Clientes satisfeitos" },
            { n: "24h", label: "Prazo de entrega" },
          ].map((s) => (
            <div key={s.n} className="text-center">
              <div className="font-display text-3xl text-gold">{s.n}</div>
              <div className="font-body text-xs uppercase tracking-widest text-smoke mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Ornamental divider */}
        <div className="ornament mb-12">
          <span className="text-gold-dim text-sm">✦</span>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="esoteric-card p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={13} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-sm text-smoke leading-relaxed mb-4">"{t.text}"</p>
              <p className="font-display text-sm text-gold-dim">— {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
