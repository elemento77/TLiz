/**
 * Navbar — Esoteric dark theme
 * Minimal, elegant, dark background with gold accents
 */

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Rituais", href: "#rituais" },
    { label: "Dúvidas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-void/95 backdrop-blur-sm border-b border-gold-dim">
      <div className="container flex items-center justify-between h-14">
        {/* Brand */}
        <a href="#" className="font-display text-lg text-parchment tracking-widest hover:text-gold transition-colors">
          ☽ Tarot da Luna
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="font-body text-xs uppercase tracking-widest text-smoke hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#rituais" className="btn-gold text-xs px-5 py-2">
            Agendar Leitura
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-smoke hover:text-gold transition-colors p-1">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-void border-t border-surface">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="block font-body text-xs uppercase tracking-widest text-smoke hover:text-gold px-5 py-3 border-b border-surface/50 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="p-4">
            <a href="#rituais" onClick={() => setOpen(false)} className="btn-gold w-full text-xs py-3 block text-center">
              Agendar Leitura
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
