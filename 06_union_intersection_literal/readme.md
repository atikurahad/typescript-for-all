# Chapter 06: Union, Intersection & Literal Types 🔀

TypeScript-এ বিভিন্ন ডাটা টাইপ একত্রিত করার জন্য বা নির্দিষ্ট মান ফিক্সড করার জন্য চমৎকার কিছু ফিচার রয়েছে। তার মধ্যে অন্যতম হলো: **Union**, **Intersection** এবং **Literal Types**।

---

## Concept Flow (ইউনিয়ন বনাম ইন্টারসেকশন ফ্লো) 🔀

নিচের ডায়াগ্রামের মাধ্যমে ইউনিয়ন (`|`) এবং ইন্টারসেকশন (`&`) টাইপের আচরণের পার্থক্য লক্ষ্য করুন:

```mermaid
graph TD
    subgraph Union Concept: A | B
        UA[Type A: { name: string }] --> U_OR{OR}
        UB[Type B: { age: number }] --> U_OR
        U_OR --> U_Result[Value matches either shape]
    end
    
    subgraph Intersection Concept: A & B
        IA[Type A: { name: string }] --> I_AND{AND}
        IB[Type B: { age: number }] --> I_AND
        I_AND --> I_Result[Value must have BOTH name and age]
    end
    
    style U_OR fill:#fff9c4,stroke:#fbc02d,color:#000
    style I_AND fill:#e1f5fe,stroke:#03a9f4,color:#000
    style U_Result fill:#d4edda,stroke:#28a745,color:#000
    style I_Result fill:#d1c4e9,stroke:#5e35b1,color:#000
```

---

## ১. ইউনিয়ন টাইপ (Union Types `|`) 🤝

ইউনিয়ন টাইপ ব্যবহার করে আমরা একটি ভ্যারিয়েবল বা প্যারামিটারে একের অধিক টাইপ সমর্থন করাতে পারি। টাইপগুলোকে পাইপ চিহ্ন (`|`) দ্বারা পৃথক করা হয়।

```typescript
let id: string | number;

id = 101;       // বৈধ (number)
id = "EMP_101"; // বৈধ (string)
// id = true;   // Error! কারণ boolean অনুমোদিত নয়।
```

### ফাংশন প্যারামিটারে ইউনিয়ন ব্যবহার এবং টাইপ ন্যারোইং:
ইউনিয়ন টাইপ ব্যবহার করলে ফাংশনের ভিতরে সতর্ক থাকতে হয়, কারণ সব টাইপে সব মেথড কাজ করে না (যেমন: `toUpperCase()` শুধুমাত্র string-এ চলে)। তাই আমাদের টাইপ চেক বা ন্যারোইং (Type Narrowing) করতে হয়:

```typescript
function printLength(value: string | number): void {
  if (typeof value === "string") {
    // এখানে TypeScript জানে value অবশ্যই string
    console.log(`Length of string: ${value.length}`);
  } else {
    // এখানে TypeScript জানে value অবশ্যই number
    console.log(`Number value: ${value}`);
  }
}
```

---

## ২. ইন্টারসেকশন টাইপ (Intersection Types `&`) 🔗

ইন্টারসেকশন টাইপ ব্যবহার করে আমরা একাধিক টাইপকে একত্রিত করে একটি নতুন টাইপ তৈরি করতে পারি। প্রধানত অবজেক্ট টাইপ কম্বাইন করার ক্ষেত্রে এটি ব্যবহৃত হয়। টাইপগুলোকে অ্যান্ড চিহ্ন (`&`) দ্বারা পৃথক করা হয়।

```typescript
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

// Draggable এবং Resizable মিলিয়ে একটি নতুন টাইপ
type UIWidget = Draggable & Resizable;

const textBox: UIWidget = {
  drag() {
    console.log("Dragging...");
  },
  resize() {
    console.log("Resizing...");
  }
};
```

---

## ৩. লিটারেল টাইপ (Literal Types) 🎯

লিটারেল টাইপ হলো এমন টাইপ যা সাধারণ টাইপের চেয়েও নির্দিষ্ট। এর মাধ্যমে আমরা টাইপের জায়গায় সরাসরি ফিক্সড মান বলে দিতে পারি।

```typescript
let version: 1;
version = 1; // বৈধ
// version = 2; // Error! কারণ টাইপ হলো নির্দিষ্টভাবে 1
```

### ইউনিয়ন-এর সাথে লিটারেল টাইপ (সবচেয়ে বেশি ব্যবহৃত রূপ)
লিটারেল টাইপ যখন ইউনিয়ন টাইপের সাথে যুক্ত হয়, তখন এটি একটি নির্দিষ্ট মানসমূহের সেট তৈরি করে (যেমন এনামের মতো কাজ করে):

```typescript
type UserRole = "admin" | "manager" | "customer";

let role: UserRole;
role = "admin";    // বৈধ
// role = "superadmin"; // Error! কারণ এটি UserRole সেটের বাইরে।
```

### নিউমেরিক এবং বুলিয়ান লিটারেল:
```typescript
type StatusCode = 200 | 404 | 500;
type Toggle = true | false; // যা আসলে boolean-এর সমান
```
