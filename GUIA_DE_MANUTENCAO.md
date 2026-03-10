# Guia Simples para Manter o Site Tarot da Liz

Olá, Liz!

Este guia foi feito para te ajudar a cuidar do seu site de forma fácil, mesmo que você não entenda de programação. Aqui, você vai aprender a mudar textos, preços e imagens, e entender como o site funciona por trás das cortinas.

## 1. Onde Estão as Coisas no Seu Site?

Pense no seu site como uma pasta cheia de documentos e fotos no seu computador. Cada tipo de informação está guardado em um lugar específico:

*   **`client/src/pages/`**: Aqui estão os "documentos principais" do seu site, como a Página Inicial, a página de Contato, etc.
*   **`client/src/components/sections/`**: São as "partes" que montam cada página, como a seção de "Rituais" ou a seção de "Perguntas Frequentes".
*   **`client/src/components/`**: São "peças menores" que se repetem no site, como o menu de navegação ou os cards das mandalas.
*   **`client/public/`**: Esta é a sua "galeria de fotos". Todas as imagens que aparecem no site estão aqui.
*   **`shared/const.ts`**: Este é o "caderno de anotações" principal, onde estão guardados os textos e preços da maioria dos seus rituais.

## 2. Como Mudar Textos e Preços dos Rituais

A maioria dos textos e preços dos seus rituais está em um arquivo especial. Você vai editá-lo como se fosse um documento de texto.

### Para Rituais Comuns (Pergunta Única, Combo 3 Perguntas, Arcano Regente Pessoal, Mandala Semestral):

1.  **Encontre o arquivo:** Vá até a pasta `TLiz` no seu computador, depois entre em `shared`, e abra o arquivo `const.ts` com o **Bloco de Notas** (ou qualquer editor de texto simples).
2.  **Procure o ritual:** Dentro do arquivo, você verá uma lista. Cada item da lista é um ritual. Procure pelo nome do ritual que você quer mudar, por exemplo, `name: "Pergunta Única"`.
3.  **Faça suas mudanças:**
    *   **`name`**: O nome do ritual.
    *   **`tagline`**: Uma frase curta que descreve o ritual.
    *   **`symbol`**: O emoji ou símbolo que aparece no card (ex: `"✨"`).
    *   **`price`**: O preço do ritual (ex: `"R$ 60"`).
    *   **`deliveryNote`**: Como o ritual é entregue (ex: `"Áudio ou texto"`).
    *   **`description`**: A descrição completa do ritual.
    *   **`features`**: Uma lista de itens incluídos. Você pode mudar o `text` de cada item.
    *   **`mercadoPagoUrl`**: Este é o **link de compra** do Mercado Pago. Se estiver `"#"`, significa que o produto ainda não está disponível para compra e aparecerá a mensagem "Em breve disponível". Para ativar a compra, cole o link do Mercado Pago aqui, entre as aspas.
4.  **Salve o arquivo:** Depois de mudar, salve o arquivo (`Ctrl + S` ou `Arquivo > Salvar`).

### Para o Ritual Especial (Jogo das Sombras):

O "Jogo das Sombras" é um ritual mais elaborado e suas informações estão em outro lugar, mas a forma de editar é parecida.

1.  **Encontre o arquivo:** Vá até a pasta `TLiz` no seu computador, depois entre em `client`, `src`, `components`, `sections`, e abra o arquivo `PricingSection.tsx` com o **Bloco de Notas**.
2.  **Procure o ritual:** Role a tela para baixo até encontrar uma parte que começa com `const PREMIUM_RITUAL: Ritual = { ... }`. É aqui que estão as informações do Jogo das Sombras.
3.  **Faça suas mudanças:** Você pode mudar o `name`, `tagline`, `symbol`, `price`, `deliveryNote`, `description`, `features` e o `mercadoPagoUrl` (link de compra) da mesma forma que nos rituais comuns.
4.  **Salve o arquivo:** Salve o arquivo (`Ctrl + S` ou `Arquivo > Salvar`).

## 3. Como Mudar Textos de Outras Partes do Site

Textos como o título da página inicial, perguntas frequentes ou o aviso legal estão nos arquivos das suas respectivas seções:

*   **Página Inicial (HeroSection):** `client/src/components/sections/HeroSection.tsx`
*   **Perguntas Frequentes (FAQSection):** `client/src/components/sections/FAQSection.tsx`
*   **Aviso Legal (DisclaimerSection):** `client/src/components/sections/DisclaimerSection.tsx`
*   **Rodapé (FooterSection):** `client/src/components/sections/FooterSection.tsx`

Para mudar:
1.  **Abra o arquivo** da seção desejada com o **Bloco de Notas**.
2.  **Procure o texto** que você quer mudar.
3.  **Edite o texto.**
4.  **Salve o arquivo.**

**Atenção:** Ao editar, mude apenas o texto. Evite mexer em símbolos como `<` ou `>` ou palavras como `className`, pois eles fazem parte da estrutura do site e podem desconfigurá-lo.

## 4. Como Atualizar Imagens

Todas as imagens do seu site estão na pasta `client/public/`.

### Para as Imagens de Fundo (do site inteiro):

1.  **Encontre as imagens:** Vá até a pasta `TLiz` no seu computador, depois entre em `client`, `public`. Lá você verá dois arquivos:
    *   `bg-desktop.png` (para computadores e telas grandes)
    *   `bg-mobile.png` (para celulares e telas pequenas)
2.  **Substitua as imagens:** Se você quiser mudar o fundo, basta colocar suas novas imagens nesta pasta, mas elas **precisam ter exatamente os mesmos nomes** (`bg-desktop.png` e `bg-mobile.png`).
    *   A imagem `bg-desktop.png` deve ser mais larga (horizontal).
    *   A imagem `bg-mobile.png` deve ser mais alta (vertical).

### Para as Imagens dos Cards de Mandala:

1.  **Encontre as imagens:** Na mesma pasta `client/public/`, você verá:
    *   `mandala-anual.png`
    *   `mandala-semestral.png`
2.  **Substitua as imagens:** Troque esses arquivos pelas suas novas imagens, mantendo os **mesmos nomes**.

## 5. Dicas Importantes para Manter o Site

*   **Sempre faça uma cópia:** Antes de fazer qualquer mudança grande, copie a pasta `TLiz` inteira para outro lugar seguro no seu computador. Assim, se algo der errado, você tem uma versão de segurança.
*   **Limpe a memória do navegador:** Depois de fazer e salvar as mudanças, às vezes o seu navegador (Chrome, Edge, etc.) mostra a versão antiga do site. Para ver as novidades, você pode:
    *   Pressionar `Ctrl + F5` (no Windows) para forçar a atualização da página.
    *   Ou abrir o site em uma "janela anônima" (ou "privada") do navegador.
*   **Quando precisar de ajuda:** Se você precisar de uma mudança mais complexa, ou se algo não funcionar como esperado, não hesite em pedir ajuda a um profissional. Este guia é para as tarefas mais simples!

## 6. Como Suas Mudanças Aparecem no Site (Publicação)

O seu site está configurado para se atualizar sozinho! Isso significa que, quando você salva as mudanças nos arquivos e elas são enviadas para o local onde o site está guardado na internet (o GitHub), ele se publica automaticamente em alguns minutos.

**Não se preocupe com comandos complicados.** Basta salvar os arquivos que você editou. O resto acontece sozinho!

---

Com este guia, espero que você se sinta mais confiante para manter seu site sempre atualizado e com a sua cara!
