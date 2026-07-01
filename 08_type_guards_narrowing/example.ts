// Chapter 08: Type Guards & Narrowing Example

// 1. typeof Type Guard
function printLength(val: string | string[]) {
    if (typeof val === "string") {
        console.log(`String length is: ${val.length}`);
    } else {
        console.log(`Array length is: ${val.length}`);
    }
}
printLength("Hello");
printLength(["TS", "JS", "Go"]);

// 2. instanceof Type Guard
class Manager {
    manage() {
        console.log("Manager: Organizing resources and schedules.");
    }
}

class Developer {
    code() {
        console.log("Developer: Writing clean code.");
    }
}

function assignDuty(staff: Manager | Developer) {
    if (staff instanceof Manager) {
        staff.manage();
    } else if (staff instanceof Developer) {
        staff.code();
    }
}
assignDuty(new Manager());
assignDuty(new Developer());

// 3. 'in' Operator Type Guard
type Car = { drive: () => void; doors: number };
type Boat = { sail: () => void; enginePower: string };

function travel(vehicle: Car | Boat) {
    if ("drive" in vehicle) {
        console.log(`Car doors: ${vehicle.doors}`);
        vehicle.drive();
    } else {
        console.log(`Boat power: ${vehicle.enginePower}`);
        vehicle.sail();
    }
}
travel({ drive: () => console.log("Driving on highway"), doors: 4 });

// 4. User-Defined Type Guard (Type Predicate)
interface Admin {
    name: string;
    privileges: string[];
}

interface GeneralUser {
    name: string;
    email: string;
}

// Function checking if person is Admin
function isAdmin(profile: Admin | GeneralUser): profile is Admin {
    return (profile as Admin).privileges !== undefined;
}

const profileOne: Admin | GeneralUser = {
    name: "Atik",
    privileges: ["CREATE_SERVER", "REBOOT"]
};

if (isAdmin(profileOne)) {
    console.log(`Admin ${profileOne.name} has privileges: ${profileOne.privileges.join(", ")}`);
} else {
    console.log(`User ${profileOne.name} email is: ${profileOne.email}`);
}
