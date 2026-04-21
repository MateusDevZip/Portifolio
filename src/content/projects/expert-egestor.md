---
title: Expert eGestor
year: 2025
category: Sistema Web / Treinamento Corporativo
description: Plataforma LMS completa para criar e gerenciar treinamentos corporativos com vídeos, slides, questões e certificação automática
color: "#EF4444"
technologies: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS", "Supabase", "PostgreSQL"]
link: "https://expert.egestor.com.br/"
order: 3
images: ["/projects/expert-egestor/expert1.jpg", "/projects/expert-egestor/expert2.jpg", "/projects/expert-egestor/expert3.jpg", "/projects/expert-egestor/expert4.jpg"]
---

## Visão Geral

O **Expert eGestor** é uma plataforma LMS (Learning Management System) moderna e completa para criar, gerenciar e acompanhar treinamentos corporativos. Desenvolvida com tecnologias modernas, permite que empresas treinem novos funcionários e clientes através de um sistema estruturado com vídeos, slides, questões e certificação automática baseada em desempenho.

### 🎯 Propósito

Simplificar o processo de treinamento corporativo, permitindo que gestores criem cursos estruturados e acompanhem o progresso de alunos (funcionários ou clientes) de forma centralizada, reduzindo custos com treinamento presencial e aumentando a consistência da informação transmitida.

### 👥 Público-Alvo

- **Gestores de RH e Treinamento:** Responsáveis por criar e gerenciar programas de treinamento
- **Funcionários Novos:** Realizam treinamentos obrigatórios de onboarding
- **Clientes:** Participam de treinamentos especializados sobre produtos/serviços
- **Empresas de Tecnologia e Serviços:** Que precisam de programas de capacitação estruturados

### ⚡ Principais Benefícios

| Benefício | Descrição |
|-----------|-----------|
| **Cursos Estruturados** | Organize conteúdo em módulos com aulas, slides e exercícios |
| **Progresso Rastreável** | Acompanhe em tempo real o desempenho de cada aluno |
| **Certificação Automática** | Gere certificados digitais baseados nas notas alcançadas |
| **Múltiplos Formatos** | Suporte a vídeos, slides interativos e questões de diferentes tipos |
| **Flexível para Públicos** | Treinar funcionários ou clientes no mesmo sistema |
| **Interface Intuitiva** | Design moderno e responsivo para qualquer dispositivo |
| **Dashboard Admin** | Controle total sobre cursos, alunos e métricas |

---

## Stack Técnico

### Frontend

**Framework & Tooling:**
- **Vite** — Build tool moderno e rápido
- **TypeScript** — Tipagem estática para maior segurança e manutenibilidade
- **React** — Library JavaScript para interfaces interativas
- **shadcn-ui** — Componentes acessíveis e customizáveis

**Estilo & Design:**
- **Tailwind CSS** — Framework CSS utilitário para design responsivo
- **Design System Premium** — Interface visual consistente e polida

**Características:**
- Responsive design (mobile, tablet, desktop)
- Acessibilidade (WCAG compliance)
- Performance otimizada

### Backend

**Runtime & Framework:**
- **Node.js** — Ambiente de execução JavaScript
- **API RESTful** — Comunicação cliente-servidor

### Banco de Dados & Autenticação

**Backend as a Service (BaaS):**
- **Supabase** — Plataforma PostgreSQL gerenciada
- **PostgreSQL** — Banco de dados relacional robusto
- **Row Level Security (RLS)** — Segurança em nível de linha para isolamento de dados
- **Supabase Auth** — Autenticação nativa com email/senha e OAuth

---

## Funcionalidades

### 1. Gestão de Cursos

- **CRUD Completo:** Criar, editar, visualizar e deletar cursos
- **Organização por Módulos:** Estruture o conteúdo em aulas logicamente organizadas
- **Suporte Multimídia:** Upload de vídeos, slides e documentos
- **Status do Curso:** Marcação de cursos como ativos ou inativos
- **Descrições e Metadados:** Informações detalhadas sobre cada curso

### 2. Conteúdo Educacional

- **Slides Interativos:** Visualização de apresentações estruturadas
- **Vídeos Integrados:** Reprodução nativa de conteúdo em vídeo
- **Aulas Ordenadas:** Sequência lógica de módulos e aulas
- **Exercícios Práticos:** Questões associadas ao conteúdo

### 3. Sistema de Avaliações

- **Questões Variadas:** Suporte a diferentes tipos de perguntas
- **Provas Estruturadas:** Exames finais com limite de tempo
- **Scoring Automático:** Cálculo automático de notas
- **Critério de Aprovação:** Define percentual mínimo para passar (ex: 80%)

### 4. Certificação

- **Certificados Digitais:** Gerados automaticamente para alunos aprovados
- **Personalização:** Inclui nome do aluno, data e nota alcançada
- **Validação:** Certificados rastreáveis com ID único
- **Download e Compartilhamento:** Alunos podem baixar e compartilhar

### 5. Acompanhamento de Progresso

- **Dashboard Personalizado:** Cada aluno vê seu próprio progresso
- **Indicadores Visuais:** Barra de progresso e status de conclusão
- **Histórico:** Registro completo de atividades do aluno
- **Estatísticas:** Visualização de desempenho agregado por curso

### 6. Painel Administrativo

- **Visão Geral:** Resumo de cursos, alunos e desempenho
- **Gestão de Alunos:** Adicionar, editar e remover participantes
- **Relatórios:** Dados sobre conclusão de cursos e notas
- **Links de Compartilhamento:** Gere links públicos para novos alunos acessarem
- **Controle de Módulos e Slides:** Gerencie todo o conteúdo educacional

---

## Sistema de Roles e Permissões

O **Expert eGestor** foi projetado para suportar três tipos de usuários distintos:

### 🔐 **Administrador (Gestor)**
- Criar e gerenciar cursos completos
- Definir estrutura de módulos e aulas
- Configurar avaliações e critérios de aprovação
- Personalizar certificados
- Visualizar relatórios detalhados de todos os alunos
- Gerar links de convite para novos participantes
- Gerenciar permissões e acesso

### 👤 **Funcionários**
- Acessar cursos de onboarding obrigatório
- Visualizar vídeos e slides
- Responder questões e exercícios
- Realizar provas estruturadas
- Acompanhar seu progresso em tempo real
- Receber e baixar certificados após aprovação
- Revisitar conteúdo concluído

### 🌐 **Clientes**
- Acessar cursos públicos de capacitação sobre produtos/serviços
- Participar através de link público (sem necessidade de convite formal)
- Mesmas funcionalidades de alunos (vídeos, slides, questões)
- Realizar provas e obter certificados de conclusão
- Usar para educação contínua pós-venda

**Isolamento de Dados:** Cada grupo (empresa) tem seus próprios cursos e alunos isolados via Row Level Security do Supabase.

---

## Arquitetura

### Fluxo de Dados

```
Administrador        Funcionário/Cliente
    ↓                        ↓
    └────→ React Frontend ←──┘
              ↓
         API RESTful
              ↓
          Supabase
    (PostgreSQL + Auth + RLS)
              ↓
         Banco de Dados
    (Cursos, Alunos, Notas,
     Certificados, Progresso)
```

### Estrutura de Dados

```
Organization (1) ──→ (N) Courses
Course (1) ──→ (N) Modules
Module (1) ──→ (N) Lessons
Lesson (1) ──→ (N) Questions
Course (1) ──→ (N) Enrollments (alunos)
Enrollment (1) ──→ (N) Answers (respostas do aluno)
Enrollment (1) ──→ (1) Exam (prova)
Exam (aprovado) ──→ (1) Certificate
```

---

## Características Visuais

### Design System

- **Tema:** Light mode com acentos vermelho vibrante
- **Cores Principais:** Vermelho (#EF4444), Cinza neutro, Verde (aprovação)
- **Tipografia:** Clean e moderna para boa legibilidade
- **Ícones:** Consistentes e significativos (ícones de educação, progresso, etc)
- **Responsividade:** Mobile-first, adaptável a qualquer resolução
- **Feedback Visual:** Estados de loading, sucesso e erro bem sinalizados

### Componentes

- Navbar com navegação principal
- Cards de cursos com status visual
- Barra de progresso animada
- Botões CTAs claros e destacados
- Modais para ações importantes
- Tabelas de dados com paginação
- Formulários validados

---

## Status de Desenvolvimento

### ✅ Completo em Produção

- ✅ Autenticação com Supabase
- ✅ Criação e gestão de cursos
- ✅ Sistema de módulos e aulas
- ✅ Upload de slides e vídeos
- ✅ Questões e exercícios
- ✅ Provas com scoring automático
- ✅ Certificação digital
- ✅ Dashboard de alunos
- ✅ Painel administrativo completo
- ✅ Suporte a múltiplos tipos de usuários
- ✅ Relatórios e acompanhamento

### 🚀 Em Produção

A plataforma está **totalmente funcional e em operação** em `https://expert.egestor.com.br/`, com empresas usando ativamente para treinamento de funcionários e clientes.

---

## Aprendizados e Desafios

1. **Row Level Security em Supabase:** Implementar isolamento de dados multi-tenant de forma segura
2. **Autenticação Multi-Role:** Diferentes permissões e dashboards para cada tipo de usuário
3. **Upload de Mídia:** Otimização para upload e streaming de vídeos sem impactar performance
4. **Certificação Digital:** Gerar documentos únicos e validáveis para cada aluno
5. **Real-time Updates:** Sincronização de progresso entre dispositivos usando Supabase Realtime
6. **Acessibilidade:** Garantir que plataforma educacional seja acessível a todos

---

## Próximas Evoluções

- [ ] Mobile app nativo (iOS/Android)
- [ ] Gamification (badges, pontos, ranking)
- [ ] Notificações em tempo real
- [ ] Integrações com sistemas de RH
- [ ] Análise avançada com BI
- [ ] Conteúdo adaptativo baseado em performance
- [ ] Comunidade e fóruns entre alunos
- [ ] Suporte a múltiplos idiomas
