# Chapter 01: Introduction & Environment Setup ⚙️

TypeScript হলো JavaScript-এর একটি **Typed Superset**। এর মানে হলো JavaScript-এ যা যা করা যায়, TypeScript-এও তা করা যায়, কিন্তু বাড়তি সুবিধা হিসেবে এতে **Static Typing** যুক্ত করা হয়েছে।

---

## Execution Workflow (কম্পাইলেশন ও রান ফ্লো) 🔄

নিচের ডায়াগ্রামের মাধ্যমে দেখুন কিভাবে TypeScript ফাইল জাভাস্ক্রিপ্টে রূপান্তরিত হয় অথবা সরাসরি রান হয়:

```mermaid
graph TD
    A[hello.ts (TypeScript Source)] -->|tsc compiler| B[hello.js (JavaScript Output)]
    B -->|Node.js / Browser| C[Runtime Execution]
    
    A -->|ts-node (Direct Run)| C
    
    style A fill:#3178c6,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#f7df1e,stroke:#333,stroke-width:2px,color:#000
    style C fill:#43c36c,stroke:#333,stroke-width:2px,color:#fff
```

---

## TypeScript কেন ব্যবহার করবেন? 🤔

JavaScript একটি Dynamically Typed ভাষা, যার ফলে কোড রান করার আগে টাইপ সংক্রান্ত কোনো ভুল (Type Errors) সনাক্ত করা যায় না। TypeScript এই সমস্যা সমাধান করে:

1. **Early Error Detection**: কোড রান করার আগেই (Compile Time-এ) টাইপ সংক্রান্ত ভুলগুলো ধরিয়ে দেয়।
2. **Autocompletion & IntelliSense**: এডিটর বা IDE-তে চমৎকার অটো-কমপ্লিশন পাওয়া যায়।
3. **Refactoring Made Easy**: কোডের যেকোনো বড় অংশ পরিবর্তন করা অনেক নিরাপদ ও সহজ হয়।
4. **Self-Documenting Code**: কোড দেখেই বোঝা যায় কোন ফাংশন কী ধরনের ডাটা গ্রহণ করে এবং কী রিটার্ন করে।

---

## Environment Setup 🛠️

TypeScript রান করতে হলে প্রথমে আমাদের কম্পিউটারে Node.js থাকতে হবে।

### ১. গ্লোবাল ইনস্টলেশন (Global Installation)
আপনার সিস্টেমে গ্লোবালি TypeScript ইনস্টল করতে টার্মিনালে রান করুন:
```bash
npm install -g typescript
```

### ২. প্রজেক্ট লেভেলে ইনস্টলেশন (Local Installation)
যেকোনো নির্দিষ্ট প্রজেক্টে TypeScript ব্যবহার করতে:
```bash
npm install --save-dev typescript ts-node
```

---

## প্রথম TypeScript কোড এবং কম্পাইলেশন 🚀

একটি ফাইল তৈরি করুন `hello.ts` নামে এবং নিচের কোডটি লিখুন:

```typescript
let message: string = "Hello, TypeScript!";
console.log(message);
```

### কম্পাইল করা (Compilation)
TypeScript কোড ব্রাউজার বা Node.js সরাসরি রান করতে পারে না। প্রথমে এটিকে সাধারণ JavaScript-এ রূপান্তর (Compile) করতে হয়।

টার্মিনালে রান করুন:
```bash
tsc hello.ts
```
এটি `hello.js` নামে একটি নতুন JavaScript ফাইল তৈরি করবে। এখন আপনি Node.js দিয়ে এটি রান করতে পারবেন:
```bash
node hello.js
```

---

## tsconfig.json কী? ⚙️

`tsconfig.json` হলো TypeScript কম্পাইলরের কনফিগারেশন ফাইল। এটি নির্ধারণ করে কম্পাইলার কিভাবে কোড কম্পাইল করবে।

একটি ডিফল্ট `tsconfig.json` তৈরি করতে রান করুন:
```bash
nsc --init
```

### গুরুত্বপূর্ণ কনফিগারেশনসমূহ:
- `"target"`: কোন JavaScript ভার্সনে কোড রূপান্তর হবে (যেমন: `ES6`, `ES2022`)।
- `"module"`: মডিউল সিস্টেম (যেমন: `CommonJS` বা `ESNext`)।
- `"strict"`: সব ধরনের কঠোর টাইপ চেকিং এনাবল করতে `true` রাখা হয়।
- `"outDir"`: কম্পাইলড `.js` ফাইলগুলো কোন ডিরেক্টরিতে জমা হবে।

---

## ts-node এর ব্যবহার ⚡

উন্নয়ন কাজের সময় বারবার কম্পাইল করে রান করা ঝামেলার। `ts-node` সরাসরি TypeScript ফাইল রান করতে সাহায্য করে:

```bash
npx ts-node hello.ts
```
*(এই প্রজেক্টের রুট ডিরেক্টরিতে `npm run start:01` রান করলে এই চ্যাপ্টারের এক্সাম্পল ফাইলটি সরাসরি রান হবে)*
