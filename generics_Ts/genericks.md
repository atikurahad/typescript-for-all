# TypeScript Generics

## Introduction

Generics হলো TypeScript-এর সবচেয়ে Powerful Feature-গুলোর একটি।

Generics ব্যবহার করে আমরা এমন Function, Interface, Type অথবা Class তৈরি করতে পারি যেগুলো বিভিন্ন Type-এর সাথে কাজ করতে পারে, কিন্তু Type Safety নষ্ট হয় না।

সহজ ভাষায়:

> Generics = Type-এর জন্য Variable

যেমন:

```ts
let name = "Rahim";
```

এখানে `name` একটি Variable যা Value Store করে।

তেমনি,

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে `T` হলো একটি Type Variable।

---

# Why Do We Need Generics?

ধরো আমরা একটি Function তৈরি করতে চাই যা Input হিসেবে যা পাবে সেটাই Return করবে।

## Without Generics

```ts
function identity(value: any): any {
  return value;
}
```

ব্যবহার:

```ts
const result = identity("Hello");
```

### Problem

`result` এর Type কী?

TypeScript জানে না।

কারণ `any` ব্যবহার করলে Type Safety হারিয়ে যায়।

---

## With Generics

```ts
function identity<T>(value: T): T {
  return value;
}
```

ব্যবহার:

```ts
const result = identity("Hello");
```

এখন TypeScript জানে:

```ts
result // string
```

কারণ `T` স্বয়ংক্রিয়ভাবে `string` হয়ে গেছে।

---

# Understanding `<T>`

```ts
function identity<T>(value: T): T {
  return value;
}
```

এখানে:

| Part       | Meaning                |
| ---------- | ---------------------- |
| `<T>`      | Generic Type Parameter |
| `value: T` | Parameter Type         |
| `: T`      | Return Type            |

---

# Generic Function

## Example 1

```ts
function identity<T>(value: T): T {
  return value;
}

const name = identity("Rahim");
```

TypeScript বুঝে:

```ts
const name: string
```

---

## Example 2

```ts
const age = identity(25);
```

TypeScript বুঝে:

```ts
const age: number
```

---

## Example 3

```ts
const isAdmin = identity(true);
```

TypeScript বুঝে:

```ts
const isAdmin: boolean
```

---

# Type Inference

Generics-এর সবচেয়ে বড় সুবিধা হলো TypeScript বেশিরভাগ সময় Type নিজেই Detect করতে পারে।

```ts
const user = identity("Rahim");
```

TypeScript Automatically বুঝে:

```ts
T = string
```

তাই সাধারণত Type Explicitly লিখতে হয় না।

---

# Generic with Arrays

ধরো Array-এর প্রথম Element Return করতে চাই।

```ts
function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}
```

ব্যবহার:

```ts
const firstNumber = getFirstElement([1, 2, 3]);
```

Type:

```ts
number
```

---

```ts
const firstUser = getFirstElement([
  "Rahim",
  "Karim",
]);
```

Type:

```ts
string
```

---

# Multiple Generic Types

একাধিক Type Variable ব্যবহার করা যায়।

```ts
function createPair<T, U>(
  first: T,
  second: U
) {
  return [first, second];
}
```

Usage:

```ts
const pair = createPair(
  "Rahim",
  25
);
```

Type:

```ts
[string, number]
```

---

# Generic Interface

Real World Project-এ খুব বেশি ব্যবহার হয়।

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

---

## Example

```ts
interface User {
  id: number;
  name: string;
}
```

```ts
const response: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Rahim",
  },
};
```

এখানে:

```ts
T = User
```

---

# Generic Type Alias

```ts
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
```

Usage:

```ts
type Product = {
  id: number;
  price: number;
};

const response: ApiResponse<Product> = {
  success: true,
  data: {
    id: 1,
    price: 500,
  },
};
```

---

# Generic Constraints

কখনো আমরা চাই Generic Type-এর কিছু নির্দিষ্ট Property থাকুক।

---

## Problem

```ts
function getLength<T>(item: T) {
  return item.length;
}
```

Error হবে।

কারণ TypeScript জানে না `T`-এর `length` আছে কিনা।

---

## Solution

```ts
function getLength<
  T extends { length: number }
>(item: T) {
  return item.length;
}
```

---

Usage:

```ts
getLength("Hello");
```

```ts
getLength([1, 2, 3]);
```

Works ✅

---

```ts
getLength(100);
```

Error ❌

কারণ Number-এর `length` নেই।

---

# Generic with Objects

```ts
function printUser<T extends {
  name: string;
}>(user: T) {
  console.log(user.name);
}
```

Usage:

```ts
printUser({
  name: "Rahim",
  age: 25,
});
```

Works ✅

---

# keyof with Generics

Advanced এবং Real World Projects-এ অনেক ব্যবহৃত হয়।

```ts
function getProperty<
  T,
  K extends keyof T
>(
  obj: T,
  key: K
) {
  return obj[key];
}
```

Usage:

```ts
const user = {
  name: "Rahim",
  age: 25,
};

getProperty(user, "name");
```

Works ✅

---

```ts
getProperty(user, "salary");
```

Error ❌

কারণ `salary` Property নেই।

---

# Generic Class

Generics Class-এর সাথেও ব্যবহার করা যায়।

```ts
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }
}
```

Usage:

```ts
const stringBox = new Box(
  "Hello"
);
```

Type:

```ts
Box<string>
```

---

```ts
const numberBox = new Box(
  100
);
```

Type:

```ts
Box<number>
```

---

# Real World Example

Backend API Response Handle করার সময় Generics সবচেয়ে বেশি ব্যবহার করা হয়।

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}
```

User Response:

```ts
interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  success: true,
  data: {
    id: 1,
    name: "Rahim",
  },
};
```

Product Response:

```ts
interface Product {
  id: number;
  price: number;
}

const productResponse: ApiResponse<Product> = {
  success: true,
  data: {
    id: 1,
    price: 500,
  },
};
```

একই Structure বারবার লিখতে হচ্ছে না।

---

# Common Naming Convention

| Name | Meaning     |
| ---- | ----------- |
| T    | Type        |
| K    | Key         |
| V    | Value       |
| U    | Second Type |
| E    | Element     |

Example:

```ts
function merge<T, U>(
  a: T,
  b: U
) {}
```

---

# When Should You Use Generics?

Generics ব্যবহার করো যখন:

* Reusable Function লিখতে হবে
* Reusable Interface লিখতে হবে
* API Response Handle করতে হবে
* Different Type Support করতে হবে
* Type Safety বজায় রাখতে হবে

---

# When NOT to Use Generics?

Generics ব্যবহার করো না যখন:

* Type Fixed
* Reusability দরকার নেই
* Generic Type Parameter একবারই ব্যবহার হচ্ছে

Bad Example:

```ts
function getName<T>(
  name: T
) {
  return name;
}
```

এখানে Generic-এর দরকার নেই।

ভালো হবে:

```ts
function getName(
  name: string
) {
  return name;
}
```

---

# Summary

| Concept           | Example                    |
| ----------------- | -------------------------- |
| Generic Function  | `function test<T>()`       |
| Generic Interface | `interface ApiResponse<T>` |
| Generic Type      | `type Response<T>`         |
| Multiple Generic  | `<T, U>`                   |
| Generic Array     | `T[]`                      |
| Constraint        | `T extends ...`            |
| keyof             | `K extends keyof T`        |
| Generic Class     | `class Box<T>`             |

---

# Final Thought

Generics-এর মূল উদ্দেশ্য হলো:

* Code Reusability ✅
* Type Safety ✅
* Better IntelliSense ✅
* Less Duplication ✅

মনে রাখো:

> `any` Type Safety নষ্ট করে, কিন্তু `Generics` Type Safety বজায় রেখে Code Reusable করে।

এ কারণেই Professional TypeScript Developer-রা API, Utility Function, React Components, Custom Hooks এবং Library Development-এ Generics ব্যাপকভাবে ব্যবহার করে।
