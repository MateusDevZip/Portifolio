# CRM Monte Site - Design Spec

**Data:** 2026-04-18  
**Objetivo:** Integrar o projeto CRM Monte Site como o primeiro projeto do portfólio com apresentação em abas interativas

---

## 1. Visão Geral

O CRM Monte Site é um sistema completo de gestão de relacionamento com clientes (CRM) desenvolvido com React, TypeScript e Supabase. Será adicionado ao portfólio como o projeto de destaque (primeiro da lista) com uma página detalhada organizada em 5 abas temáticas para melhor legibilidade e navegação.

**Tipo de Projeto:** Plataforma SaaS / Gestão Empresarial  
**Ano:** 2024  
**Cor Identificadora:** #3b82f6 (Azul)  
**Link para Demo:** Nenhum (código disponível no GitHub)

---

## 2. Estrutura de Implementação

### 2.1 Novo Arquivo de Conteúdo

**Caminho:** `src/content/projects/crmontesite.md`

```yaml
---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM para gestão de projetos, leads e vendas. Integra painel de vendas em tempo real, gerenciamento de clientes, personalização de sites e integrações com Hostinger.
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui", "Vite"]
link: null
---
```

**Conteúdo do Markdown:** O arquivo conterá 5 seções principais que serão renderizadas em abas na página detalhada. Cada seção terá estrutura própria com headers e parágrafos.

### 2.2 Componente de Abas (ProjectTabs.astro)

**Caminho:** `src/components/project-tabs/ProjectTabs.astro`

**Funcionalidade:**
- Renderiza 5 abas navegáveis com títulos e conteúdo
- Suporta conteúdo em HTML (vindo do render do markdown)
- Design responsivo (mobile: coluna, desktop: linha de abas)
- Efeitos de transição suaves entre abas
- Primeira aba ativa por padrão
- Usa JavaScript vanilla (sem dependências adicionais)

**Abas:**
1. **Visão Geral** - Descrição e contexto do projeto
2. **Stack Técnico** - Tecnologias, bibliotecas e ferramentas
3. **Funcionalidades** - Features principais e módulos
4. **Banco de Dados** - Arquitetura, tabelas e relacionamentos
5. **Resultados** - Métricas, impacto e aprendizados

**Estilo:**
- Mantém consistência com design dark mode do portfólio
- Border bottom azul (#3b82f6) na aba ativa
- Transição de cor suave ao mudar de aba
- Responsive: em mobile, abas viram botões em coluna

### 2.3 Modificação na Página Detalhada ([slug].astro)

**Caminho:** `src/pages/projetos/[slug].astro`

A página existente será modificada para:
- Detectar se é o projeto "crmontesite"
- Se sim, renderizar com o componente `ProjectTabs` em vez de conteúdo simples
- Se não, usar o layout tradicional atual (sem abas)

**Lógica condicional:**
```
if (project.slug === 'crmontesite') {
  renderizar com ProjectTabs component
} else {
  renderizar layout tradicional
}
```

---

## 3. Conteúdo Detalhado das Abas

### Aba 1: Visão Geral

**Tópicos:**
- O que é o CRM Monte Site
- Propósito: gestão centralizada de projetos, leads, vendas e clientes
- Público-alvo: agências de criação de sites, empresas de prestação de serviço
- Contexto de criação (desenvolvido com Lovable + ajustes manuais)
- Principais benefícios: integração com Hostinger, dashboard em tempo real, automação de workflows

**Tom:** Profissional e informativo

### Aba 2: Stack Técnico

**Frontend:**
- React 18.3.1 com Vite como bundler
- TypeScript para tipagem segura
- TailwindCSS para estilos responsivos
- shadcn/ui + Radix UI para componentes acessíveis
- Bibliotecas especializadas:
  - Recharts: gráficos de dashboard
  - React Hook Form + Zod: validação de formulários
  - jsPDF: geração de PDFs
  - jszip: manipulação de arquivos ZIP
  - mammoth: processamento de documentos Word
  - next-themes: suporte a dark mode
  - React Router DOM: roteamento

**Backend/Infraestrutura:**
- Supabase (Firebase alternative)
  - PostgreSQL gerenciado
  - Autenticação baseada em JWT
  - Realtime subscriptions para dados em tempo real
  - Storage para arquivos
- Integração com Hostinger API para gerenciamento de DNS

**Deployment:**
- Ambiente de desenvolvimento com Vite (npm run dev)
- Build otimizado (npm run build)
- Variáveis de ambiente via .env

### Aba 3: Funcionalidades

**Módulos Principais:**
- **Gerenciamento de Projetos:** CRUD completo, listagem, edição, detalhes, status tracking
- **Dashboard de Vendas:** Painel com gráficos em tempo real, métricas de conversão
- **Gestão de Leads/Clientes:** Formulários de submissão, histórico de interações, pipeline
- **Personalização de Sites:** Interface para customizar sites dos clientes
- **Integração Hostinger:** Gerenciamento de DNS, configuração de domínios
- **Webhook Management:** Configuração de webhooks para automações
- **Termos de Entrega:** Geração e gestão de termos customizados (com export PDF)
- **Landing Pages para Vendedores:** Páginas públicas para captura de leads
- **Autenticação:** Login seguro baseado em Supabase Auth
- **Notificações:** Sistema de notificações em tempo real (toast)

**Fluxos Críticos:**
- Cliente submete formulário → Lead criado → Vendedor notificado → Painel atualizado
- Projeto criado → Personalização iniciada → Site gerado → Cliente recebe link
- Vendedor configura webhook → Eventos são processados → Ações automáticas executadas

### Aba 4: Banco de Dados

**Arquitetura Supabase:**
- Autenticação gerenciada pelo Supabase Auth
- Schema PostgreSQL com tabelas relacionais

**Tabelas Principais:**
- **users:** Usuários do sistema (vendedores, admins)
- **projects:** Projetos de criação de site
- **clients:** Dados dos clientes
- **leads:** Leads capturados via formulários
- **sites:** Sites criados/personalizados
- **personalizations:** Configurações de personalização
- **termos_entrega:** Termos de entrega customizados
- **webhooks:** Configuração de webhooks
- **transacoes:** Histórico de transações/pagamentos (se aplicável)

**Relacionamentos:**
- user → projects (1:N)
- client → projects (1:N)
- project → sites (1:N)
- project → leads (1:N)
- sites → personalizations (1:N)

**Segurança:**
- Row Level Security (RLS) habilitado
- Políticas de acesso por usuário
- Autenticação JWT via Supabase

### Aba 5: Resultados

**Métricas de Sucesso:**
- Sistema em produção gerenciando X projetos
- Dashboard utilizado diariamente por vendedores
- Redução de tempo de gestão de projetos em X%
- Integração com Hostinger funcionando sem erros
- Suporta múltiplos usuários simultâneos

**Aprendizados:**
- Importância de realtime updates para experiência do usuário
- Estrutura de banco de dados escalável desde o início
- Componentes reutilizáveis reduzem tempo de desenvolvimento
- Validação de formulários rigorosa evita problemas em produção

**Links Úteis:**
- Repositório GitHub: https://github.com/DevZipMateus/crmmontesite
- Documentação Supabase: Disponível no repo

---

## 4. Ordem do Portfólio

Após integração, a ordem dos projetos será:

1. ✅ CRM Monte Site (NOVO)
2. E-commerce de Alta Performance
3. ERP Avançado
4. Mobile First App

A navegação entre projetos (prev/next) será ajustada automaticamente.

---

## 5. Impacto Visual

**Página Detalhada do CRM Monte Site:**
- Header: Título grande "CRM MONTE SITE", categoria "PLATAFORMA SAAS", ano "2024"
- Tecnologias em badges azuis (#3b82f6)
- 5 abas com conteúdo estruturado
- Navegação prev/next para outros projetos mantida
- Rodapé com link para repositório GitHub (quando disponível)

**Listagem de Projetos (página inicial):**
- CRM Monte Site aparece primeiro
- Card destaque com cor azul

---

## 6. Considerações Técnicas

**Performance:**
- Arquivo markdown será compilado uma vez durante build
- Abas renderizadas no cliente (JavaScript vanilla, sem overhead)
- Nenhuma requisição externa adicional

**Manutenção:**
- Conteúdo em markdown é fácil de editar
- Componente ProjectTabs é reutilizável para futuros projetos com múltiplas seções
- Se precisar voltar ao layout tradicional, basta remover a condicional

**Acessibilidade:**
- Abas com ARIA labels
- Navegação por teclado (Tab, Enter)
- Semântica HTML adequada

---

## 7. Checklist de Implementação

- [ ] Criar arquivo `src/content/projects/crmontesite.md` com conteúdo estruturado
- [ ] Criar componente `src/components/project-tabs/ProjectTabs.astro`
- [ ] Modificar `src/pages/projetos/[slug].astro` para renderizar abas condicionalmente
- [ ] Testar navegação entre projetos (prev/next)
- [ ] Testar responsividade em mobile/tablet/desktop
- [ ] Testar acessibilidade (navegação por teclado)
- [ ] Verificar ordem dos projetos na listagem
- [ ] Fazer commit do novo projeto

---

## 8. Notas Finais

Este design mantém a consistência visual do portfólio enquanto adiciona profundidade através das abas. O CRM Monte Site será o projeto de destaque, refletindo sua importância na trajetória de desenvolvimento.

A estrutura é modular: se no futuro outro projeto precisar de abas, o componente `ProjectTabs` já estará pronto para reutilização.
