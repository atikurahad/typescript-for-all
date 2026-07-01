// Chapter 01: Introduction & Environment Setup Example

// ১. ভ্যারিয়েবল ডিক্লেয়ারেশন উইথ টাইপ (Type Annotation)
const greeting: string = "Hello, TypeScript is set up successfully!";
console.log(greeting);

// ২. একটি সাধারণ ফাংশন যাতে টাইপ ডিফাইন করা আছে
function greetUser(userName: string): string {
    return `Welcome to the TS Guide, ${userName}!`;
}

console.log(greetUser("Atik"));

// ৩. টাইপ মিসম্যাচ এর উদাহরণ (নিচের লাইনটি আনকমেন্ট করলে TypeScript কম্পাইল টাইমে এরর দিবে)
// let age: number = "25"; // Error: Type 'string' is not assignable to type 'number'.
