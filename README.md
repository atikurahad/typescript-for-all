# TypeScript Guide: Beginner to Advanced (বাংলায়) 🚀

স্বাগতম! এই রিপোজিটরিটি তৈরি করা হয়েছে যাতে আপনি একদম শুরু (Beginner) থেকে শুরু করে অ্যাডভান্সড (Advanced) লেভেল পর্যন্ত TypeScript শিখতে পারেন। প্রতিটি চ্যাপ্টারে রয়েছে তাত্ত্বিক আলোচনা এবং তা রান করার জন্য ব্যবহারিক কোড এক্সাম্পল।

---

## কিভাবে শুরু করবেন (Getting Started) 💻

এই প্রজেক্টের এক্সাম্পলগুলো রান করার জন্য আপনার কম্পিউটারে **Node.js** ইন্সটলড থাকতে হবে।

### ১. ডিপেন্ডেন্সি ইন্সটল করুন
প্রজেক্টের রুট ডিরেক্টরিতে নিচের কমান্ডটি রান করে TypeScript এবং `ts-node` ইন্সটল করে নিন:
```bash
npm install
```

### ২. যেকোনো চ্যাপ্টারের এক্সাম্পল রান করুন
প্রতিটি চ্যাপ্টারের জন্য `package.json`-এ স্ক্রিপ্ট যুক্ত করা আছে। উদাহরণস্বরূপ, চ্যাপ্টার ১-এর কোড রান করতে:
```bash
npm run start:01
```
অন্যান্য চ্যাপ্টারগুলোর জন্য স্ক্রিপ্টগুলো যথাক্রমে `npm run start:02`, `npm run start:03` এভাবে রান করতে পারবেন।

---

## সূচিপত্র (Table of Contents) 📚

নিচের লিংকগুলোতে ক্লিক করে সরাসরি প্রতিটি চ্যাপ্টার পড়তে পারবেন:

### 🔰 Beginner Level (শিক্ষানবিস স্তর)
1. **[Chapter 01: Introduction & Setup](file:///Users/atikur/typescript-for-all/01_introduction/readme.md)** - TypeScript কী, কেন ব্যবহার করবেন এবং ইনভাইরনমেন্ট সেটআপ।
2. **[Chapter 02: Basic Data Types](file:///Users/atikur/typescript-for-all/02_basic_data_types/readme.md)** - Number, String, Boolean, Array, Tuple, Any, Unknown, Void, Null, Undefined।
3. **[Chapter 03: Functions](file:///Users/atikur/typescript-for-all/03_functions/readme.md)** - Function Type, Parameters, Return Types, Optional/Default Parameters, Function Overloading।
4. **[Chapter 04: Object Types](file:///Users/atikur/typescript-for-all/04_object_types/readme.md)** - Object typing, Optional properties, Readonly properties।

### ⚙️ Intermediate Level (মধ্যবর্তী স্তর)
5. **[Chapter 05: Type Aliases vs Interfaces](file:///Users/atikur/typescript-for-all/05_type_vs_interface/readme.md)** - `type` বনাম `interface`-এর পার্থক্য ও সঠিক ব্যবহার।
   - **[Type Alias Detail](file:///Users/atikur/typescript-for-all/05_type_vs_interface/type.md)**
   - **[Interface Detail](file:///Users/atikur/typescript-for-all/05_type_vs_interface/interface.md)**
6. **[Chapter 06: Union, Intersection & Literal Types](file:///Users/atikur/typescript-for-all/06_union_intersection_literal/readme.md)** - একাধিক টাইপ কম্বাইন করা এবং ফিক্সড মান নিয়ে কাজ করা।
7. **[Chapter 07: Enums & Type Assertions](file:///Users/atikur/typescript-for-all/07_enums_and_assertions/readme.md)** - Numeric & String Enums, Type Assertions (`as`), এবং Non-null Assertion (`!`)।
8. **[Chapter 08: Type Guards & Narrowing](file:///Users/atikur/typescript-for-all/08_type_guards_narrowing/readme.md)** - `typeof`, `instanceof`, `in` অপারেটর এবং Custom Type Guards।
9. **[Chapter 09: Classes & Object-Oriented Programming](file:///Users/atikur/typescript-for-all/09_classes_and_oop/readme.md)** - Class, Access Modifiers (`public`, `private`, `protected`), Abstract Classes, Constructor Shorthand।

### 🔥 Advanced Level (উন্নত স্তর)
10. **[Chapter 10: Generics](file:///Users/atikur/typescript-for-all/10_generics/readme.md)** - Generic Functions, Generic Interfaces, Generic Classes, Constraints, এবং `keyof` এর ব্যবহার।
11. **[Chapter 11: Advanced Types](file:///Users/atikur/typescript-for-all/11_advanced_types/readme.md)** - Mapped Types, Conditional Types, `keyof`, `typeof` অপারেটর এবং `infer` কীওয়ার্ড।
12. **[Chapter 12: Utility Types](file:///Users/atikur/typescript-for-all/12_utility_types/readme.md)** - `Partial`, `Required`, `Readonly`, `Record`, `Pick`, `Omit`, `Exclude`, `Extract`, `ReturnType`, `Parameters`।
13. **[Chapter 13: tsconfig.json & Modules](file:///Users/atikur/typescript-for-all/13_tsconfig_and_modules/readme.md)** - Module import/export এবং `tsconfig.json` এর বিভিন্ন গুরুত্বপূর্ণ কনফিগারেশন।

---

## কিভাবে প্র্যাকটিস করবেন? 🛠️
প্রতিটি ডিরেক্টরিতে একটি করে `example.ts` ফাইল দেওয়া আছে। সেই ফাইলে নিজে কোড পরিবর্তন করে রান করে দেখতে পারেন। 
হ্যাপি কোডিং! 💻✨
