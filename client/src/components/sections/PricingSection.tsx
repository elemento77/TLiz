/**
 * Pricing Section — Esoteric Tarot
 * Three reading rituals with clear inclusions/exclusions.
 * Dark cards, gold accents, Mercado Pago buttons.
 */

import { motion } from "framer-motion";
import { Check, X, Shield } from "lucide-react";
import { toast } from "sonner";

const CARDS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663185035098/L3Jyr6D9Q6XkPqnq2Mow6v/tarot-cards-TMzbShpNrrHMWsgfdMBcHN.webp";

interface Feature { text: string; ok: boolean; }

interface Ritual {
  symbol: string;
  name: string;
  tagline: string;
  price: string;
  note: string;
  desc: string;
  features: Feature[];
  featured: boolean;
  badge?: string;
  cta: string;
  mpLink: string;
}

const rituals: Ritual[] = [
  {
    symbol: "☽",
    name: "Leitura Rápida",
    tagline: "Uma pergunta, uma resposta",
    price: "R$ 47",
    note: "pagamento único",
    desc: "Para quem tem uma dúvida pontual e precisa de clareza imediata. Leitura com 3 cartas, entregue por escrito.",
    features: [
      { text: "Tiragem de 3 cartas", ok: true },
      { text: "1 pergunta ou tema", ok: true },
      { text: "Entrega por escrito (texto)", ok: true },
      { text: "Prazo: até 24 horas", ok: true },
      { text: "Áudio explicativo", ok: false },
      { text: "Tiragem completa (10 cartas)", ok: false },
      { text: "Revisão ou dúvidas pós-leitura", ok: false },
    ],
    featured: false,
    cta: "Agendar Leitura Rápida",
    mpLink: "#",
  },
  {
    symbol: "✦",
    name: "Ritual Completo",
    tagline: "A leitura mais escolhida",
    price: "R$ 127",
    note: "pagamento único",
    desc: "Leitura aprofundada com tiragem completa, áudio explicativo e espaço para dúvidas. Ideal para momentos de virada.",
    features: [
      { text: "Tiragem de 10 cartas (Cruz Celta)", ok: true },
      { text: "Até 3 perguntas ou temas", ok: true },
      { text: "Entrega por escrito (texto detalhado)", ok: true },
      { text: "Áudio explicativo (15–20 min)", ok: true },
      { text: "Prazo: até 48 horas", ok: true },
      { text: "1 rodada de dúvidas pós-leitura", ok: true },
      { text: "Sessão ao vivo (videochamada)", ok: false },
    ],
    featured: true,
    badge: "Mais Escolhido",
    cta: "Agendar Ritual Completo",
    mpLink: "#",
  },
  {
    symbol: "☿",
    name: "Sessão ao Vivo",
    tagline: "Presença total, em tempo real",
    price: "R$ 247",
    note: "pagamento único",
    desc: "Sessão de 60 minutos por videochamada. Você faz perguntas em tempo real, as cartas respondem ao vivo.",
    features: [
      { text: "Sessão ao vivo por videochamada (60 min)", ok: true },
      { text: "Perguntas ilimitadas durante a sessão", ok: true },
      { text: "Gravação da sessão disponível", ok: true },
      { text: "Resumo escrito pós-sessão", ok: true },
      { text: "Prazo: agendamento em até 3 dias", ok: true },
      { text: "Acompanhamento mensal", ok: true },
      { text: "Tiragem adicional de cartas pós-sessão", ok: true },
    ],
    featured: false,
    cta: "Agendar Sessão ao Vivo",
    mpLink: "#",
  },
];

function RitualCard({ r, i }: { r: Ritual; i: number }) {
  const handleBuy = () => {
    if (r.mpLink === "#") {
      toast("Em breve disponível", {
        description: "Configure o link do Mercado Pago em PricingSection.tsx.",
        icon: "✦",
      });
    } else {
      window.open(r.mpLink, "_blank");
    }
  };

  return (
    <motion.div
      className={`relative flex flex-col ${r.featured ? "esoteric-card-featured" : "esoteric-card"}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: i * 0.12 }}
    >
      {/* Badge */}
      {r.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-void font-body font-semibold text-[10px] uppercase tracking-widest px-4 py-1 whitespace-nowrap">
          {r.badge}
        </div>
      )}

      {/* Header */}
      <div className={`p-6 pb-5 border-b ${r.featured ? "border-gold-dim/40" : "border-surface"}`}>
        <div className="text-2xl text-gold mb-2">{r.symbol}</div>
        <div className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke mb-1">{r.tagline}</div>
        <h3 className="font-display text-xl text-parchment mb-4">{r.name}</h3>
        <div className="flex items-baseline gap-1.5">
          <span className="font-display text-3xl text-gold">{r.price}</span>
        </div>
        <div className="font-body text-[10px] uppercase tracking-widest text-smoke/50 mt-0.5">{r.note}</div>
      </div>

      {/* Description */}
      <div className="px-6 pt-4 pb-3">
        <p className="font-body text-sm text-smoke leading-relaxed">{r.desc}</p>
      </div>

      {/* Features */}
      <div className="px-6 pb-5 flex-1">
        <div className="space-y-2 mt-2">
          {r.features.map((f, j) => (
            <div key={j} className="flex items-start gap-2.5">
              {f.ok
                ? <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                : <X size={13} className="text-smoke/30 mt-0.5 shrink-0" strokeWidth={2} />
              }
              <span className={`font-body text-sm leading-snug ${f.ok ? "text-smoke" : "text-smoke/30 line-through"}`}>
                {f.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <button
          onClick={handleBuy}
          className={`w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${
            r.featured
              ? "bg-gold text-void hover:bg-gold/90 glow-gold-sm"
              : "bg-transparent border border-gold-dim text-gold hover:border-gold hover:bg-gold/8"
          }`}
        >
          {r.cta}
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
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">✦ Escolha seu ritual</p>
          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-3">
            Três caminhos, uma mesma clareza
          </h2>
          <p className="font-body text-sm text-smoke max-w-md mx-auto leading-relaxed">
            Veja exatamente o que está incluso em cada leitura antes de decidir. Sem surpresas.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto items-start">
          {rituals.map((r, i) => (
            <RitualCard key={r.name} r={r} i={i} />
          ))}
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
            <img src={CARDS_IMG} alt="Cartas de tarot sobre veludo" className="w-full h-40 object-cover object-center opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/80 to-transparent" />
            <p className="absolute bottom-3 left-0 right-0 text-center font-body text-[10px] uppercase tracking-[0.25em] text-gold-dim">
              Pix · Cartão · Boleto
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
