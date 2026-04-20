---
title: Certificado PJ
year: 2023
category: E-commerce / Lead Generation / Automação
description: Plataforma de venda de certificados digitais A1 integrada com Stripe, webhook automático com Make.com, RD Station e Exact Spotter para qualificação de leads em tempo real.
color: "#10b981"
technologies: ["WordPress", "Divi Builder", "Elementor", "Stripe", "Make.com", "RD Station", "Exact Spotter", "Google Sheets", "Webhooks"]
link: https://certificadopj.com.br
order: 4
images: ["/Portifolio/projects/certificadopj/certificado1.jpg", "/Portifolio/projects/certificadopj/certificado2.jpg", "/Portifolio/projects/certificadopj/make.png"]
---

## Visão Geral

O **Certificado PJ** é uma plataforma de e-commerce especializada na venda de certificados digitais e-CNPJ A1, desenvolvida com WordPress, Divi Builder e Elementor. O projeto foi estrategicamente desenhado para ser um gerador de leads qualificados para o SaaS **eGestor** — uma plataforma de gestão financeira e de estoque.

### 🎯 Propósito

Criar um canal de vendas de certificados digitais de alta conversão que simultaneamente qualifica e encaminha leads para o time de SDRs (Sales Development Representatives) da empresa para venda do SaaS de gestão financeira.

### 👥 Público-Alvo

- **Empresários e PJ's:** Pessoas jurídicas que precisam de certificado digital A1
- **Contadores e Consultores:** Profissionais que lidam com documentação fiscal
- **Pequenas e Médias Empresas:** Que querem automatizar gestão financeira

### ⚡ Benefícios Principais

| Benefício | Descrição |
|-----------|-----------|
| **Lead Qualification** | Dados do cliente coletados durante checkout com campos personalizados |
| **Automação Total** | Webhooks conectam checkout → Make → RD Station → Exact Spotter em tempo real |
| **CRM Integrado** | Dados sincronizados automaticamente com RD Station para o time de vendas |
| **Dados Estruturados** | Google Sheets armazena histórico completo de transações com metadados |
| **Conversão B2B** | Transforma compradores de certificado em prospects do SaaS |

---

## Stack Técnico

### Frontend & CMS

- **WordPress** — CMS base com simplicidade e escalabilidade
- **Divi Builder** — Page builder visual para criação de landing pages
- **Elementor** — Construção de formulários customizados
- **HTML/CSS/JavaScript** — Customizações adicionais

### Pagamento & E-commerce

- **WooCommerce** — Plugin de e-commerce para WordPress
- **Stripe** — Gateway de pagamento seguro para cartão de crédito/débito
- **Certificação SSL/TLS** — Segurança em transações

### Automação & Integrações

- **Make.com** — Orquestração de workflows e automações
- **Webhooks** — Receptores de eventos do checkout em tempo real
- **Google Apps Script** — Automação de Google Sheets

### CRM & Lead Management

- **RD Station** — CRM para gestão e qualificação de leads
- **Exact Spotter** — Ferramenta de prospecção para SDRs
- **Google Sheets** — Data warehouse de transações

---

## Funcionalidades Principais

### 1. Página de Venda (Landing Page)

**Estrutura:**
- Hero section com call-to-action principal
- Descrição do certificado e seus benefícios
- Comparação: O que é um certificado digital A1
- Testimoniais e casos de sucesso
- Seção de FAQ
- CTA secundário no final

**Características:**
- Design responsivo (mobile-first)
- Otimizado para conversão (copy persuasivo)
- Imagens de alta qualidade do produto
- Integração com Stripe para checkout seguro

### 2. Checkout Integrado com Stripe

**Fluxo do Checkout:**
1. Cliente visualiza detalhes do certificado
2. Clica em "Comprar Certificado"
3. Preenche formulário de checkout com:
   - Dados pessoais (Nome, Sobrenome, Email)
   - Dados da empresa (CNPJ, Razão Social, Nome)
   - Telefone e Celular
   - Endereço completo
   - **Campos Personalizados:**
     - É contador? (Sim/Não)
     - Quantas notas emite por mês? (Dropdown com ranges)
     - Com que você trabalha? (Seleção de produtos)
     - Possui CNH? (Sim/Não)
4. Seleção de método de pagamento (Mastercard/Visa)
5. Confirmação de compra

**Segurança:**
- SSL/TLS para proteção de dados
- Tokens do Stripe para não armazenar informações sensíveis
- Conformidade com PCI DSS

### 3. Webhook & Automação com Make.com

**Fluxo Automático Post-Compra:**

```
Compra Realizada
     ↓
Webhook dispara para Make.com
     ↓
Make recebe dados do cliente
     ↓
┌─────────────────────────┬──────────────────────────┐
↓                         ↓                          ↓
RD Station        Exact Spotter            Google Sheets
Cria Lead         Cria Prospect            Registra Venda
```

**Ações Automáticas:**

1. **RD Station Integration:**
   - Cria novo contato com todos os dados do cliente
   - Associa tags: "Certificado PJ", "Lead Qualificado"
   - Configura pipeline de vendas
   - Ativa sequência de email (onboarding)

2. **Exact Spotter Integration:**
   - Cria novo prospect para prospecção
   - Adiciona informações de perfil (segmento, tamanho empresa)
   - Atribui ao SDR responsável baseado em regras
   - Notifica SDR para contato imediato

3. **Google Sheets Logging:**
   - Armazena transação completa em planilha
   - Mantém histórico para análise
   - Facilita reconciliação financeira

### 4. Google Sheets como Data Warehouse

**Colunas da Planilha:**

| Coluna | Descrição | Origem |
|--------|-----------|--------|
| Voucher Gerado | Boolean - Se voucher foi enviado | Manual (SDR) |
| ID Pedido | ID único do WooCommerce | Webhook |
| Data da Compra | Timestamp da transação | Webhook |
| Status | processing / completed / refunded | Webhook |
| Nome | Nome completo do cliente | Checkout |
| Sobrenome | Sobrenome do cliente | Checkout |
| Email | Email principal | Checkout |
| CNPJ | CNPJ da empresa | Checkout (customizado) |
| Empresa | Razão social da empresa | Checkout |
| Celular | Número de celular | Checkout (customizado) |
| Telefone | Telefone principal | Checkout |
| Endereço | Rua e número | Checkout |
| Cidade | Município | Checkout |
| Estado | UF | Checkout |
| CEP | Código postal | Checkout |
| É Contador? | Sim/Não | Checkout (customizado) |
| Notas Emitidas | Quantidade por mês | Checkout (customizado) |
| Trabalha Com | Segmento/Produto | Checkout (customizado) |
| Possui CNH? | Sim/Não | Checkout (customizado) |

**Funcionalidade de Script:**
- Auto-importação: Sincroniza dados do WooCommerce a cada hora
- Deduplicação: Não sobrescreve linhas com voucher já gerado
- Ordenação: Classifica por data descrescente (mais recente no topo)
- Auditoria: Mantém histórico completo de transações

---

## Código de Automação Google Sheets

### Google Apps Script - Importação WooCommerce

A função `importarPedidosWooCommerce()` é responsável por sincronizar pedidos do WooCommerce para a planilha do Google Sheets. Principais features:

**O que faz:**
- Conecta à API WooCommerce do site via credenciais (consumer key + secret)
- Busca apenas pedidos com status "processing" ou "completed"
- Evita duplicação: não sobrescreve pedidos que já têm voucher marcado
- Extrai campos personalizados do checkout (CNPJ, CNH, Notas Emitidas, etc)
- Insere linha nova na planilha em tempo real
- Ordena por data (decrescente)

**Caminho de Autenticação:**
- Usa autenticação básica (Basic Auth) com WooCommerce API
- Consumer Key e Consumer Secret armazenados na função
- Header: `Authorization: Basic [base64(key:secret)]`

**Campos Mapeados:**
- Dados pessoais: nome, sobrenome, email
- Dados da empresa: CNPJ, razão social, telefone
- Endereço: rua, cidade, estado, CEP
- Metadados customizados: campos personalizados do formulário

---

## Fluxo Completo de Conversão

### 1️⃣ Aquisição

```
Anúncio → Landing Page → Visualização → Interesse
```

### 2️⃣ Captura

```
Checkout → Coleta de Dados → Pagamento Stripe → Confirmação
```

### 3️⃣ Qualificação

```
Webhook → Make.com → RD Station + Exact Spotter → Dados enriquecidos
```

### 4️⃣ Engajamento

```
Email Automático → Contato SDR → Qualificação para eGestor → Venda
```

### 5️⃣ Análise

```
Google Sheets → Relatórios → KPIs → Otimização
```

---

## Resultados & Impacto

### Métricas de Sucesso

- **Automação:** 100% dos pedidos processados automaticamente (zero trabalho manual)
- **Qualificação:** Dados estruturados identificam prospects de alto potencial
- **Velocidade:** Contato SDR em < 5 minutos após compra
- **Sincronização:** Dados disponíveis em RD Station em tempo real
- **Histórico:** Planilha mantém auditoria completa de todas as transações

### Benefícios Realizados

1. **Eficiência Operacional:**
   - Eliminação de dados manuais (100% automático)
   - Redução de tempo administrativo em ~10h/semana
   - Zero erros de digitação ou dados faltando

2. **Qualificação de Leads:**
   - Campos personalizados permitem segmentação (tamanho empresa, setor)
   - SDRs recebem leads pré-qualificados com contexto completo
   - Taxa de resposta aumentada (leads já validados)

3. **Integração CRM-to-SDR:**
   - RD Station centraliza todos os contatos
   - Exact Spotter facilita prospecção coordenada
   - Pipeline visível em tempo real

4. **Revenue Impact:**
   - Redução no CAC (Customer Acquisition Cost) do eGestor
   - Aumento na taxa de conversão PJ → SaaS
   - Receita dupla: certificado + contrato eGestor

---

## Lições Aprendidas

### ✅ Decisões Acertadas

1. **Webhook em tempo real:** Contatos chegam ao SDR enquanto memória fresca
2. **Google Sheets como fonte única:** Reconciliação simples, transparência total
3. **Campos personalizados no checkout:** Identificam buyer personas
4. **Make.com para orquestração:** Sem necessidade de API nativa entre sistemas

### 🔄 Melhorias Futuras

- [ ] Integração com WhatsApp para envio automático de voucher
- [ ] Dashboard de conversão certificado → eGestor em Looker/Data Studio
- [ ] A/B testing no checkout (copy, campos, order)
- [ ] Retenção: email automático se cliente não ativar certficado em 7 dias
- [ ] Upsell: oferta de plugins/extensões do eGestor na página de sucesso
- [ ] Mobile app: SDK para integração direta em apps de contabilidade

---

## Tecnologias Complementares

- **Google Apps Script:** Automação serverless para integração
- **Stripe Webhooks:** Notificações de eventos de pagamento
- **WooCommerce REST API:** Acesso programático a pedidos e dados
- **OAuth 2.0:** Autenticação segura entre sistemas

---

## Conclusão

O **Certificado PJ** exemplifica como um e-commerce bem arquitetado pode ser muito mais que um canal de vendas diretas — é uma **máquina de geração e qualificação de leads** para produtos complementares. A automação end-to-end elimina atritos manuais, garante dados de alta qualidade e permite que o time de SDRs foque em vendas, não em entrada de dados.

A combinação de WordPress + Stripe + Make.com + RD Station provou ser robusta, escalável e economicamente viável, servindo como modelo para outros fluxos de lead generation na empresa.
