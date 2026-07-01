# Chapter 02: Basic Data Types 📊

TypeScript হলো JavaScript-এর একটি Superset, যেখানে Static Typing যুক্ত করা হয়েছে। নিচে TypeScript-এর Basic Data Types সম্পর্কে বিস্তারিত আলোচনা করা হলো।

---

## Types Classification (টাইপ শ্রেণীবিভাগ) 🗺️

নিচের ডায়াগ্রামের মাধ্যমে TypeScript-এর মূল ডাটা টাইপগুলোর শ্রেণীবিভাগ দেখুন:

```mermaid
graph TD
    Root[TypeScript Types] --> Primitives[Primitives (প্রাথমিক)]
    Root --> Structural[Structural (গাঠনিক)]
    Root --> Special[Special / Others (বিশেষ)]
    
    Primitives --> Number[number]
    Primitives --> String[string]
    Primitives --> Boolean[boolean]
    Primitives --> Null[null & undefined]
    
    Structural --> Array[array]
    Structural --> Tuple[tuple]
    Structural --> Object[object]
    
    Special --> Any[any]
    Special --> Unknown[unknown]
    Special --> Void[void]
    Special --> Union[union |]
    Special --> Literal[literal]
    
    style Root fill:#3178c6,stroke:#333,stroke-width:2px,color:#fff
    style Primitives fill:#f28f3b,stroke:#333,stroke-width:1px,color:#fff
    style Structural fill:#58a6ff,stroke:#333,stroke-width:1px,color:#fff
    style Special fill:#8e44ad,stroke:#333,stroke-width:1px,color:#fff
```

---

## 1. Number
সংখ্যা সংরক্ষণ করার জন্য `number` টাইপ ব্যবহার করা হয়। এটি পূর্ণসংখ্যা (Integer) ও দশমিক সংখ্যা (Float) উভয়ই সমর্থন করে।

```typescript
let age: number = 20;
let price: number = 99.99;
```

---

## 2. String
টেক্সট বা লেখার জন্য `string` ব্যবহার করা হয়।

```typescript
let name: string = "Rahim";
let message: string = "Hello";
```

### Template String
ব্যাকটিক (`` ` ``) ব্যবহার করে ডাইনামিক স্ট্রিং তৈরি করা যায়।
```typescript
let name: string = "Rahim";
let greeting: string = `Hello ${name}`;
// Output: Hello Rahim
```

---

## 3. Boolean
শুধুমাত্র `true` অথবা `false` মান ধারণ করতে পারে।
```typescript
let isStudent: boolean = true;
let isLoggedIn: boolean = false;
```

---

## 4. Array
একাধিক ডাটা একসাথে সংরক্ষণ করার জন্য Array ব্যবহার করা হয়। এটি দুইভাবে ডিফাইন করা যায়:

### পদ্ধতি ১ (শর্টহ্যান্ড)
```typescript
let numbers: number[] = [1, 2, 3, 4];
```

### পদ্ধতি ২ (জেনেরিক টাইপ)
```typescript
let names: Array<string> = ["Rahim", "Karim"];
```

---

## 5. Tuple
Tuple হলো এমন একটি স্পেশাল Array যেখানে প্রতিটি পজিশনের টাইপ এবং মোট দৈর্ঘ্য (Length) নির্দিষ্ট থাকে।
```typescript
let person: [string, number] = ["Rahim", 20];
```
*প্রথম মান অবশ্যই `string` এবং দ্বিতীয় মান অবশ্যই `number` হতে হবে।*

---

## 6. Any
`any` টাইপ যেকোনো ধরনের ডাটা গ্রহণ করতে পারে। এটি ব্যবহারের ফলে TypeScript-এর টাইপ চেকিং বন্ধ হয়ে যায়।
```typescript
let data: any = "Hello";
data = 100; // নো এরর
data = true; // নো এরর
```
> [!WARNING]
> প্রজেক্টে খুব বেশি `any` ব্যবহার করা এড়ানো উচিত, কারণ এতে TypeScript ব্যবহারের মূল উদ্দেশ্যই ব্যর্থ হয়।

---

## 7. Unknown
`unknown` হলো `any`-এর তুলনায় নিরাপদ একটি টাইপ। এটি যেকোনো মান গ্রহণ করতে পারে, কিন্তু ভ্যালুটি ব্যবহার করার আগে টাইপ চেক (Type Check) করা বাধ্যতামূলক।
```typescript
let value: unknown = "Hello";

// সরাসরি ব্যবহার করলে এরর দিবে:
// console.log(value.toUpperCase()); 

// টাইপ চেক করার পর ব্যবহার করা নিরাপদ:
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## 8. Null & Undefined
- খালি বা অনুপস্থিত মান বোঝাতে `null` ব্যবহার করা হয়।
- যখন কোনো ভ্যারিয়েবলের মান সেট করা হয়নি তখন `undefined` ব্যবহার করা হয়।

```typescript
let result: null = null;
let user: undefined = undefined;
```

---

## 9. Void
যে Function কোনো কিছু Return করে না তার Return Type হিসেবে `void` ব্যবহার করা হয়।
```typescript
function printMessage(): void {
  console.log("Hello World");
}
```

---

## 10. Object
Object টাইপের ডাটা সংরক্ষণের জন্য ব্যবহার করা হয়।
```typescript
let student: {
  name: string;
  age: number;
} = {
  name: "Rahim",
  age: 20,
};
```

---

## 11. Union Type
একটি ভ্যারিয়েবলে একাধিক টাইপ গ্রহণ করার জন্য Union Type (`|`) ব্যবহার করা হয়।
```typescript
let id: string | number;
id = 101;    // বৈধ
id = "TS101"; // বৈধ
```

---

## 12. Literal Type
নির্দিষ্ট কিছু ফিক্সড মান গ্রহণ করার জন্য Literal Type ব্যবহার করা হয়।
```typescript
let status: "success" | "error" | "loading";
status = "success"; // বৈধ

status = "done"; // Error! কারণ "done" অনুমোদিত মান নয়।
```

---

## Summary (সারাংশ)

| Type | Description | Example |
|--------|-------------|---------|
| `number` | সংখ্যা (Integer / Float) | `let age: number = 20` |
| `string` | টেক্সট ডাটা | `let name: string = "Rahim"` |
| `boolean` | সত্য/মিথ্যা মান | `let isStudent: boolean = true` |
| `array` | একই টাইপের তালিকা | `let nums: number[] = [1,2,3]` |
| `tuple` | ফিক্সড সাইজ ও টাইপের অ্যারে | `let person: [string, number]` |
| `any` | যেকোনো টাইপ (টাইপ চেক অফ) | `let data: any` |
| `unknown` | নিরাপদ যেকোনো টাইপ | `let value: unknown` |
| `null` | খালি মান | `let x: null = null` |
| `undefined` | অসংজ্ঞায়িত মান | `let x: undefined = undefined` |
| `void` | রিটার্নহীন ফাংশন | `function test(): void {}` |
| `object` | অবজেক্ট ডাটা স্ট্রাকচার | `let user: { name: string }` |
| `union` | একাধিক টাইপের যেকোনো একটি | `let id: string \| number` |
| `literal` | নির্দিষ্ট মানসমূহ | `let status: "yes" \| "no"` |
