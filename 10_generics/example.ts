// Chapter 10: Generics Example

// 1. Generic Function
function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const firstNum = getFirstElement([10, 20, 30]); // type is number
const firstStr = getFirstElement(["TS", "JS", "CSS"]); // type is string
console.log(`First number: ${firstNum}, First string: ${firstStr}`);

// 2. Generic Interface
interface PaginatedResponse<T> {
    currentPage: number;
    totalPages: number;
    results: T[];
}

interface Product {
    id: number;
    title: string;
    price: number;
}

const apiResponse: PaginatedResponse<Product> = {
    currentPage: 1,
    totalPages: 5,
    results: [
        { id: 1, title: "Wireless Mouse", price: 25 },
        { id: 2, title: "Mechanical Keyboard", price: 75 }
    ]
};
console.log("Paginated products:", apiResponse.results);

// 3. Generic Constraints & keyof
function getObjectValue<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const car = { brand: "Tesla", model: "Model S", year: 2024 };
const brand = getObjectValue(car, "brand");
const year = getObjectValue(car, "year");
console.log(`Car Brand: ${brand}, Year: ${year}`);

// 4. Generic Class
class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}

    print() {
        console.log(`Key: ${this.key}, Value: ${this.value}`);
    }
}

const config = new KeyValuePair<string, number>("port", 8080);
config.print();
