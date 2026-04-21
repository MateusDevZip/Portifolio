# Alt+Loot ao Portfólio — Implementation Plan

> **Para agentic workers:** Use superpowers:subagent-driven-development ou superpowers:executing-plans para implementar este plano task-by-task.

**Goal:** Integrar o projeto Alt+Loot ao portfólio mantendo consistência com 3 projetos existentes.

**Architecture:** Criar arquivo markdown com frontmatter YAML em `src/content/projects/` e copiar 3 screenshots para `src/imagens/projects/altloot/`. Sem alterações na estrutura do portfólio.

**Tech Stack:** Markdown, YAML frontmatter, estrutura de diretórios do portfólio (Vite/React/Astro).

---

## File Structure

```
Criação:
- src/content/projects/altloot.md        (novo arquivo)
- src/imagens/projects/altloot/          (novo diretório)
  ├── altloot1.jpg                       (cópia de screenshot)
  ├── altloot2.jpg                       (cópia de screenshot)
  └── altloot3.jpg                       (cópia de screenshot)

Sem modificações em arquivos existentes.
```

---

## Tasks

### Task 1: Criar diretório de imagens do Alt+Loot

**Files:**
- Create: `src/imagens/projects/altloot/` (diretório)

- [ ] **Step 1: Navegar para o diretório de projetos**

```bash
cd "c:\Users\Pc Mateus\Desktop\Programas codes\Portifolio"
```

- [ ] **Step 2: Criar diretório altloot**

```bash
mkdir src/imagens/projects/altloot
```

Expected: Diretório criado sem erros.

- [ ] **Step 3: Verificar criação**

```bash
ls -la src/imagens/projects/altloot
```

Expected: Diretório vazio listado.

---

### Task 2: Copiar screenshots para o diretório

**Files:**
- Copy to: `src/imagens/projects/altloot/altloot1.jpg`
- Copy to: `src/imagens/projects/altloot/altloot2.jpg`
- Copy to: `src/imagens/projects/altloot/altloot3.jpg`

- [ ] **Step 1: Copiar altloot1.jpg**

```bash
cp "c:\Users\Pc Mateus\Desktop\Programas codes\Portifolio\altloot1.jpg" "src/imagens/projects/altloot/altloot1.jpg"
```

Expected: Arquivo copiado sem erros.

- [ ] **Step 2: Copiar altloot2.jpg**

```bash
cp "c:\Users\Pc Mateus\Desktop\Programas codes\Portifolio\altloot2.jpg" "src/imagens/projects/altloot/altloot2.jpg"
```

Expected: Arquivo copiado sem erros.

- [ ] **Step 3: Copiar altloot3.jpg**

```bash
cp "c:\Users\Pc Mateus\Desktop\Programas codes\Portifolio\altloot3.jpg" "src/imagens/projects/altloot/altloot3.jpg"
```

Expected: Arquivo copiado sem erros.

- [ ] **Step 4: Verificar cópias**

```bash
ls -la src/imagens/projects/altloot/
```

Expected: 3 arquivos .jpg listados.

- [ ] **Step 5: Commit**

```bash
git add src/imagens/projects/altloot/
git commit -m "feat: adicionar screenshots do Alt+Loot ao portfólio"
```

---

### Task 3: Criar arquivo markdown com frontmatter

**Files:**
- Create: `src/content/projects/altloot.md`

- [ ] **Step 1: Criar arquivo com frontmatter**

```bash
cat > "src/content/projects/altloot.md" << 'EOF'
---
title: Alt+Loot
year: 2026
category: Game Development / RPG / Web Game
description: RPG Idle/Clicker com estética Office-Stealth
color: "#291F3E"
technologies: ["Vite", "React", "Tailwind CSS", "Framer Motion", "Supabase", "PostgreSQL"]
link: null
order: 5
images: ["/projects/altloot/capa_altloot.png", "/projects/altloot/altloot1.jpg", "/projects/altloot/altloot2.jpg", "/projects/altloot/altloot3.jpg"]
---
EOF
```

Expected: Arquivo criado com frontmatter YAML válido.

- [ ] **Step 2: Verificar criação**

```bash
head -15 src/content/projects/altloot.md
```

Expected: Frontmatter YAML exibido corretamente.

---

### Task 4: Escrever seção Visão Geral

**Files:**
- Modify: `src/content/projects/altloot.md` (append conteúdo)

- [ ] **Step 1: Adicionar seção Visão Geral**

Append ao arquivo (após o frontmatter):

```markdown
## Visão Geral

O **Alt+Loot** é um RPG Idle/Clicker em desenvolvimento com estética "Office-Stealth" — aparenta ser um dashboard corporativo, mas é na verdade um jogo estratégico de progresso incremental. O projeto combina mecânicas clássicas de RPG (caça, forja, leveling) com a estética minimalista de interfaces corporativas.

### 🎯 Propósito

Criar uma experiência de jogo imersiva que disguisa um universo RPG completo dentro de uma interface que parece um software empresarial, oferecendo uma experiência única de escapismo produtivo.

### 👥 Público-Alvo

- **Jogadores casuais:** Pessoas que gostam de jogos idle/clicker
- **Fãs de RPG:** Que apreciam mecânicas profundas de progressão
- **Entusiastas Web:** Interessados em jogos desenvolvidos com tecnologias modernas

### ⚡ Características Principais

| Feature | Descrição |
|---------|-----------|
| **Sistema de Caça (Hunting)** | Encontre monstros por zona, derrote-os e receba loot |
| **Sistema de Forja (Forge)** | Combine materiais para criar equipamentos únicos |
| **Stats e Leveling** | Customize seu herói com alocação manual de pontos de atributo |
| **Inventário Dinâmico** | Gerencie itens, equipamentos e consumíveis |
| **Progresso Persistente** | Dados salvos em tempo real com Supabase |
| **Multiplayer Realtime** | Sistema de atividades sincronizadas (Supabase Realtime) |

### 📊 Status

**Em Desenvolvimento Ativo** — Versão atual contém sistemas principais de gameplay funcionais.

---
```

- [ ] **Step 2: Verificar conteúdo adicionado**

```bash
wc -l src/content/projects/altloot.md
```

Expected: Número de linhas aumentado (agora contém frontmatter + Visão Geral).

---

### Task 5: Escrever seção Stack Técnico

**Files:**
- Modify: `src/content/projects/altloot.md` (append conteúdo)

- [ ] **Step 1: Adicionar seção Stack Técnico**

Append ao arquivo:

```markdown
## Stack Técnico

### Frontend & Build
- **Vite** — Build tool moderno e ultrarrápido
- **React 18** — UI library com hooks e context API
- **Tailwind CSS** — Utility-first CSS para design responsivo
- **Framer Motion** — Animações fluidas e transitions

### Backend & Database
- **Supabase** — Backend as a Service (BaaS) open-source
- **PostgreSQL** — Banco relacional com extensões avançadas
- **Supabase Realtime** — WebSocket para sincronização em tempo real
- **Supabase Auth** — Autenticação nativa com JWT

### Schema Principal

| Tabela | Descrição |
|--------|-----------|
| `profiles` | Dados do usuário (username, avatar_url) |
| `characters` | Personagem jogador (level, xp, gold, stats) |
| `items` | Dicionário global de itens (rarity, type, stats) |
| `inventory` | Relação personagem-item (quantity) |
| `activities` | Atividade em tempo real (hunting, mining, forging) |
| `monsters` | Dicionário de monstros (rarity, hp, drops) |
| `crafting_recipes` | Receitas de forja (ingredients, result) |

### Infraestrutura
- Hospedagem: Vercel (frontend) + Supabase Cloud (backend)
- Versionamento: Git + GitHub
- CI/CD: GitHub Actions (planejado para futuro)

---
```

- [ ] **Step 2: Verificar conteúdo adicionado**

```bash
grep -n "## Stack Técnico" src/content/projects/altloot.md
```

Expected: Linha onde "## Stack Técnico" aparece.

---

### Task 6: Escrever seção Mecânicas Principais

**Files:**
- Modify: `src/content/projects/altloot.md` (append conteúdo)

- [ ] **Step 1: Adicionar seção Mecânicas Principais**

Append ao arquivo:

```markdown
## Mecânicas Principais

### 🏹 Sistema de Caça (Hunting)
Escolha uma zona, enfrente monstros aleatoriamente sorteados por raridade e nível. Derrote inimigos para ganhar XP, ouro e drops de itens. Sistema de cooldown progressivo em caso de derrota (30s → 60s → 90s) para balanceamento.

### ⚔️ Sistema de Forja (Forge)
Combine materiais coletados da caça para craftar equipamentos únicos com stats aprimorados. Receitas de forja determinam ingredientes necessários e resultado final. Sistema de rarity e raridade de drops.

### 📈 Leveling e Stats
Distribua pontos de atributo manualmente entre Strength, Agility, Intelligence e Vitality. Cada atributo afeta stats de combate (Ataque, Defesa, Chance de Crítico, HP). Level up automático ao atingir XP suficiente.

### 🎒 Inventário e Equipamento
Gerenciamento de itens por slot (arma, armadura, acessórios). Consumíveis aplicam buffs temporários. Sistema de peso/limite de inventário para controle de progressão.

### 💰 Economia do Jogo
Ouro como moeda principal, ganho por derrotas e vendas. Sistema de preços dinâmico para compra/venda de itens. Banco para armazenamento de recursos.

---
```

- [ ] **Step 2: Verificar conteúdo adicionado**

```bash
grep -n "## Mecânicas Principais" src/content/projects/altloot.md
```

Expected: Linha onde "## Mecânicas Principais" aparece.

---

### Task 7: Verificar integridade do arquivo markdown

**Files:**
- Verify: `src/content/projects/altloot.md`

- [ ] **Step 1: Verificar YAML syntax**

```bash
head -15 src/content/projects/altloot.md
```

Expected: Frontmatter YAML válido sem erros de syntax.

- [ ] **Step 2: Verificar referências de imagens**

```bash
grep "altloot" src/content/projects/altloot.md
```

Expected: Paths `/projects/altloot/altloot1.jpg`, `/projects/altloot/altloot2.jpg`, `/projects/altloot/altloot3.jpg` encontrados.

- [ ] **Step 3: Verificar markdown syntax**

```bash
cat src/content/projects/altloot.md | wc -l
```

Expected: Arquivo com múltiplas linhas (frontmatter + 3 seções).

- [ ] **Step 4: Commit do conteúdo markdown**

```bash
git add src/content/projects/altloot.md
git commit -m "feat: adicionar conteúdo do projeto Alt+Loot ao portfólio

Inclui frontmatter YAML, Visão Geral, Stack Técnico e Mecânicas Principais.
Projeto aparece como order 5 (último) e sem link externo.

Co-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

---

### Task 8: Testar renderização no dev server

**Files:**
- Test: `src/content/projects/altloot.md` (verificação visual)
- Test: Imagens em `src/imagens/projects/altloot/`

- [ ] **Step 1: Iniciar dev server**

```bash
npm run dev
```

Expected: Server iniciado, usualmente em `http://localhost:3000` ou similar.

- [ ] **Step 2: Navegar para a página de projetos**

Acesse a página do portfólio que lista projetos. Verifique:
- [ ] Alt+Loot aparece na lista
- [ ] Título: "Alt+Loot"
- [ ] Descrição: "RPG Idle/Clicker com estética Office-Stealth"
- [ ] Cor: Roxo escuro (#291F3E) visível
- [ ] Ordem: Última posição (order 5)
- [ ] Imagens carregam corretamente (3 screenshots)

- [ ] **Step 3: Clicar no projeto**

Se o portfólio tem página individual de projeto, verifique:
- [ ] Frontmatter (title, year, category, technologies) renderiza
- [ ] Seções markdown (Visão Geral, Stack, Mecânicas) exibem corretamente
- [ ] Imagens carregam no contexto da página

- [ ] **Step 4: Verificar outros projetos**

Verifique que nenhum outro projeto foi afetado:
- [ ] Certificado PJ aparece normal
- [ ] CRM Onte Site aparece normal
- [ ] Gestão Layouts Sheets aparece normal

- [ ] **Step 5: Parar dev server**

```bash
Ctrl+C
```

---

### Task 9: Commit final e resumo

**Files:**
- Status final do repositório

- [ ] **Step 1: Verificar git status**

```bash
git status
```

Expected: Mensagem "working tree clean" (tudo commitado).

- [ ] **Step 2: Verificar git log**

```bash
git log --oneline -5
```

Expected: Últimos 3 commits visíveis:
1. "feat: adicionar conteúdo do projeto Alt+Loot ao portfólio"
2. "feat: adicionar screenshots do Alt+Loot ao portfólio"
3. (commit anterior)

- [ ] **Step 3: Resumo final**

Verificação:
- ✅ Diretório `src/imagens/projects/altloot/` criado
- ✅ 3 screenshots copiados para o diretório
- ✅ Arquivo `src/content/projects/altloot.md` criado com frontmatter
- ✅ Conteúdo markdown (Visão Geral, Stack, Mecânicas) adicionado
- ✅ Renderização testada no dev server
- ✅ Todos os commits feitos
- ✅ Sem regressões visuais em outros projetos

---
