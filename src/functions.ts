// Tipando os parâmetros e o retorno
const sum = (x: number, y: number): string => {
  return `O resultado é ${x + y}`;
};

const value = sum(1, 2);

// void: função que não retorna nada
const log = (message: string): void => {
  console.log(message);
};

interface MathFunc {
  (x: number, y: number): number;
}

const sub: MathFunc = (x: number, y: number): number => {
  return x + y;
};
