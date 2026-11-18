# Portfólio - MATEUS S P.

> Full-Stack Developer | IA aplicada | Dados

## [Acesse o Portfólio](https://MateusDevZip.github.io/Portifolio/)

---

## Sobre

Portfólio pessoal com os projetos que eu construí, agrupados pelas três áreas em que atuo: **desenvolvimento** (front-end e back-end), **IA aplicada** e **dados**. Cada projeto tem uma página com o problema, o que foi entregue, a stack e prints.

| Projeto | Área | Resumo |
|---------|------|--------|
| **JobSweeper** | IA · Dev · Dados | Robô pessoal que busca vagas, dá nota de compatibilidade e gera um currículo ATS por vaga sem inventar nada (Python, Flask, Playwright, pytest). |
| **CRM Monte Site** | Dev | CRM criado do zero para a frente de sites institucionais; mais de 900 projetos cadastrados (React, TypeScript, Supabase). |
| **Gestão de Layouts** | Dev · Dados | Gestão de layouts integrada ao Google Sheets, com painel de indicadores (React, TypeScript, Supabase). |
| **Expert eGestor** | Dev | Plataforma de treinamento (LMS) em produção (React, TypeScript, Supabase). |
| **Colar** | Dev | Gestão compartilhada da casa, em beta na Vercel (Python, Flask, Supabase). |
| **Alt+Loot** | Dev | Jogo idle/clicker com cara de software corporativo (React, Supabase). |
| **Certificado PJ** | Dev | Venda de certificados digitais com checkout e automações de CRM (WordPress, WooCommerce, Stripe, Make.com); descontinuado. |

Os números que aparecem nas páginas são os que eu posso confirmar. Prints de sistemas com dados de clientes têm nomes e números ocultos, e os do JobSweeper usam dados de demonstração.

---

## Stack Técnico

- **Astro 4** (site estático, coleções de conteúdo em Markdown)
- **Tailwind CSS**
- **GSAP + ScrollTrigger** (animações), **Lenis** (rolagem suave), **Three.js** (fundo 3D)

---

## Como Rodar Localmente

```bash
npm ci          # instalar dependências
npm run dev     # servidor de desenvolvimento
npm run build   # gerar o site em dist/
npm run preview # ver o build
```

Para borrar dados reais em um print novo: `python scripts/borrar_regioes.py` (as regiões ficam no próprio script).

---

## Deploy

O site é publicado automaticamente no GitHub Pages a cada push na branch `master`, pelo GitHub Actions (`.github/workflows/deploy.yml`).

Acesse: **https://MateusDevZip.github.io/Portifolio/**

---

## Licença

Este projeto é de uso pessoal. Sinta-se livre para explorar e aprender com o código.

---

**Desenvolvido por [MATEUS S P.](https://www.linkedin.com/in/mateusdsp/)**
