/**
 * MandalaCard — Immersive ritual card with click-to-reveal interaction
 * Displays mandala artwork initially (full, uncut), reveals product details on click.
 * Applies top-design principles: dramatic imagery, intentional motion, atmospheric depth.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, ChevronUp } from "lucide-react";

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
  onExpand,
}: {
  imageUrl: string;
  onExpand: () => void;
}) {
  return (
    <motion.div
      key="collapsed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onExpand}
      className="relative cursor-pointer group h-full"
    >
      <div className="relative w-full h-full overflow-hidden esoteric-card flex items-center justify-center bg-void">
        <img
          src={imageUrl}
          alt="Mandala"
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-gold-dim mb-2">
              Clique para descobrir
            </p>
            <ChevronUp
              size={24}
              className="text-gold mx-auto animate-bounce"
            />
          </div>
        </motion.div>
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
}: {
  ritualName: string;
  tagline: string;
  price: string;
  deliveryNote: string;
  description: string;
  features: Feature[];
  ctaLabel: string;
  mercadoPagoUrl: string;
  onPaymentClick: (url: string) => void;
  onCollapse: () => void;
}) {
  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="esoteric-card flex flex-col h-full"
    >
      <button
        onClick={onCollapse}
        className="absolute top-4 right-4 z-10 p-2 rounded hover:bg-gold/10 transition-colors"
        aria-label="Fechar detalhes"
      >
        <ChevronUp size={20} className="text-gold rotate-180" />
      </button>

      <div className="p-6 pb-5 border-b border-gold-dim/40">
        <div className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke mb-1">
          {tagline}
        </div>
        <h3 className="font-display text-xl text-parchment mb-4">
          {ritualName}
        </h3>
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="font-display text-3xl text-gold">{price}</span>
        </div>
        <div className="font-body text-[10px] uppercase tracking-widest text-smoke/50">
          {deliveryNote}
        </div>
      </div>

      <div className="px-6 pt-4 pb-3">
        <p className="font-body text-sm text-smoke leading-relaxed">
          {description}
        </p>
      </div>

      <div className="px-6 pb-5 flex-1">
        <div className="space-y-2 mt-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>

      <div className="p-6 pt-0">
        <button
          onClick={() => onPaymentClick(mercadoPagoUrl)}
          className="w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 bg-gold text-void hover:bg-gold/90 glow-gold-sm"
        >
          {ctaLabel}
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

export default function MandalaCard({
  mandalaName,
  imageUrl,
  ritualName,
  tagline,
  price,
  deliveryNote,
  description,
  features,
  ctaLabel,
  mercadoPagoUrl,
  onPaymentClick,
}: MandalaCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePaymentClick = () => {
    onPaymentClick(mercadoPagoUrl);
  };

  return (
    <motion.div
      className="relative h-full"
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <CollapsedView imageUrl={imageUrl} onExpand={() => setIsExpanded(true)} />
        ) : (
          <ExpandedView
            ritualName={ritualName}
            tagline={tagline}
            price={price}
            deliveryNote={deliveryNote}
            description={description}
            features={features}
            ctaLabel={ctaLabel}
            mercadoPagoUrl={mercadoPagoUrl}
            onPaymentClick={handlePaymentClick}
            onCollapse={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
