// Tipos Básicos
let age: number = 5;
const firstName: string = "Allan";
const isValid: boolean = true;
let idk: any = 1;

idk = "12";
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Allan", "Maria"];

// Tupla
const person: [number, string] = [1, "Maria"];

// Lista de Tuplas
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Doe"],
];

// Intersections
const productId: string | number = "1";

// Enum
enum Direction {
  Up = 1,
  Down = 2,
}

const direction = Direction.Up;

// Type Assertions
const productName: any = "Boné";

// let itemId = productName as string; // muda de any para string
let itemId = <string>productName; // mesmo resultado

console.log(age, firstName, isValid, idk);
