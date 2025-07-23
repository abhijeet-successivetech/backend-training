
# TypeScript

## Introduction

TypeScript is an open-source programming language developed by Microsoft that builds upon JavaScript by adding static type definitions. It allows developers to catch errors early during development, improve code readability, and build scalable applications confidently.

### Key Features of TypeScript

- Superset of JavaScript: All valid JavaScript code is valid TypeScript code.
- Static Typing: Enables defining data types for variables and function parameters.
- Compile-time Checking: Detects type-related errors during development before code execution.
- IDE Support: Provides autocompletion, type inference, and refactoring tools.
- Advanced Features: Supports interfaces, generics, enums, and access modifiers, enhancing object-oriented programming in JavaScript projects.

---

## Why Use TypeScript?

- Helps prevent bugs by catching type errors at compile time.
- Improves code readability and documentation through explicit types.
- Enhances development experience with better tooling support.
- Facilitates easier collaboration in large projects.

---

## Basic Types in TypeScript

Below are some commonly used basic types with examples:

### 1. Number

Represents all numbers, including integers and floating-point.

```ts
let count: number = 10;
let price: number = 99.99;
```

---

### 2. String

Represents textual data.

```ts
let firstName: string = "Rahul";
let greeting: string = `Hello, ${firstName}`;
```

---

### 3. Boolean

Represents true or false values.

```ts
let isLoggedIn: boolean = true;
let hasAccess: boolean = false;
```

---

### 4. Array

Represents a collection of values of the same type.

Two syntax options:

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: Array<string> = ["Alice", "Bob", "Charlie"];
```

---

### 5. Tuple

Represents an array with fixed number of elements of known types.

```ts
let user: [string, number] = ["John", 25];
```

---

### 6. Enum

Allows defining a set of named constants.

```ts
enum Direction {
  North,
  South,
  East,
  West
}

let move: Direction = Direction.North;
```

---

### 7. Any

Represents any type. It disables type checking, useful when migrating from JavaScript.

```ts
let randomValue: any = 10;
randomValue = "Hello";
randomValue = true;
```

---

### 8. Void

Used for functions that do not return a value.

```ts
function logMessage(): void {
  console.log("This is a log message");
}
```

---

### 9. Null and Undefined

Represents null or undefined values.

```ts
let u: undefined = undefined;
let n: null = null;
```

---

### 10. Never

Represents values that never occur. Often used for functions that throw errors or have infinite loops.

```ts
function throwError(message: string): never {
  throw new Error(message);
}
```

---

## Declaring Variables in TypeScript

Variables can be declared using let, const, or var (not recommended in TypeScript due to scoping issues).

### Example

```ts
let age: number = 20;
const appName: string = "MyApp";
var oldSyntax = "Avoid using var in TypeScript";
```

- let: Block-scoped variable, can be reassigned.
- const: Block-scoped constant, cannot be reassigned.
- var: Function-scoped variable, avoid using due to hoisting issues.

---

## Type Inference

If a type is not explicitly provided, TypeScript infers it from the assigned value.

```ts
let language = "TypeScript"; // inferred as string
language = "JavaScript"; // valid
```

---

## Conclusion

TypeScript enhances JavaScript development by adding static typing and advanced features for writing safer and more maintainable code. Understanding basic types and variable declarations is the first step towards mastering TypeScript for modern web and backend development.

---

