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
    answer: (
      <>
        Após o pagamento, você envia sua pergunta ou tema pelo WhatsApp.
        <br />
        Realizo a tiragem e envio a interpretação completa, clara e detalhada,
        sem termos confusos, dentro do prazo da modalidade escolhida.
      </>
    ),
  },
  {
    question: "Preciso acreditar em Tarot para funcionar?",
    answer: (
      <>
        Não é necessário acreditar. O Tarot funciona como uma ferramenta
        simbólica de reflexão e autoconhecimento.
        <br />
        Muitas pessoas chegam com curiosidade ou até ceticismo e acabam
        encontrando clareza sobre situações que estavam confusas ou travadas. O
        mais importante é estar aberto ao processo de reflexão.
      </>
    ),
  },
  {
    question: "Como é feito o pagamento?",
    answer: (
      <>
        O pagamento é 100% seguro via Mercado Pago.
        <br />
        Você pode pagar por:
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Pix (aprovação imediata)</li>
          <li>cartão de crédito</li>
          <li>cartão de débito</li>
        </ul>
        <p className="mt-2">
          Após a confirmação do pagamento, você recebe as instruções para enviar
          sua pergunta.
        </p>
      </>
    ),
  },
  {
    question: "Posso pedir reembolso?",
    answer: (
      <>
        Sim. Se a leitura ainda não foi realizada, o reembolso é integral.
        <br />
        Após a entrega da leitura, não há reembolso.
      </>
    ),
  },
  {
    question: "Qual a diferença entre as modalidades?",
    answer: (
      <div className="space-y-3">
        <div>
          <strong className="text-gold">Pergunta Única</strong>
          <p>Responde diretamente a uma dúvida pontual ou urgente.</p>
        </div>
        <div>
          <strong className="text-gold">Combo 3 Perguntas</strong>
          <p>Permite aprofundar uma situação com até três desdobramentos.</p>
        </div>
        <div>
          <strong className="text-gold">Sessão Estratégica e Jogo das Sombras</strong>
          <p>
            São atendimentos ao vivo, com uma análise mais profunda e
            investigativa.
          </p>
        </div>
        <div>
          <strong className="text-gold">Arcano Regente Pessoal</strong>
          <p>
            Revela o arquétipo que acompanha sua jornada e missão de vida, a
            partir da sua data de nascimento.
          </p>
        </div>
        <div>
          <strong className="text-gold">Mandala Semestral</strong>
          <p>Mostra as energias que influenciam os próximos 6 meses.</p>
        </div>
        <div>
          <strong className="text-gold">Mandala Anual</strong>
          <p>Apresenta um mapa simbólico dos próximos 12 meses.</p>
        </div>
        <p className="text-xs italic text-smoke/70">
          Cada modalidade possui seus detalhes descritos na tabela acima.
        </p>
      </div>
    ),
  },
  {
    question: "Posso fazer uma leitura sobre outra pessoa?",
    answer: (
      <>
        Não realizo leituras diretamente sobre terceiros.
        <br />
        A leitura pode abordar uma relação ou situação que envolve outra pessoa,
        mas sempre a partir da sua perspectiva.
        <br />
        Também não realizo leituras com intenção de manipular, prejudicar ou
        investigar a vida de terceiros.
      </>
    ),
  },
  {
    question: "Quanto tempo leva para receber a leitura?",
    answer: (
      <>
        O prazo varia conforme a modalidade escolhida e é informado após a
        confirmação do pagamento.
        <br />
        Sessões ao vivo são agendadas previamente, conforme disponibilidade de
        agenda.
      </>
    ),
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
            <div className="font-body text-sm text-smoke leading-relaxed pb-4 pr-6">
              {faq.answer}
            </div>
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
                href="https://wa.me/5511968673124"
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
