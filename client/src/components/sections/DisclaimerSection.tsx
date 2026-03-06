/**
 * Disclaimer Section — Esoteric Tarot
 * Legal notice clarifying the symbolic, non-medical nature of tarot readings.
 */

import { motion } from "framer-motion";
import { Scale } from "lucide-react";

export default function DisclaimerSection() {
  return (
    <motion.section
      className="py-10 border-t border-surface"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        <div className="max-w-2xl mx-auto esoteric-card p-6 flex gap-4 items-start">
          <Scale size={18} className="text-gold-dim shrink-0 mt-0.5" />
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-gold-dim mb-1">
              Importante
            </p>
            <p className="font-body text-sm text-smoke leading-relaxed">
              A leitura de Tarot é uma ferramenta de autoconhecimento e reflexão
              simbólica. Não substitui tratamentos médicos, psicológicos ou
              psiquiátricos, podendo atuar como um complemento no processo de
              desenvolvimento pessoal.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
