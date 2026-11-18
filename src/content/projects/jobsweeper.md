---
title: JobSweeper
year: 2026
category: IA aplicada / Automação / Dados
description: Robô pessoal que busca vagas, dá nota de compatibilidade com o meu perfil e gera um currículo ATS de uma página para cada vaga, sem inventar nada. Mais de 640 testes automatizados.
color: "#00FFA3"
technologies: ["Python", "Flask", "Playwright", "SQLite", "pytest", "Claude (Anthropic)", "HTML", "CSS", "JavaScript"]
link: null
order: 1
areas: [ia, dev, dados]
images: ["/projects/jobsweeper/vaga.png", "/projects/jobsweeper/curriculo.png", "/projects/jobsweeper/linkedin.png"]
metrics:
  - value: "640+"
    label: "Testes automatizados"
    color: green
  - value: "1 por vaga"
    label: "Currículo ATS em PDF"
    color: blue
  - value: "2x/dia"
    label: "Rotina agendada no Windows"
    color: white
---

## Visão Geral

O **JobSweeper** é uma aplicação pessoal em Python e Flask que automatiza a parte repetitiva da busca de emprego: encontrar vagas, entender o que cada uma pede e adaptar o currículo a ela seguindo as regras de ATS. Eu reviso cada vaga numa fila antes de qualquer decisão.

> Os prints desta página usam **dados de demonstração** (pessoa, empresas e vagas fictícias). O repositório é privado.

### 🎯 O problema

Buscar vagas, ler cada descrição e montar um currículo diferente para cada uma tomava horas toda semana, e o currículo genérico perdia para os filtros de ATS.

### ⚡ O que ele faz

| Parte | O que faz |
|-------|-----------|
| **Busca** | Busca vagas de desenvolvimento, IA e dados duas vezes por dia, numa rotina agendada no Windows. |
| **Nota de compatibilidade** | Separa requisitos exigidos e desejáveis, compara com o meu currículo mestre e dá uma nota (70% exigidos, 30% desejáveis), com alertas de nível, experiência e local. |
| **Currículo ATS por vaga** | Gera um PDF de uma página por vaga. Uma verificação automática barra qualquer habilidade ou número que não esteja no currículo mestre. |
| **Fila de revisão** | Mostra uma vaga por vez: o que bate, o que falta e o currículo gerado, para eu decidir. |
| **LinkedIn** | Escreve rascunhos de post sobre o que eu construo, com um humanizador em português que mede se o texto parece escrito por IA. Nada é publicado sozinho. |

### 🧠 Decisões que importam

- **Nunca inventar:** o currículo de cada vaga só reorganiza e destaca o que já está no currículo mestre; o que falta aparece como lacuna, não como habilidade.
- **Teste antes do código:** cada regra de nota, cada filtro de vaga e cada formato de arquivo nasceu de um teste que falhava primeiro.
- **Dados locais:** dados pessoais ficam fora do git; nada sai da máquina sem eu pedir.

## Stack Técnico

- **Python 3.12 + Flask** — aplicação web local e API
- **SQLite** — fila de vagas e histórico
- **Playwright** — automação de navegador e geração dos PDFs
- **pytest** — mais de 640 testes automatizados
- **LLM (API da Anthropic/Claude)** — análise de perfil
- Desenvolvido com **Claude Code** e **Codex**, com revisão de código por um segundo modelo a cada parte

## Status

**Em uso.** Roda no meu computador e evolui em partes, cada uma com plano, testes e revisão.
