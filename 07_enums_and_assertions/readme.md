# Chapter 07: Enums & Type Assertions 🏷️

TypeScript-এর অনন্য দুটি ফিচার হলো **Enums** এবং **Type Assertions**। Enums আমাদের নামযুক্ত ধ্রুবক (named constants) তৈরি করতে সাহায্য করে, আর Type Assertions আমাদের কম্পাইলারকে টাইপ সম্পর্কে নিজস্ব নির্দেশনা বা জোর দেওয়ার সুযোগ দেয়।

---

## Conceptual Overview (এনাম এবং অ্যাসারশন ডায়াগ্রাম) 🗺️

নিচের ডায়াগ্রামের মাধ্যমে এনামের সংজ্ঞা এবং টাইপ অ্যাসারশনের মাধ্যমে টাইপকে কিভাবে নির্দিষ্ট করা হয় তা দেখুন:

```mermaid
graph TD
    subgraph Enums Definition
        Enum[Enum Name] --> E1[Value 1]
        Enum --> E2[Value 2]
        Enum --> E3[Value 3]
    end
    
    subgraph Type Assertions Path
        SourceType[Broader Type: unknown / string | null]
        SourceType -->|as target_type| Asserted[Explicit Target Type]
        SourceType -->|Non-null !| NonNullable[Forced Non-Nullable Type]
    end
    
    style Enum fill:#3178c6,stroke:#333,color:#fff
    style E1 fill:#e1f5fe,stroke:#03a9f4,color:#000
    style SourceType fill:#fff9c4,stroke:#fbc02d,color:#000
    style Asserted fill:#d4edda,stroke:#28a745,color:#000
    style NonNullable fill:#f8d7da,stroke:#dc3545,color:#000
```

---

## ১. এনাম (Enums) 🧭

Enums (Enumerations) হলো নির্দিষ্ট কিছু নামযুক্ত ধ্রুবক মানের একটি সেট। JavaScript-এ এনামের সরাসরি অস্তিত্ব নেই, তাই TypeScript এটি যুক্ত করেছে।

### ক) নিউমেরিক এনাম (Numeric Enums)
নিউমেরিক এনামের মানগুলো স্বয়ংক্রিয়ভাবে ০ (শূন্য) থেকে শুরু হয়ে ১ করে বাড়তে থাকে।

```typescript
enum Direction {
  Up,    // ০
  Down,  // ১
  Left,  // ২
  Right  // ৩
}

let move: Direction = Direction.Up;
console.log(move); // Output: 0
```

আপনি চাইলে শুরুর মান নির্ধারণ করে দিতে পারেন:
```typescript
enum Status {
  Active = 1,
  Inactive = 0,
  Pending = 2
}
```

### খ) স্ট্রিং এনাম (String Enums)
বাস্তব প্রজেক্টে রিডেবিলিটির জন্য স্ট্রিং এনাম অনেক বেশি ব্যবহৃত হয়। এখানে প্রতিটি মেম্বারের জন্য একটি নির্দিষ্ট স্ট্রিং ভ্যালু অ্যাসাইন করতে হয়।

```typescript
enum UserRole {
  Admin = "ADMIN",
  Manager = "MANAGER",
  Customer = "CUSTOMER"
}

let currentRole: UserRole = UserRole.Admin;
console.log(currentRole); // Output: "ADMIN"
```

---

## ২. টাইপ অ্যাসারশন (Type Assertions) 🗣️

কখনো কখনো আপনি TypeScript কম্পাইলারের চেয়েও কোনো একটি ভ্যারিয়েবলের টাইপ সম্পর্কে ভালো জানেন। যেমন: কোনো API থেকে বা DOM এলিমেন্ট থেকে ডাটা পাওয়ার পর তার আসল টাইপ কী হবে তা আপনি নিশ্চিত। তখন আপনি কম্পাইলারকে জোর দিয়ে টাইপটি বলে দিতে পারেন। একেই টাইপ অ্যাসারশন বলে।

টাইপ অ্যাসারশন দুইভাবে করা যায়:

### পদ্ধতি ১ (`as` কিওয়ার্ড - বহুল ব্যবহৃত)
```typescript
let someValue: unknown = "This is a string";

// someValue কে string হিসেবে অ্যাসার্ট করা হচ্ছে:
let strLength: number = (someValue as string).length;
```

### পদ্ধতি ২ (অ্যাঙ্গেল ব্র্যাকেট `<>` সিনট্যাক্স)
```typescript
let someValue: unknown = "This is a string";
let strLength: number = (<string>someValue).length;
```
> [!NOTE]
> React (TSX)-এর সাথে কাজ করার সময় কোণ বন্ধনী বা অ্যাঙ্গেল ব্র্যাকেট `<>` সিনট্যাক্স কনফ্লিক্ট তৈরি করতে পারে, তাই সাধারণত সর্বত্র `as` কিওয়ার্ড ব্যবহারের পরামর্শ দেওয়া হয়।

---

## ৩. নন-নাল অ্যাসারশন অপারেটর (Non-null Assertion Operator `!`) 🚫❓

যখন আপনি ১০০% নিশ্চিত যে কোনো একটি ভ্যালু `null` বা `undefined` হবে না (যদিও কম্পাইলার মনে করছে এটি হতে পারে), তখন ভ্যারিয়েবলের শেষে বিস্ময়সূচক চিহ্ন `!` যুক্ত করে কম্পাইলারকে আশ্বস্ত করা হয়।

```typescript
function printUppercase(text: string | null) {
  // কম্পাইলারকে বলছি যে text এখানে null নয়:
  console.log(text!.toUpperCase());
}
```
> [!CAUTION]
> এই অপারেটরটি সাবধানে ব্যবহার করা উচিত। যদি রানটাইমে কোনো কারণে সত্যিই মানটি `null` বা `undefined` চলে আসে, তবে কোড ক্র্যাশ করবে।
