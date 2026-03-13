/**
 * Pricing Section — Esoteric Tarot
 * Three tiers: standard cards, premium hero (Jogo das Sombras), mandala artwork.
 * Clean-code: each tier rendered by a dedicated component, no duplication.
 */

import { motion } from "framer-motion";
import { Check, X, Shield, Flame, Sparkles, Info } from "lucide-react";
import { toast } from "sonner";
import MandalaCard from "./MandalaCard";

const TAROT_CARDS_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/tarot-cards-TMzbShpNrrHMWsgfdMBcHN.webp";

const MERCADO_PAGO_PERGUNTA_UNICA_URL = "https://mpago.la/2dAKkry";
const MERCADO_PAGO_PENDING_URL = "#";

/* ─── Types ─── */

interface Feature {
  text: string;
  isIncluded: boolean;
}

interface Ritual {
  symbol: string;
  name: string;
  tagline: string;
  price: string;
  deliveryNote: string;
  description: string;
  features: Feature[];
  isFeatured: boolean;
  badge?: string;
  ctaLabel: string;
  mercadoPagoUrl: string;
}

/* ─── Data ─── */

const STANDARD_RITUALS: Ritual[] = [
  {
    symbol: "✧",
    name: "Pergunta Única",
    tagline: "Áudio ou Texto",
    price: "R$ 60",
    deliveryNote: "com acessibilidade",
    description:
      "Ideal para uma dúvida urgente e pontual que precisa de clareza imediata.",
    features: [
      { text: "1 pergunta ou tema", isIncluded: true },
      { text: "Entrega em áudio ou texto", isIncluded: true },
      { text: "Clareza imediata e pontual", isIncluded: true },
      { text: "Análise mais ampla", isIncluded: false },
      { text: "Sessão ao vivo", isIncluded: false },
    ],
    isFeatured: false,
    ctaLabel: "Agendar Pergunta",
    mercadoPagoUrl: MERCADO_PAGO_PERGUNTA_UNICA_URL,
  },
  {
    symbol: "✦",
    name: "Combo 3 Perguntas",
    tagline: "Visão mais completa",
    price: "R$ 130",
    deliveryNote: "respostas em formato Digital",
    description:
      "Uma análise mais ampla para situações com mais de um desdobramento, permitindo uma visão mais completa do cenário e dos próximos passos.",
    features: [
      { text: "Até 3 perguntas ou desdobramentos", isIncluded: true },
      { text: "Entrega em formato Digital detalhado", isIncluded: true },
      { text: "Visão abrangente do cenário", isIncluded: true },
      { text: "Orientações dos próximos passos", isIncluded: true },
      { text: "Sessão ao vivo", isIncluded: false },
    ],
    isFeatured: false,
    ctaLabel: "Agendar Combo",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
  {
    symbol: "☿",
    name: "Sessão Estratégica",
    tagline: "Profundo e transformador",
    price: "R$ 197",
    deliveryNote: "1h por vídeo",
    description:
      "Não é apenas uma leitura, é um alinhamento completo. Mergulhamos na sua situação com foco total em clareza e estratégia.",
    features: [
      { text: "Sessão de 1h ao vivo por WhatsApp", isIncluded: true },
      { text: "Análise detalhada e investigação de áreas", isIncluded: true },
      { text: "Plano de Ação de 7 Dias (Digital)", isIncluded: true },
      { text: "Bônus: Arcano Regente Pessoal (Digital)", isIncluded: true },
    ],
    isFeatured: true,
    badge: "Mais Buscado",
    ctaLabel: "Agendar Sessão",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
  {
    symbol: "🔮",
    name: "Arcano Regente Pessoal",
    tagline: "Seu arquétipo de vida",
    price: "R$ 60",
    deliveryNote: "entrega em formato Digital",
    description:
      "O Arcano Regente revela o arquétipo que acompanha sua jornada ao longo da vida. Através do Tarot e da sua data de nascimento, identificamos a energia simbólica que influencia sua personalidade, seus talentos naturais e os aprendizados do seu caminho.",
    features: [
      { text: "Interpretação do seu Arcano Regente", isIncluded: true },
      { text: "Potenciais e desafios do arquétipo", isIncluded: true },
      { text: "Orientação para aplicar essa energia", isIncluded: true },
      { text: "Sessão ao vivo", isIncluded: false },
    ],
    isFeatured: false,
    ctaLabel: "Descobrir Arcano",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
];

const PREMIUM_RITUAL: Ritual = {
  symbol: "☾",
  name: "Jogo das Sombras",
  tagline: "Desperte sua Força Interior",
  price: "R$ 297",
  deliveryNote: "90 min por vídeo",
  description:
    "Imersão profunda sob a vibração de Lilith para confrontar padrões ocultos e revelar a força que já existe dentro de você. Uma experiência transformadora que vai além da leitura — é um mergulho nas suas sombras para encontrar sua verdadeira potência.",
  features: [
    { text: "Sessão de 90min ao vivo (WhatsApp)", isIncluded: true },
    { text: "Identificar padrões e bloqueios ocultos", isIncluded: true },
    { text: "Plano estratégico de 7 dias", isIncluded: true },
    { text: "Bônus: Arcano Regente Pessoal (Digital)", isIncluded: true },
    { text: "Acompanhamento pós-sessão por 48h", isIncluded: true },
  ],
  isFeatured: true,
  badge: "Premium · Imersão Profunda",
  ctaLabel: "Iniciar Imersão",
  mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
};

const MANDALA_RITUALS = [
  {
    mandalaName: "annual" as const,
    imageUrl: `${import.meta.env.BASE_URL}mandala-anual.png`,
    ritualName: "Mandala Anual",
    tagline: "Mapa dos próximos 12 meses",
    price: "R$ 247",
    deliveryNote: "Digital + Notas explicativas",
    description:
      "Um mapa estratégico. A Mandala revela as energias de cada mês, para planejar seu ano com clareza, consciência e alinhamento.",
    features: [
      { text: "Previsões mês a mês", isIncluded: true },
      { text: "Identificação de oportunidades", isIncluded: true },
      { text: "Reconhecer pontos de atenção", isIncluded: true },
      { text: "Bônus: Arcano Regente Pessoal", isIncluded: true },
    ],
    ctaLabel: "Fazer Mandala",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
  {
    mandalaName: "semestral" as const,
    imageUrl: `${import.meta.env.BASE_URL}mandala-semestral.png`,
    ritualName: "Mandala Semestral",
    tagline: "Mapa dos próximos 6 meses",
    price: "R$ 147",
    deliveryNote: "entrega em formato Digital",
    description:
      "A Mandala Semestral é uma leitura estratégica que revela as energias que irão influenciar seu ciclo nos próximos seis meses. Cada período é analisado através dos arcanos do Tarot, trazendo clareza sobre momentos de expansão, desafios e oportunidades de crescimento.",
    features: [
      { text: "Energia central do semestre", isIncluded: true },
      { text: "Interpretação dos arcanos de cada período", isIncluded: true },
      { text: "Orientações simbólicas para o ciclo", isIncluded: true },
      { text: "Sessão ao vivo", isIncluded: false },
    ],
    ctaLabel: "Mapear Semestre",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
];

/* ─── Helpers ─── */

function handlePaymentClick(mercadoPagoUrl: string) {
  if (mercadoPagoUrl === MERCADO_PAGO_PENDING_URL) {
    toast("Em breve disponível", {
      description:
        "Estamos configurando este serviço. Tente outro ou entre em contato pelo WhatsApp.",
      icon: "✦",
    });
    return;
  }

  window.open(mercadoPagoUrl, "_blank");
  window.location.href = import.meta.env.BASE_URL + "sucesso";
}

/* ─── Shared Components ─── */

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-2.5">
      {feature.isIncluded ? (
        <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
      ) : (
        <X size={13} className="text-smoke/30 mt-0.5 shrink-0" strokeWidth={2} />
      )}
      <span
        className={`font-body text-sm leading-snug ${
          feature.isIncluded ? "text-smoke" : "text-smoke/30 line-through"
        }`}
      >
        {feature.text}
      </span>
    </div>
  );
}

/* ─── Standard Ritual Card ─── */

function StandardRitualCard({
  ritual,
  index,
}: {
  ritual: Ritual;
  index: number;
}) {
  const cardClass = ritual.isFeatured ? "esoteric-card-featured" : "esoteric-card";
  const headerBorderClass = ritual.isFeatured ? "border-gold/20" : "border-gold/8";
  const ctaClass = "bg-transparent border border-gold-dim text-gold hover:border-gold hover:bg-gold/8";

  return (
    <motion.div
      className={`relative flex flex-col h-full ${cardClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
    >
      {ritual.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-void font-body font-semibold text-[10px] uppercase tracking-widest px-4 py-1 whitespace-nowrap rounded-full">
          {ritual.badge}
        </div>
      )}

      <div className={`p-6 pb-5 border-b ${headerBorderClass}`}>
        <div className="text-2xl text-gold mb-2">{ritual.symbol}</div>
        <div className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke mb-1">
          {ritual.tagline}
        </div>
        <h3 className="font-display text-xl text-parchment mb-4 text-shadow-sm">
          {ritual.name}
        </h3>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl text-gold text-shadow-sm">
            {ritual.price}
          </span>
        </div>
        <div className="font-body text-[10px] uppercase tracking-widest text-smoke/50 mt-0.5">
          {ritual.deliveryNote}
        </div>
      </div>

      <div className="px-6 pt-4 pb-3">
        <p className="font-body text-sm text-smoke leading-relaxed">
          {ritual.description}
        </p>
      </div>

      <div className="px-6 pb-5 flex-1">
        <div className="space-y-2 mt-2">
          {ritual.features.map((feature, featureIndex) => (
            <FeatureItem key={featureIndex} feature={feature} />
          ))}
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => handlePaymentClick(ritual.mercadoPagoUrl)}
          className={`w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 rounded-md ${ctaClass}`}
        >
          {ritual.ctaLabel}
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Shield size={11} className="text-smoke/40" />
          <span className="font-body text-[10px] text-smoke/40 uppercase tracking-widest">
            Pagamento Seguro
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─── */

export default function PricingSection() {
  return (
    <section id="rituais" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-gold mb-3">
              ✦ Escolha seu Caminho
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-parchment mb-6 text-shadow-lg">
              Rituais de <em className="text-gold not-italic">Clareza</em>
            </h2>
            <p className="font-body text-base text-smoke leading-relaxed">
              Cada leitura é um portal para o autoconhecimento. Escolha a modalidade
              que melhor ressoa com o seu momento atual.
            </p>
          </motion.div>
        </div>

        {/* Standard Rituals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {STANDARD_RITUALS.map((ritual, index) => (
            <StandardRitualCard key={index} ritual={ritual} index={index} />
          ))}
        </div>

        {/* Premium Ritual Hero */}
        <div className="mb-12">
          <motion.div
            className="esoteric-card-premium overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
                <img
                  src={TAROT_CARDS_IMAGE_URL}
                  alt="Jogo das Sombras"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-void via-void/40 to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent lg:hidden block" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 mb-2">
                    <Flame size={16} className="text-gold" />
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold font-bold">
                      Vibração de Lilith
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-parchment text-shadow-lg">
                    {PREMIUM_RITUAL.name}
                  </h3>
                </div>
              </div>

              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col">
                <div className="flex flex-wrap items-baseline gap-4 mb-6">
                  <span className="font-display text-4xl text-gold text-shadow-sm">
                    {PREMIUM_RITUAL.price}
                  </span>
                  <span className="font-body text-xs uppercase tracking-widest text-smoke/60">
                    {PREMIUM_RITUAL.deliveryNote}
                  </span>
                  <div className="bg-gold/10 border border-gold/20 px-3 py-1 rounded-full">
                    <span className="font-body text-[10px] text-gold uppercase tracking-widest font-bold">
                      {PREMIUM_RITUAL.badge}
                    </span>
                  </div>
                </div>

                <p className="font-body text-base text-smoke leading-relaxed mb-8">
                  {PREMIUM_RITUAL.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                  {PREMIUM_RITUAL.features.map((feature, index) => (
                    <FeatureItem key={index} feature={feature} />
                  ))}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-center gap-6">
                  <button
                    onClick={() => handlePaymentClick(PREMIUM_RITUAL.mercadoPagoUrl)}
                    className="btn-gold w-full sm:w-auto px-10 py-4"
                  >
                    {PREMIUM_RITUAL.ctaLabel}
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-void bg-gold/20 flex items-center justify-center">
                          <Sparkles size={12} className="text-gold" />
                        </div>
                      ))}
                    </div>
                    <span className="font-body text-[10px] text-smoke/50 uppercase tracking-widest">
                      Vagas limitadas por semana
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mandalas Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start">
          {MANDALA_RITUALS.map((mandala, index) => (
            <MandalaCard
              key={index}
              {...mandala}
              onPaymentClick={() => handlePaymentClick(mandala.mercadoPagoUrl)}
            />
          ))}
        </div>

        {/* Important Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-8 border border-gold/10">
            <div className="flex items-center gap-3 mb-6">
              <Info size={20} className="text-gold" />
              <h3 className="font-display text-xl text-parchment">Informações Importantes</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-2">Nota sobre o formato</h4>
                  <p className="font-body text-sm text-smoke leading-relaxed">
                    Todos os materiais listados como <strong>"Digital"</strong> são entregues em formato <strong>PDF</strong> de qualidade, prontos para leitura em qualquer celular ou computador.
                  </p>
                </div>
                <div>
                  <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-2">Formas de Pagamento</h4>
                  <p className="font-body text-sm text-smoke leading-relaxed">
                    Pix ou Cartão via Mercado Pago.
                  </p>
                </div>
              </div>
              
              <div className="bg-gold/5 p-5 rounded-lg border border-gold/5">
                <h4 className="font-body text-xs uppercase tracking-widest text-gold mb-2">Aviso Legal</h4>
                <p className="font-body text-sm text-smoke/80 leading-relaxed italic">
                  O Tarot é uma ferramenta de autoconhecimento. Não substitui tratamentos médicos ou psicológicos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
