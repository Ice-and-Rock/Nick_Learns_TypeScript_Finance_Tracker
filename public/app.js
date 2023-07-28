import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplates.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("Nick", "web development work", 400);
docTwo = new Payment("Rebecca", "mountain guiding work", 450);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
// // substanciate the class and set an object to it
// const invoiceOne = new Invoice('Nick', 'work on the new web app', 350);
// const invoiceTwo = new Invoice('Rebecca', 'work on an existing web app', 450);
// // create a new array for the invoices
// let invoices: Invoice[] = [];
// invoices.push(invoiceOne);
// invoices.push(invoiceTwo)
// // log each invoice useing forEach
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
// create a form to keep the data gathered
const form = document.querySelector(".new-item-form");
console.log(form.children);
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
// grab the form using the submit button
form.addEventListener("submit", (Event) => {
    Event.preventDefault();
    let doc;
    if (type.value === "invoice") {
        // create a new doc
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        // create a new doc
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // render the list passing in the three arguments to ListTemplates 
    list.render(doc, type.value, "end");
});
