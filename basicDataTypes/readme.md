# TypeScript Basic Data Types

TypeScript হলো JavaScript-এর একটি Superset, যেখানে Static Typing যুক্ত করা হয়েছে। নিচে TypeScript-এর Basic Data Types সম্পর্কে আলোচনা করা হলো।

---

## 1. Number

সংখ্যা সংরক্ষণ করার জন্য `number` টাইপ ব্যবহার করা হয়।

```ts
let age: number = 20;
let price: number = 99.99;
```

### ব্যাখ্যা

- পূর্ণসংখ্যা (Integer)
- দশমিক সংখ্যা (Float)

উভয়ের জন্যই `number` ব্যবহার করা হয়।

---

## 2. String

টেক্সট বা লেখার জন্য `string` ব্যবহার করা হয়।

```ts
let name: string = "Rahim";
let message: string = "Hello";
```

### Template String

```ts
let name: string = "Rahim";
let greeting: string = `Hello ${name}`;
```

**Output:**

```text
Hello Rahim
```

---

## 3. Boolean

শুধুমাত্র `true` অথবা `false` মান ধারণ করে।

```ts
let isStudent: boolean = true;
let isLoggedIn: boolean = false;
```

### ব্যবহার

- Condition (শর্ত)
- Flag (অবস্থা নির্দেশক)

---

## 4. Array

একাধিক ডাটা একসাথে সংরক্ষণ করার জন্য Array ব্যবহার করা হয়।

### পদ্ধতি ১

```ts
let numbers: number[] = [1, 2, 3, 4];
```

### পদ্ধতি ২

```ts
let names: Array<string> = ["Rahim", "Karim"];
```

---

## 5. Tuple

Tuple হলো এমন একটি Array যেখানে প্রতিটি পজিশনের টাইপ নির্দিষ্ট থাকে।

```ts
let person: [string, number] = ["Rahim", 20];
```

### ব্যাখ্যা

- প্রথম মান অবশ্যই `string`
- দ্বিতীয় মান অবশ্যই `number`

---

## 6. Any

`any` টাইপ যেকোনো ধরনের ডাটা গ্রহণ করতে পারে।

```ts
let data: any = "Hello";

data = 100;
data = true;
```

> বেশি `any` ব্যবহার করা ভালো নয়, কারণ এতে TypeScript-এর Type Safety কমে যায়।

---

## 7. Unknown

`unknown` হলো `any`-এর তুলনায় নিরাপদ একটি টাইপ।

```ts
let value: unknown = "Hello";
```

ব্যবহার করার আগে Type Check করতে হয়।

```ts
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
```

---

## 8. Null

খালি মান বোঝাতে `null` ব্যবহার করা হয়।

```ts
let result: null = null;
```

---

## 9. Undefined

যখন কোনো ভ্যারিয়েবলের মান সেট করা হয়নি তখন `undefined` ব্যবহার করা হয়।

```ts
let user: undefined = undefined;
```

---

## 10. Void

যে Function কোনো কিছু Return করে না তার Return Type হিসেবে `void` ব্যবহার করা হয়।

```ts
function printMessage(): void {
  console.log("Hello");
}
```

---

## 11. Object

Object টাইপের ডাটা সংরক্ষণের জন্য ব্যবহার করা হয়।

```ts
let student: {
  name: string;
  age: number;
} = {
  name: "Rahim",
  age: 20,
};
```

---

## 12. Union Type

একাধিক টাইপ গ্রহণ করার জন্য Union Type ব্যবহার করা হয়।

```ts
let id: string | number;

id = 101;
id = "TS101";
```

### এখানে `id` হতে পারে

- `string`
- `number`

---

## 13. Literal Type

নির্দিষ্ট কিছু মান গ্রহণ করার জন্য Literal Type ব্যবহার করা হয়।

```ts
let status: "success" | "error" | "loading";

status = "success";
```

### ভুল উদাহরণ

```ts
status = "done";
```

 Error হবে, কারণ `"done"` অনুমোদিত মান নয়।

---

# Summary

| Type | Example |
|--------|---------|
| `number` | `let age: number = 20` |
| `string` | `let name: string = "Rahim"` |
| `boolean` | `let isStudent: boolean = true` |
| `array` | `let nums: number[] = [1,2,3]` |
| `tuple` | `let person: [string, number]` |
| `any` | `let data: any` |
| `unknown` | `let value: unknown` |
| `null` | `let x: null = null` |
| `undefined` | `let x: undefined = undefined` |
| `void` | `function test(): void {}` |
| `object` | `let user: { name: string }` |
| `union` | `string \| number` |
| `literal` | `"success" \| "error"` |
