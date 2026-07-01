// Chapter 02: Basic Data Types Example

// 1. Number
let age: number = 25;
let rating: number = 4.8;
console.log(`Age: ${age}, Rating: ${rating}`);

// 2. String
let devName: string = "Atikur Rahman";
let language: string = "TypeScript";
console.log(`Developer: ${devName}, Language: ${language}`);

// 3. Boolean
let isCompleted: boolean = false;
console.log(`Is Completed: ${isCompleted}`);

// 4. Array
let scores: number[] = [85, 92, 78];
let frameworks: Array<string> = ["React", "Express", "NestJS"];
console.log("Scores:", scores);
console.log("Frameworks:", frameworks);

// 5. Tuple
let userSession: [string, number, boolean] = ["session_id_xyz", 3600, true];
console.log(`Session: ${userSession[0]}, Expire: ${userSession[1]}s`);

// 6. Any (Avoid if possible)
let flexVar: any = "Dynamic String";
flexVar = 404;
flexVar = { success: true };
console.log("Any Type Var:", flexVar);

// 7. Unknown (Safe Any)
let secureInput: unknown = "My secure string";
// We must narrow the type before performing operations
if (typeof secureInput === "string") {
    console.log("Secure Input Uppercase:", secureInput.toUpperCase());
}

// 8. Null & Undefined
let emptyValue: null = null;
let notDefinedValue: undefined = undefined;
console.log("Null:", emptyValue, "Undefined:", notDefinedValue);

// 9. Void
function logMessage(msg: string): void {
    console.log(`[Log]: ${msg}`);
}
logMessage("This function returns void.");

// 10. Object
let config: { readonly environment: string; port: number } = {
    environment: "development",
    port: 3000
};
console.log(`App running in ${config.environment} mode on port ${config.port}`);

// 11. Union
let searchId: string | number = 4820;
searchId = "USR-4820";
console.log("Search ID:", searchId);

// 12. Literal
let currentTheme: "light" | "dark" = "dark";
console.log("Theme:", currentTheme);
