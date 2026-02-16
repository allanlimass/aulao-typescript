"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
const person = new Person(1, "Allan", 35);
console.log(person);
//# sourceMappingURL=classes.js.map