interface IPerson {
  id: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  protected name: string; // somente visível dentro da própria classe ou subclasse
  private age: number; // somente vísivel dentro da própria classe

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

// Mesma coisa que acima
class PersonRefact {
  constructor(
    readonly id: number,
    protected name: string,
    private age: number,
  ) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }

  whoAmI() {
    // return this.age; // Não é possível por ser private
    return this.name;
  }
}

const person = new Person(1, "Allan", 35);

console.log(person);
