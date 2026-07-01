// Chapter 12: Utility Types Example

interface Course {
    id: string;
    title: string;
    description: string;
    price: number;
    difficulty?: "beginner" | "intermediate" | "advanced";
}

// 1. Partial
function updateCourse(courseId: string, updates: Partial<Course>) {
    console.log(`Updating Course ${courseId} with keys:`, Object.keys(updates));
}
updateCourse("course-101", { price: 49.99 }); // Valid, because all fields in updates are optional

// 2. Required
type FullyConfiguredCourse = Required<Course>;
// Every field must be present (including difficulty, which was optional in Course)
const newCourse: FullyConfiguredCourse = {
    id: "course-202",
    title: "Advanced TS",
    description: "Deep dive into type system",
    price: 99,
    difficulty: "advanced"
};
console.log("Required course created:", newCourse.title);

// 3. Readonly
const constantCourse: Readonly<Course> = {
    id: "const-1",
    title: "Static Design Patterns",
    description: "Learn design patterns in TS",
    price: 35
};
// constantCourse.price = 45; // Error: Cannot assign to 'price' because it is a read-only property.

// 4. Record
type FeatureFlags = "analytics" | "paymentGateway" | "chatSupport";
const features: Record<FeatureFlags, boolean> = {
    analytics: true,
    paymentGateway: true,
    chatSupport: false
};
console.log("Feature flags configuration:", features);

// 5. Pick
type SimpleCourse = Pick<Course, "title" | "price">;
const simple: SimpleCourse = { title: "Simple TS", price: 15 };
console.log("Picked properties:", simple);

// 6. Omit
type AnonymousCourse = Omit<Course, "id" | "price">;
const anonymous: AnonymousCourse = { title: "Secret Guide", description: "Unknown price course" };
console.log("Omitted properties:", anonymous);

// 7. Exclude & Extract
type PossibleAnswers = "yes" | "no" | "maybe" | "definitely";
type FinalAnswers = Exclude<PossibleAnswers, "maybe">; // "yes" | "no" | "definitely"
type BinaryAnswers = Extract<PossibleAnswers, "yes" | "no">;   // "yes" | "no"

const checkAnswer = (ans: BinaryAnswers) => console.log("Answer checked:", ans);
checkAnswer("yes");

// 8. ReturnType & Parameters
function fetchProductData(productId: number, token: string) {
    return { productId, apiStatus: "active", receivedAt: Date.now() };
}

type FetchParams = Parameters<typeof fetchProductData>; // [number, string]
type FetchResult = ReturnType<typeof fetchProductData>; // { productId: number, apiStatus: string, receivedAt: number }

const mockParams: FetchParams = [55, "auth_jwt_token"];
const mockResult: FetchResult = fetchProductData(...mockParams);
console.log("Extracted ReturnType result:", mockResult);
