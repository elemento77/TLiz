/**
 * Navbar — Neo-Brutalist sticky navigation
 * Fixed top bar with bold brand name and anchor links
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { label: "Planos", href: "#planos" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-3 border-charcoal">
      <div className="container flex items-center justify-between h-16">
        {/* Brand */}
        <a
          href="#"
          className="font-display font-bold text-xl tracking-tight text-charcoal hover:text-burnt-orange transition-colors"
        >
          SuaMarca<span className="text-burnt-orange">.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display font-medium text-sm uppercase tracking-wider px-4 py-2 text-charcoal hover:bg-charcoal hover:text-cream transition-all duration-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#planos"
            className="ml-3 brutal-btn bg-burnt-orange text-white px-5 py-2 text-sm uppercase tracking-wider"
          >
            Comprar Agora
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden brutal-border-thin p-2 bg-white"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-3 border-charcoal bg-cream">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display font-medium text-sm uppercase tracking-wider px-4 py-3 text-charcoal hover:bg-charcoal hover:text-cream border-b-2 border-charcoal/10 transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#planos"
              onClick={() => setMobileOpen(false)}
              className="block text-center brutal-btn bg-burnt-orange text-white px-5 py-3 text-sm uppercase tracking-wider"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
