# TypeScript Type Alias

## Type Alias কী?

Type Alias হলো TypeScript-এর একটি Feature যা একটি Custom Type তৈরি করতে ব্যবহৃত হয়।

সহজভাবে বলতে গেলে, Type Alias-এর মাধ্যমে আমরা একটি Type-এর জন্য নতুন নাম (Alias) তৈরি করতে পারি, যাতে একই Type বারবার লিখতে না হয়।

---

## Basic Type Alias Example

```ts
type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Atik",
  age: 25,
};
```

এখানে `User` একটি Custom Type, যা Object-এর Structure Define করছে।

---

## কেন Type Alias ব্যবহার করবো?

Without Type Alias:

```ts
const user1: {
  name: string;
  age: number;
} = {
  name: "Atik",
  age: 25,
};

const user2: {
  name: string;
  age: number;
} = {
  name: "Rahim",
  age: 30,
};
```

একই Structure বারবার লিখতে হচ্ছে।

With Type Alias:

```ts
type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Atik",
  age: 25,
};

const user2: User = {
  name: "Rahim",
  age: 30,
};
```

Code আরও Clean এবং Reusable হয়ে যায়।

---

## Optional Property

Type Alias-এর মধ্যেও Optional Property ব্যবহার করা যায়।

```ts
type User = {
  name: string;
  age: number;
  phone?: string;
};
```

Usage:

```ts
const user: User = {
  name: "Atik",
  age: 25,
};
```

এখানে `phone` না দিলেও কোনো Error হবে না।

---

## Readonly Property

```ts
type User = {
  readonly id: number;
  name: string;
};
```

Usage:

```ts
const user: User = {
  id: 1,
  name: "Atik",
};
```

নিচের কোড Error দিবে:

```ts
user.id = 2;
```

কারণ `id` Readonly।

---

## Function Type

Type Alias Function-এর Type Define করতে পারে।

```ts
type AddFunction = (
  a: number,
  b: number
) => number;
```

Usage:

```ts
const add: AddFunction = (
  a,
  b
) => {
  return a + b;
};
```

---

## Array Type

```ts
type StringArray = string[];
```

Usage:

```ts
const skills: StringArray = [
  "TypeScript",
  "React",
  "Node.js",
];
```

---

## Union Type

Type Alias-এর অন্যতম বড় সুবিধা হলো Union Type তৈরি করা।

```ts
type Status =
  | "success"
  | "error"
  | "loading";
```

Usage:

```ts
let currentStatus: Status;

currentStatus = "success";
```

---

## Intersection Type

একাধিক Type Combine করা যায়।

```ts
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type EmployeeInfo =
  Person & Employee;
```

Usage:

```ts
const employee: EmployeeInfo = {
  name: "Atik",
  salary: 50000,
};
```

---

## Nested Type Alias

```ts
type Address = {
  city: string;
  country: string;
};

type User = {
  name: string;
  address: Address;
};
```

Usage:

```ts
const user: User = {
  name: "Atik",

  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
```

---

## Type Alias ব্যবহারের সুবিধা

* Custom Type তৈরি করা যায়।
* Code Reusability বৃদ্ধি পায়।
* Union Type তৈরি করা যায়।
* Intersection Type তৈরি করা যায়।
* Function Type Define করা যায়।
* Complex Type সহজে Manage করা যায়।

---

## গুরুত্বপূর্ণ বিষয়

* Type Alias একটি Custom Type Name তৈরি করে।
* Object Type Define করতে পারে।
* Function Type Define করতে পারে।
* Array Type Define করতে পারে।
* Union Type Support করে।
* Intersection Type Support করে।
* Complex Type System তৈরিতে ব্যাপকভাবে ব্যবহৃত হয়।

---

##  সারাংশ

Type Alias হলো TypeScript-এর একটি Feature যা Custom Type তৈরি করতে ব্যবহৃত হয়। এটি Object, Function, Array, Union এবং Intersection Type Define করার জন্য অত্যন্ত গুরুত্বপূর্ণ এবং TypeScript-এর Advanced Type System-এর ভিত্তি হিসেবে কাজ করে।
