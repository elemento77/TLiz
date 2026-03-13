/**
 * MandalaCard — Immersive ritual card with click-to-reveal interaction
 * Desktop: Side-by-side composition with image and details
 * Mobile: Stacked layout (unchanged)
 * Glassmorphism styling for expanded view.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Shield, ChevronDown, Eye } from "lucide-react";

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
        <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
      ) : (
        <X size={13} className="text-smoke/30 mt-0.5 shrink-0" strokeWidth={2} />
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
      <div className="relative w-full h-full overflow-hidden esoteric-card flex items-center justify-center bg-void/40">
        <img
          src={imageUrl}
          alt="Mandala"
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Bottom gradient for hover text */}
        <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Hover reveal prompt */}
        <motion.div
          className="absolute bottom-6 left-0 right-0 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className="glass-panel px-4 py-2 flex items-center gap-2">
            <Eye size={14} className="text-gold" />
            <p className="font-body text-xs uppercase tracking-[0.15em] text-gold">
              Clique para descobrir
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ExpandedView({
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
  onCollapse,
}: {
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
  onCollapse: () => void;
}) {
  return (
    <motion.div
      key="expanded"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="esoteric-card-featured flex flex-col lg:flex-row h-full relative overflow-hidden"
    >
      {/* Close Button */}
      <button
        onClick={onCollapse}
        className="absolute top-4 right-4 z-10 p-2 rounded-md hover:bg-gold/10 transition-colors glass-panel lg:hidden"
        aria-label="Fechar detalhes"
      >
        <ChevronDown size={18} className="text-gold" />
      </button>

      {/* Image Section - Left side on desktop */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-8 border-r border-gold/10">
        <img
          src={imageUrl}
          alt={ritualName}
          className="w-full h-full object-contain max-h-96"
        />
      </div>

      {/* Content Section - Right side on desktop, full width on mobile */}
      <div className="flex flex-col h-full lg:w-1/2 p-6 lg:p-8">
        {/* Mobile Image - Only visible on mobile */}
        <div className="lg:hidden mb-6 -mx-6 -mt-6 mb-6">
          <img
            src={imageUrl}
            alt={ritualName}
            className="w-full h-64 object-contain"
          />
        </div>

        {/* Header */}
        <div className="mb-6">
          <div className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke mb-1">
            {tagline}
          </div>
          <h3 className="font-display text-2xl lg:text-3xl text-parchment mb-4 text-shadow-sm">
            {ritualName}
          </h3>
          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="font-display text-3xl lg:text-4xl text-gold text-shadow-sm">
              {price}
            </span>
          </div>
          <div className="font-body text-[10px] uppercase tracking-widest text-smoke/50">
            {deliveryNote}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <p className="font-body text-sm text-smoke leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="flex-1 mb-6">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <FeatureItem key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Footer - CTA and Security Badge */}
        <div className="border-t border-gold/15 pt-6">
          <button
            onClick={() => onPaymentClick(mercadoPagoUrl)}
            className="w-full py-3 font-body font-semibold text-xs uppercase tracking-widest transition-all duration-200 bg-gold text-void hover:bg-gold/90 glow-gold-sm rounded-md mb-3"
          >
            {ctaLabel}
          </button>
          <div className="flex items-center justify-center gap-1.5">
            <Shield size={11} className="text-smoke/40" />
            <span className="font-body text-[10px] text-smoke/40 uppercase tracking-wider">
              Pagamento seguro · Mercado Pago
            </span>
          </div>
        </div>

        {/* Close Button - Desktop only */}
        <button
          onClick={onCollapse}
          className="hidden lg:block absolute top-6 right-6 p-2 rounded-md hover:bg-gold/10 transition-colors glass-panel"
          aria-label="Fechar detalhes"
        >
          <ChevronDown size={18} className="text-gold" />
        </button>
      </div>
    </motion.div>
  );
}

export default function MandalaCard({
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

  return (
    <motion.div
      className="relative h-full"
      layout
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <CollapsedView
            imageUrl={imageUrl}
            onExpand={() => setIsExpanded(true)}
          />
        ) : (
          <ExpandedView
            imageUrl={imageUrl}
            ritualName={ritualName}
            tagline={tagline}
            price={price}
            deliveryNote={deliveryNote}
            description={description}
            features={features}
            ctaLabel={ctaLabel}
            mercadoPagoUrl={mercadoPagoUrl}
            onPaymentClick={() => onPaymentClick(mercadoPagoUrl)}
            onCollapse={() => setIsExpanded(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
