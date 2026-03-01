/**
 * Social Proof Section — Neo-Brutalist
 * Testimonials with bold cards, trust indicators
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TRUST_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/trust-badge-5cEzQzYGjp5T9v7Ed6dcao.webp";

const testimonials = [
  {
    name: "Mariana Costa",
    role: "Empreendedora Digital",
    text: "Finalmente consegui parar de responder as mesmas perguntas no WhatsApp. Agora meus clientes compram direto pelo site!",
    stars: 5,
  },
  {
    name: "Carlos Henrique",
    role: "Dono de Agência",
    text: "O plano Profissional me economiza pelo menos 3 horas por dia. Tudo claro, sem enrolação. Recomendo demais.",
    stars: 5,
  },
  {
    name: "Ana Beatriz",
    role: "Consultora de Marketing",
    text: "A clareza dos preços e do que está incluso faz toda a diferença. Meus clientes decidem muito mais rápido.",
    stars: 5,
  },
];

const stats = [
  { value: "2.500+", label: "Clientes ativos" },
  { value: "98%", label: "Satisfação" },
  { value: "3x", label: "Mais conversão" },
  { value: "24h", label: "Suporte rápido" },
];

export default function SocialProofSection() {
  return (
    <section id="prova-social" className="py-20 md:py-28 border-t-3 border-charcoal">
      <div className="container">
        {/* Stats bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="brutal-border bg-white p-5 text-center brutal-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_oklch(0.2_0.01_80)] transition-all duration-100"
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-burnt-orange">
                {stat.value}
              </div>
              <div className="font-body text-sm text-charcoal/60 mt-1 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Section heading */}
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-3">
            Quem usa, recomenda<span className="text-burnt-orange">.</span>
          </h2>
          <p className="font-body text-charcoal/60 max-w-lg mx-auto">
            Veja o que nossos clientes dizem sobre a experiência de compra simplificada.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="brutal-border bg-white p-6 brutal-shadow relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-burnt-orange/20 mb-3" />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={16} className="fill-burnt-orange text-burnt-orange" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="border-t-2 border-charcoal/10 pt-4">
                <div className="font-display font-bold text-sm text-charcoal">{t.name}</div>
                <div className="font-body text-xs text-charcoal/50 uppercase tracking-wide">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="brutal-border-thin bg-white px-8 py-4 brutal-shadow">
            <img
              src={TRUST_IMG}
              alt="Selos de segurança e confiança"
              className="h-12 md:h-16 w-auto object-contain opacity-80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
