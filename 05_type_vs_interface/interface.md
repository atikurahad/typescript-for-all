# TypeScript Interface 🧱

## Interface কী?

Interface হলো TypeScript-এর একটি বিশেষ ফিচার যা কোনো অবজেক্টের গঠন বা আকার (Shape) নির্ধারণ করতে ব্যবহৃত হয়। এটি মূলত একটি **Blueprint** বা **Contract** (চুক্তি) এর মতো কাজ করে, যা অবজেক্টকে বলে দেয় তার মধ্যে কোন কোন প্রপার্টি ও মেথড থাকতে হবে।

---

## ১. Basic Interface Example ✍️

```typescript
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Atik",
  age: 25,
};
```
এখানে `User` ইন্টারফেস অনুযায়ী অবজেক্টে `name` এবং `age` প্রপার্টি থাকা বাধ্যতামূলক।

---

## ২. মেথড টাইপিং (Interface with Methods) 📞

ইন্টারফেসে প্রপার্টির পাশাপাশি মেথডের সিগনেচারও ডিফাইন করা যায়।

```typescript
interface Car {
  brand: string;
  startEngine(): void; // মেথড রিটার্ন করে void
  getSpeed(mile: number): number; // মেথড প্যারামিটার নেয় এবং number রিটার্ন করে
}

const myCar: Car = {
  brand: "Toyota",
  startEngine() {
    console.log("Engine started...");
  },
  getSpeed(mile) {
    return mile * 1.609; // কিমিতে কনভার্ট
  }
};
```

---

## ৩. ইন্টারফেস এক্সটেন্ড করা (Extending Interfaces) 🔗

একটি ইন্টারফেস অন্য এক বা একাধিক ইন্টারফেস থেকে প্রপার্টি এবং মেথড ইনহেরিট বা ধার করতে পারে `extends` কীওয়ার্ড ব্যবহারের মাধ্যমে।

```typescript
interface Vehicle {
  wheels: number;
}

interface Motorcycle extends Vehicle {
  hasSidecar: boolean;
}

const bike: Motorcycle = {
  wheels: 2,
  hasSidecar: false
};
```

---

## ৪. ক্লাস কন্ট্রাক্ট (Class Contract Implements) 🏫

অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং-এ ক্লাস যাতে নির্দিষ্ট মেথড এবং প্রপার্টি মেনে চলে তা ইন্টারফেসের মাধ্যমে নিশ্চিত করা যায়।

```typescript
interface Animal {
  name: string;
  makeSound(): void;
}

class Cat implements Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  makeSound(): void {
    console.log("Meow!");
  }
}
```

---

## ৫. ডিক্লেয়ারেশন মার্জিং (Declaration Merging) 🔀

যদি একই প্রজেক্টে একই নামে একাধিক ইন্টারফেস ডিক্লেয়ার করা হয়, তবে তারা একে অপরের সাথে মার্জ হয়ে যায়।

```typescript
interface DatabaseConfig {
  host: string;
}

interface DatabaseConfig {
  port: number;
}

// DatabaseConfig এখন host এবং port দুটিরই সমন্বিত ইন্টারফেস
const db: DatabaseConfig = {
  host: "localhost",
  port: 5432
};
```
> [!NOTE]
> ডিক্লেয়ারেশন মার্জিং মূলত থার্ড-পার্টি লাইব্রেরির টাইপ এক্সটেন্ড করতে অনেক বেশি ব্যবহৃত হয়।
