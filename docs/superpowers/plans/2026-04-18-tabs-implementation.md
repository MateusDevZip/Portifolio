# Implementar Sistema de Abas para Projetos

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Implementar sistema visual de abas que divide conteúdo markdown em 5 seções (H2) navegáveis.

**Architecture:** Criar componente Astro `ProjectTabs` que renderiza abas navegáveis. Modificar `[slug].astro` para detectar projetos com abas e renderizar conteúdo dividido por seções H2.

**Tech Stack:** Astro, TypeScript, TailwindCSS, JavaScript vanilla

---

## Task 1: Criar componente ProjectTabs.astro

**Files:**
- Create: `src/components/project-tabs/ProjectTabs.astro`

- [ ] **Step 1: Criar arquivo do componente**

Crie `src/components/project-tabs/ProjectTabs.astro`:

```astro
---
export interface Props {
  sections: Array<{
    title: string;
    id: string;
    content: string;
  }>;
}

const { sections } = Astro.props;
---

<div class="tabs-wrapper">
  <div class="tabs-navigation">
    {sections.map((section, idx) => (
      <button
        class="tab-btn"
        data-tab={section.id}
        aria-selected={idx === 0 ? 'true' : 'false'}
      >
        {section.title}
      </button>
    ))}
  </div>

  <div class="tabs-content">
    {sections.map((section, idx) => (
      <div
        class="tab-pane"
        id={`tab-${section.id}`}
        role="tabpanel"
        style={{ display: idx === 0 ? 'block' : 'none' }}
      >
        <div set:html={section.content} />
      </div>
    ))}
  </div>
</div>

<style>
  .tabs-wrapper {
    width: 100%;
  }

  .tabs-navigation {
    display: flex;
    gap: 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }

  .tab-btn {
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

  .tab-btn:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  .tab-btn[aria-selected='true'] {
    color: #3b82f6;
    border-bottom-color: #3b82f6;
  }

  .tabs-content {
    width: 100%;
  }

  .tab-pane {
    animation: fadeIn 0.3s ease-in-out;
  }

  .tab-pane :global(h2),
  .tab-pane :global(h3) {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }

  .tab-pane :global(h2) {
    font-size: 1.5rem;
    color: white;
  }

  .tab-pane :global(p) {
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }

  .tab-pane :global(ul) {
    margin-bottom: 1rem;
    padding-left: 2rem;
    color: rgba(255, 255, 255, 0.7);
  }

  .tab-pane :global(li) {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }

  .tab-pane :global(strong) {
    color: white;
    font-weight: 600;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 640px) {
    .tabs-navigation {
      flex-direction: column;
    }

    .tab-btn {
      width: 100%;
      text-align: left;
      border-bottom: none;
      border-left: 2px solid transparent;
      padding: 0.75rem 1rem;
    }

    .tab-btn[aria-selected='true'] {
      border-left-color: #3b82f6;
      border-bottom-color: transparent;
    }
  }
</style>

<script>
  const buttons = document.querySelectorAll('.tab-btn');
  const panes = document.querySelectorAll('.tab-pane');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      buttons.forEach(b => b.setAttribute('aria-selected', 'false'));
      panes.forEach(p => p.style.display = 'none');

      btn.setAttribute('aria-selected', 'true');
      const pane = document.getElementById(`tab-${tabId}`);
      if (pane) pane.style.display = 'block';
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        const next = btn.nextElementSibling as HTMLElement;
        if (next?.classList.contains('tab-btn')) {
          next.click();
          next.focus();
        }
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        const prev = btn.previousElementSibling as HTMLElement;
        if (prev?.classList.contains('tab-btn')) {
          prev.click();
          prev.focus();
        }
      }
    });
  });
</script>
```

- [ ] **Step 2: Verificar arquivo criado**

Verifique se `src/components/project-tabs/ProjectTabs.astro` existe.

---

## Task 2: Modificar [slug].astro para usar abas

**Files:**
- Modify: `src/pages/projetos/[slug].astro`

- [ ] **Step 1: Importar ProjectTabs**

No topo do arquivo, após os outros imports, adicione:

```astro
import ProjectTabs from '../../components/project-tabs/ProjectTabs.astro';
```

- [ ] **Step 2: Adicionar função para extrair seções**

Após `const { Content } = await project.render();`, adicione:

```astro
// Renderizar markdown para extrair seções
const { html } = await project.render();

// Função para extrair seções H2
const extractSections = (htmlContent: string) => {
  const sections: Array<{title: string; id: string; content: string}> = [];
  const h2Regex = /<h2[^>]*>([^<]+)<\/h2>/g;
  
  let match;
  const matches = [...htmlContent.matchAll(h2Regex)];
  
  matches.forEach((m, idx) => {
    const startPos = htmlContent.indexOf(m[0]);
    const endPos = idx < matches.length - 1 
      ? htmlContent.indexOf(matches[idx + 1][0])
      : htmlContent.length;
    
    const title = m[1];
    const id = title.toLowerCase().replace(/\s+/g, '-');
    const content = htmlContent.substring(startPos, endPos);
    
    sections.push({ title, id, content });
  });
  
  return sections;
};

const sections = extractSections(html);
const usesTabs = project.slug === 'crmontesite' || project.slug === 'gestaolayoutssheets';
```

- [ ] **Step 3: Modificar renderização condicional**

Encontre a seção `<!-- Article Content -->` e substitua:

```astro
      <!-- Article Content -->
      {usesTabs && sections.length > 0 ? (
        <ProjectTabs sections={sections} />
      ) : (
        <article class="prose prose-invert max-w-4xl prose-headings:font-bold prose-headings:text-white prose-p:text-white/80 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-blue-300 prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-white/10">
          <Content />
        </article>
      )}
```

- [ ] **Step 4: Verificar modificações**

Verifique se o arquivo foi modificado corretamente.

---

## Task 3: Testar abas no navegador

**Files:**
- Test: Navegador em desenvolvimento

- [ ] **Step 1: Iniciar servidor dev**

Execute `npm run dev` e aguarde até http://localhost:5173 estar pronto.

- [ ] **Step 2: Testar CRM Monte Site**

Acesse `/projetos/crmontesite` e verifique:
- 5 abas aparecem no topo
- Clicar em cada aba muda o conteúdo
- Navegação por teclado funciona (setas esquerda/direita)

- [ ] **Step 3: Testar Gestão de Layouts**

Acesse `/projetos/gestaolayoutssheets` e verifique:
- 5 abas aparecem
- Conteúdo muda ao clicar
- Responsividade mobile funciona

- [ ] **Step 4: Testar outros projetos**

Acesse `/projetos/ecommerce` e verifique:
- SEM abas (renderização tradicional)
- Conteúdo exibido normalmente

- [ ] **Step 5: Testar responsividade**

Redimensione para < 640px e verifique:
- Abas viram layout vertical
- Conteúdo permanece legível

**Esperado: DONE se tudo funcionar**

---

## Task 4: Commit final

**Files:**
- Created: `src/components/project-tabs/ProjectTabs.astro`
- Modified: `src/pages/projetos/[slug].astro`

- [ ] **Step 1: Verificar status**

Execute: `git status`

- [ ] **Step 2: Adicionar arquivos**

Execute: `git add src/components/project-tabs/ProjectTabs.astro src/pages/projetos/[slug].astro`

- [ ] **Step 3: Fazer commit**

Execute: `git commit -m "feat: implementa sistema de abas interativas para CRM Monte Site e Gestão de Layouts"`

- [ ] **Step 4: Confirmar commit**

Execute: `git log --oneline -1`

**Esperado: DONE**

---
