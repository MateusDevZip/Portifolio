---
name: Adição Alt+Loot ao Portfólio
description: Design spec para integração do projeto Alt+Loot no portfólio existente
type: design
---

# Adição Alt+Loot ao Portfólio — Design Spec

**Data:** 21 de abril de 2026  
**Status:** Em Desenvolvimento  
**Autor:** Mateus

---

## Visão Geral

Integrar o projeto **Alt+Loot** (RPG Idle/Clicker em desenvolvimento) ao portfólio existente, mantendo consistência visual e estrutural com os 3 projetos já presentes (Certificado PJ, CRM Onte Site, Gestão Layouts Sheets).

---

## Escopo

### O que está incluído
- Criar arquivo de projeto markdown com frontmatter YAML
- Organizar 3 screenshots do Alt-Loot em pasta de imagens
- Estruturar conteúdo descritivo sobre o jogo (visão geral, stack, mecânicas)
- Posicionar como 5º projeto na lista (order: 5)

### O que NÃO está incluído
- Mudanças na estrutura visual do portfólio
- Links externos (repositório é privado)
- Componentes especiais ou badges de "em desenvolvimento"
- Integração com APIs externas

---

## Estrutura Técnica

### Arquivo Principal
- **Caminho:** `src/content/projects/altloot.md`
- **Formato:** Markdown com frontmatter YAML
- **Padrão:** Segue estrutura idêntica aos 3 projetos existentes

### Frontmatter YAML
```yaml
---
title: Alt+Loot
year: 2026
category: Game Development / RPG / Web Game
description: RPG Idle/Clicker com estética Office-Stealth
color: "#291F3E"
technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL"]
link: null
order: 5
images: ["/projects/altloot/altloot1.jpg", "/projects/altloot/altloot2.jpg", "/projects/altloot/altloot3.jpg"]
---
```

**Justificativa de campos:**
- `link: null` — Repositório privado, sem URL pública
- `order: 5` — Último projeto (4 já existem com orders 1-4)
- `color: "#291F3E"` — Roxo escuro, alinhado com estética do jogo
- `year: 2026` — Ano de início do desenvolvimento

### Estrutura de Conteúdo Markdown

Será dividida em seções:

1. **Visão Geral**
   - Descrição do projeto e propósito
   - Público-alvo
   - Status "em desenvolvimento"

2. **Stack Técnico**
   - Frontend: Vite, React, Tailwind CSS, Framer Motion
   - Backend/DB: Supabase, PostgreSQL
   - Tabelas principais e schema

3. **Mecânicas Principais**
   - Hunting (caça)
   - Forging (forja)
   - Stats e leveling
   - Inventário e equipamentos

4. **Imagens e Visual**
   - 3 screenshots mostrando diferentes aspectos do jogo
   - Screenshot 1: Gameplay/Dashboard principal
   - Screenshot 2: Sistema de Forja
   - Screenshot 3: Inventário e recursos

---

## Gestão de Imagens

### Estrutura de Diretórios
```
src/imagens/projects/
├── altloot/           ← Novo diretório
│   ├── altloot1.jpg   ← Gameplay principal
│   ├── altloot2.jpg   ← Sistema de forja
│   └── altloot3.jpg   ← Inventário
├── certificadopj/
├── crmontesite/
└── gestaolayoutssheets/
```

### Processo
1. Criar diretório `src/imagens/projects/altloot/`
2. Copiar 3 screenshots para o novo diretório
3. Referenciar no frontmatter como `/projects/altloot/altloot1.jpg`, etc.

---

## Consistência e Padrões

O arquivo Alt+Loot segue **exatamente** o padrão dos 3 projetos existentes:

| Aspecto | Padrão Aplicado |
|---------|-----------------|
| Formato arquivo | Markdown + YAML frontmatter |
| Estrutura seções | Visão Geral → Stack Técnico → Detalhes |
| Campo `order` | Numérico sequencial (1-5) |
| Campo `color` | Hex color string |
| Campo `link` | URL string ou `null` |
| Campo `technologies` | Array de strings |
| Campo `images` | Array de paths relativos |

---

## Implementação

### Checklist de Tarefas
- [ ] Criar `src/content/projects/altloot.md` com frontmatter
- [ ] Criar diretório `src/imagens/projects/altloot/`
- [ ] Copiar 3 screenshots para o novo diretório
- [ ] Escrever conteúdo markdown (seções Visão Geral, Stack, Mecânicas)
- [ ] Verificar referências de imagens no frontmatter
- [ ] Testar renderização no portfólio (dev server)
- [ ] Verificar posicionamento como 5º projeto

### Validação
- [ ] Arquivo salvo e sem erros de YAML
- [ ] Imagens acessíveis e carregando corretamente
- [ ] Projeto aparece na lista com cor e ordem corretas
- [ ] Nenhuma regressão visual em outros projetos

---

## Notas

- **Manutenção futura:** Quando o Alt+Loot lançar, atualizar `link` com URL pública
- **Conteúdo dinâmico:** Se houver atualizações no jogo, o markdown pode ser revisado
- **Ordem dos projetos:** Se novos projetos forem adicionados, a `order` do Alt+Loot pode mudar

---

## Decisões

| Decisão | Motivo |
|---------|--------|
| Sem link externo | Repositório privado, lançamento futuro |
| Opção 1 (estrutura simples) | Mantém consistência com projetos existentes |
| 3 screenshots | Mostram diferentes aspectos do jogo |
| Cor #291F3E | Roxo escuro, alinhado com estética Office-Stealth |
| order: 5 | Posição como projeto mais recente |

