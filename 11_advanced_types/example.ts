// Chapter 11: Advanced Types Example

// 1. typeof Type Operator
const appTheme = {
    primaryColor: "#3498db",
    secondaryColor: "#2ecc71",
    fontSize: 16,
    isDark: false
};

// Copy structure of appTheme to a Type
type ThemeConfig = typeof appTheme;

const customTheme: ThemeConfig = {
    primaryColor: "#9b59b6",
    secondaryColor: "#e74c3c",
    fontSize: 14,
    isDark: true
};
console.log("Custom theme applied:", customTheme);

// 2. keyof Type Operator
type ServerStatus = {
    uptime: number;
    connections: number;
    status: "online" | "offline";
};

function getServerInfo(statusObj: ServerStatus, key: keyof ServerStatus) {
    console.log(`Server ${key}:`, statusObj[key]);
}

const statusData: ServerStatus = { uptime: 36000, connections: 142, status: "online" };
getServerInfo(statusData, "status");
getServerInfo(statusData, "connections");

// 3. Mapped Types
type UserPermissions = {
    canEdit: boolean;
    canDelete: boolean;
    canView: boolean;
};

// Make all properties readonly using a mapped type
type ReadonlyPermissions<T> = {
    readonly [P in keyof T]: T[P];
};

const userPerms: ReadonlyPermissions<UserPermissions> = {
    canEdit: true,
    canDelete: false,
    canView: true
};
// userPerms.canEdit = false; // Error: Cannot assign to 'canEdit' because it is a read-only property.
console.log("Readonly Permissions Object:", userPerms);

// 4. Conditional Types & infer
type UnpackArray<T> = T extends (infer U)[] ? U : T;

type TypeA = UnpackArray<string[]>; // TypeA is string
type TypeB = UnpackArray<number>;   // TypeB is number

const message: TypeA = "Hello without array";
const numVal: TypeB = 100;
console.log("Unpacked values:", message, numVal);
