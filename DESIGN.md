# 3pi-web — Orbital Command System

QUALITY_PREFLIGHT: PASS

## Proveniência
Todo elemento visual e padrão de interação deste redesign é derivado do catálogo 21st.dev, documentado em `21st-research.md`. Nenhum componente visual de outro marketplace ou biblioteca foi introduzido.

## Design Read
Um estúdio digital apresentado como uma sala de comando orbital: preciso, tenso, vivo e impossível de confundir com uma agência genérica.

## Direção travada
**Terminal orbital brutalista.** Densidade 9/10, motion 9/10 desktop e 6/10 mobile, contraste severo, cantos retos, linhas de instrumentação e uma única geometria circular recorrente: o núcleo 3π.

## Fontes
- Display: Archivo Black — headlines em caixa alta, tracking negativo.
- Interface/corpo: DM Sans — textos e botões.
- Mono: IBM Plex Mono — índices, telemetria, labels e coordenadas.

## Paleta
- Void: `#070907`
- Carbon: `#10130f`
- Mineral: `#e9e8df`
- Muted: `#969c91`
- Signal lime: `#dfff00`
- Heat: `#ff5b2e`
- Grid: `rgba(223,255,0,.16)`

## Assinatura
O **Núcleo 3π** aparece no hero como canvas orbital reativo, reaparece nos indicadores, cursor e CTA final. Linhas técnicas e índices conectam seções como um único sistema.

## Estrutura 21st.dev
1. Navbar expansível — Navbar Section 2, ID 18120.
2. Hero interativo — Experience Hero, ID 9724.
3. Serviços cinéticos — Services with Animated Hover Modal, ID 11688.
4. Cases sticky — Interactive Video Portfolio Scroller, ID 24368.
5. Processo — Process Timeline, ID 1943.
6. Métricas — Number Ticker Real-Time Metrics Counter, ID 21515.
7. CTA — Book A Call Button, ID 5801 + Call to action, ID 1414.

## Motion
- Intro: placas fecham/abrem, núcleo resolve e headlines entram por máscara.
- Hero: núcleo acompanha ponteiro com interpolação; parallax limitado a transform.
- Serviços: preview acompanha ponteiro apenas em `pointer:fine`; touch vira accordion.
- Cases: trilho sticky e progresso por capítulo no desktop; cards horizontais snap no mobile.
- Timeline: linha ativa e conteúdo mudam por interseção.
- CTA: faixa magnética desktop, press-state touch.
- Tudo respeita `prefers-reduced-motion`; conteúdo nunca começa invisível sem fallback.

## Responsividade
- 1440+: grade 12 colunas, hero assimétrico, serviços em lista, cases sticky.
- 768: menu overlay, hero balanceado, serviços sem preview flutuante, cases em grid.
- 375/320: sem cursor customizado; cards de case em scroll-snap; alvos de 44px; safe areas; sem sticky longo.

## Gate
- Sem espaços vazios poster-like.
- Nada de cards idênticos em três colunas.
- SVG consistente; nenhum emoji ou Unicode decorativo.
- Foco visível e semântica/ARIA.
- Browser QA desktop/768/375/320, interação touch, overflow, console, imagens, links, clipping, reduced motion e produção.
