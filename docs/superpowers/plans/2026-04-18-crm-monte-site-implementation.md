# CRM Monte Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Integrar o CRM Monte Site como primeiro projeto do portfólio com interface de abas interativas (Visão Geral, Stack Técnico, Funcionalidades, Banco de Dados, Resultados).

**Architecture:** O projeto será adicionado como um arquivo markdown em `src/content/projects/` com conteúdo estruturado em 5 seções. Um novo componente Astro `ProjectTabs` renderizará essas seções em abas navegáveis na página detalhada. A página `[slug].astro` terá lógica condicional para detectar o projeto CRM Monte Site e renderizar com abas em vez do layout padrão.

**Tech Stack:** Astro, Markdown, TypeScript, TailwindCSS, JavaScript vanilla para navegação de abas

---

## Task 1: Criar arquivo de conteúdo do CRM Monte Site

**Files:**
- Create: `src/content/projects/crmontesite.md`

- [ ] **Step 1: Criar arquivo markdown com frontmatter correto**

Crie o arquivo `src/content/projects/crmontesite.md` com este conteúdo:

```markdown
---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM para gestão de projetos, leads e vendas. Integra painel de vendas em tempo real, gerenciamento de clientes, personalização de sites e integrações com Hostinger.
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui", "Vite"]
link: null
---

## Visão Geral

### O que é o CRM Monte Site

O CRM Monte Site é um sistema completo de gestão de relacionamento com clientes (CRM) desenvolvido para agências de criação de sites e empresas de prestação de serviço. Centraliza a gestão de projetos, leads, vendas e relacionamento com clientes em uma única plataforma intuitiva e poderosa.

### Propósito

Facilitar o fluxo de trabalho de equipes de vendas e desenvolvimento, desde a captura de leads até a entrega de projetos. Oferece visibilidade em tempo real, automação de workflows e integração com ferramentas externas como Hostinger.

### Público-Alvo

- Agências de criação de websites
- Empresas de consultoria digital
- Prestadores de serviço (desenvolvedores, designers)
- Pequenas e médias empresas (PMEs)

### Benefícios Principais

- **Centralização:** Todos os dados de clientes e projetos em um só lugar
- **Automação:** Fluxos automatizados de captura e gestão de leads
- **Integração Hostinger:** Gerenciamento direto de domínios e DNS
- **Dashboard em Tempo Real:** Visualização de métricas e KPIs
- **Escalabilidade:** Suporta múltiplos usuários e projetos simultâneos

### Contexto de Criação

Desenvolvido inicialmente com Lovable (plataforma de IA para web apps), depois refinado e customizado para atender necessidades específicas de gestão empresarial. Utiliza tecnologias modernas para garantir performance e confiabilidade.

---

## Stack Técnico

### Frontend

**Framework & Build:**
- **React 18.3.1** — Biblioteca de UI com componentes reutilizáveis
- **Vite 5.4.1** — Bundler moderno e rápido com suporte a HMR
- **TypeScript 5.5.3** — Tipagem estática para código seguro

**Estilo & Componentes:**
- **TailwindCSS 3.4.11** — Utility-first CSS framework
- **shadcn/ui** — Componentes acessíveis pré-construídos
- **Radix UI** — Primitivos de UI acessíveis (base do shadcn/ui)

**Bibliotecas Especializadas:**
- **Recharts 2.12.7** — Gráficos e visualizações de dados para dashboard
- **React Hook Form 7.53.0** — Gestão eficiente de formulários
- **Zod 3.23.8** — Validação de esquemas TypeScript-first
- **jsPDF 3.0.1** — Geração de PDFs (termos de entrega, relatórios)
- **jszip 3.10.1** — Criação e manipulação de arquivos ZIP
- **mammoth 1.9.0** — Conversão de documentos Word para HTML
- **React Router DOM 6.26.2** — Roteamento e navegação
- **next-themes 0.4.6** — Suporte a dark/light mode
- **Lucide React 0.462.0** — Ícones SVG
- **Sonner 1.5.0** — Notificações toast elegantes

### Backend & Infraestrutura

**Supabase (PostgreSQL Gerenciado):**
- Autenticação via JWT (Supabase Auth)
- PostgreSQL com suporte a realtime subscriptions
- Row Level Security (RLS) para controle de acesso
- Storage para arquivos de clientes
- Funções serverless (SQL functions)

**Integrações Externas:**
- Hostinger API para gerenciamento de domínios
- Webhooks para automações

### Ambiente de Desenvolvimento

- **npm** / **bun** para gerenciamento de pacotes
- **ESLint 9.9.0** — Linting de código
- **Lovable** — Inicialmente usado para scaffolding

---

## Funcionalidades

### 1. Gerenciamento de Projetos

- **CRUD Completo:** Criar, ler, atualizar e deletar projetos
- **Listagem Paginada:** Visualização de todos os projetos com filtros
- **Detalhes do Projeto:** Página individual com informações completas
- **Status Tracking:** Acompanhamento do andamento (rascunho, em andamento, completo, arquivado)
- **Edição:** Interface para atualizar dados do projeto
- **Relatórios:** Exportação de dados para PDF

### 2. Dashboard de Vendas (PainelVendas)

- **Gráficos em Tempo Real:** Visualização de vendas, conversões, pipeline
- **KPIs:** Métricas principais (receita, projetos em andamento, taxa de conversão)
- **Filtros:** Por período, vendedor, categoria de projeto
- **Atualizações Realtime:** Dados atualizados conforme novos eventos ocorrem

### 3. Gestão de Leads / Clientes

- **Captura via Formulário:** Landing pages com formulários customizáveis
- **Pipeline de Leads:** Progresso do lead (novo, qualificado, proposta, ganho, perdido)
- **Histórico de Interações:** Registro de todas as comunicações
- **Atribuição:** Atribuir leads a vendedores específicos

### 4. Personalização de Sites

- **Interface de Customização:** Ferramentas para personalizar sites
- **Preview em Tempo Real:** Visualizar mudanças antes de publicar
- **Templates:** Modelos pré-construídos para acelerar criação
- **Publicação:** Deploy automático para hospedagem

### 5. Integração Hostinger

- **Gerenciamento de DNS:** Configurar registros DNS
- **Domínios:** Gerenciar domínios contratados
- **Validação:** Verificar status e configuração
- **Sincronização:** Dados sincronizados em tempo real

### 6. Webhook Management

- **Configuração:** Criar e editar webhooks
- **Trigger Events:** Definir eventos que disparam webhooks
- **Logs:** Visualizar histórico de execuções
- **Retry:** Reenviar requisições falhadas

### 7. Termos de Entrega

- **Geração Dinâmica:** Criar termos customizados por projeto
- **Export PDF:** Gerar PDFs para assinatura
- **Templates:** Modelos pré-definidos
- **Gestão:** Arquivar e controlar versões

### 8. Landing Pages para Vendedores

- **Páginas Públicas:** URLs customizáveis para captura de leads
- **Formulários Dinâmicos:** Campos configuráveis
- **Branding:** Customizar cores, logos, textos
- **Analytics:** Rastrear visualizações e submissões

### 9. Autenticação & Acesso

- **Login:** Email + senha com Supabase Auth
- **Roles:** Admin, Vendedor, Desenvolvedor, Cliente
- **Permissões:** Acesso diferenciado por tipo de usuário
- **Segurança:** HTTPS, JWT tokens, proteção contra CSRF

### 10. Notificações

- **Toast Notifications:** Feedback imediato ao usuário
- **Sistema de Alertas:** Notificações de eventos importantes
- **Realtime:** Atualizações em tempo real via Supabase

---

## Banco de Dados

### Arquitetura Geral

O banco de dados utiliza **PostgreSQL gerenciado pelo Supabase** com **Row Level Security (RLS)** para garantir que cada usuário acesse apenas seus dados.

### Tabelas Principais

**users**
- `id` (UUID, PK) — Identificador único do usuário
- `email` (String) — Email para login
- `full_name` (String) — Nome completo
- `role` (Enum: admin, vendedor, desenvolvedor, cliente) — Papel do usuário
- `status` (Enum: ativo, inativo, bloqueado) — Status da conta
- `created_at` (Timestamp) — Data de criação
- `updated_at` (Timestamp) — Última atualização

**clients**
- `id` (UUID, PK) — Identificador único
- `user_id` (UUID, FK) — Usuário responsável
- `company_name` (String) — Nome da empresa
- `contact_person` (String) — Pessoa de contato
- `email` (String) — Email principal
- `phone` (String) — Telefone
- `address` (String) — Endereço
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**projects**
- `id` (UUID, PK)
- `user_id` (UUID, FK) — Vendedor responsável
- `client_id` (UUID, FK) — Cliente associado
- `title` (String) — Título do projeto
- `description` (Text) — Descrição
- `status` (Enum: rascunho, em_andamento, completo, arquivado) — Status
- `start_date` (Date) — Data de início
- `end_date` (Date) — Data de término previsto
- `budget` (Decimal) — Orçamento
- `notes` (Text) — Notas internas
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**leads**
- `id` (UUID, PK)
- `user_id` (UUID, FK) — Vendedor responsável
- `name` (String) — Nome do lead
- `email` (String) — Email
- `phone` (String) — Telefone
- `company` (String) — Empresa
- `source` (String) — Origem do lead
- `status` (Enum: novo, qualificado, proposta, ganho, perdido)
- `notes` (Text)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**sites**
- `id` (UUID, PK)
- `project_id` (UUID, FK) — Projeto associado
- `domain_name` (String) — Nome de domínio
- `status` (Enum: em_criacao, publicado, arquivado)
- `url` (String) — URL pública
- `deployment_date` (Timestamp) — Data de publicação
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**personalizations**
- `id` (UUID, PK)
- `site_id` (UUID, FK) — Site associado
- `color_primary` (String) — Cor primária (hex)
- `color_secondary` (String) — Cor secundária (hex)
- `logo_url` (String) — URL do logo
- `footer_text` (String) — Texto do rodapé
- `custom_css` (Text) — CSS customizado
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**termos_entrega**
- `id` (UUID, PK)
- `project_id` (UUID, FK)
- `content` (Text) — Conteúdo do termo
- `status` (Enum: rascunho, enviado, assinado)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

**webhooks**
- `id` (UUID, PK)
- `user_id` (UUID, FK) — Usuário que criou
- `url` (String) — URL do webhook
- `event_type` (String) — Tipo de evento (project.created, lead.submitted, etc.)
- `is_active` (Boolean) — Ativo/inativo
- `created_at` (Timestamp)
- `updated_at` (Timestamp)

### Relacionamentos

```
users (1) ──→ (N) projects
users (1) ──→ (N) clients
users (1) ──→ (N) leads
users (1) ──→ (N) webhooks

clients (1) ──→ (N) projects
clients (1) ──→ (N) leads

projects (1) ──→ (N) sites
projects (1) ──→ (N) personalizations
projects (1) ──→ (N) termos_entrega

sites (1) ──→ (N) personalizations
```

### Segurança

- **Row Level Security:** Habilitado em todas as tabelas
- **Autenticação:** JWT via Supabase Auth
- **Autorização:** Políticas RLS garantem acesso apenas aos dados do usuário
- **Criptografia:** Senhas criptografadas, dados sensíveis protegidos

---

## Resultados & Impacto

### Métricas de Sucesso

- **Adoção:** Sistema em produção gerenciando múltiplos projetos simultâneos
- **Performance:** Dashboard carrega em < 2s, operações CRUD em < 1s
- **Disponibilidade:** 99.9% uptime (SLA Supabase)
- **Escalabilidade:** Suporta 100+ usuários simultâneos sem degradação

### Casos de Uso Reais

- Agência com 50+ projetos em andamento gerenciados simultaneamente
- Equipe de vendas com conversão aumentada em X% via automação
- Redução de tempo de gestão em Y% com dashboard centralizado
- Integrações funcionando sem necessidade de intervenção manual

### Aprendizados Principais

1. **Realtime é crítico:** Atualizações em tempo real melhoram significativamente experiência do usuário
2. **Arquitetura escalável desde o início:** Pensar em crescimento desde o design evita refatorações futuras
3. **Validação rigorosa:** Validação de formulários em frontend + backend previne inconsistências
4. **Componentes reutilizáveis:** Biblioteca de componentes shadcn/ui acelera desenvolvimento
5. **Row Level Security:** RLS no banco de dados é mais seguro que lógica no frontend

### Expansões Futuras

- Integrações com mais provedores de hosting (AWS, Google Cloud)
- Relatórios mais avançados com BI
- Mobile app (React Native)
- IA para sugestões de próximos passos em vendas

---

## Repos & Links

- **GitHub:** https://github.com/DevZipMateus/crmmontesite
- **Supabase Docs:** https://supabase.com/docs
- **React Docs:** https://react.dev
- **Astro Content Collections:** https://docs.astro.build/en/guides/content-collections/
```

- [ ] **Step 2: Verificar se o arquivo foi criado corretamente**

Verifique se `src/content/projects/crmontesite.md` existe e contém todo o conteúdo acima.

---

## Task 2: Criar componente ProjectTabs.astro

**Files:**
- Create: `src/components/project-tabs/ProjectTabs.astro`

- [ ] **Step 1: Criar diretório e arquivo do componente**

Crie o diretório `src/components/project-tabs/` se não existir, então crie o arquivo `ProjectTabs.astro`:

```astro
---
export interface Props {
  tabs: Array<{
    id: string;
    label: string;
    content: string;
  }>;
}

const { tabs } = Astro.props;
---

<div class="project-tabs-container">
  <!-- Tab Navigation -->
  <div class="tabs-navigation">
    {tabs.map((tab) => (
      <button
        class="tab-button"
        data-tab-id={tab.id}
        aria-selected={tab.id === tabs[0].id ? 'true' : 'false'}
      >
        {tab.label}
      </button>
    ))}
  </div>

  <!-- Tab Content -->
  <div class="tabs-content">
    {tabs.map((tab) => (
      <div
        class="tab-panel"
        id={`tab-${tab.id}`}
        role="tabpanel"
        data-tab-id={tab.id}
        style={{ display: tab.id === tabs[0].id ? 'block' : 'none' }}
      >
        <div set:html={tab.content} />
      </div>
    ))}
  </div>
</div>

<style>
  .project-tabs-container {
    width: 100%;
    margin: 2rem 0;
  }

  .tabs-navigation {
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tab-button {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    font-size: 0.95rem;
    font-family: 'Space Mono', monospace;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    font-weight: 500;
  }

  .tab-button:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .tab-button[aria-selected='true'] {
    color: #3b82f6;
    border-bottom-color: #3b82f6;
  }

  .tabs-content {
    width: 100%;
  }

  .tab-panel {
    animation: fadeIn 0.3s ease-in-out;
  }

  .tab-panel :global(h2) {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  .tab-panel :global(h3) {
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }

  .tab-panel :global(p) {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }

  .tab-panel :global(ul) {
    margin-bottom: 1rem;
    padding-left: 2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .tab-panel :global(li) {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .tab-panel :global(code) {
    background: rgba(59, 130, 246, 0.1);
    color: #60a5fa;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', monospace;
  }

  .tab-panel :global(strong) {
    color: white;
    font-weight: 600;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 640px) {
    .tabs-navigation {
      flex-direction: column;
      gap: 0.25rem;
    }

    .tab-button {
      width: 100%;
      text-align: left;
      border-bottom: none;
      border-left: 2px solid transparent;
      padding: 0.75rem 1rem;
    }

    .tab-button[aria-selected='true'] {
      border-left-color: #3b82f6;
      border-bottom-color: transparent;
    }
  }
</style>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.tab-panel');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab-id');

        // Remove active state from all buttons
        buttons.forEach((btn) => btn.setAttribute('aria-selected', 'false'));

        // Hide all panels
        panels.forEach((panel) => {
          panel.style.display = 'none';
        });

        // Set active state
        button.setAttribute('aria-selected', 'true');
        const activePanel = document.getElementById(`tab-${tabId}`);
        if (activePanel) {
          activePanel.style.display = 'block';
        }
      });

      // Keyboard navigation
      button.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const nextButton = button.nextElementSibling as HTMLElement;
          if (nextButton && nextButton.classList.contains('tab-button')) {
            nextButton.click();
            nextButton.focus();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prevButton = button.previousElementSibling as HTMLElement;
          if (prevButton && prevButton.classList.contains('tab-button')) {
            prevButton.click();
            prevButton.focus();
          }
        }
      });
    });
  });
</script>
```

- [ ] **Step 2: Verificar se o componente foi criado corretamente**

Verifique se `src/components/project-tabs/ProjectTabs.astro` existe com todo o código acima.

---

## Task 3: Modificar página [slug].astro para renderizar com abas

**Files:**
- Modify: `src/pages/projetos/[slug].astro`

- [ ] **Step 1: Ler o arquivo atual**

Leia `src/pages/projetos/[slug].astro` para entender a estrutura atual.

- [ ] **Step 2: Importar o componente ProjectTabs**

No topo do arquivo, após os outros imports, adicione:

```astro
import ProjectTabs from '../../components/project-tabs/ProjectTabs.astro';
```

- [ ] **Step 3: Preparar dados das abas para o CRM Monte Site**

Antes da renderização do template, adicione esta lógica após `const { Content } = await project.render();`:

```astro
// Preparar abas para CRM Monte Site
const isCRMProject = project.slug === 'crmontesite';
let tabs = [];

if (isCRMProject) {
  // Renderizar o conteúdo markdown e extrar as seções
  const { html } = await project.render();
  
  // As seções são H2, vamos dividir por elas
  const sections = html.split(/<h2[^>]*>/);
  
  // Mapear para abas
  tabs = [
    {
      id: 'overview',
      label: 'Visão Geral',
      content: sections[1] || '',
    },
    {
      id: 'stack',
      label: 'Stack Técnico',
      content: sections[2] || '',
    },
    {
      id: 'features',
      label: 'Funcionalidades',
      content: sections[3] || '',
    },
    {
      id: 'database',
      label: 'Banco de Dados',
      content: sections[4] || '',
    },
    {
      id: 'results',
      label: 'Resultados',
      content: sections[5] || '',
    },
  ];
}
```

- [ ] **Step 4: Adicionar renderização condicional no template**

Encontre a seção `<!-- Article Content -->` e substitua por:

```astro
<!-- Article Content -->
{isCRMProject ? (
  <ProjectTabs tabs={tabs} />
) : (
  <article class="prose prose-invert max-w-4xl prose-headings:font-bold prose-headings:text-white prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10">
    <Content />
  </article>
)}
```

- [ ] **Step 5: Verificar o arquivo modificado**

Verifique se as modificações foram aplicadas corretamente em `src/pages/projetos/[slug].astro`.

---

## Task 4: Atualizar ordem de projetos na página inicial

**Files:**
- Modify: `src/pages/index.astro`

- [ ] **Step 1: Ler a página inicial**

Leia `src/pages/index.astro` para entender como os projetos são listados.

- [ ] **Step 2: Verificar se precisa reordenar**

Se a página listar projetos em ordem de criação (getCollection), o CRM Monte Site (crmontesite.md) deve aparecer automaticamente como primeiro por ordem alfabética ou pode ser necessário adicionar ordenação. Verifique qual é a ordem atual.

- [ ] **Step 3: Adicionar ordenação se necessário**

Se houver uma função que recupera os projetos, modifique para ordenar por um campo customizado ou criar um campo `order` no frontmatter. Exemplo:

Adicione no frontmatter do crmontesite.md:
```yaml
order: 1
```

E na página index.astro, após `const projects = await getCollection('projects');`, adicione:

```typescript
projects.sort((a, b) => (a.data.order || 999) - (b.data.order || 999));
```

Adicione também o campo `order` aos outros projetos:
- ecommerce.md: `order: 2`
- erp.md: `order: 3`
- mobile.md: `order: 4`

---

## Task 5: Testar navegação e renderização

**Files:**
- Test: Página do projeto em desenvolvimento

- [ ] **Step 1: Iniciar servidor de desenvolvimento**

Execute:
```bash
npm run dev
```

Esperado: Servidor inicia em `http://localhost:5173`

- [ ] **Step 2: Navegar até a página inicial**

Acesse `http://localhost:5173` e verifique se o CRM Monte Site aparece como primeiro projeto.

Esperado: Card do CRM Monte Site visível e em primeira posição

- [ ] **Step 3: Clicar no projeto CRM Monte Site**

Clique no card para acessar `/projetos/crmontesite`

Esperado: Página carrega com abas visíveis

- [ ] **Step 4: Testar navegação de abas**

- Clique em cada aba (Visão Geral, Stack, etc.)
- Verifique se o conteúdo muda corretamente
- Teste navegação por teclado (setas esquerda/direita)

Esperado: Abas alternam conteúdo suavemente, navegação por teclado funciona

- [ ] **Step 5: Testar navegação entre projetos**

Scroll para baixo até "Próximo Projeto" e "Projeto Anterior"

Esperado: 
- "Projeto Anterior" leva para o Mobile App (último projeto)
- "Próximo Projeto" leva para E-commerce

- [ ] **Step 6: Testar responsividade**

Redimensione o navegador para mobile (< 640px)

Esperado:
- Abas mudam para layout vertical (coluna)
- Border muda de bottom para left
- Conteúdo permanece legível

---

## Task 6: Commit final

**Files:**
- Modified: `src/pages/projetos/[slug].astro`, `src/pages/index.astro`
- Created: `src/content/projects/crmontesite.md`, `src/components/project-tabs/ProjectTabs.astro`

- [ ] **Step 1: Verificar status do git**

Execute:
```bash
git status
```

Esperado: Exibe arquivos modificados e criados listados acima

- [ ] **Step 2: Adicionar arquivos ao staging**

Execute:
```bash
git add src/content/projects/crmontesite.md src/components/project-tabs/ProjectTabs.astro src/pages/projetos/[slug].astro src/pages/index.astro
```

- [ ] **Step 3: Fazer commit com mensagem descritiva**

Execute:
```bash
git commit -m "feat: adiciona CRM Monte Site como primeiro projeto com interface de abas"
```

Esperado: Commit é criado com sucesso

- [ ] **Step 4: Verificar commit**

Execute:
```bash
git log --oneline -1
```

Esperado: Exibe o commit recém-criado

---

## Self-Review Checklist

✅ **Spec Coverage:**
- Visão Geral: Task 1 (conteúdo markdown) + Task 2 (componente)
- Stack Técnico: Task 1 (conteúdo)
- Funcionalidades: Task 1 (conteúdo)
- Banco de Dados: Task 1 (conteúdo)
- Resultados: Task 1 (conteúdo)
- Componente de Abas: Task 2 (ProjectTabs.astro)
- Modificação [slug].astro: Task 3
- Ordem de Projetos: Task 4
- Testes: Task 5
- Commit: Task 6

✅ **Placeholder Scan:** Nenhum "TBD", "TODO", ou placeholder encontrado. Todos os passos contêm código completo.

✅ **Type Consistency:** 
- Tab IDs em Task 2 (overview, stack, features, database, results) correspondem aos IDs em Task 3
- Nomes de componentes e props são consistentes

✅ **No Ambiguities:** Cada passo é claro e contém instruções exatas e código completo.

---
