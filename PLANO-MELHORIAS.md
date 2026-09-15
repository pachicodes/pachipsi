# Plano de melhorias

## Contexto

O site é uma landing editorial estática para brasileiras no exterior, com CSS nativo, tema escuro editorial e páginas separadas de serviços, formação e certificados. A etapa de SEO técnico já foi implementada.

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
- [x] Testar nas páginas principais, em desktop e mobile.

**Status:** concluída. O resize e o foco foram revisados após a code review.

### Parte 2: formulário confiável

- [x] Remover o handler inline.
- [x] Adicionar `name`, `autocomplete` e região `aria-live`.
- [x] Adicionar estado de abertura do WhatsApp e fallback quando a nova aba for bloqueada.
- [x] Nunca exibir sucesso sem resposta positiva do envio.
- [x] Integrar o contato com o WhatsApp informado.

**Status:** concluída via WhatsApp. A mensagem é preparada para revisão e envio manual pela pessoa no WhatsApp.

### Parte 3: conversão e informações de serviço

- [x] Adicionar CTA final em `servicos.html` (bloco de primeiro contato via WhatsApp).
- [x] Adicionar canal direto de contato pelo WhatsApp.
- [x] Corrigir a ordem editorial dos serviços.
- [x] Tornar visíveis os recursos holísticos na home e em `servicos.html`, sem modalidades avulsas.
- [ ] Publicar duração, frequência, plataforma e disponibilidade somente com dados confirmados.

### Parte 4: confiança e responsabilidade clínica

- [x] Criar página dedicada de formação, certificações e percurso teórico (`formacao.html`).
- [x] Criar página dedicada de certificados (`certificados.html`) com lightbox acessível.
- [x] Revisar formação, supervisão, escopo de atuação e limites por país.
- [x] Adicionar disclaimer clínico no rodapé (não substitui emergência nem tratamento médico/psicológico de urgência).
- [ ] Adicionar orientação para crise ou emergência somente com texto e contatos aprovados.

### Parte 5: mídia e performance

- [ ] Confirmar a finalidade de `dreamy.png`, `INSPO.png` e `intercultural_space.png`.
- [x] Gerar variantes WebP e `srcset` para a imagem hero (`eu.png`) em `index.html`.
- [ ] Converter demais imagens pesadas (`dreamy.png`, `INSPO.png`) para WebP com `<picture>` e fallback PNG.
- [ ] Otimizar imagens de certificado em WebP após validação visual das versões `_web` sem CPF.
- [ ] Validar peso, dimensões, CLS e carregamento da imagem principal.

### Parte 6: manutenção e automação

- [ ] Confirmar se `styles.css` é legado e pode ser arquivado ou removido.
- [ ] Limpar seletores JavaScript residuais.
- [x] Script de preparação de certificados (`scripts/prepare-certificates.mjs`) para versões públicas sem CPF.
- [ ] Criar validações para HTML, CSS, JavaScript, links, JSON-LD e acessibilidade básica.

### Parte 7: revisão final

- [x] Revisar o diff completo com foco em bugs e regressões.
- [ ] Confirmar que nenhuma rota, ID, copy legal ou identidade foi alterada indevidamente.
- [x] Testar desktop, mobile, teclado e formulário sem endpoint.
- [ ] Testar modo claro, modo escuro e movimento reduzido em uma execução dedicada.
- [ ] Registrar pendências bloqueadas por dados externos.

### Parte 8: performance crítica de imagens

- [x] Converter `eu.png` para WebP com `<picture>` e fallback PNG.
- [x] Adicionar `<link rel="preload">` para a imagem hero (versão WebP).
- [x] Gerar variantes de tamanho com `srcset` e `sizes` para mobile, tablet e desktop.
- [ ] Converter `dreamy.png` e `INSPO.png` e validar LCP, CLS e peso total após todas as conversões.

### Parte 9: acessibilidade e conformidade legal

- [ ] Adicionar link "Pular para o conteúdo" (skip-to-content) em todas as páginas.
- [ ] Criar página de política de privacidade — contato via WhatsApp e e-mail tratam dados pessoais (LGPD / GDPR).
- [ ] Criar página 404 customizada com navegação de retorno.
- [ ] Validar contraste WCAG AA no modo claro (`prefers-color-scheme: light`) com ferramenta automatizada.
- [ ] Revisar `aria-label` e indicadores visuais dos links que abrem aplicativo externo (WhatsApp).
- [x] Remover links órfãos para `index.html#faq` e alinhar navegação entre páginas.

### Parte 10: conversão e credibilidade

- [ ] Adicionar links de redes sociais no footer (Instagram profissional, se existir).
- [ ] Preparar seção editorial de depoimentos / relatos anônimos (quando houver autorização).
- [ ] Adicionar breadcrumbs em `servicos.html` para navegação de retorno visual.
- [ ] Considerar indicador de fuso horário automático na seção de processo ou footer.
- [ ] Adicionar analytics privacy-first (Plausible, Umami ou GA4) para entender a origem do tráfego.
- [ ] Avaliar FAQ na home (ex.: “preciso usar Reiki ou tarô?”) — removido da navegação até haver texto aprovado.

### Parte 11: crescimento e infraestrutura futura

- [ ] Planejar seção de blog / "caderno de travessias" — fortaleceria SEO orgânico e autoridade.
- [ ] Avaliar versão mínima em inglês (ao menos boas-vindas e resumo) para buscas locais do público no exterior.
- [ ] **Não priorizar agora:** PWA (`manifest.json`) e Service Worker — site institucional pequeno, baixo retorno imediato.

### Parte 12: privacidade em mídia e certificados

- [x] Nunca publicar CPF, RG ou QR de validação com dados pessoais nos certificados exibidos no site.
- [x] Gerar versões `_web` em `assets/certificados/web/` para exibição pública.
- [x] Remover duplicatas de arquivos na pasta `assets/certificados`.
- [x] Lightbox acessível (foco, `Escape`, `aria-modal`) em vez de abrir originais com dados sensíveis.

## Dependências em aberto

Não serão inventados dados que ainda não foram fornecidos:

- endpoint ou serviço do formulário;
- preços, duração, frequência, disponibilidade ou plataforma;
- instituição, supervisão e limites profissionais detalhados;
- contatos e texto de orientação para emergências;
- autorização, finalidade e versões originais dos assets adicionais (`dreamy.png`, `INSPO.png`, etc.);
- perfis de redes sociais profissionais;
- depoimentos ou relatos autorizados por pacientes / mentoradas;
- texto aprovado para política de privacidade;
- decisão sobre ferramenta de analytics;
- texto aprovado para FAQ na home.

**Já disponíveis (não bloquear mais):**

- e-mail profissional: `pachiparrapsi@gmail.com`;
- WhatsApp e QR de contato;
- copy dos recursos holísticos na home e em serviços;
- galeria de certificados com versões públicas sem CPF.

## Critérios de aceite

1. O formulário não mostra confirmação sem envio real bem-sucedido.
2. O menu mobile funciona por mouse, teclado, `Escape` e backdrop, sem prender foco fora do menu.
3. JSON-LD, canonical, Open Graph, sitemap e robots permanecem válidos.
4. Não há overflow em viewports móveis ou desktop.
5. Modo claro, modo escuro e movimento reduzido continuam funcionais.
6. A revisão final não encontra bugs críticos ou regressões introduzidas.
7. Certificados exibidos no site não contêm CPF nem dados de validação com informação pessoal.
8. Recursos holísticos aparecem de forma breve na home e com limites éticos claros em serviços.

## Histórico

- SEO técnico, dados estruturados, metadados sociais e estabilidade da imagem principal: concluídos antes deste plano.
- Parte 0: concluída nesta etapa.
- Parte 1: concluída e validada em mobile e desktop.
- Parte 2: concluída via WhatsApp, sem afirmar envio antes da confirmação manual.
- Revisão de código: concluída; o bug de foco durante resize foi corrigido após a primeira revisão.
- Página `certificados.html`, recursos holísticos, disclaimer clínico, navegação alinhada e privacidade em certificados: concluídos em set/2026.
