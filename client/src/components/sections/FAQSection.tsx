/**
 * FAQ Section — Neo-Brutalist
 * Accordion-style FAQ to eliminate objections and reduce support messages
 * Focused on breaking purchase barriers
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "O que está incluso em cada plano?",
    answer:
      "Cada plano tem uma lista detalhada de itens inclusos e não inclusos logo na tabela de preços acima. Você pode ver exatamente o que recebe antes de comprar — sem surpresas. Os ícones verdes (✔) indicam o que está incluso e os vermelhos (✘) o que não está.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "O pagamento é feito de forma 100% segura via Mercado Pago. Você pode pagar com Pix (aprovação imediata), cartão de crédito (parcelamento disponível), cartão de débito ou boleto bancário. Após a confirmação do pagamento, você receberá um e-mail com os próximos passos.",
  },
  {
    question: "Posso parcelar no cartão?",
    answer:
      "Sim! Aceitamos parcelamento em até 12x no cartão de crédito via Mercado Pago. O parcelamento está sujeito à análise da operadora do seu cartão. Para pagamentos via Pix ou boleto, o valor é à vista com desconto.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo varia conforme o plano escolhido: Essencial (até 5 dias úteis), Profissional (até 7 dias úteis) e Premium (até 10 dias úteis). O prazo começa a contar após a confirmação do pagamento e o envio das informações necessárias.",
  },
  {
    question: "Posso pedir reembolso?",
    answer:
      "Sim. Oferecemos garantia de 7 dias corridos após a entrega do serviço. Se você não estiver satisfeito por qualquer motivo, basta entrar em contato e processaremos o reembolso integral. Sem burocracia.",
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer:
      "Não. Você não precisa saber nada de tecnologia. Nós cuidamos de tudo. Você só precisa nos enviar as informações sobre o seu negócio (texto, fotos, etc.) e nós fazemos o resto. O Plano Premium ainda inclui 1 hora de treinamento para você aprender a usar o site.",
  },
  {
    question: "E se eu quiser algo que não está no plano?",
    answer:
      "Sem problema! Entre em contato conosco antes de comprar e podemos montar um pacote personalizado para as suas necessidades. Mas lembre-se: a maioria dos clientes encontra tudo o que precisa no Plano Profissional.",
  },
  {
    question: "O site fica no meu nome?",
    answer:
      "Sim, 100%. Após a entrega, o site, o domínio e todos os arquivos são seus. Você tem total controle e propriedade sobre tudo que foi criado.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="brutal-border bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.07 }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-charcoal/5 transition-colors"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-base text-charcoal leading-snug">
          {faq.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 flex items-center justify-center brutal-border-thin transition-colors ${
            open ? "bg-burnt-orange text-white border-burnt-orange" : "bg-white text-charcoal"
          }`}
        >
          {open ? <Minus size={16} strokeWidth={3} /> : <Plus size={16} strokeWidth={3} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t-2 border-charcoal/10 pt-4">
              <p className="font-body text-sm text-charcoal/70 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 border-t-3 border-charcoal">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: heading */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block brutal-border-thin bg-white px-4 py-2 mb-4 brutal-shadow">
                <span className="font-display font-semibold text-xs uppercase tracking-widest text-burnt-orange">
                  Perguntas Frequentes
                </span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-4">
                Tire todas as suas dúvidas<span className="text-burnt-orange">.</span>
              </h2>
              <p className="font-body text-charcoal/60 leading-relaxed mb-6">
                Reunimos as perguntas mais comuns para que você possa decidir com segurança, sem precisar entrar em contato.
              </p>

              {/* Still have questions? */}
              <div className="brutal-border bg-warm-gray p-5 brutal-shadow">
                <p className="font-display font-semibold text-sm text-charcoal mb-3">
                  Ainda tem dúvidas?
                </p>
                <p className="font-body text-xs text-charcoal/60 mb-4">
                  Nossa equipe responde em menos de 2 horas nos dias úteis.
                </p>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brutal-btn bg-forest-green text-white px-4 py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: FAQ accordion */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
