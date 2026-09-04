# Plano de melhorias

## Contexto

O site é uma landing editorial estática para brasileiras no exterior, com CSS nativo, tema escuro editorial e uma página separada de serviços. A etapa de SEO técnico já foi implementada.

As melhorias serão feitas em partes pequenas, com validação focada após cada etapa e uma revisão final de código.

## Etapas

### Parte 0: documentação

- [x] Registrar este plano na raiz do projeto.
- [x] Definir escopo, dependências e critérios de aceite.
- [x] Preservar marca, rotas, IDs, navegação principal e consentimentos existentes.

### Parte 1: menu mobile acessível

- [x] Adicionar `aria-controls="mainNav"`.
- [x] Mover o foco para o botão de fechar ao abrir o menu.
- [x] Devolver o foco ao botão de menu ao fechar.
- [x] Fechar com `Escape`, backdrop e links.
- [x] Manter o foco dentro do menu enquanto ele estiver aberto.
- [x] Testar nas duas páginas, em desktop e mobile.

**Status:** concluída. O resize e o foco foram revisados após a code review.

### Parte 2: formulário confiável

- [x] Remover o handler inline.
- [x] Adicionar `name`, `autocomplete` e região `aria-live`.
- [x] Adicionar estado de abertura do WhatsApp e fallback quando a nova aba for bloqueada.
- [x] Nunca exibir sucesso sem resposta positiva do envio.
- [x] Integrar o contato com o WhatsApp informado.

**Status:** concluída via WhatsApp. A mensagem é preparada para revisão e envio manual pela pessoa no WhatsApp.

### Parte 3: conversão e informações de serviço

- [ ] Adicionar CTA final em `servicos.html`.
- [x] Adicionar canal direto de contato pelo WhatsApp.
- [x] Corrigir a ordem editorial dos serviços.
- [ ] Publicar duração, frequência, plataforma e disponibilidade somente com dados confirmados.

### Parte 4: confiança e responsabilidade clínica

- [x] Criar página dedicada de formação, certificações e percurso teórico (`formacao.html`).
- [x] Revisar formação, supervisão, escopo de atuação e limites por país.
- [ ] Adicionar orientação para crise ou emergência somente com texto e contatos aprovados.

### Parte 5: mídia e performance

- [ ] Confirmar a finalidade de `dreamy.png`, `INSPO.png` e `intercultural_space.png`.
- [ ] Gerar formatos modernos e `srcset` quando houver ferramenta e originais adequados.
- [ ] Validar peso, dimensões, CLS e carregamento da imagem principal.

### Parte 6: manutenção e automação

- [ ] Confirmar se `styles.css` é legado e pode ser arquivado ou removido.
- [ ] Limpar seletores JavaScript residuais.
- [ ] Criar validações para HTML, CSS, JavaScript, links, JSON-LD e acessibilidade básica.

### Parte 7: revisão final

- [x] Revisar o diff completo com foco em bugs e regressões.
- [ ] Confirmar que nenhuma rota, ID, copy legal ou identidade foi alterada indevidamente.
- [x] Testar desktop, mobile, teclado e formulário sem endpoint.
- [ ] Testar modo claro, modo escuro e movimento reduzido em uma execução dedicada.
- [ ] Registrar pendências bloqueadas por dados externos.

### Parte 8: performance crítica de imagens

- [ ] Converter `eu.png` (2 MB), `dreamy.png` (2.5 MB) e `INSPO.png` (2.8 MB) para WebP com `<picture>` e fallback PNG.
- [ ] Adicionar `<link rel="preload">` para a imagem hero (`eu.png` / versão WebP) — ela é o LCP.
- [ ] Gerar variantes de tamanho com `srcset` e `sizes` para mobile, tablet e desktop.
- [ ] Validar LCP, CLS e peso total da página após as conversões.

### Parte 9: acessibilidade e conformidade legal

- [ ] Adicionar link "Pular para o conteúdo" (skip-to-content) nas duas páginas.
- [ ] Criar página de política de privacidade — o formulário coleta nome, e-mail e localização (LGPD / GDPR).
- [ ] Criar página 404 customizada com navegação de retorno.
- [ ] Validar contraste WCAG AA no modo claro (`prefers-color-scheme: light`) com ferramenta automatizada.
- [ ] Revisar `aria-label` e indicadores visuais dos links que abrem aplicativo externo (WhatsApp).

### Parte 10: conversão e credibilidade

- [ ] Adicionar links de redes sociais no footer (Instagram profissional, se existir).
- [ ] Preparar seção editorial de depoimentos / relatos anônimos (quando houver autorização).
- [ ] Adicionar breadcrumbs em `servicos.html` para navegação de retorno visual.
- [ ] Considerar indicador de fuso horário automático na seção de processo ou footer.
- [ ] Adicionar analytics privacy-first (Plausible, Umami ou GA4) para entender a origem do tráfego.

### Parte 11: crescimento e infraestrutura futura

- [ ] Planejar seção de blog / "caderno de travessias" — o conceito já aparece no hero, mas não leva a conteúdo. Fortaleceria SEO orgânico e autoridade.
- [ ] Avaliar versão mínima em inglês (ao menos boas-vindas e resumo) para buscas locais do público no exterior.
- [ ] Criar `manifest.json` (PWA mínimo) para quem adiciona o site à home no celular.
- [ ] Avaliar Service Worker para cache de assets estáticos e experiência offline mínima.

## Dependências em aberto

Não serão inventados dados que ainda não foram fornecidos:

- endpoint ou serviço do formulário;
- e-mail profissional;
- preços, duração, frequência, disponibilidade ou plataforma;
- instituição, supervisão e limites profissionais;
- contatos e texto de orientação para emergências;
- autorização, finalidade e versões originais dos assets adicionais;
- perfis de redes sociais profissionais;
- depoimentos ou relatos autorizados por pacientes / mentoradas;
- texto aprovado para política de privacidade;
- decisão sobre ferramenta de analytics.

## Critérios de aceite

1. O formulário não mostra confirmação sem envio real bem-sucedido.
2. O menu mobile funciona por mouse, teclado, `Escape` e backdrop, sem prender foco fora do menu.
3. JSON-LD, canonical, Open Graph, sitemap e robots permanecem válidos.
4. Não há overflow em viewports móveis ou desktop.
5. Modo claro, modo escuro e movimento reduzido continuam funcionais.
6. A revisão final não encontra bugs críticos ou regressões introduzidas.

## Histórico

- SEO técnico, dados estruturados, metadados sociais e estabilidade da imagem principal: concluídos antes deste plano.
- Parte 0: concluída nesta etapa.
- Parte 1: concluída e validada em mobile e desktop.
- Parte 2: concluída via WhatsApp, sem afirmar envio antes da confirmação manual.
- Revisão de código: concluída; o bug de foco durante resize foi corrigido após a primeira revisão.
