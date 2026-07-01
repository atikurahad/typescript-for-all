// Chapter 05: Type Aliases vs. Interfaces Example

// 1. Defining and Using Type Alias
type Coordinates = [number, number];
const dhakaLocation: Coordinates = [23.8103, 90.4125];
console.log("Dhaka GPS Coords:", dhakaLocation);

// 2. Defining and Using Interface
interface Identity {
    id: string;
    username: string;
}

// 3. Extending Interfaces (Extends)
interface AdminUser extends Identity {
    role: "super_admin" | "moderator";
    actionsAllowed: string[];
}

const admin: AdminUser = {
    id: "admin-101",
    username: "atik_admin",
    role: "super_admin",
    actionsAllowed: ["delete_user", "publish_post", "view_logs"]
};
console.log("Admin User Object:", admin);

// 4. Type Intersection (Combination equivalent to Extends)
type Timestamp = {
    createdAt: string;
    updatedAt: string;
};

type ProductData = {
    productId: string;
    price: number;
};

// Combining ProductData and Timestamp using Intersection (&)
type DbProduct = ProductData & Timestamp;

const laptopEntry: DbProduct = {
    productId: "laptop-macbook-m3",
    price: 1299,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};
console.log("DB Product Entry:", laptopEntry);

// 5. Interface Declaration Merging
interface ClientProfile {
    firstName: string;
}

interface ClientProfile {
    lastName: string;
}

// ClientProfile merges into { firstName: string; lastName: string }
const client: ClientProfile = {
    firstName: "Atikur",
    lastName: "Rahman"
};
console.log(`Client Fullname: ${client.firstName} ${client.lastName}`);
