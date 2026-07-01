// Chapter 07: Enums & Type Assertions Example

// 1. Numeric Enum
enum OrderStatus {
    Pending = 1,
    Shipped,   // 2 (automatically incremented)
    Delivered, // 3
    Cancelled  // 4
}

const myOrderStatus: OrderStatus = OrderStatus.Shipped;
console.log("Numeric Enum Value (Shipped):", myOrderStatus); // Output: 2

// 2. String Enum
enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

function writeLog(message: string, level: LogLevel) {
    console.log(`[${level}] - ${new Date().toISOString()}: ${message}`);
}
writeLog("Database initial connection established.", LogLevel.Info);
writeLog("Memory usage exceeding 80%.", LogLevel.Warn);

// 3. Type Assertion (as operator)
const rawApiResponse: unknown = {
    userId: 231,
    username: "atikur_rahman",
    profile: {
        bio: "Full Stack Developer"
    }
};

// Asserting the unknown type to a specific structure
interface UserProfile {
    userId: number;
    username: string;
    profile: {
        bio: string;
    };
}

const validatedProfile = rawApiResponse as UserProfile;
console.log("Validated profile bio:", validatedProfile.profile.bio);

// 4. Non-null Assertion (!)
function findUserById(id: number): string | undefined {
    const db: { [key: number]: string } = {
        1: "Rahim",
        2: "Karim"
    };
    return db[id];
}

// Suppose we are absolutely sure user with ID 1 exists in DB
const userOneName = findUserById(1)!; // compiler is forced to treat it as string, not string | undefined
console.log("Found User 1 Name Length:", userOneName.length);
