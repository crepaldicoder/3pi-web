# 3pi-web - Orbital Lumen System

QUALITY_PREFLIGHT: PASS

## Proveniência
Todo componente e padrão visual deste redesign deriva do catálogo 21st.dev documentado em `21st-research.md`. Nenhum componente de outro marketplace foi introduzido. O site `meu-black.vercel.app` foi usado exclusivamente como benchmark de qualidade e impacto, não como fonte de componentes ou código.

## Design Read
Redesign completo de um estúdio digital para decisores que valorizam marca e tecnologia, com linguagem cinemática, espacial e editorial. O objetivo é transformar a página em uma cena contínua, não em uma coleção de efeitos.

## Dials
- DESIGN_VARIANCE: 9
- MOTION_INTENSITY: 9 no desktop e 6 no touch
- VISUAL_DENSITY: 7

## Direção travada
**Orbital Lumen.** Base mineral clara, cobalto espectral, objetos escuros de profundidade extrema e tipografia de escala radical. Navegação e conteúdo parecem flutuar dentro do campo orbital. A mesma geometria reaparece no hero e na conclusão, criando arco narrativo.

## Fontes
- Display: Archivo Black
- Contraponto editorial: Newsreader Italic
- Interface/corpo: DM Sans
- Telemetria: IBM Plex Mono

## Paleta
- Lumen: `#eef0eb`
- Carbon mist: `#e4e7e2`
- Ink: `#0b0d0b`
- Muted: `#626961`
- Spectral cobalt: `#1f5ee7`
- Kinetic lime: `#b8ff3d`

## Assinatura
O **Campo 3π** usa WebGL nativo com fragment shader, esfera sombreada, Fresnel, cinco órbitas cinéticas, grão procedural e reação interpolada ao ponteiro. A resolução é limitada em touch, a animação pausa fora da viewport e `prefers-reduced-motion` mantém a cena estática.

## Estrutura 21st.dev
1. Navbar flutuante e painel expansível - Navbar Section 2, ID 18120.
2. Hero interativo com shader e monólito - Experience Hero, ID 9724.
3. Serviços cinéticos - Services with Animated Hover Modal, ID 11688.
4. Cases dirigidos por scroll - Interactive Video Portfolio Scroller, ID 24368.
5. Processo progressivo - Process Timeline, ID 1943.
6. Sistema de princípios visuais - composição adaptada do Number Ticker, ID 21515, sem métricas comerciais não verificadas.
7. CTA cinético - Book A Call Button, ID 5801, e Call to action, ID 1414.

## Motion
- Intro por placas com máscara e dissolução.
- Shader contínuo com órbitas de baixa velocidade e esfera reativa.
- Hero revela headline em sequência hierárquica.
- Serviços usam preview atrasado no desktop e accordion em touch.
- Cases usam trilho sticky no desktop e scroll-snap nativo no mobile.
- CTA retoma o campo orbital, agora em calor, fechando a narrativa.
- Tudo respeita movimento reduzido e o conteúdo nunca depende da animação.

## Responsividade
- 1440: composição espacial completa, WebGL em até 1.8 DPR.
- 768: layout reorganizado, sem preview flutuante.
- 375/320: shader em até 1.35 DPR, headline compacta, CTA no primeiro viewport, menu touch e cases por arraste.

## Gate
QA obrigatório em 1440, 768, 375 e 320 px, com menu, foco, Escape, scroll-lock, toque/arraste, active states, imagens, links, console, overflow real, clipping, reduced motion, revisão independente e produção.