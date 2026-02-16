# 📘 TypeScript Deep Dive

> Um projeto de aprendizado estruturado sobre TypeScript, explorando conceitos fundamentais a intermediários da linguagem com exemplos práticos e aplicáveis.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20.20.0-339933?logo=node.js)](https://nodejs.org/)
[![pnpm](https://img.shields.io/badge/pnpm-Package%20Manager-F69220?logo=pnpm)](https://pnpm.io/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🎯 Objetivo

Consolidar conhecimento sólido em **TypeScript**, desde conceitos básicos até padrões avançados. Este repositório documenta minha jornada de aprendizado com exemplos práticos que refletem situações reais de desenvolvimento profissional.

## 🚀 Quick Start

### Pré-requisitos

- Node.js v16+ (recomendado v20.20.0)
- pnpm (ou npm)
- NVM (opcional, para gerenciar versões do Node)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/allanlimass/aulao-typescript.git
cd aulao-typescript

# Use Node.js v20 (com NVM)
nvm use 20

# Instale as dependências
pnpm install
```

### Compilação & Execução

```bash
# Compilar TypeScript para JavaScript
pnpm exec tsc src/index.ts

# Executar o arquivo compilado
node dist/index.js

# Modo watch (recompila automaticamente)
pnpm exec tsc --watch
```

## 📚 Conceitos Abordados

### 1️⃣ Diferença entre Tipagem Dinâmica e Estática

**Tipagem Dinâmica (JavaScript)**

```js
let age = 21;
typeof age; // "number"

age = "21"; // ✅ Funciona, mas não é o ideal
typeof age; // "string"
```

**Tipagem Estática (TypeScript)**

```ts
let age: number = 21;
typeof age; // "number"

age = "21"; // ❌ ERROR: Type 'string' is not assignable to type 'number'
```

### 2️⃣ Tipos Básicos

- ✅ `number`, `string`, `boolean`
- ✅ `any` - Use com cuidado!
- ✅ Arrays tipados (`number[]`, `string[]`)
- ✅ Tipos explícitos e implícitos

### 3️⃣ Tipos Complexos

- ✅ **Tuplas** - Arrays heterogêneos com tipos fixos por posição
- ✅ **Type Unions** - Múltiplos tipos possíveis (`string | number`)
- ✅ **Enums** - Conjuntos nomeados de constantes

### 4️⃣ Type Assertions (Conversão de Tipos)

```ts
const productName: any = "Boné";

// Type Assertion com 'as'
const itemId = productName as string;

// Type Assertion com <> syntax
const itemId = <string>productName;
```

## 💡 Por que TypeScript?

### Problema em JavaScript

```js
const sum = (num1, num2) => {
  return num1 + num2;
};

sum("2", "3"); // "23" 😞 Não é o que esperávamos!
```

### Solução em TypeScript

```ts
const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

sum("2", "3"); // ❌ ERROR: Argument of type 'string' is not assignable to parameter of type 'number'
sum(2, 3); // ✅ 5
```

## 📁 Estrutura do Projeto

```
aulao-typescript/
├── src/
│   └── index.ts                    # Exemplos práticos de conceitos
├── dist/                           # Arquivos compilados (.js)
├── package.json                    # Dependências e scripts
├── tsconfig.json                   # Configuração do TypeScript
├── pnpm-lock.yaml                  # Lock file do pnpm
└── README.md                       # Este arquivo
```

## 🛠️ Stack Tecnológico

| Tecnologia     | Versão  | Propósito                                   |
| -------------- | ------- | ------------------------------------------- |
| **TypeScript** | ^5.9.3  | Tipagem estática                            |
| **Node.js**    | 20.20.0 | Runtime JavaScript                          |
| **pnpm**       | 10.29.3 | Gerenciador de pacotes (rápido e eficiente) |

## 📊 Progresso de Aprendizado

- [x] Tipos primitivos (`number`, `string`, `boolean`)
- [x] Arrays e coleções
- [x] Tuplas
- [x] Type unions (`|`)
- [x] Enums
- [x] Type assertions
- [x] Interfaces
- [x] Classes e Herança
- [x] Generics

## 🎓 Exemplos Práticos

### Trabalhando com Enums

```typescript
enum Direction {
  Up = 1,
  Down = 2,
  Left = 3,
  Right = 4,
}

const direction = Direction.Up; // 1
```

### Tuplas - Estruturas Heterogêneas

```typescript
const person: [number, string] = [1, "Maria"];
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Doe"],
];
```

### Type Unions - Flexibilidade Segura

```typescript
const productId: string | number = "PROD-001";
// productId = 123; também é válido
```

## ✨ Principais Aprendizados

1. **Type Safety** - TypeScript detecta erros em tempo de compilação, não em runtime
2. **Inferência de Tipos** - O compilador é inteligente o suficiente para deduzir tipos automaticamente
3. **Código Legível** - Tipos servem como documentação viva do seu código
4. **Debugging Facilitado** - Menos erros = menos tempo depurando
5. **Manutenibilidade** - Refatorações são mais seguras com tipagem estática

## 🔗 Recursos Úteis

- 📖 [Documentação Oficial TypeScript](https://www.typescriptlang.org/docs/)
- 📚 [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
- 🎮 [TypeScript Playground](https://www.typescriptplay.dev/)
- 🎬 [TypeScript para Iniciantes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## 🤝 Contribuições

Este é um projeto educacional pessoal. Sugestões e melhorias são bem-vindas!

```bash
git clone https://github.com/allanlimass/aulao-typescript.git
git checkout -b feature/melhoria
git commit -m "Add: Novo conceito abordado"
git push origin feature/melhoria
```

## 📧 Contato & Redes

<div align="center">

**Allan Silva**

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?logo=linkedin&logoColor=white&style=flat-square)](https://linkedin.com/in/allansilva)
[![GitHub](https://img.shields.io/badge/-GitHub-333?logo=github&logoColor=white&style=flat-square)](https://github.com/allanlimass)
[![Email](https://img.shields.io/badge/-Email-0078D4?logo=microsoft-outlook&logoColor=white&style=flat-square)](mailto:allanlimass@hotmail.com)

_Desenvolvedor Full Stack | TypeScript Enthusiast | Open Source Contributor_

</div>

---

<div align="center">

Feito com 🖤 usando TypeScript, Node.js e pnpm

</div>
