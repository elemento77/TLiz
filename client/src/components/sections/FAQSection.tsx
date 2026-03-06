/**
 * FAQ Section — Glassmorphism Accordion
 * Dark theme with gold accents, glass panels for legibility.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "Como funciona a leitura por escrito ou áudio?",
    answer:
      "Após o pagamento, você me envia sua pergunta ou tema por WhatsApp. Realizo a tiragem e envio a interpretação completa — detalhada, clara e sem termos confusos — dentro do prazo da modalidade escolhida.",
  },
  {
    question: "Preciso acreditar em tarot para funcionar?",
    answer:
      "Não. O tarot funciona como uma ferramenta de reflexão e autoconhecimento. Muitos clientes chegam céticos e saem com clareza sobre situações que estavam travadas. O que importa é estar aberto à leitura.",
  },
  {
    question: "Como é feito o pagamento?",
    answer:
      "O pagamento é 100% seguro via Mercado Pago. Você pode pagar com Pix (aprovação imediata), cartão de crédito ou débito. Após a confirmação, você recebe as instruções para enviar sua pergunta.",
  },
  {
    question: "Posso pedir reembolso?",
    answer:
      "Sim. Se a leitura ainda não foi realizada, o reembolso é integral. Após a entrega, não há reembolso — mas me comprometo a responder dúvidas sobre a leitura sem custo adicional.",
  },
  {
    question: "Qual a diferença entre as modalidades?",
    answer:
      "A 'Pergunta Única' responde diretamente a uma dúvida urgente. O 'Combo 3 Perguntas' aprofunda um cenário com até 3 desdobramentos. A 'Sessão Estratégica' e o 'Jogo das Sombras' são acompanhamentos ao vivo de imersão profunda. O 'Arcano Regente Pessoal' revela o arquétipo que guia sua missão de vida a partir da sua data de nascimento. A 'Mandala Semestral' mapeia as energias dos próximos 6 meses, e a 'Mandala Anual' faz o mesmo para os 12 meses. Cada modalidade tem seus detalhes listados na tabela acima.",
  },
  {
    question: "Posso fazer uma leitura sobre outra pessoa?",
    answer:
      "Sim, desde que seja para fins de autoconhecimento — por exemplo, entender uma relação ou situação envolvendo alguém. Não realizo leituras com intenção de manipular ou prejudicar terceiros.",
  },
  {
    question: "Quanto tempo leva para receber a leitura?",
    answer:
      "O prazo varia conforme a modalidade escolhida e é informado após a confirmação do pagamento. Sessões ao vivo são agendadas previamente conforme disponibilidade de agenda.",
  },
];

function AccordionItem({
  faq,
  index,
}: {
  faq: (typeof FAQ_ITEMS)[0];
  index: number;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border-b border-gold/8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left group"
      >
        <span className="font-body text-sm text-parchment/90 group-hover:text-gold transition-colors leading-snug">
          {faq.question}
        </span>
        <span className="shrink-0 text-gold-dim group-hover:text-gold transition-colors">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-smoke leading-relaxed pb-4 pr-6">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-gold-dim mb-3">
                ✦ Dúvidas
              </p>
              <h2 className="font-display text-2xl md:text-3xl text-parchment mb-4 text-shadow-md">
                Perguntas frequentes
              </h2>
              <p className="font-body text-sm text-smoke leading-relaxed mb-8">
                Tudo o que você precisa saber antes de agendar sua leitura.
              </p>
            </motion.div>

            <div className="glass-panel p-5">
              <p className="font-display text-base text-parchment mb-2">
                Ainda tem dúvidas?
              </p>
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

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-6">
              {FAQ_ITEMS.map((faq, index) => (
                <AccordionItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
