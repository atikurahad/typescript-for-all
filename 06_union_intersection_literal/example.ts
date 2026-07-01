// Chapter 06: Union, Intersection & Literal Types Example

// 1. Union Types Example
function printId(id: string | number) {
    if (typeof id === "string") {
        console.log(`String ID (Uppercase): ${id.toUpperCase()}`);
    } else {
        console.log(`Numeric ID (Multiplied): ${id * 10}`);
    }
}
printId("usr_99a");
printId(120);

// 2. Intersection Types Example
type HasName = { name: string };
type HasAge = { age: number };

type PersonInfo = HasName & HasAge;

const citizen: PersonInfo = {
    name: "Atikur Rahman",
    age: 25
};
console.log(`Citizen Name: ${citizen.name}, Age: ${citizen.age}`);

// 3. Literal Types with Union (Common Pattern)
type NetworkState = "idle" | "loading" | "success" | "error";

function renderState(state: NetworkState) {
    switch (state) {
        case "idle":
            console.log("System is waiting for user action.");
            break;
        case "loading":
            console.log("Fetching API data... Please wait.");
            break;
        case "success":
            console.log("Data loaded successfully!");
            break;
        case "error":
            console.log("Failed to load data. Please retry.");
            break;
    }
}
renderState("loading");
renderState("success");

// 4. Numeric Literal Type
type HttpErrorCode = 400 | 401 | 403 | 404 | 500;

function handleHttpError(code: HttpErrorCode) {
    console.log(`Handling HTTP Error: ${code}`);
}
handleHttpError(404);
// handleHttpError(200); // Compiler error: Argument of type '200' is not assignable to parameter of type 'HttpErrorCode'.
