# Pesquisa 21st.dev — redesign 3pi-web

QUALITY_PREFLIGHT: PASS

## Escopo e método

Pesquisa realizada exclusivamente no catálogo do servidor MCP 21st.dev para referências visuais, componentes, temas e templates. Foram usadas as tools `mcp__21st__search`, `mcp__21st__get_usage` e `mcp__21st__get_component`. O código real foi consultado para os dois componentes efetivamente selecionados como base estrutural: **Experience Hero** e **Services with Animated Hover Modal**. A conta disponível era free e oferecia 2/2 consultas de código no dia; ambas foram usadas. Os demais itens abaixo são referências secundárias do próprio catálogo 21st.dev, claramente marcadas como “metadata/padrão”, sem alegação de inspeção do código-fonte.

Não foi encontrado tema ou template aderente nas buscas `dark technological brutalist theme neon`, `dark violet` e `creative agency digital studio dark portfolio`. Portanto, a recomendação é compor o site a partir dos componentes 21st.dev listados, sem inventar um tema externo.

> **Confirmação de origem:** todos os elementos visuais propostos neste relatório vêm do 21st.dev. Nenhuma referência visual externa foi adicionada. URLs de imagens demonstrativas presentes no código consultado pertencem ao demo do componente e devem ser substituídas por assets reais da 3pi na implementação; elas não são propostas como nova fonte visual.

## Direção de composição

Uma linguagem “terminal espacial brutalista”: fundo quase preto, tipografia condensada/monoespaçada, linhas estruturais, índices técnicos, um monólito WebGL como assinatura e transições de abertura/escala. Evitar glassmorphism genérico em excesso; preservar a contundência brutalista com painéis de borda fina, contraste severo e cantos majoritariamente retos. A página deve ser densa, em narrativa contínua, sem grandes vazios poster-like.

---

## 1. Hero interativo — SELECIONADO, código consultado

- **Nome:** Experience Hero
- **Autor/source:** hardikkashiyani123456788 / 21st.dev
- **ID:** `9724` (componentId interno retornado: `6603`)
- **Slug:** `experience-hero`
- **URL:** https://21st.dev/@hardikkashiyani123456788/components/experience-hero
- **Preview:** https://cdn.21st.dev/user_36PocTYc7us01xfx9KNTqyoT4SJ/experience-hero/default/preview.1785837957879.png
- **Tool usada:** `mcp__21st__search` + `mcp__21st__get_component({ id: 9724 })`
- **Status:** fonte real e demo consultados.

### Código/padrão relevante

O componente combina React Three Fiber, Drei, Three.js e GSAP:

```tsx
<Canvas camera={{ position: [0, 0, 60], fov: 35 }}>
  <LiquidBackground />
  <Monolith />
</Canvas>
```

O fundo usa `shaderMaterial` com uniforms `uTime` e `uMouse`; o ponteiro é interpolado com `lerp(mouse, 0.05)`. O objeto central é um `icosahedronGeometry` metálico com `MeshDistortMaterial`, rotação contínua e `Float`. A entrada usa blur, opacity e scale:

```ts
gsap.fromTo(revealRef.current,
  { filter: "blur(30px)", opacity: 0, scale: 1.02 },
  { filter: "blur(0px)", opacity: 1, scale: 1, duration: 2.2, ease: "expo.out" }
);
```

Os painéis laterais entram com stagger, e o CTA usa atração magnética por distância (`Math.hypot`, raio de 150 px) com retorno elástico. O demo também integra Lenis para scroll suave.

### Como compor na 3pi

- Transformar o monólito em um “núcleo 3π”: geometria facetada/anel orbital que reage ao ponteiro.
- Substituir a cópia genérica por headline curta e agressiva da 3pi, mantendo o ritmo tipográfico em duas linhas e o texto outline.
- Reaproveitar o deck lateral para disponibilidade, disciplinas e um índice de performance real.
- Manter o CTA magnético apenas em dispositivos com ponteiro fino; em touch, usar estado pressionado e feedback de escala.
- Adicionar fallback estático e `prefers-reduced-motion`; suspender WebGL fora de viewport e em dispositivos fracos.
- Não copiar literalmente “Obsidian Vault”; usar sua arquitetura (canvas + headline + command deck), rearticulada com identidade 3pi.

### Alternativas 21st.dev (metadata/padrão)

- **Digital Aurora**, dhileepkumargm, ID `6476`, slug `digital-aurora`, https://21st.dev/@dhileepkumargm/components/digital-aurora — aurora volumétrica WebGL em tempo real.
- **Quordix Hero**, quordix, ID `24512`, slug `quordix-hero`, https://21st.dev/@quordix/components/quordix-hero — canvas dot-grid, texto glitch e navbar flutuante.
- **PrismaHero**, rahil1202, ID `12200`, slug `prisma-hero`, https://21st.dev/@rahil1202/components/prisma-hero — vídeo de fundo e word reveal.

---

## 2. Menu e navegação

### Referência principal (metadata/padrão)

- **Nome:** Navbar Section 2
- **Autor/source:** solaceui / 21st.dev
- **ID:** `18120`
- **Slug:** `navbar-section-2`
- **URL:** https://21st.dev/@solaceui/components/navbar-section-2
- **Tool usada:** `mcp__21st__search`
- **Padrão relevante:** barra escura com mega-menu expansível animado; separa navegação persistente do painel de destinos.

### Como compor na 3pi

- Header fixo ultracompacto: marca 3pi à esquerda, índice de seção/estado no centro, trigger “MENU” à direita.
- O painel deve abrir como uma chapa brutalista full-screen com links grandes, numeração funcional e previews dos cases.
- A expansão deve conversar com o blur/reveal do hero, sem glass pill genérico.
- Mobile: menu como overlay real, foco preso, Escape, scroll-lock e alvos de toque adequados.

### Alternativas 21st.dev (metadata/padrão)

- **Fluid menu**, deepaksslibra, ID `624`, https://21st.dev/@deepaksslibra/components/fluid-menu — expansão circular fluida; útil apenas como padrão de microinteração do trigger.
- **8bit Navigation Menu**, theorcdev, ID `13173`, https://21st.dev/@theorcdev/components/8bit-navigation-menu — bordas pixeladas e implementação React sem Radix; pode informar pequenos detalhes brutalistas, não a estética completa.

---

## 3. Cards/lista de serviços — SELECIONADO, código consultado

- **Nome:** Services with Animated Hover Modal
- **Autor/source:** cnippet.dev / 21st.dev
- **ID:** `11688` (componentId interno retornado: `7726`)
- **Slug:** `services-with-animated-hover-modal`
- **URL:** https://21st.dev/@cnippet.dev/components/services-with-animated-hover-modal
- **Preview:** https://cdn.21st.dev/cnippet.dev/services-with-animated-hover-modal/default/preview.1774625573593.png
- **Tool usada:** `mcp__21st__search` + `mcp__21st__get_component({ id: 11688 })`
- **Status:** fonte e demo reais consultados. Observação: o arquivo “Component” retornado é um placeholder de contador; a implementação visual real está no `demoCode`, que foi inspecionado.

### Código/padrão relevante

A lista atualiza `{ active, index }` no hover. O preview flutuante acompanha o ponteiro usando `gsap.quickTo` com tempos diferentes para container, cursor e label, criando atraso cinético:

```ts
const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
  duration: 0.8, ease: "power3"
});
const xMoveCursor = gsap.quickTo(cursor.current, "left", {
  duration: 0.5, ease: "power3"
});
```

A entrada/saída do modal usa variants de `motion/react` com escala 0→1 e easing `[0.76, 0, 0.24, 1]`. A imagem ativa muda por trilho vertical:

```tsx
style={{ top: `${index * -100}%` }}
```

Cada linha usa bordas, título grande e deslocamento no hover; o cursor circular adiciona o label “View”.

### Como compor na 3pi

- Usar uma lista densa de disciplinas (Brand Systems, Creative Development, WebGL, Products, Campaigns) em vez de cards genéricos.
- Preview flutuante mostra um frame/arte de cada disciplina; trocar o círculo “View” por um cursor técnico 3pi com SVG consistente.
- Inserir índice, resultado/entregável e tecnologia em colunas; manter linhas brutais e tipografia grande.
- Em touch, substituir hover por tap/accordion com imagem inline, sem cursor flutuante.
- Respeitar reduced motion, cancelar listeners corretamente e usar coordenadas do viewport de forma coerente (`clientX/clientY` ou ajustar scroll), pois o demo usa `pageX/pageY` com elemento absoluto.
- Não reutilizar as imagens remotas do demo; usar cases/assets da 3pi.

### Alternativa 21st.dev (metadata/padrão)

- **Service Card**, lavikatiyar, ID `8223`, https://21st.dev/@lavikatiyar/components/service-card — card com imagem decorativa e animação fluida no hover, apropriado como fallback mobile.

---

## 4. Portfolio / cases

### Referência principal (metadata/padrão)

- **Nome:** Interactive Video Portfolio Scroller
- **Autor/source:** piyushxdev / 21st.dev
- **ID:** `24368`
- **Slug:** `interactive-video-portfolio-scroller`
- **URL:** https://21st.dev/@piyushxdev/components/interactive-video-portfolio-scroller
- **Tool usada:** `mcp__21st__search`
- **Padrão relevante:** showcase dirigido por scroll, tipografia sincronizada com trilho vertical de vídeo, autoplay e fallback de áudio para mobile/iOS.

### Como compor na 3pi

- Construir capítulo sticky: à esquerda, nome/ano/disciplinas/resultados; à direita, mídia do case movendo-se em trilho sincronizado.
- Usar vídeos curtos/muted ou stills próprios da 3pi; nada externo ao material do estúdio.
- Cada case deve ter rota/CTA real, com modo simplificado em 320/375 px.
- Alternar escala e posição dos frames para ecoar o monólito do hero sem repetir o efeito.

### Alternativas 21st.dev (metadata/padrão)

- **Portfolio Gallery**, isaiahbjork, ID `7517`, https://21st.dev/@isaiahbjork/components/portfolio-gallery — sobreposição 3D desktop e marquee horizontal mobile.
- **Condition Grid**, uilayout.contact, ID `25300`, https://21st.dev/@uilayout.contact/components/conditiongrid — grid responsivo com spans alternados e cards animados.
- **Gallery with image cards**, shadcnblockscom, ID `692`, https://21st.dev/@shadcnblockscom/components/gallery4 — carousel de cards full-height com texto do case sobreposto.

---

## 5. Processo

### Referência principal (metadata/padrão)

- **Nome:** Process Timeline
- **Autor/source:** youcefbnm / 21st.dev
- **ID:** `1943`
- **Slug:** `process-timeline`
- **URL:** https://21st.dev/@youcefbnm/components/process-timeline
- **Tool usada:** `mcp__21st__search`
- **Padrão relevante:** etapa ativa muda conforme o scroll; narrativa progressiva ligada à posição da viewport.

### Como compor na 3pi

- Estruturar somente etapas reais e sequenciais: descoberta, direção, protótipo, produção e lançamento.
- Coluna sticky com “3π METHOD”; etapas compactas em trilho vertical e painel visual mutável.
- Reaproveitar a gramática de command cells do Experience Hero para manter continuidade.
- Em mobile, abandonar sticky longo e usar progressão linear legível.

### Alternativa 21st.dev (metadata/padrão)

- **Timeline**, manuarora700, ID `857`, https://21st.dev/@manuarora700/components/timeline — header sticky e beam que acompanha o scroll.

---

## 6. Métricas

### Referência principal (metadata/padrão)

- **Nome:** Number Ticker Real-Time Metrics Counter
- **Autor/source:** shadcnspace / 21st.dev
- **ID:** `21515`
- **Slug:** `number-ticker-05`
- **URL:** https://21st.dev/@shadcnspace/components/number-ticker-05
- **Tool usada:** `mcp__21st__search`
- **Padrão relevante:** números grandes animados e indicador pulsante de estado “active”.

### Como compor na 3pi

- Faixa brutalista de métricas verificáveis: projetos, anos, países, retenção ou impacto mensurável — nunca números inventados.
- Contadores entram uma vez ao atingir viewport; manter valor final disponível sem JS.
- O pulse pode virar um status operacional mínimo, alinhado ao “command deck” do hero.
- Usar divisórias e labels mono, evitando cards de dashboard genéricos.

### Alternativas 21st.dev (metadata/padrão)

- **Number Ticker**, danielpetho, ID `19064`, https://21st.dev/@danielpetho/components/basic-number-ticker — tween controlável por ref.
- **Stats Card**, kavikatiyar, ID `7841`, https://21st.dev/@kavikatiyar/components/stats-card-1 — métrica, resumo e mini bar chart com animação ao entrar em viewport.

---

## 7. CTA final

### Referência principal (metadata/padrão)

- **Nome:** Book A Call Button
- **Autor/source:** jatin-yadav05 / 21st.dev
- **ID:** `5801`
- **Slug:** `book-a-call-button`
- **URL:** https://21st.dev/@jatin-yadav05/components/book-a-call-button
- **Tool usada:** `mcp__21st__search`
- **Padrão relevante:** spring de Framer Motion e ícones de chamada que transitam verticalmente no hover.

### Como compor na 3pi

- Encerrar com bloco de alta densidade, headline direta, email/agenda e botão principal “Iniciar um projeto”.
- Ampliar o padrão do botão para uma faixa magnética, com seta SVG e duplicação vertical da label durante o hover.
- Conectar visualmente ao hero: o núcleo/monólito reaparece em escala reduzida ou como máscara de transição.
- Em touch, usar press state; foco visível e redução de movimento obrigatórios.

### Alternativa estrutural 21st.dev (metadata/padrão)

- **Call to action**, tommyjepsen, ID `1414`, https://21st.dev/@tommyjepsen/components/call-to-action — bloco de CTA de landing page para a estrutura textual, combinado com a microinteração do Book A Call Button.

---

## Arquitetura recomendada da página

1. **Header compacto + menu expansível** — Navbar Section 2.
2. **Hero tese** — Experience Hero adaptado para o núcleo 3π.
3. **Serviços em lista cinética** — Services with Animated Hover Modal.
4. **Cases sticky dirigidos por scroll** — padrão Interactive Video Portfolio Scroller.
5. **Processo sequencial** — padrão Process Timeline.
6. **Métricas como faixa técnica** — Number Ticker Real-Time Metrics Counter.
7. **CTA final magnético** — Book A Call Button + estrutura Call to action.

A composição deliberadamente usa o **Experience Hero** e o **Services with Animated Hover Modal** como bases de código verificadas; os demais são padrões de composição encontrados no 21st.dev e precisam de uma nova consulta de `get_component` antes de qualquer implementação literal.

## Dependências e riscos identificados no código consultado

- Experience Hero: `react`, `@react-three/fiber`, `@react-three/drei`, `three`, `gsap`; demo usa `lenis`.
- Services demo: `gsap`, `motion/react`, `next/image`, React hooks.
- O retorno MCP não listou registry/npm dependencies automaticamente, apesar dos imports explícitos; validar versões no projeto antes de instalar.
- O hero usa canvas fixo de viewport inteira: avaliar custo de GPU, hydration e mobile.
- O serviço usa listeners globais de mouse: proteger por media query de ponteiro e fornecer UX touch equivalente.
- Ambos necessitam tratamento explícito de `prefers-reduced-motion`, foco e navegação por teclado.
- Nenhum comando de instalação contendo variável/chave foi reproduzido neste relatório; nenhuma credencial foi exposta.

## Conclusão de procedência

**Todos os componentes, padrões e elementos visuais propostos acima foram pesquisados e selecionados no 21st.dev por meio das ferramentas MCP do servidor 21st.** Não foram usados componentes, temas, templates ou referências visuais de outro marketplace ou biblioteca externa. As bibliotecas técnicas importadas pelo código dos próprios componentes (Three.js, GSAP, Motion e Lenis) são dependências de execução declaradas pelos componentes 21st.dev, não fontes visuais adicionais.
