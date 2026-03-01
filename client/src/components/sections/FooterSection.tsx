/**
 * Footer Section — Neo-Brutalist
 * Contact info, navigation, security badges, legal links
 */

import { Mail, Phone, Shield, Lock } from "lucide-react";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="border-t-3 border-charcoal bg-charcoal text-cream">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-bold text-2xl text-cream mb-3 inline-block">
              SuaMarca<span className="text-burnt-orange">.</span>
            </a>
            <p className="font-body text-cream/50 text-sm leading-relaxed max-w-sm mb-5">
              Plataforma de vendas online focada em clareza, simplicidade e alta conversão. 
              Sem enrolação, sem surpresas.
            </p>

            {/* Security badges */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 brutal-border border-cream/20 px-3 py-1.5 bg-white/5">
                <Shield size={14} className="text-forest-green" />
                <span className="font-display text-xs font-medium text-cream/70 uppercase tracking-wide">
                  SSL Seguro
                </span>
              </div>
              <div className="flex items-center gap-2 brutal-border border-cream/20 px-3 py-1.5 bg-white/5">
                <Lock size={14} className="text-forest-green" />
                <span className="font-display text-xs font-medium text-cream/70 uppercase tracking-wide">
                  Mercado Pago
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-cream/40 mb-4">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: "Planos e Preços", href: "#planos" },
                { label: "Perguntas Frequentes", href: "#faq" },
                { label: "Depoimentos", href: "#prova-social" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-cream/60 hover:text-burnt-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-widest text-cream/40 mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contato@suamarca.com.br"
                  className="flex items-center gap-2 font-body text-sm text-cream/60 hover:text-burnt-orange transition-colors"
                >
                  <Mail size={15} className="shrink-0" />
                  contato@suamarca.com.br
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-cream/60 hover:text-burnt-orange transition-colors"
                >
                  <Phone size={15} className="shrink-0" />
                  (11) 99999-9999
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-body text-xs text-cream/30 leading-relaxed">
                CNPJ: 00.000.000/0001-00
              </p>
              <p className="font-body text-xs text-cream/30 mt-1">
                Atendimento: Seg–Sex, 9h–18h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/30">
            © {currentYear} SuaMarca. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
              {[
                { label: "Política de Privacidade", href: "#privacidade" },
                { label: "Termos de Serviço", href: "#termos" },
              ].map((link) => (
                <a
                  key={link.label}
                href={link.href}
                className="font-body text-xs text-cream/30 hover:text-cream/60 transition-colors"
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
