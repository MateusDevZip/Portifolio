# Guia para Adicionar Imagens aos Projetos

## 📸 Como Adicionar Imagens

### 1. **Upload das Imagens**
   - Coloque suas imagens em: `public/projects/`
   - Nomeie as imagens de forma descritiva, ex:
     - `crmontesite-dashboard.png`
     - `crmontesite-leads.png`
     - `crmontesite-clients.png`

### 2. **Editar o Arquivo do Projeto**
   - Abra o arquivo do projeto em: `src/content/projects/[nome].md`
   - Localize o campo `images: []`
   - Adicione as URLs das imagens

### Exemplo:

**Antes:**
```yaml
---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM...
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui"]
link: null
order: 1
images: []
---
```

**Depois:**
```yaml
---
title: CRM Monte Site
year: 2024
category: Plataforma SaaS / Gestão Empresarial
description: Sistema completo de CRM...
color: "#3b82f6"
technologies: ["React", "TypeScript", "TailwindCSS", "Supabase", "shadcn/ui"]
link: null
order: 1
images: 
  - /projects/crmontesite-dashboard.png
  - /projects/crmontesite-leads.png
  - /projects/crmontesite-clients.png
  - /projects/crmontesite-projects.png
---
```

## 🎨 Características do Carrossel

✅ **Galeria Responsiva**
  - Se adapta a qualquer tamanho de tela
  - Imagem principal em destaque (16:9)

✅ **Navegação por Thumbnails**
  - Miniaturas clicáveis para navegar
  - Indica qual imagem está ativa

✅ **Navegação por Teclado**
  - Use ← (esquerda) e → (direita) para navegar

✅ **Contador de Imagens**
  - Mostra "1 / 4" (imagem atual / total)

## 📝 Projetos Disponíveis

Os seguintes projetos estão prontos para receber imagens:

1. **CRM Monte Site** - `src/content/projects/crmontesite.md`
2. **E-commerce de Alta Performance** - `src/content/projects/ecommerce.md`
3. **Gestão de Layouts Google Sheets** - `src/content/projects/gestaolayoutssheets.md`
4. **Painel de Gestão ERP** - `src/content/projects/erp.md`
5. **Streaming Social** - `src/content/projects/mobile.md`

## 🚀 Depois de Adicionar as Imagens

1. Salve o arquivo `.md`
2. O site será atualizado automaticamente (hot reload)
3. As imagens aparecerão no carrossel da página do projeto

## 💡 Dicas

- **Tamanho recomendado:** 1600x900px (16:9)
- **Formato:** PNG, JPG ou WebP
- **Peso:** Comprima as imagens para melhor performance
- **Ordem:** A primeira imagem da lista aparece como padrão

## ❓ Dúvidas?

Se precisar adicionar mais campos ou modificar o carrossel, edite:
- Componente: `src/components/ProjectGallery.astro`
- Página: `src/pages/projetos/[slug].astro`
