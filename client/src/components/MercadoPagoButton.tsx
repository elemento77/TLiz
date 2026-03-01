/**
 * MercadoPagoButton — Reusable payment button component
 *
 * HOW TO CONFIGURE:
 * 1. Log in to your Mercado Pago account at https://www.mercadopago.com.br/
 * 2. Go to "Cobranças" → "Link de Pagamento" and create a payment link for each plan
 * 3. Replace the `mpLink` prop values in PricingSection.tsx with your real payment links
 * 4. The button will redirect the user directly to the Mercado Pago checkout page
 *
 * Example link format: https://mpago.la/xxxxxxx
 */

import { CreditCard, Shield } from "lucide-react";

interface MercadoPagoButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function MercadoPagoButton({
  href,
  label,
  variant = "primary",
  className = "",
}: MercadoPagoButtonProps) {
  const isPlaceholder = href === "#" || href === "";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isPlaceholder) {
      e.preventDefault();
      // In production, replace href with real Mercado Pago link
      alert(
        "Configure o link do Mercado Pago em PricingSection.tsx para ativar o pagamento."
      );
    }
  };

  return (
    <div className={className}>
      <a
        href={isPlaceholder ? "#" : href}
        target={isPlaceholder ? "_self" : "_blank"}
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`w-full brutal-btn py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-2 ${
          variant === "primary"
            ? "bg-burnt-orange text-white"
            : "bg-charcoal text-cream"
        }`}
      >
        <CreditCard size={18} />
        {label}
      </a>

      {/* Mercado Pago trust indicator */}
      <div className="flex items-center justify-center gap-2 mt-3">
        <Shield size={14} className="text-forest-green" />
        <span className="font-body text-xs text-charcoal/50">
          Pagamento seguro via{" "}
          <span className="font-semibold text-charcoal/70">Mercado Pago</span>
        </span>
      </div>

      {/* Payment methods */}
      <div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
        {["Pix", "Crédito", "Débito", "Boleto"].map((method) => (
          <span
            key={method}
            className="font-display text-[10px] font-medium uppercase tracking-wider text-charcoal/40 border border-charcoal/20 px-2 py-0.5"
          >
            {method}
          </span>
        ))}
      </div>
    </div>
  );
}
