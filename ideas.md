# Brainstorm de Design — Site de Conversão de Vendas

<response>
<text>

## Ideia 1: "Brutalist Commerce" — Brutalismo Digital Comercial

**Design Movement:** Neo-Brutalismo Web com influência de design editorial europeu. Tipografia forte, bordas duras, sombras sólidas e contraste extremo.

**Core Principles:**
1. Contraste radical entre elementos — preto, branco e uma cor de destaque vibrante (laranja-queimado)
2. Tipografia como elemento arquitetônico — os textos são os protagonistas visuais
3. Hierarquia implacável — cada seção tem um propósito claro e inescapável
4. Zero decoração supérflua — cada pixel serve à conversão

**Color Philosophy:**
- Fundo: Off-white quente (#FAF7F2) para reduzir fadiga visual
- Texto principal: Preto profundo (#1A1A1A) para máxima legibilidade
- Destaque/CTA: Laranja queimado (#E8590C) — urgência sem agressividade
- Secundário: Verde escuro (#2B8A3E) para "inclusos" e confirmações
- Negativo: Vermelho suave (#E03131) para "não inclusos"

**Layout Paradigm:** Layout assimétrico com blocos empilhados de largura variável. Cards de preço com bordas grossas (3px) e sombras sólidas offset (4px 4px). Seções separadas por linhas horizontais grossas, não por espaço vazio.

**Signature Elements:**
1. Sombras sólidas (drop-shadow hard) nos cards de preço — parecem "flutuar" sobre a página
2. Badges rotacionados (-3deg) para selos como "Mais Vendido" e "Oferta Limitada"
3. Tipografia display em tamanho oversized no hero (clamp entre 3rem e 6rem)

**Interaction Philosophy:** Hover states com transição de cor de fundo completa nos cards. Botões que "afundam" ao clicar (removendo a sombra). Scroll suave entre seções com ancoragem.

**Animation:** Entrada dos cards de preço com stagger (um após o outro, 150ms de delay). Badges pulsam sutilmente. Números de preço contam de 0 até o valor final.

**Typography System:**
- Display/Hero: "Space Grotesk" Bold (700) — geométrica, moderna, impactante
- Body: "DM Sans" Regular (400) / Medium (500) — legível, amigável
- Preços: "Space Grotesk" Bold em tamanho XXL
- Labels/Tags: "DM Sans" Medium uppercase com letter-spacing expandido

</text>
<probability>0.07</probability>
</response>

<response>
<text>

## Ideia 2: "Warm Minimalism" — Minimalismo Acolhedor

**Design Movement:** Minimalismo escandinavo com influência de design japonês (Wabi-Sabi). Espaço generoso, tons terrosos, formas orgânicas suaves.

**Core Principles:**
1. Respiração visual — espaçamento generoso entre elementos cria sensação de premium
2. Tons naturais que transmitem confiança e profissionalismo sem frieza
3. Micro-detalhes que revelam cuidado artesanal (bordas levemente arredondadas, gradientes sutis)
4. Fluxo vertical natural — o olho é guiado sem esforço de cima para baixo

**Color Philosophy:**
- Fundo: Creme suave (#FEFCF6) — acolhedor, não clínico
- Texto: Carvão quente (#2C2A25) — preto suavizado para conforto
- Primário/CTA: Terracota (#C2410C) — quente, confiável, ação
- Acento positivo: Verde salvia (#5C7C5E) — natural, "sim"
- Acento negativo: Rosa antigo (#BE4B5B) — suave mas claro
- Superfícies: Bege claro (#F5F0E8) para cards

**Layout Paradigm:** Layout em coluna central com max-width de 1200px. Cards de preço em grid de 3 colunas com o card central elevado (translateY -20px e escala 1.05). Seções com padding vertical generoso (120px+). Divisores orgânicos entre seções (SVG wave sutil).

**Signature Elements:**
1. Ícones desenhados à mão (hand-drawn style) para os itens inclusos/não inclusos
2. Card central com borda gradiente sutil (terracota para dourado)
3. Micro-ilustrações orgânicas como separadores de seção

**Interaction Philosophy:** Transições lentas e suaves (300-400ms ease). Hover nos cards eleva com sombra expandida. Botões com fill animation da esquerda para direita no hover.

**Animation:** Fade-in + slide-up suave ao entrar no viewport (IntersectionObserver). Contadores de preço com easing natural. Accordion do FAQ com spring animation.

**Typography System:**
- Display: "Playfair Display" Bold — elegância editorial com serifa
- Body: "Source Sans 3" Regular/Medium — humanista, excelente legibilidade
- Preços: "Playfair Display" Bold em tamanho grande
- Labels: "Source Sans 3" Semibold uppercase

</text>
<probability>0.05</probability>
</response>

<response>
<text>

## Ideia 3: "Dark Conversion Engine" — Motor de Conversão em Modo Escuro

**Design Movement:** Dark UI inspirado em dashboards SaaS premium (Linear, Vercel). Fundo escuro com acentos luminosos que guiam o olhar diretamente para os CTAs.

**Core Principles:**
1. Fundo escuro cria contraste natural com botões e preços — os CTAs "brilham"
2. Hierarquia por luminosidade — elementos mais importantes são mais claros/brilhantes
3. Bordas sutis e glassmorphism leve criam profundidade sem peso visual
4. Gradientes controlados como ferramenta de direcionamento do olhar

**Color Philosophy:**
- Fundo: Azul-escuro profundo (#0B1120) — sofisticado, não depressivo
- Superfícies: Slate escuro (#1E293B) com borda (#334155) — cards flutuantes
- Texto principal: Branco suave (#F1F5F9) — alto contraste sem brilho
- Texto secundário: Slate claro (#94A3B8)
- CTA primário: Gradiente verde-esmeralda (#10B981 → #059669) — "comprar"
- Destaque: Âmbar (#F59E0B) para badges e selos
- Negativo: Rosa (#FB7185) para "não inclusos"

**Layout Paradigm:** Full-width com seções alternando entre fundo base e fundo de superfície. Cards de preço com borda sutil brilhante (1px border com opacidade). Card destaque com borda gradiente animada (glow effect). Grid assimétrico no hero (texto 60% / visual 40%).

**Signature Elements:**
1. Glow effect sutil no card principal (box-shadow com cor do gradiente CTA)
2. Linhas de grid decorativas no fundo (como papel milimetrado sutil, opacidade 3%)
3. Dot pattern ou noise texture no background para profundidade

**Interaction Philosophy:** Hover com glow intensificado nos cards. Botões com shimmer effect (brilho que passa da esquerda para direita). Transições rápidas (200ms) para sensação de responsividade.

**Animation:** Cards entram com scale de 0.95 para 1 + fade. Preços com typewriter effect. Background com gradiente que se move lentamente (animated gradient mesh). FAQ items com slide-down suave.

**Typography System:**
- Display: "Cal Sans" ou "Geist" Bold — moderna, tech, limpa
- Body: "Geist" Regular/Medium — monoline, excelente em dark mode
- Preços: "Geist" Bold em tamanho XXL com letter-spacing tight
- Labels: "Geist" Medium com opacity reduzida

</text>
<probability>0.08</probability>
</response>
