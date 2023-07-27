"use strict";
// cLasses
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// substanciate the class and set an object to it
const invoiceOne = new Invoice('Nick', 'work on the new web app', 350);
const invoiceTwo = new Invoice('Rebecca', 'work on an existing web app', 450);
// create a new array for the invoices
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
// log each invoice useing forEach
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
// create a form to keep the data gathered
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// grab the form using the submit button
form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
