/**
 * Navbar — Glassmorphism dark theme with gold accents
 * Fixed top navigation with backdrop blur for immersive feel.
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Consultas", href: "#rituais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel-strong border-b border-gold/10 rounded-none">
      <div className="container flex items-center justify-between h-14">
        <a
          href="#"
          className="font-display text-lg text-parchment tracking-widest hover:text-gold transition-colors text-shadow-sm"
        >
          ☽ Tarot da Liz
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs uppercase tracking-widest text-smoke hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#rituais" className="btn-gold text-xs px-5 py-2">
            Agendar Leitura
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-smoke hover:text-gold transition-colors p-1"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="md:hidden glass-panel-strong border-t border-gold/10 rounded-none">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="block font-body text-xs uppercase tracking-widest text-smoke hover:text-gold px-5 py-3 border-b border-gold/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="#rituais"
              onClick={closeMenu}
              className="btn-gold w-full text-xs py-3 block text-center"
            >
              Agendar Leitura
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
