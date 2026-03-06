/**
 * Footer Section — Minimal Dark Footer
 * Glassmorphism background with contact and legal links.
 */

import { Mail } from "lucide-react";

const NAVIGATION_LINKS = [
  { label: "Jogos e preços", href: "#rituais" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Depoimentos", href: "#depoimentos" },
];

const LEGAL_LINKS = [
  { label: "Política de Privacidade", href: "#privacidade" },
  { label: "Termos de Uso", href: "#termos" },
];

export default function FooterSection() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="glass-panel-strong rounded-none border-t border-gold/10">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-display text-lg text-parchment tracking-widest hover:text-gold transition-colors"
            >
              ☽ Tarot da Liz
            </a>
            <p className="font-body text-xs text-smoke/60 mt-2 leading-relaxed max-w-xs">
              Leituras de tarot online com clareza, profundidade e propósito.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke/40 mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-xs text-smoke/60 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.2em] text-smoke/40 mb-3">
              Contato
            </p>
            <a
              href="mailto:contato@tarotdaliz.com.br"
              className="flex items-center gap-2 font-body text-xs text-smoke/60 hover:text-gold transition-colors mb-2"
            >
              <Mail size={13} />
              contato@tarotdaliz.com.br
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-xs text-smoke/60 hover:text-gold transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3 h-3 fill-current shrink-0"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              (11) 99999-9999
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-[10px] text-smoke/30">
            &copy; {year} Tarot da Liz. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[10px] text-smoke/30 hover:text-smoke/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
