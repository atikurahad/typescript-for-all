// Chapter 03: Functions Example

// 1. Basic Function and Return Typing
function add(num1: number, num2: number): number {
    return num1 + num2;
}
console.log("Sum of 10 and 20 is:", add(10, 20));

// 2. Arrow Function
const divide = (numerator: number, denominator: number): number => {
    return numerator / denominator;
};
console.log("Division of 10 by 2 is:", divide(10, 2));

// 3. Optional and Default Parameters
function buildUserEmail(username: string, domain: string = "gmail.com", prefix?: string): string {
    const mainEmail = `${username}@${domain}`;
    if (prefix) {
        return `${prefix}-${mainEmail}`;
    }
    return mainEmail;
}
console.log(buildUserEmail("atikur")); // default domain, no prefix
console.log(buildUserEmail("atikur", "outlook.com")); // custom domain, no prefix
console.log(buildUserEmail("atikur", "yahoo.com", "dev")); // custom domain and prefix

// 4. Function Type Signature
type CustomLogger = (message: string, isUrgent?: boolean) => void;

const sysLogger: CustomLogger = (msg, urgent) => {
    if (urgent) {
        console.log(`[URGENT ALERT]: ${msg.toUpperCase()}`);
    } else {
        console.log(`[Log]: ${msg}`);
    }
};
sysLogger("System initialized.");
sysLogger("Database connection failed!", true);

// 5. Function Overloading
function parseData(data: string): string[];
function parseData(data: number): number[];
function parseData(data: any): any[] {
    if (typeof data === "string") {
        return data.split(",");
    } else if (typeof data === "number") {
        return Array.from({ length: data }, (_, idx) => idx + 1);
    }
    return [];
}

console.log("Parsing CSV string:", parseData("TypeScript,JavaScript,Python"));
console.log("Generating array of numbers:", parseData(5));
