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
    symbol: "✧",
    name: "Pergunta Única",
    tagline: "Áudio ou Texto",
    price: "R$ 60",
    note: "com acessibilidade",
    desc: "Ideal para uma dúvida urgente e pontual que precisa de clareza imediata.",
    features: [
      { text: "1 pergunta ou tema", ok: true },
      { text: "Entrega em áudio ou texto", ok: true },
      { text: "Clareza imediata e pontual", ok: true },
      { text: "Análise mais ampla", ok: false },
      { text: "Sessão ao vivo", ok: false },
    ],
    featured: false,
    cta: "Agendar Pergunta",
    mpLink: "https://mpago.la/2dAKkry",
  },
  {
    symbol: "✦",
    name: "Combo 3 Perguntas",
    tagline: "Visão mais completa",
    price: "R$ 130",
    note: "respostas em PDF",
    desc: "Uma análise mais ampla para situações com mais de um desdobramento, permitindo uma visão mais completa do cenário e dos próximos passos.",
    features: [
      { text: "Até 3 perguntas ou desdobramentos", ok: true },
      { text: "Entrega de PDF detalhado", ok: true },
      { text: "Visão abrangente do cenário", ok: true },
      { text: "Orientações dos próximos passos", ok: true },
      { text: "Sessão ao vivo", ok: false },
    ],
    featured: false,
    cta: "Agendar Combo",
    mpLink: "#",
  },
  {
    symbol: "☿",
    name: "Sessão Estratégica",
    tagline: "Profundo e transformador",
    price: "R$ 197",
    note: "1h por vídeo",
    desc: "Não é apenas uma leitura, é um alinhamento completo. Mergulhamos na sua situação com foco total em clareza e estratégia.",
    features: [
      { text: "Sessão de 1h ao vivo por WhatsApp", ok: true },
      { text: "Análise detalhada e investigação de áreas", ok: true },
      { text: "Plano de Ação de 7 Dias (PDF)", ok: true },
      { text: "Bônus: Arcano Regente Pessoal (PDF)", ok: true },
    ],
    featured: true,
    badge: "Mais Buscado",
    cta: "Agendar Sessão",
    mpLink: "#",
  },
  {
    symbol: "☉",
    name: "Mandala Anual",
    tagline: "Mapa dos próximos 12 meses",
    price: "R$ 247",
    note: "PDF + Notas explicativas",
    desc: "Um mapa estratégico. A Mandala revela as energias de cada mês, para planejar seu ano com clareza, consciência e alinhamento.",
    features: [
      { text: "Previsões mês a mês", ok: true },
      { text: "Identificação de oportunidades", ok: true },
      { text: "Reconhecer pontos de atenção", ok: true },
      { text: "Bônus: Arcano Regente Pessoal", ok: true },
    ],
    featured: false,
    cta: "Fazer Mandala",
    mpLink: "#",
  },
  {
    symbol: "☾",
    name: "Jogo das Sombras",
    tagline: "Desperte sua Força Interior",
    price: "R$ 297",
    note: "90 min por vídeo",
    desc: "Imersão profunda sob a vibração de Lilith para confrontar padrões ocultos e revelar a força que já existe dentro de você.",
    features: [
      { text: "Sessão de 90min ao vivo (WhatsApp)", ok: true },
      { text: "Identificar padrões e bloqueios", ok: true },
      { text: "Plano estratégico de 7 dias", ok: true },
      { text: "Bônus: Arcano Regente Pessoal", ok: true },
    ],
    featured: true,
    badge: "Imersão Profunda",
    cta: "Agendar Jogo",
    mpLink: "#",
  }
];

function RitualCard({ r, i }: { r: Ritual; i: number }) {
  const handleBuy = () => {
    if (r.mpLink === "#") {
      toast("Em breve disponível", {
        description: "Estamos configurando este serviço. Tente outro ou entre em contato pelo WhatsApp.",
        icon: "✦",
      });
    } else {
      // Open MP payment in a new tab
      window.open(r.mpLink, "_blank");
      // Redirect current tab to success page so WhatsApp button is ready
      window.location.href = import.meta.env.BASE_URL + "sucesso";
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
          className={`w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 ${r.featured
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
          <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">✦ Explorar</p>
          <h2 className="font-display text-3xl md:text-4xl text-parchment mb-3">
            Modalidades de Jogo
          </h2>
          <p className="font-body text-sm text-smoke max-w-md mx-auto leading-relaxed">
            Escolha o formato ideal para o seu momento e agende sua leitura.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto items-start justify-center">
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
              Pix · Cartão
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
