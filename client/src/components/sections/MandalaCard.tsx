/**
 * MandalaCard — Immersive ritual card with click-to-reveal interaction
 * Design: Top-Design (Awwwards level) with dramatic typography and motion.
 * Clean-Code: Modular components, clear naming, and single responsibility.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, ChevronDown, Eye, Sparkles } from "lucide-react";

/* ─── Types ─── */

interface Feature {
  text: string;
  isIncluded: boolean;
}

interface MandalaCardProps {
  mandalaName: "annual" | "semestral";
  imageUrl: string;
  ritualName: string;
  tagline: string;
  price: string;
  deliveryNote: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  mercadoPagoUrl: string;
  onPaymentClick: (url: string) => void;
}

/* ─── Sub-Components ─── */

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className="flex items-start gap-3">
      {feature.isIncluded ? (
        <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
      ) : (
        <X size={14} className="text-smoke/30 mt-0.5 shrink-0" strokeWidth={2} />
      )}
      <span
        className={`font-body text-sm leading-relaxed ${
          feature.isIncluded ? "text-smoke" : "text-smoke/30 line-through"
        }`}
      >
        {feature.text}
      </span>
    </div>
  );
}

function CollapsedView({
  imageUrl,
  ritualName,
  onExpand,
}: {
  imageUrl: string;
  ritualName: string;
  onExpand: () => void;
}) {
  return (
    <motion.div
      key="collapsed"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onClick={onExpand}
      className="relative cursor-pointer group h-[400px] md:h-[500px] overflow-hidden rounded-xl border border-gold/10 bg-void/40"
    >
      <img
        src={imageUrl}
        alt={ritualName}
        className="w-full h-full object-contain p-8 md:p-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-2"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

      {/* Content Reveal */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 px-6">
        <motion.div 
          initial={{ y: 10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-center"
        >
          <h3 className="font-display text-3xl text-parchment mb-2 text-shadow-lg group-hover:text-gold transition-colors duration-300">
            {ritualName}
          </h3>
          <div className="flex items-center justify-center gap-2 text-gold/60 group-hover:text-gold transition-colors duration-300">
            <Eye size={14} />
            <span className="font-body text-[10px] uppercase tracking-[0.2em]">
              Toque para revelar o mapa
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Sparkle */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles size={20} className="text-gold animate-pulse" />
      </div>
    </motion.div>
  );
}

function ExpandedView({
  ritualName,
  tagline,
  price,
  deliveryNote,
  description,
  features,
  ctaLabel,
  mercadoPagoUrl,
  onPaymentClick,
  onCollapse,
}: Omit<MandalaCardProps, "imageUrl" | "mandalaName"> & { onCollapse: () => void }) {
  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="esoteric-card-featured flex flex-col h-full min-h-[400px] md:min-h-[500px] relative overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onCollapse();
        }}
        className="absolute top-6 right-6 z-20 p-3 rounded-full hover:bg-gold/10 transition-all duration-300 border border-gold/20 bg-void/40 group"
        aria-label="Fechar detalhes"
      >
        <ChevronDown size={20} className="text-gold group-hover:scale-110 transition-transform" />
      </button>

      <div className="flex flex-col h-full p-8 md:p-12">
        {/* Header Section */}
        <div className="mb-8">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <span className="font-body text-[10px] uppercase tracking-[0.3em] text-gold mb-2 block">
              ✦ {tagline}
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-parchment mb-4 leading-tight">
              {ritualName}
            </h3>
          </motion.div>
          
          <motion.div 
            className="flex items-baseline gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-display text-4xl text-gold">{price}</span>
            <span className="font-body text-[10px] uppercase tracking-widest text-smoke/50">
              {deliveryNote}
            </span>
          </motion.div>
        </div>

        {/* Body Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 flex-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="font-body text-base text-smoke leading-relaxed mb-6">
              {description}
            </p>
            <div className="hidden lg:block">
               <Shield size={16} className="text-gold/40 mb-2" />
               <p className="font-body text-[10px] text-smoke/40 uppercase tracking-widest">
                 Leitura estratégica e personalizada
               </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-body text-[10px] uppercase tracking-[0.2em] text-gold/60 mb-4">
              O que está incluído:
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => (
                <FeatureItem key={index} feature={feature} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center gap-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button
            onClick={() => onPaymentClick(mercadoPagoUrl)}
            className="btn-gold w-full sm:w-auto px-12 py-4 text-sm"
          >
            {ctaLabel}
          </button>
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-smoke/40" />
            <span className="font-body text-[10px] text-smoke/40 uppercase tracking-widest">
              Pagamento seguro via Mercado Pago
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ─── */

export default function MandalaCard(props: MandalaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative h-full min-h-[400px] md:min-h-[500px]">
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <CollapsedView
            key="collapsed"
            imageUrl={props.imageUrl}
            ritualName={props.ritualName}
            onExpand={() => setIsExpanded(true)}
          />
        ) : (
          <ExpandedView
            key="expanded"
            {...props}
            onCollapse={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
