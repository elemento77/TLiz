# Guia de Manutenção do Site Tarot da Liz

Este guia foi criado para que você, Liz, possa gerenciar e atualizar seu site de forma autônoma, sem a necessidade de um desenvolvedor para cada pequena alteração. Ele cobre os aspectos mais comuns de manutenção, como iniciar o site, alterar textos e preços, e atualizar imagens.

## 1. Estrutura do Projeto

O site é construído com tecnologias modernas (React, Vite, TypeScript, TailwindCSS) para oferecer uma experiência rápida e responsiva. A estrutura principal que você precisará conhecer é:

*   `client/src/pages/`: Contém as páginas principais do site (Home, Feedback, etc.).
*   `client/src/components/sections/`: Contém as seções que compõem as páginas (Hero, Pricing, FAQ, etc.).
*   `client/src/components/`: Contém componentes menores e reutilizáveis (Navbar, MandalaCard, etc.).
*   `client/src/index.css`: Contém os estilos globais e as classes de utilidade do TailwindCSS.
*   `client/public/`: Onde as imagens e outros arquivos estáticos são armazenados.
*   `shared/const.ts`: Contém constantes e dados compartilhados, como a lista de rituais.

## 2. Como Rodar o Site Localmente (para Testes)

Para ver as alterações em tempo real no seu computador antes de publicá-las, você pode rodar o site localmente. Você precisará ter o `Node.js` e o `pnpm` instalados.

1.  **Abra o Terminal:** No seu computador, navegue até a pasta `TLiz` onde o site está salvo.
2.  **Instale as Dependências (apenas na primeira vez):**
    ```bash
    pnpm install
    ```
3.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    pnpm run dev
    ```
    Após executar este comando, o terminal mostrará um endereço (geralmente `http://localhost:3000/TLiz/` ou similar). Copie e cole este endereço no seu navegador para ver o site rodando localmente.

    *Para parar o servidor, pressione `Ctrl + C` no terminal.*

## 3. Como Alterar Textos e Preços dos Rituais

A maioria dos textos e preços dos rituais está centralizada no arquivo `shared/const.ts` e `client/src/components/sections/PricingSection.tsx`.

### Para Rituais Padrão (Pergunta Única, Combo 3 Perguntas, Arcano Regente Pessoal, Mandala Semestral):

1.  **Abra o arquivo `shared/const.ts`:**
    ```typescript
    // Exemplo de um ritual
    export const RITUALS: Ritual[] = [
      {
        name: "Pergunta Única",
        tagline: "Clareza imediata",
        symbol: "✨",
        price: "R$ 60",
        deliveryNote: "Áudio ou texto",
        description: "Ideal para uma dúvida urgente e pontual...",
        features: [
          { text: "Pergunta ou tema", isIncluded: true },
          { text: "Entrega em áudio ou texto", isIncluded: true },
          { text: "Clareza objetiva e pontual", isIncluded: true },
        ],
        mercadoPagoUrl: "#", // Link do Mercado Pago
      },
      // ... outros rituais
    ];
    ```
2.  **Edite os campos:** Você pode alterar `name`, `tagline`, `symbol`, `price`, `deliveryNote`, `description` e os `features` de cada ritual. Certifique-se de manter o formato `"Texto"` para strings e `true`/`false` para `isIncluded`.
3.  **Link do Mercado Pago:** Atualize o `mercadoPagoUrl` com o link de pagamento correto para cada produto. Se o link estiver como `"#"`, o botão exibirá a mensagem "Em breve disponível".

### Para o Ritual Premium (Jogo das Sombras):

O Jogo das Sombras é um caso especial e suas informações estão diretamente no `client/src/components/sections/PricingSection.tsx` para permitir um layout mais personalizado.

1.  **Abra o arquivo `client/src/components/sections/PricingSection.tsx`:**
2.  **Procure pela constante `PREMIUM_RITUAL`:**
    ```typescript
    const PREMIUM_RITUAL: Ritual = {
      name: "Jogo das Sombras",
      tagline: "Desperte sua força interior",
      symbol: "☾",
      price: "R$ 297",
      deliveryNote: "90 min por vídeo",
      description: "Imersão profunda sob a vibração de Lilith...",
      features: [
        { text: "Sessão de 90min ao vivo (WhatsApp)", isIncluded: true },
        // ... outras features
      ],
      mercadoPagoUrl: "#", // Link do Mercado Pago
      badge: "Premium",
    };
    ```
3.  **Edite os campos:** Assim como nos rituais padrão, você pode alterar os textos, preço e o `mercadoPagoUrl` aqui.

## 4. Como Alterar Textos de Outras Seções (Hero, FAQ, Disclaimer, Footer)

Os textos dessas seções estão diretamente nos seus respectivos arquivos de componente:

*   **HeroSection:** `client/src/components/sections/HeroSection.tsx`
*   **FAQSection:** `client/src/components/sections/FAQSection.tsx`
*   **DisclaimerSection:** `client/src/components/sections/DisclaimerSection.tsx`
*   **FooterSection:** `client/src/components/sections/FooterSection.tsx`

Abra o arquivo correspondente e localize o texto que deseja alterar. Tenha cuidado para não modificar a estrutura do código (tags HTML/JSX, classes CSS) ao editar o conteúdo.

## 5. Como Atualizar Imagens

As imagens do site são armazenadas na pasta `client/public/`.

### Para Imagens de Fundo (Desktop e Mobile):

1.  **Localize as imagens:** `bg-desktop.png` e `bg-mobile.png` na pasta `client/public/`.
2.  **Substitua as imagens:** Para atualizar, basta substituir esses arquivos por novas imagens com os **mesmos nomes** (`bg-desktop.png` e `bg-mobile.png`).
    *   **`bg-desktop.png`:** Deve ser uma imagem mais horizontal (paisagem), ideal para telas largas.
    *   **`bg-mobile.png`:** Deve ser uma imagem mais vertical (retrato), otimizada para celulares.
    *   **Importante:** Mantenha os nomes dos arquivos exatamente iguais para que o site as encontre.

### Para Imagens dos Cards de Mandala:

1.  **Localize as imagens:** `mandala-anual.png` e `mandala-semestral.png` na pasta `client/public/`.
2.  **Substitua as imagens:** Assim como nos fundos, substitua esses arquivos por novas imagens com os **mesmos nomes**.

## 6. Manutenção Básica e Boas Práticas

*   **Faça backups:** Antes de fazer grandes alterações, sempre faça uma cópia da pasta do projeto.
*   **Teste localmente:** Sempre use o comando `pnpm run dev` para testar suas alterações localmente antes de publicá-las.
*   **Cuidado ao editar código:** Se você não tem experiência com programação, evite alterar arquivos `.tsx` ou `.css` além do conteúdo de texto, para não quebrar o layout ou a funcionalidade do site.
*   **Limpe o cache:** Após fazer alterações e publicar o site, pode ser necessário limpar o cache do seu navegador (ou usar uma janela anônima) para ver as mudanças imediatamente.

## 7. Publicando as Alterações (Deploy)

O processo de publicação (deploy) do site geralmente é configurado para ser automático quando você envia as alterações para o GitHub (branch `main`). Se você estiver usando uma plataforma como Netlify, Vercel ou GitHub Pages, ela detectará as mudanças e reconstruirá o site automaticamente.

*   **Passos para publicar (se você estiver usando Git/GitHub):**
    1.  **Salve suas alterações:** Certifique-se de que todos os arquivos modificados foram salvos.
    2.  **Abra o Terminal na pasta do projeto.**
    3.  **Adicione as alterações:**
        ```bash
        git add .
        ```
    4.  **Confirme as alterações:**
        ```bash
        git commit -m "feat: Minha descrição das mudanças"
        ```
        *(Substitua "Minha descrição das mudanças" por algo que descreva o que você fez, por exemplo: "feat: Atualiza preço do Arcano Regente")*
    5.  **Envie para o GitHub:**
        ```bash
        git push origin main
        ```
    Após esses passos, a plataforma de deploy deve iniciar a atualização do seu site automaticamente.

---

Se tiver qualquer dúvida ou precisar de ajuda com algo mais complexo, não hesite em entrar em contato com um desenvolvedor. Este guia é um ponto de partida para sua autonomia!
