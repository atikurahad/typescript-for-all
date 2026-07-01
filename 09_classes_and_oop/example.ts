// Chapter 09: Classes & OOP Example

// 1. Class with Shorthand constructor & Access Modifiers
class BankAccount {
    // Shorthand for public/private properties
    constructor(
        public readonly accountNumber: string,
        public ownerName: string,
        private _balance: number
    ) {}

    // Getter for balance
    get balance(): number {
        return this._balance;
    }

    // Deposit Method
    deposit(amount: number) {
        if (amount <= 0) {
            console.log("Deposit must be positive!");
            return;
        }
        this._balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this._balance}`);
    }

    // Withdraw Method
    withdraw(amount: number) {
        if (amount > this._balance) {
            console.log("Insufficient funds!");
            return;
        }
        this._balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this._balance}`);
    }
}

const myAcc = new BankAccount("ACC-9812", "Atikur Rahman", 5000);
console.log(`Owner: ${myAcc.ownerName}, Account No: ${myAcc.accountNumber}`);
myAcc.deposit(1500);
myAcc.withdraw(2000);
console.log("Final balance check (via getter):", myAcc.balance);

// 2. Abstract Classes and Inheritance
abstract class NotificationSender {
    constructor(public targetAddress: string) {}

    // Abstract method must be implemented by subclasses
    abstract send(message: string): void;
}

class EmailNotification extends NotificationSender {
    send(message: string): void {
        console.log(`Sending Email to ${this.targetAddress} with content: "${message}"`);
    }
}

class SmsNotification extends NotificationSender {
    send(message: string): void {
        console.log(`Sending SMS to ${this.targetAddress} with content: "${message}"`);
    }
}

const emailSender = new EmailNotification("atikur@example.com");
emailSender.send("Hello from TypeScript OOP!");

const smsSender = new SmsNotification("+8801700000000");
smsSender.send("Your OTP code is 4931.");
