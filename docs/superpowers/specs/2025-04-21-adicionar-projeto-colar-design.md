# Design: Adicionar Projeto Colar ao Portfólio

**Data:** 2025-04-21  
**Status:** Implementado  
**Escopo:** Adicionar novo projeto ao portfólio existente

## Visão Geral

Adicionar o projeto **Colar** (sistema de gestão financeira, tarefas e inventário para pessoas que dividem moradia) ao portfólio em Astro, seguindo os padrões existentes.

## Requisitos

- **Projeto:** Colar (https://github.com/MateusDevZip/colar.git)
- **Status:** Em desenvolvimento
- **Tecnologias:** Extraidas do repositório (Python, Flask, JavaScript, Tailwind CSS, Supabase, Chart.js, Jinja2, HTML5)
- **Posição:** Última na lista (order: 4)
- **Cor:** #f6d43b (amarelo)
- **Deploy:** Nenhum (projeto em desenvolvimento)

## Abordagem Escolhida

**Adição Rápida (Abordagem 1)**
- Criar arquivo markdown com informações completas
- Sem imagens (projeto em desenvolvimento)
- Incluir metrics simbólicas para contexto
- Fácil de evoluir quando tiver screenshots

## Implementação

### Arquivo Criado

**Localização:** `src/content/projects/colar.md`

**Estrutura:**
- Frontmatter com metadados conforme schema de projetos
- Seções: Visão Geral, Stack Técnico, Funcionalidades, Arquitetura, Status, Próximas Etapas
- Technologies array com 8 tecnologias
- Metrics com 3 cards (Status, Módulos, Dark Mode)
- Order: 4 (última posição)

**Conteúdo Incluído:**
- Descrição completa do propósito
- Público-alvo e benefícios
- Stack técnico detalhado (Backend, Frontend, BaaS)
- 6 módulos de funcionalidades
- Arquitetura e fluxo de dados
- Características visuais
- Status de desenvolvimento (módulos completos, em progresso, planejados)
- Aprendizados e próximas etapas

## Integração

O projeto aparecerá automaticamente no portfólio porque:

1. ✅ Arquivo está em `src/content/projects/`
2. ✅ Segue o schema definido em `src/content/config.ts`
3. ✅ Template `src/pages/projetos/[slug].astro` renderiza automaticamente
4. ✅ Componente `ProjectGallery.astro` listará com card amarelo (#f6d43b)

## Padrões Seguidos

- ✅ Mesmo formato markdown dos projetos existentes
- ✅ Frontmatter com todos os campos requeridos
- ✅ Conteúdo estruturado em seções markdown
- ✅ Tecnologias extraídas do repositório real
- ✅ Métricas contextualizadas (status, módulos, design)
- ✅ Descrição concisa no frontmatter

## Próximas Evoluções

Quando o projeto tiver screenshots:
- Adicionar images array com paths de imagens
- Colocar as imagens em `public/projects/colar/`
- Atualizar o markdown com referências

## Verificação

- ✅ Arquivo criado com sucesso
- ✅ Segue schema de projetos (config.ts)
- ✅ Metadados corretos (title, year, category, color, order)
- ✅ Conteúdo bem estruturado e detalhado
- ✅ Tecnologias extraídas do repositório real
- ✅ Sem placeholders ou TODOs pendentes
