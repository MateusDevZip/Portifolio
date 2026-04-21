---
title: Colar
year: 2025
category: Sistema Web / Gestão Doméstica
description: Aplicação web colaborativa para gerenciar finanças, tarefas e inventário de forma compartilhada entre casais, colegas de quarto e amigos que dividem moradia.
color: "#f6d43b"
technologies: ["Python", "Flask", "JavaScript", "Tailwind CSS", "Jinja2", "Supabase", "Chart.js", "HTML5"]
link: null
order: 4
images: []
metrics:
  - value: "Em Desenvolvimento"
    label: "Status do Projeto"
    color: blue
  - value: "4"
    label: "Módulos Principais"
    color: green
  - value: "100%"
    label: "Dark Mode Premium"
    color: white
---

## Visão Geral

O **Colar** é uma aplicação web moderna desenvolvida com Flask e Supabase para ajudar famílias, casais e grupos de amigos a organizarem suas finanças, tarefas e inventário de forma colaborativa e transparente. Com uma interface elegante em dark mode e design totalmente responsivo, o Colar oferece uma experiência intuitiva e premium.

### 🎯 Propósito

Facilitar a organização e divisão de despesas domésticas entre pessoas que compartilham moradia, eliminando a complexidade de rastrear quem gastou o quê e quanto cada um deve aos outros.

### 👥 Público-Alvo

**Quem se beneficia deste sistema:**

- Casais que compartilham despesas domésticas
- Colegas de quarto em repúblicas
- Grupos de amigos em convivência compartilhada
- Famílias que desejam organizar finanças colaborativamente

### ⚡ Principais Benefícios

| Benefício | Descrição |
|-----------|-----------|
| **Transparência Total** | Todos veem exatamente quem gastou, quanto e em quê |
| **Divisão Automática** | Sistema calcula automaticamente quem deve a quem |
| **Controle Compartilhado** | Múltiplos usuários podem gerenciar finanças juntos |
| **Análise de Gastos** | Gráficos interativos mostram padrões de consumo |
| **Organização Doméstica** | Além de finanças, gerencie tarefas e inventário |
| **Fácil Colaboração** | Convites via código para adicionar novos membros |
| **Interface Premium** | Design moderno com dark mode e animações suaves |

---

## Stack Técnico

### Backend

**Framework & Runtime:**
- **Python 3.12** — Linguagem principal do servidor
- **Flask 3.1.0** — Micro-framework web leve e flexível
- **python-dotenv 1.0.1** — Gerenciamento de variáveis de ambiente

**Templates & Rendering:**
- **Jinja2** — Motor de templates para renderização dinâmica de HTML

### Frontend

**Markup & Interatividade:**
- **HTML5** — Estrutura semântica e acessível
- **JavaScript (ES6+)** — Lógica do cliente com JavaScript vanilla modular

**Estilo & Design:**
- **Tailwind CSS (CDN)** — Framework CSS utilitário com suporte nativo a dark mode
- **Tailwind Dark Mode** — Interface escura premium com gradientes personalizados

**Visualização de Dados:**
- **Chart.js** — Gráficos interativos (linha, rosca, barra)
- **Animations CSS** — Micro-animações para melhor UX

**Tipografia & Ícones:**
- **Google Fonts** — Tipografia moderna (Outfit, Inter, Nunito)
- **Font Awesome 6** — Ícones vetoriais escaláveis
- **Material Icons** — Ícones do Material Design

### Backend como Serviço (BaaS)

**Banco de Dados & Autenticação:**
- **Supabase** — Platform PostgreSQL gerenciada
- **Supabase Auth** — Autenticação via email/senha, Google e Facebook
- **PostgreSQL** — Banco de dados relacional robusto
- **Row Level Security (RLS)** — Segurança em nível de linha
- **Supabase JS Client** — SDK JavaScript para requisições do frontend

---

## Funcionalidades

### 1. Gestão Financeira

- **CRUD Completo:** Criar, ler, atualizar e deletar transações
- **Tipos de Transação:** Receitas e despesas com categorização
- **Cartões Múltiplos:** Controle de cartões de crédito e débito
- **Divisão de Gastos:** Rastrear quem deve a quem no grupo
- **Filtros Avançados:** Buscar por data, categoria, cartão, tipo, membro
- **Recorrências:** Suporte a transações recorrentes (contas fixas)
- **Exportação:** Exportar dados financeiros em diferentes formatos

### 2. Dashboard Interativo

- **Cards de Resumo:** Visão rápida de receita, despesa, saldo, gastos fixos
- **Gráfico de Evolução:** Últimos 6 meses de atividade financeira
- **Gráfico de Categorias:** Distribuição de despesas por categoria em rosca
- **Timeline de Atividades:** Histórico recente de transações
- **Lista de Tarefas do Dia:** Tarefas pendentes dos membros do grupo
- **Responsividade:** Adapta perfeitamente a qualquer tamanho de tela

### 3. Gestão de Tarefas

- **CRUD de Tarefas:** Criar, editar e deletar tarefas
- **Atribuição:** Designar tarefas a membros específicos
- **Status:** Pendente, em andamento, concluído
- **Compartilhado:** Todos os membros veem o mesmo board
- **Priorização:** Marcar tarefas como importantes

### 4. Inventário da Casa

- **Registro de Itens:** Adicionar e categorizar itens do lar
- **Controle de Quantidade:** Rastrear quantidades de suprimentos
- **Alertas:** Notificações quando itens estão acabando
- **Categorização:** Organizar por tipo (alimentos, limpeza, etc)
- **Histórico:** Ver quando itens foram adicionados/atualizados

### 5. Colaboração em Grupo

- **Grupos Colaborativos:** Criar espaços para diferentes moradores
- **Convites:** Código único de 12 caracteres para convidar membros
- **Alternância Rápida:** Mudar entre grupos facilmente
- **Nomes Personalizados:** Customizar como as pessoas aparecem
- **Histórico Compartilhado:** Timeline de atividades de todos os membros
- **Permissões:** Controle de quem pode fazer o quê no grupo

### 6. Autenticação & Segurança

- **Login:** Email + senha com Supabase Auth
- **Registro:** Cadastro simples com validação
- **Recuperação de Senha:** Email de reset seguro
- **OAuth:** Login com Google e Facebook
- **Row Level Security:** Dados isolados por usuário/grupo
- **HTTPS:** Comunicação criptografada

---

## Arquitetura

### Fluxo de Dados

1. **Frontend** (JavaScript/Tailwind) envia requisições HTTP para o servidor
2. **Backend** (Flask) processa requisições e valida dados
3. **Supabase** armazena dados de forma segura com RLS
4. **Frontend** recebe dados e atualiza a interface em tempo real

### Estrutura de Grupos

```
User (1) ──→ (N) Groups
Groups (1) ──→ (N) Members
Groups (1) ──→ (N) Transactions
Groups (1) ──→ (N) Tasks
Groups (1) ──→ (N) Inventory
```

Cada grupo é isolado e apenas seus membros têm acesso aos dados.

---

## Características Visuais

### Design System

- **Tema:** Dark Mode premium com gradientes personalizados
- **Cores Principais:** Azul, verde, amarelo, com acentos dourados
- **Tipografia:** Outfit para títulos, Inter para corpo
- **Ícones:** Font Awesome + Material Icons para consistência
- **Responsividade:** Mobile-first, adaptável a qualquer resolução
- **Acessibilidade:** Contraste adequado, navegação por teclado

### Micro-animações

- Transições suaves em hover
- Animações de entrada para elementos
- Feedback visual em cliques
- Carregamento elegante de dados

---

## Status de Desenvolvimento

### Módulos Completos ✅

- ✅ Autenticação (login/registro com Supabase)
- ✅ Dashboard com gráficos Chart.js
- ✅ Gestão de transações financeiras
- ✅ Interface dark mode responsiva

### Em Progresso 🔄

- 🔄 Funcionalidades de tarefas
- 🔄 Sistema de inventário
- 🔄 Otimizações de performance

### Planejado 📋

- 📋 Notificações em tempo real
- 📋 Mobile app (React Native)
- 📋 Integração com APIs bancárias
- 📋 Relatórios avançados com BI
- 📋 Chatbot com IA para dicas de economia

---

## Aprendizados

1. **Supabase RLS é poderoso:** Segurança ao nível do banco de dados
2. **Dark mode melhora UX:** Usuários passam mais tempo na aplicação
3. **Gráficos motivam:** Visualizar dados financeiros inspira melhor gestão
4. **Colaboração é complexa:** Múltiplos usuários exigem sincronização cuidadosa
5. **Templates Jinja2 flexíveis:** Renderização dinâmica facilita prototipagem rápida

---

## Próximas Etapas

- [ ] Deploy em produção (Heroku/Render)
- [ ] Testes automatizados e CI/CD
- [ ] Performance profiling e otimizações
- [ ] Feedback de usuários iniciais
- [ ] Expansão de funcionalidades baseado em uso real
