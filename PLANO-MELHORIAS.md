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
- [ ] Adicionar estados de envio, erro e sucesso do endpoint real.
- [x] Nunca exibir sucesso sem resposta positiva do envio.
- [ ] Integrar endpoint somente depois de definir o serviço e o e-mail reais.

**Status:** parcial e honesta. A confirmação falsa foi removida; o envio real continua bloqueado até existir endpoint.

### Parte 3: conversão e informações de serviço

- [ ] Adicionar CTA final em `servicos.html`.
- [ ] Adicionar canal direto de contato após confirmação do e-mail profissional.
- [x] Corrigir a ordem editorial dos serviços.
- [ ] Publicar duração, frequência, plataforma e disponibilidade somente com dados confirmados.

### Parte 4: confiança e responsabilidade clínica

- [ ] Revisar formação, supervisão, escopo de atuação e limites por país.
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

## Dependências em aberto

Não serão inventados dados que ainda não foram fornecidos:

- endpoint ou serviço do formulário;
- e-mail profissional;
- preços, duração, frequência, disponibilidade ou plataforma;
- instituição, supervisão e limites profissionais;
- contatos e texto de orientação para emergências;
- autorização, finalidade e versões originais dos assets adicionais.

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
- Parte 2: estrutura acessível concluída parcialmente; integração real pendente de endpoint.
- Revisão de código: concluída; o bug de foco durante resize foi corrigido após a primeira revisão.
