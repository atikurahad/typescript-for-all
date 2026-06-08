# TypeScript Interface

## Interface কী?

Interface হলো TypeScript-এর একটি Feature যা কোনো Object-এর Structure বা গঠন কেমন হবে তা নির্ধারণ করে।

সহজভাবে বলতে গেলে, Interface একটি **Blueprint** বা **Contract** এর মতো কাজ করে। এটি বলে দেয় একটি Object-এর মধ্যে কোন কোন Property এবং Method থাকতে হবে।

---

## Basic Interface Example

```ts
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Atik",
  age: 25,
};
```

এখানে `User` Interface অনুযায়ী Object-এর মধ্যে `name` এবং `age` থাকা বাধ্যতামূলক।

---

## Optional Property

সব Property বাধ্যতামূলক নাও হতে পারে। Optional Property ব্যবহার করতে `?` চিহ্ন ব্যবহার করা হয়।

```ts
interface User {
  name: string;
  age: number;
  phone?: string;
}

const user: User = {
  name: "Atik",
  age: 25,
};
```

এখানে `phone` না দিলেও কোনো Error হবে না।

---

## Readonly Property

যে Property একবার Value Assign করার পর আর পরিবর্তন করা যাবে না, তাকে `readonly` বলা হয়।

```ts
interface User {
  readonly id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Atik",
};
```

নিচের কোডটি Error দিবে:

```ts
user.id = 2;
```

কারণ `id` একটি Readonly Property।

---

## Interface-এর মধ্যে Method

Interface শুধুমাত্র Property নয়, Method-ও Define করতে পারে।

```ts
interface User {
  name: string;
  greet(): void;
}

const user: User = {
  name: "Atik",

  greet() {
    console.log("Hello");
  },
};
```

এখানে `greet()` Method Interface-এর নিয়ম অনুসরণ করছে।

---

## Nested Interface

একটি Interface-এর ভিতরে আরেকটি Interface ব্যবহার করা যায়।

```ts
interface Address {
  city: string;
  country: string;
}

interface User {
  name: string;
  address: Address;
}
```

ব্যবহার:

```ts
const user: User = {
  name: "Atik",

  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};
```

এটিকে Nested Interface বলা হয়।

---

## Interface Extend

একটি Interface-এর Property অন্য Interface-এ ব্যবহার করার জন্য `extends` ব্যবহার করা হয়।

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  salary: number;
}
```

এখন `Employee` Interface-এর মধ্যে থাকবে:

* name
* age
* salary

উদাহরণ:

```ts
const employee: Employee = {
  name: "Atik",
  age: 25,
  salary: 50000,
};
```

---

## Interface ব্যবহারের সুবিধা

* Object-এর Structure নির্ধারণ করা যায়।
* Code আরও পরিষ্কার ও Readable হয়।
* Type Safety নিশ্চিত করা যায়।
* একই Structure বারবার ব্যবহার করা যায়।
* বড় Project Maintain করা সহজ হয়।

---

## গুরুত্বপূর্ণ বিষয়

* Interface Object-এর Shape Define করে।
* Required Property অবশ্যই দিতে হবে।
* Optional Property-এর জন্য `?` ব্যবহার করা হয়।
* Readonly Property-এর জন্য `readonly` ব্যবহার করা হয়।
* Interface-এর মধ্যে Method থাকতে পারে।
* Interface Nested হতে পারে।
* Interface অন্য Interface Extend করতে পারে।

---

## সারাংশ

Interface হলো TypeScript-এর একটি Contract বা Blueprint যা নির্ধারণ করে একটি Object-এর মধ্যে কী কী Property এবং Method থাকবে। এটি Type Safety নিশ্চিত করে এবং Code-কে আরও Maintainable ও Reusable করে তোলে।
