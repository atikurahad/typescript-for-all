# Type vs Interface in TypeScript

TypeScript-এ `type` এবং `interface` উভয়ই Custom Data Type তৈরির জন্য ব্যবহার করা হয়। এদের সাহায্যে Object-এর Structure, Function Signature এবং Complex Type Define করা যায়।

---

# What is Type?

`type` হলো Type Alias। এটি একটি নতুন নাম (alias) তৈরি করে কোনো Type-এর জন্য।

## Syntax

```ts
type User = {
  name: string;
  age: number;
};
```

## Example

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Rahim",
  age: 25,
};
```

---

# Use Cases of Type

## 1. Object Type

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};
```

---

## 2. Union Type

`interface` দিয়ে Union Type তৈরি করা যায় না।

```ts
type Status = "success" | "error" | "loading";
```

---

## 3. Primitive Alias

```ts
type ID = string | number;
```

---

## 4. Function Type

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

---

## 5. Tuple Type

```ts
type UserInfo = [string, number];

const person: UserInfo = ["Rahim", 25];
```

---

# What is Interface?

`interface` মূলত Object-এর Structure Define করার জন্য ব্যবহার করা হয়।

## Syntax

```ts
interface User {
  name: string;
  age: number;
}
```

## Example

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Rahim",
  age: 25,
};
```

---

# Use Cases of Interface

## 1. Object Shape

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

---

## 2. Function Interface

```ts
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => a + b;
```

---

## 3. Class Contract

Interface Class-এর Structure Define করতে সাহায্য করে।

```ts
interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log("Woof!");
  }
}
```

---

## 4. Extending Interface

```ts
interface Person {
  name: string;
}

interface Employee extends Person {
  salary: number;
}

const employee: Employee = {
  name: "Rahim",
  salary: 50000,
};
```

---

# Interface Declaration Merging

একই নামের Interface একাধিকবার Declare করা যায়।

```ts
interface User {
  name: string;
}

interface User {
  age: number;
}

const user: User = {
  name: "Rahim",
  age: 25,
};
```

Type Alias-এ এটি সম্ভব নয়।

---

# Type Extension

```ts
type Person = {
  name: string;
};

type Employee = Person & {
  salary: number;
};
```

---

# Type vs Interface

| Feature                  | Type | Interface |
| ------------------------ | ---- | --------- |
| Object Define            | ✅    | ✅         |
| Primitive Alias          | ✅    | ❌         |
| Union Type               | ✅    | ❌         |
| Tuple Type               | ✅    | ❌         |
| Function Type            | ✅    | ✅         |
| Extends                  | ✅    | ✅         |
| Declaration Merging      | ❌    | ✅         |
| Class Implements         | ✅    | ✅         |
| Complex Type Composition | ✅    | Limited   |

---

# When to Use Type?

Use `type` when:

* Union Type দরকার
* Tuple দরকার
* Primitive Alias দরকার
* Complex Type Composition দরকার
* Function Signature Define করতে হবে

Example:

```ts
type Status = "success" | "error" | "loading";
type ID = string | number;
```

---

# When to Use Interface?

Use `interface` when:

* Object Structure Define করতে হবে
* Class Contract Define করতে হবে
* Large Scale Project-এ API/Data Model Define করতে হবে
* Declaration Merging-এর সুবিধা দরকার

Example:

```ts
interface User {
  id: number;
  name: string;
}
```

---

# Recommended Practice

Modern TypeScript Project-এ সাধারণত:

* Object Structure → `interface`
* Union / Tuple / Primitive Alias → `type`

ব্যবহার করা হয়।

```ts
interface User {
  id: number;
  name: string;
}

type Status = "success" | "error" | "loading";
```

এটি  Maintainable Approach।
