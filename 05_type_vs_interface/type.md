# TypeScript Type Alias 🏷️

## Type Alias কী?

Type Alias হলো TypeScript-এর একটি Feature যা একটি Custom Type তৈরি করতে ব্যবহৃত হয়। এর মাধ্যমে আমরা যেকোনো সাধারণ বা জটিল টাইপের জন্য একটি নতুন নাম (Alias) তৈরি করতে পারি, যাতে একই টাইপ কোডে বারবার লিখতে না হয় এবং কোড রিইউজেবল হয়।

---

## ১. কেন Type Alias ব্যবহার করবো? 

### Type Alias ছাড়া কোড:
```typescript
const user1: { name: string; age: number } = {
  name: "Atik",
  age: 25,
};

const user2: { name: string; age: number } = {
  name: "Rahim",
  age: 30,
};
```
এখানে একই অবজেক্ট স্ট্রাকচার বারবার লিখতে হচ্ছে।

### Type Alias সহ কোড:
```typescript
type User = {
  name: string;
  age: number;
};

const user1: User = { name: "Atik", age: 25 };
const user2: User = { name: "Rahim", age: 30 };
```
কোড অনেক বেশি ক্লিন এবং সহজে পরিবর্তনযোগ্য হয়েছে।

---

## ২. টাইপ অ্যালিয়াস-এর বিভিন্ন রূপসমূহ ⚙️

### ক) ইউনিয়ন টাইপ (Union Type)
টাইপ অ্যালিয়াস-এর অন্যতম বড় শক্তি হলো এটি সহজে ইউনিয়ন টাইপ তৈরি করতে পারে।
```typescript
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";
```

### খ) টিউপল টাইপ (Tuple Type)
```typescript
type Coordinate = [number, number];
const location: Coordinate = [23.8103, 90.4125]; // ঢাকা এর কো-অর্ডিনেট
```

### গ) প্রিমিটিভ অ্যালিয়াস (Primitive Alias)
```typescript
type ID = string | number;
let userId: ID = "USR_1029";
```

### ঘ) ইন্টারসেকশন টাইপ (Intersection Type)
একাধিক টাইপকে একত্রে যুক্ত করার জন্য ইন্টারসেকশন (`&`) ব্যবহার করা হয়।
```typescript
type Person = {
  name: string;
};

type Employee = {
  salary: number;
};

type EmployeeInfo = Person & Employee; // দুটির কম্বিনেশন

const staff: EmployeeInfo = {
  name: "Karim",
  salary: 40000
};
```

### ঙ) ফাংশন টাইপ (Function Type)
```typescript
type Calculate = (x: number, y: number) => number;
const add: Calculate = (a, b) => a + b;
```

---

## ৩. গুরুত্বপূর্ণ সুবিধাসমূহ 🌟

- জটিল টাইপগুলোকে রিডেবল ও মিনিংফুল নাম দেওয়া যায়।
- ইউনিয়ন এবং ইন্টারসেকশন টাইপ সহজে হ্যান্ডেল করা যায়।
- রিইউজেবিলিটি বাড়ে ও কোড ডুপ্লিকেশন কমে।
