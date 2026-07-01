// Chapter 04: Object Types Example

// 1. Basic Object Annotation
let developer: {
    name: string;
    skills: string[];
    experienceYears: number;
} = {
    name: "Atikur Rahman",
    skills: ["TypeScript", "Node.js", "React"],
    experienceYears: 3
};
console.log(`Developer ${developer.name} has ${developer.experienceYears} years of experience.`);

// 2. Optional and Readonly Properties
let userSession: {
    readonly token: string;
    userId: number;
    lastActive?: string; // Optional property
} = {
    token: "jwt_token_abc_123",
    userId: 1001
};

// Modifying regular property
userSession.userId = 2002;
// Modifying optional property
userSession.lastActive = new Date().toISOString();

// Trying to modify readonly property (uncomment to see compiler error)
// userSession.token = "new_token"; // Error: Cannot assign to 'token' because it is a read-only property.

console.log("User Session Updated Object:", userSession);

// 3. Index Signature for Dynamic Keys
interface StringDictionary {
    [key: string]: string;
}

let translationMap: StringDictionary = {
    hello: "হ্যালো",
    welcome: "স্বাগতম",
    goodbye: "বিদায়"
};

// Adding dynamic keys
translationMap.success = "সফলতা";
translationMap.error = "ত্রুটি";

console.log("Translation Map for 'hello':", translationMap.hello);
console.log("Full Translation Map:", translationMap);

// 4. Nested Object Typing
let serverConfig: {
    port: number;
    host: string;
    security: {
        ssl: boolean;
        allowedIps: string[];
    };
} = {
    port: 8080,
    host: "127.0.0.1",
    security: {
        ssl: true,
        allowedIps: ["192.168.1.1", "10.0.0.1"]
    }
};

console.log(`Server is running at https://${serverConfig.host}:${serverConfig.port}`);
