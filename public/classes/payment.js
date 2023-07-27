"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
// Classes
class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }
}
exports.Payment = Payment;
