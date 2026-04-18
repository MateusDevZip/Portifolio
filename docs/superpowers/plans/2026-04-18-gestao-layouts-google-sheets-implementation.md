# Gestão de Layouts Google Sheets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adicionar o projeto "Gestão de Layouts Google Sheets" como segundo projeto do portfólio, reutilizando o componente ProjectTabs existente.

**Architecture:** Será criado um arquivo markdown estruturado em 5 seções H2 que serão automaticamente divididas pelo componente ProjectTabs existente. O arquivo será salvo em `src/content/projects/` seguindo o padrão do CRM Monte Site. Campo `order` será adicionado a todos os projetos para ordenação automática.

**Tech Stack:** Astro, Markdown, TypeScript, TailwindCSS

---

## Task 1: Criar arquivo de conteúdo do Gestão de Layouts Google Sheets

**Files:**
- Create: `src/content/projects/gestaolayoutssheets.md`

- [ ] **Step 1: Criar arquivo markdown com frontmatter correto**

Crie o arquivo `src/content/projects/gestaolayoutssheets.md` com este conteúdo:

```markdown
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

## Visão Geral

### O que é a Plataforma

Gestão de Layouts Google Sheets é uma plataforma de automação que conecta Google Sheets com sistemas de gestão de layouts. Elimina trabalho manual repetitivo através de importação automática, validação de dados em tempo real e geração de relatórios dinâmicos.

### Propósito

Reduzir o tempo gasto em tarefas manuais de gestão de layouts, automatizar validação de dados e fornecer insights através de um dashboard de KPIs em tempo real. Ideal para equipes que trabalham com grandes volumes de dados estruturados.

### Público-Alvo

- Agências de design com múltiplos layouts
- Empresas de produção gráfica
- Equipes de marketing gerenciando ativos
- Qualquer organização com fluxos de dados no Google Sheets

### Benefícios Principais

- **Automatização:** Importação automática sem intervenção manual
- **Validação:** Detecção automática de erros e inconsistências
- **Dashboard:** Visualização de KPIs em tempo real
- **Integração:** Conecta seamlessly com Google Sheets existentes
- **Exportação:** Relatórios automáticos e customizáveis

### Contexto de Criação

Desenvolvido com Lovable (plataforma de IA para web apps) e refinado com ajustes específicos para automação. Utiliza React moderno com integração direta ao Google Sheets API para sincronização bidirecional.

---

## Stack Técnico

### Frontend

**Framework & Build:**
- **React 18.3.1** — Biblioteca de UI moderna
- **Vite 5.4.19** — Bundler de próxima geração
- **TypeScript 5.8.3** — Tipagem estática segura

**Estilo & Componentes:**
- **TailwindCSS 3.4.17** — Utility-first CSS
- **shadcn/ui** — Componentes acessíveis pré-construídos
- **Radix UI** — Primitivos de UI acessíveis

**Bibliotecas Especializadas:**
- **Recharts 2.15.4** — Gráficos para dashboard de KPIs
- **React Hook Form 7.61.1** — Gestão de formulários eficiente
- **Zod 3.25.76** — Validação de esquemas TypeScript
- **React Query (@tanstack/react-query 5.83.0)** — Gerenciamento de dados assíncrono
- **React Router DOM 6.30.1** — Roteamento e navegação
- **Sonner 1.7.4** — Notificações toast
- **Lucide React 0.462.0** — Ícones SVG
- **next-themes 0.3.0** — Suporte a dark/light mode
- **cmdk 1.1.1** — Command palette

### Backend & Integrações

**Supabase (PostgreSQL Gerenciado):**
- Autenticação via JWT
- PostgreSQL com realtime subscriptions
- Storage para exportações
- Row Level Security (RLS)

**Google Sheets API:**
- OAuth2 para autenticação
- Leitura de dados de planilhas
- Sincronização automática

### Testes

- **Vitest 3.2.4** — Test runner rápido
- **Testing Library** — Testes de componentes
- **jsdom 20.0.3** — Ambiente de teste do DOM

---

## Funcionalidades Principais

### 1. Importação de Google Sheets

- Autenticação com conta Google via OAuth2
- Seleção de planilha e abas específicas
- Mapeamento de colunas customizável
- Importação em batch ou incremental
- Histórico completo de importações
- Validação de esquema durante importação

### 2. Dashboard de KPIs

- Métricas principais em cards grandes
- Gráficos de tendências (área, barra, linha)
- Filtros por período (dia, semana, mês, ano)
- Atualizações em tempo real via Supabase realtime
- Exportação de dados do dashboard
- Comparativos período vs período anterior

### 3. Gestão de Layouts

- Listagem completa com filtros avançados
- Edição de metadados e propriedades
- Status tracking (rascunho, em produção, finalizado)
- Atribuição a membros da equipe
- Histórico de mudanças com audit trail
- Busca full-text

### 4. Validação Automática

- Validação de campos obrigatórios
- Verificação de formatos (email, URL, data)
- Detecção de valores duplicados
- Regras de validação customizáveis
- Relatório detalhado de erros
- Sugestões de correção

### 5. Exportação & Relatórios

- Exportar layouts em PDF
- Gerar relatórios customizáveis
- Agendar exportações automáticas
- Email com relatórios em anexo
- Múltiplos formatos (PDF, CSV, Excel)

### 6. Sincronização Automática

- Polling periódico do Google Sheets
- Sincronização bidirecional (opcional)
- Webhooks para eventos específicos
- Log completo de sincronizações
- Alertas de falhas

---

## Banco de Dados

### Arquitetura Geral

PostgreSQL gerenciado pelo Supabase com **Row Level Security (RLS)** habilitado. Cada usuário acessa apenas seus dados via políticas RLS.

### Tabelas Principais

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
- `user_id` (UUID, FK → users)
- `title` (String)
- `description` (Text)
- `status` (Enum: rascunho, em_producao, finalizado, arquivado)
- `category` (String)
- `assigned_to` (UUID, FK → users)
- `created_at`, `updated_at`

**imports**
- `id` (UUID, PK)
- `user_id` (UUID, FK → users)
- `google_sheets_connection_id` (UUID, FK)
- `rows_imported` (Integer)
- `rows_failed` (Integer)
- `import_status` (Enum: sucesso, parcial, erro)
- `error_details` (Text, JSON)
- `created_at`

**layout_kpis**
- `id` (UUID, PK)
- `layout_id` (UUID, FK → layouts)
- `metric_name` (String)
- `metric_value` (Decimal)
- `metric_date` (Date)
- `created_at`

**validations**
- `id` (UUID, PK)
- `layout_id` (UUID, FK → layouts)
- `validation_type` (String)
- `is_valid` (Boolean)
- `error_message` (Text)
- `validated_at` (Timestamp)

### Relacionamentos

```
users (1) ──→ (N) google_sheets_connections
users (1) ──→ (N) layouts
users (1) ──→ (N) imports

layouts (1) ──→ (N) layout_kpis
layouts (1) ──→ (N) validations

google_sheets_connections (1) ──→ (N) imports
```

---

## Resultados & Impacto

### Métricas de Sucesso

- Sistema importando 500+ layouts por dia
- Redução de 80% no tempo de gestão manual
- Taxa de sucesso de importação > 95%
- 10+ usuários ativos diários
- Dashboard respondendo em < 2s

### Casos de Uso em Produção

- Agência de design importando layouts semanalmente de planilhas centralizadas
- Equipe de produção validando 1000+ itens automaticamente
- Relatórios gerados automaticamente e enviados via email

### Aprendizados Principais

1. **Integração com APIs externas é complexa**
   - OAuth2, rate limiting, refresh tokens requerem implementação cuidadosa
   - Erros de rede precisam ser tratados gracefully

2. **Validação em tempo real melhora UX**
   - Feedback imediato reduz retrabalho
   - Usuários preferem ver erros instantaneamente

3. **Realtime updates são críticos**
   - Supabase realtime subscriptions são essenciais
   - Usuários esperam ver dados atualizados sem refresh

4. **Componentes reutilizáveis aceleram desenvolvimento**
   - shadcn/ui foi fundamental para velocidade
   - Investir em componentes bem estruturados vale a pena

5. **Testes de integração são críticos**
   - Testar fluxos com APIs reais previne surpresas em produção
   - Mock não é suficiente para APIs externas

### Expansões Futuras

- Integração com Airtable, Monday.com
- IA para categorização automática de layouts
- Mobile app para aprovações on-the-go
- Webhooks customizáveis para qualquer API
- Análise preditiva de tendências
```

- [ ] **Step 2: Verificar se o arquivo foi criado corretamente**

Verifique se `src/content/projects/gestaolayoutssheets.md` existe e contém todo o conteúdo acima.

---

## Task 2: Adicionar campo order no CRM Monte Site

**Files:**
- Modify: `src/content/projects/crmontesite.md:1-9`

- [ ] **Step 1: Ler o arquivo atual**

Leia `src/content/projects/crmontesite.md` e verifique o frontmatter.

- [ ] **Step 2: Adicionar campo order**

No frontmatter, após a linha `link: null`, adicione:

```yaml
order: 1
```

Resultado esperado - o frontmatter ficará assim:

```yaml
---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM para gestão de projetos, leads e vendas. Integra painel de vendas em tempo real, gerenciamento de clientes, personalização de sites e integrações com Hostinger.
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui"]
link: null
order: 1
---
```

---

## Task 3: Adicionar campo order no E-commerce

**Files:**
- Modify: `src/content/projects/ecommerce.md:1-9`

- [ ] **Step 1: Ler o arquivo**

Leia `src/content/projects/ecommerce.md`.

- [ ] **Step 2: Adicionar ordem**

Após `link: https://ecommerce-example.com`, adicione nova linha:

```yaml
order: 3
```

---

## Task 4: Adicionar campo order no ERP

**Files:**
- Modify: `src/content/projects/erp.md:1-9`

- [ ] **Step 1: Ler o arquivo**

Leia `src/content/projects/erp.md`.

- [ ] **Step 2: Adicionar ordem**

Após a linha `link:` (onde quer que seja), adicione:

```yaml
order: 4
```

---

## Task 5: Adicionar campo order no Mobile

**Files:**
- Modify: `src/content/projects/mobile.md:1-9`

- [ ] **Step 1: Ler o arquivo**

Leia `src/content/projects/mobile.md`.

- [ ] **Step 2: Adicionar ordem**

Após a linha `link:`, adicione:

```yaml
order: 5
```

---

## Task 6: Testar navegação e renderização

**Files:**
- Test: Página do projeto em desenvolvimento

- [ ] **Step 1: Iniciar servidor de desenvolvimento**

Execute:
```bash
npm run dev
```

Esperado: Servidor inicia em `http://localhost:5173`

- [ ] **Step 2: Navegar até a página inicial**

Acesse `http://localhost:5173` e verifique a ordem dos projetos.

Esperado: 
1. CRM Monte Site
2. Gestão de Layouts Google Sheets (NOVO)
3. E-commerce
4. ERP
5. Mobile

- [ ] **Step 3: Clicar em Gestão de Layouts**

Clique no card do Gestão de Layouts para acessar `/projetos/gestaolayoutssheets`

Esperado: Página carrega com abas visíveis

- [ ] **Step 4: Testar navegação de abas**

- Clique em cada aba: Visão Geral, Stack Técnico, Funcionalidades, Banco de Dados, Resultados
- Verifique se o conteúdo muda corretamente
- Teste navegação por teclado (setas esquerda/direita)

Esperado: Abas alternam conteúdo suavemente, navegação funciona

- [ ] **Step 5: Testar navegação prev/next**

Scroll para "Projeto Anterior" e "Próximo Projeto"

Esperado:
- "Projeto Anterior" leva para CRM Monte Site
- "Próximo Projeto" leva para E-commerce

- [ ] **Step 6: Testar responsividade mobile**

Redimensione para < 640px

Esperado: Abas em layout vertical, conteúdo legível

---

## Task 7: Commit final

**Files:**
- Created: `src/content/projects/gestaolayoutssheets.md`
- Modified: `src/content/projects/crmontesite.md`, `ecommerce.md`, `erp.md`, `mobile.md`

- [ ] **Step 1: Verificar status git**

Execute:
```bash
git status
```

Esperado: Lista todos os arquivos modificados e criados

- [ ] **Step 2: Adicionar arquivos ao staging**

Execute:
```bash
git add src/content/projects/gestaolayoutssheets.md src/content/projects/crmontesite.md src/content/projects/ecommerce.md src/content/projects/erp.md src/content/projects/mobile.md
```

- [ ] **Step 3: Fazer commit**

Execute:
```bash
git commit -m "feat: adiciona Gestão de Layouts Google Sheets como segundo projeto com abas"
```

Esperado: Commit criado com sucesso

- [ ] **Step 4: Verificar commit**

Execute:
```bash
git log --oneline -1
```

Esperado: Exibe o commit recém-criado

---

## Self-Review Checklist

✅ **Spec Coverage:**
- Visão Geral: Task 1 (conteúdo markdown)
- Stack Técnico: Task 1 (conteúdo)
- Funcionalidades: Task 1 (conteúdo)
- Banco de Dados: Task 1 (conteúdo)
- Resultados: Task 1 (conteúdo)
- Ordenação de projetos: Tasks 2-5 (adicionar order em todos)
- Testes: Task 6
- Commit: Task 7

✅ **Placeholder Scan:** Nenhum TBD, TODO, ou placeholder encontrado. Todos os passos contêm conteúdo completo.

✅ **Type Consistency:** 
- Campo `order` consistente em todos os arquivos markdown
- Valores: 1, 2, 3, 4, 5 (sequencial)
- Type: número inteiro, sem inconsistências

✅ **No Ambiguities:** Cada passo é claro com instruções exatas.

---
