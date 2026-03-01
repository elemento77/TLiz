/**
 * FAQ Section — Esoteric Tarot
 * Compact accordion, dark theme, gold accents.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Como funciona a leitura por escrito?",
    a: "Após o pagamento, você me envia sua pergunta ou tema por e-mail ou WhatsApp. Realizo a tiragem das cartas e envio a interpretação completa em texto — detalhada, clara e sem termos confusos — dentro do prazo do ritual escolhido.",
  },
  {
    q: "Preciso acreditar em tarot para funcionar?",
    a: "Não. O tarot funciona como uma ferramenta de reflexão e autoconhecimento. Muitos clientes chegam céticos e saem com clareza sobre situações que estavam travadas. O que importa é estar aberto à leitura.",
  },
  {
    q: "Como é feito o pagamento?",
    a: "O pagamento é 100% seguro via Mercado Pago. Você pode pagar com Pix (aprovação imediata), cartão de crédito, débito ou boleto. Após a confirmação, você recebe as instruções para enviar sua pergunta.",
  },
  {
    q: "Posso pedir reembolso?",
    a: "Sim. Se a leitura ainda não foi realizada, o reembolso é integral. Após a entrega, não há reembolso — mas me comprometo a responder dúvidas sobre a leitura sem custo adicional.",
  },
  {
    q: "Qual a diferença entre os rituais?",
    a: "A Leitura Rápida é para uma dúvida pontual com 3 cartas. O Ritual Completo é uma tiragem aprofundada com áudio. A Sessão ao Vivo é uma videochamada de 60 minutos onde você interage em tempo real. Cada um tem seus itens detalhados na tabela acima.",
  },
  {
    q: "Posso fazer uma leitura sobre outra pessoa?",
    a: "Sim, desde que seja para fins de autoconhecimento — por exemplo, entender uma relação ou situação envolvendo alguém. Não realizo leituras com intenção de manipular ou prejudicar terceiros.",
  },
  {
    q: "Quanto tempo leva para receber a leitura?",
    a: "Leitura Rápida: até 24h. Ritual Completo: até 48h. Sessão ao Vivo: agendada em até 3 dias úteis. Os prazos contam a partir da confirmação do pagamento e do recebimento da sua pergunta.",
  },
];

function Item({ faq, i }: { faq: (typeof faqs)[0]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="border-b border-surface"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="font-body text-sm text-parchment/90 group-hover:text-gold transition-colors leading-snug">
          {faq.q}
        </span>
        <span className="shrink-0 text-gold-dim group-hover:text-gold transition-colors">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-smoke leading-relaxed pb-4 pr-6">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16 border-t border-surface">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left */}
          <div className="lg:col-span-4">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">✦ Dúvidas</p>
            <h2 className="font-display text-2xl md:text-3xl text-parchment mb-4">
              Perguntas frequentes
            </h2>
            <p className="font-body text-sm text-smoke leading-relaxed mb-8">
              Tudo o que você precisa saber antes de agendar sua leitura.
            </p>
            <div className="esoteric-card p-5">
              <p className="font-display text-base text-parchment mb-2">Ainda tem dúvidas?</p>
              <p className="font-body text-xs text-smoke mb-4 leading-relaxed">
                Respondo em até 2h nos dias úteis.
              </p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs py-2.5 w-full block text-center"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            {faqs.map((f, i) => (
              <Item key={i} faq={f} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
