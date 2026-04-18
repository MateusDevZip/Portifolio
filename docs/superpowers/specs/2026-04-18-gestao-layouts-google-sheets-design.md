# Gestão de Layouts Google Sheets - Design Spec

**Data:** 2026-04-18  
**Objetivo:** Integrar o projeto Gestão de Layouts Google Sheets como segundo projeto do portfólio com apresentação em abas interativas

---

## 1. Visão Geral

O "Gestão de Layouts Google Sheets" é uma plataforma de automação e integração que conecta Google Sheets com sistemas de gestão de layouts. Permite importar dados, validar informações e gerar relatórios dinâmicos com dashboard de KPIs.

Será adicionado ao portfólio como o **segundo projeto** (logo após CRM Monte Site) com página detalhada usando o componente `ProjectTabs` já existente.

**Tipo de Projeto:** Plataforma de Automação / Integração  
**Ano:** 2024  
**Cor Identificadora:** #22c55e (Verde)  
**Link para Demo:** Nenhum (código disponível no GitHub)

---

## 2. Estrutura de Implementação

### 2.1 Novo Arquivo de Conteúdo

**Caminho:** `src/content/projects/gestaolayoutssheets.md`

```yaml
---
title: Gestão de Layouts Google Sheets
year: 2024
category: Plataforma de Automação / Integração
description: Sistema automatizado para gestão de layouts com integração nativa ao Google Sheets. Importa dados, valida informações e gera relatórios dinâmicos com dashboard em tempo real.
color: "#22c55e"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui", "Vite", "Google Sheets API"]
link: null
order: 2
---
```

**Conteúdo do Markdown:** O arquivo conterá 5 seções (H2) que serão automaticamente divididas pelo componente `ProjectTabs` em abas navegáveis.

### 2.2 Componente Reutilizado

**Caminho:** `src/components/project-tabs/ProjectTabs.astro`

O componente `ProjectTabs` criado para o CRM Monte Site será **reutilizado sem modificações**. Aceita um array de tabs com id, label e content.

### 2.3 Modificação na Página [slug].astro

**Caminho:** `src/pages/projetos/[slug].astro`

A página já foi modificada para renderizar condicionalmente com `ProjectTabs` para projetos que usam abas. O slug `gestaolayoutssheets` será automaticamente detectado e renderizado com abas (se seguir o mesmo padrão de H2).

### 2.4 Atualizar Order em Outros Projetos

**Arquivos a modificar:**
- `src/content/projects/crmontesite.md` — mudar order de undefined para `order: 1`
- `src/content/projects/ecommerce.md` — adicionar `order: 3`
- `src/content/projects/erp.md` — adicionar `order: 4`
- `src/content/projects/mobile.md` — adicionar `order: 5`

---

## 3. Conteúdo Detalhado das Abas

### Aba 1: Visão Geral

**Seção:** `## Visão Geral`

**Tópicos:**
- O que é a plataforma: sistema de automação para gestão de layouts integrado ao Google Sheets
- Propósito: eliminar retrabalho manual na gestão de layouts, automatizar validação de dados
- Público-alvo: agências de design, empresas com grandes volumes de layouts, equipes de produção
- Contexto de criação: desenvolvido com Lovable, refinado com customizações específicas
- Benefícios principais:
  - Importação direta do Google Sheets
  - Dashboard com KPIs em tempo real
  - Validação automática de dados
  - Exportação de relatórios
  - Sincronização automática

**Tom:** Profissional e direto

### Aba 2: Stack Técnico

**Seção:** `## Stack Técnico`

**Frontend:**
- React 18.3.1 com Vite como bundler
- TypeScript para tipagem segura
- TailwindCSS para estilos responsivos
- shadcn/ui + Radix UI para componentes acessíveis
- Bibliotecas especializadas:
  - Recharts: visualização de KPIs e métricas
  - React Hook Form + Zod: validação de formulários
  - React Router DOM: roteamento
  - React Query (@tanstack): gerenciamento de estado assíncrono
  - Sonner: notificações elegantes
  - next-themes: suporte a dark mode
  - Lucide React: ícones SVG

**Backend/Integrações:**
- Supabase (PostgreSQL gerenciado)
  - Autenticação JWT
  - Storage para arquivos exportados
  - Realtime subscriptions
- Google Sheets API
  - Leitura de dados de planilhas
  - Autenticação OAuth2
- Webhooks para automações

**Testes & QA:**
- Vitest: testes unitários
- Testing Library: testes de componentes
- jsdom: ambiente de teste do DOM

**Deployment:**
- Vite para build otimizado
- Lovable para inicialmente

### Aba 3: Funcionalidades

**Seção:** `## Funcionalidades Principais`

**Módulos Principais:**

1. **Importação de Google Sheets**
   - Conectar a conta Google
   - Selecionar planilha e abas
   - Configurar mapeamento de colunas
   - Importação em batch ou incremental
   - Histórico de importações

2. **Dashboard de KPIs**
   - Métricas principais em cards
   - Gráficos de tendências (área, barra, linha)
   - Filtros por período, categoria, status
   - Realtime updates
   - Exportação de dados do dashboard

3. **Gestão de Layouts**
   - Listagem de layouts com filtros
   - Edição de metadados
   - Status tracking (rascunho, em_producao, finalizado)
   - Atribuição a equipes
   - Histórico de mudanças

4. **Validação de Dados**
   - Validação automática de campos obrigatórios
   - Verificação de formatos (email, URL, etc.)
   - Detecção de duplicatas
   - Relatório de erros

5. **Exportação & Relatórios**
   - Exportar layouts em PDF
   - Gerar relatórios customizados
   - Agendar exportações automáticas
   - Email com relatórios

6. **Sincronização Automática**
   - Polling de Google Sheets em intervalos
   - Sincronização bidirecional (opcional)
   - Webhooks para eventos
   - Log de sincronizações

**Fluxos Críticos:**
- Usuário conecta Google Sheets → Seleciona abas → Mapeia colunas → Importa dados → Dashboard atualizado
- Dados importados → Validação automática → Erros destacados → Exportar relatório

### Aba 4: Banco de Dados

**Seção:** `## Banco de Dados`

**Arquitetura Supabase:**
- PostgreSQL gerenciado
- Row Level Security (RLS) habilitado
- Autenticação via JWT

**Tabelas Principais:**

**users**
- `id` (UUID, PK)
- `email` (String, unique)
- `full_name` (String)
- `role` (Enum: admin, user, viewer)
- `status` (Enum: ativo, inativo)
- `created_at`, `updated_at` (Timestamp)

**google_sheets_connections**
- `id` (UUID, PK)
- `user_id` (UUID, FK → users)
- `google_sheet_id` (String) — ID do Google Sheet
- `sheet_name` (String) — Nome da aba
- `access_token` (String, encrypted) — Token OAuth2
- `refresh_token` (String, encrypted)
- `token_expires_at` (Timestamp)
- `last_synced_at` (Timestamp)
- `status` (Enum: connected, expired, disconnected)
- `created_at`, `updated_at`

**layouts**
- `id` (UUID, PK)
- `user_id` (UUID, FK)
- `title` (String)
- `description` (Text)
- `status` (Enum: rascunho, em_producao, finalizado, arquivado)
- `category` (String)
- `assigned_to` (UUID, FK → users)
- `created_at`, `updated_at`

**imports**
- `id` (UUID, PK)
- `user_id` (UUID, FK)
- `google_sheets_connection_id` (UUID, FK)
- `rows_imported` (Integer)
- `rows_failed` (Integer)
- `import_status` (Enum: sucesso, parcial, erro)
- `error_details` (Text, JSON)
- `created_at`

**layout_kpis**
- `id` (UUID, PK)
- `layout_id` (UUID, FK)
- `metric_name` (String)
- `metric_value` (Decimal)
- `metric_date` (Date)
- `created_at`

**validations**
- `id` (UUID, PK)
- `layout_id` (UUID, FK)
- `validation_type` (String)
- `is_valid` (Boolean)
- `error_message` (Text)
- `validated_at` (Timestamp)

**Relacionamentos:**
```
users (1) ──→ (N) google_sheets_connections
users (1) ──→ (N) layouts
users (1) ──→ (N) imports

layouts (1) ──→ (N) layout_kpis
layouts (1) ──→ (N) validations

google_sheets_connections (1) ──→ (N) imports
```

**Segurança:**
- RLS em todas as tabelas
- Tokens OAuth2 criptografados em repouso
- Acesso restrito a dados do próprio usuário

### Aba 5: Resultados

**Seção:** `## Resultados & Impacto`

**Métricas de Sucesso:**
- Sistema importando X layouts por dia
- Redução de tempo de gestão manual em Y%
- Taxa de sucesso de importação > 95%
- Dashboard utilizado por Z usuários ativos
- Tempo de resposta do dashboard < 2s

**Casos de Uso Reais:**
- Agência importando 500+ layouts semanais automaticamente
- Equipe de validação economizando X horas/semana
- Relatórios automáticos enviados via email diariamente

**Aprendizados Principais:**
1. **Integração com APIs externas é complexa:** OAuth2, rate limiting, refresh tokens requerem cuidado especial
2. **Validação em tempo real melhora UX:** Feedback imediato reduz retrabalho
3. **Realtime updates são essenciais:** Usuários esperam ver dados atualizados
4. **Componentes reutilizáveis aceleram:** shadcn/ui foi fundamental para velocidade
5. **Testes de integração são críticos:** Testar fluxos com APIs reais evita problemas em produção

**Expansões Futuras:**
- Integração com Airtable, Monday.com
- IA para automação de categorização
- Mobile app
- Webhooks customizáveis para qualquer API

---

## 4. Ordem Final do Portfólio

```
1. CRM Monte Site (order: 1)
2. Gestão de Layouts Google Sheets (order: 2) ← NOVO
3. E-commerce de Alta Performance (order: 3)
4. ERP Avançado (order: 4)
5. Mobile First App (order: 5)
```

A navegação prev/next será ajustada automaticamente:
- CRM Monte Site: prev → Mobile, next → Gestão de Layouts
- Gestão de Layouts: prev → CRM Monte Site, next → E-commerce
- E-commerce: prev → Gestão de Layouts, next → ERP
- ERP: prev → E-commerce, next → Mobile
- Mobile: prev → ERP, next → CRM Monte Site

---

## 5. Impacto Visual

**Página Detalhada:**
- Header: "GESTÃO DE LAYOUTS GOOGLE SHEETS", categoria "PLATAFORMA DE AUTOMAÇÃO", ano "2024"
- Cor identificadora verde (#22c55e) nos badges de tecnologia
- 5 abas navegáveis reutilizando `ProjectTabs`
- Mesmo layout e estilo do CRM Monte Site

**Listagem (página inicial):**
- Ordem atualizada com Gestão de Layouts em segundo lugar
- Card com cor verde de identificação

---

## 6. Checklist de Implementação

- [ ] Criar arquivo `src/content/projects/gestaolayoutssheets.md`
- [ ] Adicionar campo `order` em todos os 5 projetos
- [ ] Verificar se a página [slug].astro renderiza corretamente para ambos os projetos
- [ ] Testar navegação prev/next
- [ ] Testar responsividade
- [ ] Commit de todos os arquivos

---

## 7. Notas Finais

Este projeto reutiliza completamente o componente `ProjectTabs` e segue o mesmo padrão de markdown do CRM Monte Site. Não requer mudanças estruturais na arquitetura, apenas adição de conteúdo e ajuste de ordenação.

A ordem dos projetos agora reflete importância/complexidade: CRM (gestão completa), depois Automação (integração), depois E-commerce, ERP, e Mobile.
