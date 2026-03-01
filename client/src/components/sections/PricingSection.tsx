/**
 * Pricing Section — Neo-Brutalist
 * Three pricing cards with detailed inclusions/exclusions
 * Middle card highlighted as "Mais Vendido" with anchoring principle
 * Mercado Pago integration buttons
 */

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import MercadoPagoButton from "@/components/MercadoPagoButton";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  description: string;
  features: PlanFeature[];
  highlighted: boolean;
  badge?: string;
  ctaText: string;
  mpLink: string;
}

const plans: Plan[] = [
  {
    name: "Essencial",
    tagline: "Para quem está começando",
    price: "R$ 97",
    priceNote: "pagamento único",
    description:
      "Ideal para quem precisa de uma presença online profissional e quer começar a vender sem complicação.",
    features: [
      { text: "Site de até 3 páginas", included: true },
      { text: "Design responsivo (mobile + desktop)", included: true },
      { text: "Integração com WhatsApp", included: true },
      { text: "Formulário de contato", included: true },
      { text: "Otimização básica para Google (SEO)", included: true },
      { text: "Entrega em até 5 dias úteis", included: true },
      { text: "Gestão de redes sociais", included: false },
      { text: "Blog ou produção de conteúdo", included: false },
      { text: "E-commerce / loja virtual", included: false },
      { text: "Suporte prioritário", included: false },
    ],
    highlighted: false,
    ctaText: "Comprar Plano Essencial",
    mpLink: "#",
  },
  {
    name: "Profissional",
    tagline: "O mais escolhido",
    price: "R$ 297",
    priceNote: "pagamento único",
    description:
      "Para quem quer vender de verdade. Inclui tudo do Essencial + funcionalidades avançadas para converter visitantes em clientes.",
    features: [
      { text: "Site de até 7 páginas", included: true },
      { text: "Design responsivo premium", included: true },
      { text: "Integração com WhatsApp", included: true },
      { text: "Formulário de contato avançado", included: true },
      { text: "SEO completo + Google Analytics", included: true },
      { text: "Integração com Mercado Pago", included: true },
      { text: "Galeria de fotos / portfólio", included: true },
      { text: "Entrega em até 7 dias úteis", included: true },
      { text: "1 mês de suporte incluso", included: true },
      { text: "Gestão de redes sociais", included: false },
      { text: "Blog com produção de conteúdo", included: false },
    ],
    highlighted: true,
    badge: "Mais Vendido",
    ctaText: "Comprar Plano Profissional",
    mpLink: "#",
  },
  {
    name: "Premium",
    tagline: "Solução completa",
    price: "R$ 597",
    priceNote: "pagamento único",
    description:
      "A solução definitiva. Tudo do Profissional + e-commerce, blog e suporte estendido. Para quem quer escalar.",
    features: [
      { text: "Site ilimitado de páginas", included: true },
      { text: "Design exclusivo e personalizado", included: true },
      { text: "Integração com WhatsApp Business", included: true },
      { text: "Formulários avançados + automação", included: true },
      { text: "SEO avançado + Google Analytics + Tag Manager", included: true },
      { text: "Integração completa Mercado Pago", included: true },
      { text: "E-commerce / loja virtual completa", included: true },
      { text: "Blog integrado", included: true },
      { text: "Entrega em até 10 dias úteis", included: true },
      { text: "3 meses de suporte prioritário", included: true },
      { text: "Treinamento de uso (1h)", included: true },
    ],
    highlighted: false,
    ctaText: "Comprar Plano Premium",
    mpLink: "#",
  },
];

function PricingCard({ plan, index }: { plan: Plan; index: number }) {

  return (
    <motion.div
      className={`relative flex flex-col ${
        plan.highlighted
          ? "brutal-border bg-white brutal-shadow-orange lg:-translate-y-4 lg:scale-[1.03] z-10"
          : "brutal-border bg-white brutal-shadow"
      }`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.15 }}
    >
      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-burnt-orange text-white brutal-border px-5 py-1.5 -rotate-2 z-20">
          <span className="font-display font-bold text-xs uppercase tracking-widest whitespace-nowrap">
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`p-6 pb-4 border-b-3 border-charcoal ${plan.highlighted ? "bg-charcoal text-cream" : ""}`}>
        <div className="font-body text-xs uppercase tracking-widest mb-1 opacity-60">
          {plan.tagline}
        </div>
        <h3 className="font-display font-bold text-2xl mb-3">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="font-display font-bold text-4xl md:text-5xl">
            {plan.price}
          </span>
        </div>
        <div className="font-body text-xs uppercase tracking-wide mt-1 opacity-50">
          {plan.priceNote}
        </div>
      </div>

      {/* Description */}
      <div className="px-6 pt-5 pb-3">
        <p className="font-body text-sm text-charcoal/70 leading-relaxed">
          {plan.description}
        </p>
      </div>

      {/* Features list */}
      <div className="px-6 pb-6 flex-1">
        <div className="space-y-2.5 mt-3">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              {feature.included ? (
                <div className="mt-0.5 w-5 h-5 flex items-center justify-center bg-forest-green/10 border-2 border-forest-green shrink-0">
                  <Check size={12} className="text-forest-green" strokeWidth={3} />
                </div>
              ) : (
                <div className="mt-0.5 w-5 h-5 flex items-center justify-center bg-danger-red/10 border-2 border-danger-red/40 shrink-0">
                  <X size={12} className="text-danger-red/60" strokeWidth={3} />
                </div>
              )}
              <span
                className={`font-body text-sm ${
                  feature.included ? "text-charcoal" : "text-charcoal/40 line-through"
                }`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <MercadoPagoButton
          href={plan.mpLink}
          label={plan.ctaText}
          variant={plan.highlighted ? "primary" : "secondary"}
        />
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 md:py-28 border-t-3 border-charcoal bg-warm-gray">
      <div className="container">
        {/* Section heading */}
        <div className="text-center mb-14">
          <div className="inline-block brutal-border-thin bg-white px-4 py-2 mb-4 brutal-shadow">
            <span className="font-display font-semibold text-xs uppercase tracking-widest text-burnt-orange">
              Planos & Preços
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-charcoal mb-4">
            Escolha o plano ideal<span className="text-burnt-orange">.</span>
          </h2>
          <p className="font-body text-charcoal/60 max-w-2xl mx-auto text-lg">
            Sem letras miúdas. Sem surpresas. Veja exatamente o que está incluso em cada plano
            e tome sua decisão com confiança.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Payment methods */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-body text-sm text-charcoal/50 mb-2">
            Aceitamos todas as formas de pagamento:
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {["Pix", "Cartão de Crédito", "Cartão de Débito", "Boleto"].map((method) => (
              <span
                key={method}
                className="brutal-border-thin bg-white px-3 py-1.5 font-display text-xs font-medium uppercase tracking-wider text-charcoal"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
