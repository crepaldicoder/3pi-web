# 3pi-web — Sistema visual

## Estratégia
- Artefato: site institucional + portfólio para estúdio digital B2B.
- Público: empresas que precisam vender, operar e ser encontradas melhor.
- Ação primária: iniciar conversa sobre um projeto.
- Adjetivos: preciso, inquieto, estratégico, técnico, humano.
- Essência: precisão em movimento.

## Identidade
- Direção: editorial tecnológico, escuro, alto contraste, sem estética SaaS genérica.
- Marca: símbolo `3π` em caixa modular e wordmark minúsculo.
- Assinatura: órbitas/pi-grid — linhas finas e pontos em rotação; divisórias numeradas.
- Tipografia: Syne (display) + Manrope (texto), hospedadas pelo Google Fonts.
- Escala: 1.25, base 16px.
- Cores: fundo `oklch(13% .018 165)`, superfície `oklch(18% .02 165)`, texto `oklch(96% .015 95)`, muted `oklch(70% .02 160)`, sinal `oklch(88% .22 128)`, azul técnico `oklch(68% .16 220)`.
- Espaçamento: unidade 8px. Raios: 0 e 14px. Sombras: nenhuma; profundidade por borda e contraste.

## Movimento
- Hero em sequência (logo → selo → headline → CTA).
- Orbe/pi-grid acompanha o ponteiro e progride com o scroll.
- Parallax vertical multicamada no hero, projetos e contato.
- Barra de progresso no topo e botões magnéticos.
- Marquee contínuo de capacidades.
- Reveal por IntersectionObserver com stagger.
- Cards de portfólio têm inclinação óptica no hover.
- Somente transform e opacity; motion-reduce global.

## Layout
- Grid de 12 colunas, assimetria editorial e linhas-guia visíveis.
- Hero ocupa a tela; serviços em índice horizontal/empilhado; projetos em mosaico desigual.
- Mobile: 320px+, menu acessível, elementos gráficos simplificados.

## Acessibilidade
- HTML semântico, skip link, foco visível, contraste AA, alvos mínimos 44px.
- Navegação por teclado e `aria-expanded` no menu.
- Movimento reduzido desativa loops e transições.

## Auditoria anti-slop
- Sem gradiente roxo, glassmorphism, cards genéricos ou emojis.
- Identidade, imagem SVG, favicon, densidade e movimento presentes.
