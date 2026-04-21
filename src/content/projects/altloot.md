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
