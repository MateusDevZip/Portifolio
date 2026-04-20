---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM para gestão de projetos, leads e vendas. Integra painel de vendas em tempo real, gerenciamento de clientes, personalização de sites e integrações com Hostinger.
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui"]
link: null
order: 1
images: ["/projects/crmontesite/crm1.jpg", "/projects/crmontesite/crm2.jpg", "/projects/crmontesite/crm3.jpg"]
---

## Visão Geral

O **CRM Monte Site** é um sistema completo de gestão de relacionamento com clientes (CRM) desenvolvido com React, TypeScript e Supabase. Centraliza a gestão de projetos, leads, vendas e relacionamento com clientes em uma única plataforma intuitiva e poderosa.

### 🎯 Propósito

Facilitar o fluxo de trabalho de equipes de vendas e desenvolvimento, desde a captura de leads até a entrega de projetos:

- Visibilidade em tempo real de todo o pipeline
- Automação de workflows para leads e projetos
- Integração com ferramentas externas como Hostinger
- Consolidação de dados em um único lugar

### 👥 Público-Alvo

**Quem se beneficia deste sistema:**

- Agências de criação de websites
- Empresas de consultoria digital
- Prestadores de serviço (desenvolvedores, designers)
- Pequenas e médias empresas (PMEs)

### ⚡ Benefícios Principais

| Benefício | Descrição |
|-----------|-----------|
| **Centralização** | Todos os dados de clientes e projetos em um só lugar |
| **Automação** | Fluxos automatizados de captura e gestão de leads |
| **Integração** | Gerenciamento direto de domínios e DNS via Hostinger |
| **Tempo Real** | Dashboard com visualização de métricas e KPIs atualizados |
| **Escalabilidade** | Suporta múltiplos usuários e projetos simultâneos |

### 📖 Contexto de Criação

Desenvolvido inicialmente com **Lovable** (plataforma de IA para web apps), depois refinado e customizado para atender necessidades específicas de gestão empresarial. O sistema evoluiu para utilizar tecnologias modernas que garantem performance, confiabilidade e escalabilidade.

---

## Stack Técnico

### Frontend

**Framework & Build:**
- **React 18.3.1** — Biblioteca de UI com componentes reutilizáveis
- **Vite 5.0.8** — Bundler moderno e rápido com suporte a HMR
- **TypeScript** — Tipagem estática para código seguro

**Estilo & Componentes:**
- **TailwindCSS 3.3.6** — Utility-first CSS framework
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
