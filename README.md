# Tipagem Dinâmica & Tipagem Estática

## Tipagem Dinâmica:

- O tipo de uma variável é associado com o seu valor e não é explicitamente declarado
- O tipo de uma variável pode ser alterado livremente durante a execução do código
- Exemplo de uma linguagem com Tipagem Dinâmica (JavaScript, Python, Ruby, PHP):

  ```js
  let age;

  age = 21;
  typeof age; // number

  age = "21";
  typeof age; // string
  ```

## Tipagem Estática

- O tipo de uma variável é explicitamente declarado
- O tipo de uma variável não pode ser alterado durante a execução do código
- Os valores assinalados à uma variável precisam respeitar o seu tipo previamente definido

  ```typescript
  let age: number;

  age = 21;
  typeof age; // number

  age = "21"; // Error: age must be of type number
  ```

# Linguagens Estáticas & Compiladores

- Linguagens estáticas possuem compiladores, que verificam as variáveis presentes no código, seus tipos e seus valores (e apontam eventuais erros)
- O compiladores de cada linguagem possui suas próprias características
  - O TypeScript utiliza o TypeScript Compiler

# O que é TypeScript?

- É uma linguagem desenvolvida com base no JavaScript
- Adiciona novas funcionalidades e Tipagem Estática ao JavaScript
- Todo código TypeScript é convertido para o seu equivalente em JS pelo TypeScript Compiler
  - Portanto, podemos usá-lo tanto no back-end quanto no front-end
  - E por que isso acontece? Porque os navegadores não entendem TypeScript

# Por que usar o TypeScript?

- Como é uma linguagem com Tipagem Estática, ele previne situações como:

  ```js
  const sum = (num1, num2) => {
    return num1 + num2;
  };

  sum("2", "3"); // 23 (não queremos isso!)
  ```

  ```ts
  const sum = (num1: number, num2: number) => {
    return num1 + num2;
  };

  sum("2", "3"); // Error
  ```

- Podemos utilizar funcionalidades modernas do JavaScript (import/export) e o TypeScript Compiler as compilará para um código que funcione em navegadores mais antigos

  ```ts
  import uuid from "uuid";

  const generateUser = () => {
    return { id: uuid() };
  };
  ```

  ```js
  const uuid = require("uuid");

  function generateUser() {
    return {
      id: uuid(),
    };
  }
  ```

# Visão Geral das Vantagens e Desvantagens

- **Vantagens:**
  - Recursos avançados do JS
  - Prevenção de erros de tipagem
  - Mais fácil de identificar bugs
  - Código mais legível
  - Extremamente popular
- **Desvantagens:**
  - Escrevemos mais código
  - Há uma curva de aprendizado
  - Requer compilação para JavaScript
