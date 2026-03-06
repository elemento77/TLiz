/**
 * Pricing Section — Esoteric Tarot
 * Reading rituals with clear inclusions/exclusions.
 * Dark cards, gold accents, Mercado Pago buttons.
 * Mandala products feature immersive artwork with click-to-reveal details.
 */

import { motion } from "framer-motion";
import { Check, X, Shield } from "lucide-react";
import { toast } from "sonner";
import MandalaCard from "./MandalaCard";

const TAROT_CARDS_IMAGE_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/tarot-cards-TMzbShpNrrHMWsgfdMBcHN.webp";

const MERCADO_PAGO_PERGUNTA_UNICA_URL = "https://mpago.la/2dAKkry";
const MERCADO_PAGO_PENDING_URL = "#";

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

const standardRituals: Ritual[] = [
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
    deliveryNote: "respostas em PDF",
    description:
      "Uma análise mais ampla para situações com mais de um desdobramento, permitindo uma visão mais completa do cenário e dos próximos passos.",
    features: [
      { text: "Até 3 perguntas ou desdobramentos", isIncluded: true },
      { text: "Entrega de PDF detalhado", isIncluded: true },
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
      { text: "Plano de Ação de 7 Dias (PDF)", isIncluded: true },
      { text: "Bônus: Arcano Regente Pessoal (PDF)", isIncluded: true },
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
    deliveryNote: "entrega em PDF",
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
  {
    symbol: "☾",
    name: "Jogo das Sombras",
    tagline: "Desperte sua Força Interior",
    price: "R$ 297",
    deliveryNote: "90 min por vídeo",
    description:
      "Imersão profunda sob a vibração de Lilith para confrontar padrões ocultos e revelar a força que já existe dentro de você.",
    features: [
      { text: "Sessão de 90min ao vivo (WhatsApp)", isIncluded: true },
      { text: "Identificar padrões e bloqueios", isIncluded: true },
      { text: "Plano estratégico de 7 dias", isIncluded: true },
      { text: "Bônus: Arcano Regente Pessoal", isIncluded: true },
    ],
    isFeatured: true,
    badge: "Imersão Profunda",
    ctaLabel: "Agendar Jogo",
    mercadoPagoUrl: MERCADO_PAGO_PENDING_URL,
  },
];

const mandalaRituals = [
  {
    mandalaName: "annual" as const,
    imageUrl: `${import.meta.env.BASE_URL}mandala-anual.png`,
    ritualName: "Mandala Anual",
    tagline: "Mapa dos próximos 12 meses",
    price: "R$ 247",
    deliveryNote: "PDF + Notas explicativas",
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
    deliveryNote: "entrega em PDF",
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

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-2.5">
      {feature.isIncluded ? (
        <Check
          size={13}
          className="text-gold mt-0.5 shrink-0"
          strokeWidth={2.5}
        />
      ) : (
        <X
          size={13}
          className="text-smoke/30 mt-0.5 shrink-0"
          strokeWidth={2}
        />
      )}
      <span
        className={`font-body text-sm leading-snug ${
          feature.isIncluded
            ? "text-smoke"
            : "text-smoke/30 line-through"
        }`}
      >
        {feature.text}
      </span>
    </div>
  );
}

function StandardRitualCard({
  ritual,
  index,
}: {
  ritual: Ritual;
  index: number;
}) {
  const cardClass = ritual.isFeatured
    ? "esoteric-card-featured"
    : "esoteric-card";
  const headerBorderClass = ritual.isFeatured
    ? "border-gold-dim/40"
    : "border-surface";
  const ctaClass = ritual.isFeatured
    ? "bg-gold text-void hover:bg-gold/90 glow-gold-sm"
    : "bg-transparent border border-gold-dim text-gold hover:border-gold hover:bg-gold/8";

  return (
    <motion.div
      className={`relative flex flex-col ${cardClass}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.12 }}
    >
      {ritual.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-void font-body font-semibold text-[10px] uppercase tracking-widest px-4 py-1 whitespace-nowrap">
          {ritual.badge}
        </div>
      )}

      <div className={`p-6 pb-5 border-b ${headerBorderClass}`}>
        <div className="text-2xl text-gold mb-2">{ritual.symbol}</div>
        <div className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke mb-1">
          {ritual.tagline}
        </div>
        <h3 className="font-display text-xl text-parchment mb-4">
          {ritual.name}
        </h3>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl text-gold">{ritual.price}</span>
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
          className={`w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${ctaClass}`}
        >
          {ritual.ctaLabel}
        </button>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Shield size={11} className="text-smoke/40" />
          <span className="font-body text-[10px] text-smoke/40 uppercase tracking-wider">
            Pagamento seguro · Mercado Pago
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  return (
    <section id="rituais" className="py-16 border-t border-surface">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">
            ✦ Explorar
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-3">
            Modalidades de Jogo
          </h2>
          <p className="font-body text-sm text-smoke max-w-md mx-auto leading-relaxed">
            Escolha o formato ideal para o seu momento e agende sua leitura.
          </p>
        </div>

        {/* Standard rituals grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-start justify-center mb-8">
          {standardRituals.map((ritual, index) => (
            <StandardRitualCard key={ritual.name} ritual={ritual} index={index} />
          ))}
        </div>

        {/* Mandala rituals with immersive design */}
        <div className="mt-16 mb-8">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-8 text-center">
            ✦ Mandalas Estratégicas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {mandalaRituals.map((mandala) => (
              <MandalaCard
                key={mandala.mandalaName}
                mandalaName={mandala.mandalaName}
                imageUrl={mandala.imageUrl}
                ritualName={mandala.ritualName}
                tagline={mandala.tagline}
                price={mandala.price}
                deliveryNote={mandala.deliveryNote}
                description={mandala.description}
                features={mandala.features}
                ctaLabel={mandala.ctaLabel}
                mercadoPagoUrl={mandala.mercadoPagoUrl}
                onPaymentClick={handlePaymentClick}
              />
            ))}
          </div>
        </div>

        {/* Image accent */}
        <motion.div
          className="mt-14 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative max-w-xs w-full overflow-hidden border border-surface">
            <img
              src={TAROT_CARDS_IMAGE_URL}
              alt="Cartas de tarot sobre veludo"
              className="w-full h-40 object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
            <p className="absolute bottom-3 left-0 right-0 text-center font-body text-[10px] uppercase tracking-[0.25em] text-gold-dim">
              Pix · Cartão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
