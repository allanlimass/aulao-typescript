// Type
type Order = {
  productId: string;
  price: number;
};

type User = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  password?: string; // ?: opcional
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Allan",
  lastName: "Silva",
  age: 34,
  email: "allan.interlock@gmail.com",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

// Unions
type Author = {
  books: string[];
};

const author: Author & User = {
  firstName: "Allan",
  lastName: "Silva",
  age: 34,
  email: "allan.interlock@gmail.com",
  orders: [],
  books: [],
  register() {
    return "a";
  },
};

// Interfaces
interface UserInterface {
  readonly firstName: string;
  email: string;
}

const emailUser: UserInterface = {
  firstName: "Allan",
  email: "allan.interlock@gmail.com",
};

// emailUser.firstName = "Edna"; // Não é possível alterar devido o readonly

// Somente possível ao utilizar o Type
type Grade = number | string;
const grade: Grade = 1;
