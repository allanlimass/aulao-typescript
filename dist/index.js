"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tipos Básicos
let age = 5;
const firstName = "Allan";
const isValid = true;
let idk = 1;
idk = "12";
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Allan", "Maria"];
// Tupla
const person = [1, "Maria"];
// Lista de Tuplas
const people = [
    [1, "Jane"],
    [2, "Doe"],
];
// Intersections
const productId = "1";
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
// let itemId = productName as string; // muda de any para string
let itemId = productName; // mesmo resultado
console.log(age, firstName, isValid, idk);
//# sourceMappingURL=index.js.map