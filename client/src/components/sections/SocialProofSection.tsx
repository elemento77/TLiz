/**
 * Social Proof — Testimonials & Stats
 * Glassmorphism cards with gold accents. Atmospheric and intimate.
 */

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
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

const STATS = [
  { value: "500+", label: "Leituras realizadas" },
  { value: "98%", label: "Clientes satisfeitos" },
  { value: "24h", label: "Prazo de entrega" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, index) => (
        <Star key={index} size={13} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  index: number;
}) {
  return (
    <motion.div
      className="esoteric-card p-6 relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      <Quote
        size={24}
        className="absolute top-4 right-4 text-gold/10"
        strokeWidth={1}
      />
      <StarRating count={testimonial.stars} />
      <p className="font-body text-sm text-smoke leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      <p className="font-display text-sm text-gold-dim">
        — {testimonial.name}
      </p>
    </motion.div>
  );
}

function StatItem({ stat, index }: { stat: (typeof STATS)[0]; index: number }) {
  return (
    <motion.div
      key={stat.value}
      className="text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="font-display text-4xl text-gold text-shadow-md">
        {stat.value}
      </div>
      <div className="font-body text-xs uppercase tracking-widest text-smoke mt-1">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function SocialProofSection() {
  return (
    <section className="py-16">
      <div className="container">
        {/* Section header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">
            ✦ Tarot da Liz
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-parchment text-shadow-md">
            O que dizem sobre as leituras
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="glass-panel px-6 py-8 mb-12">
          <div className="flex flex-wrap justify-center gap-10">
            {STATS.map((stat, index) => (
              <StatItem key={stat.value} stat={stat} index={index} />
            ))}
          </div>
        </div>

        {/* Ornamental divider */}
        <div className="ornament mb-12">
          <span className="text-gold-dim text-sm">✦</span>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
