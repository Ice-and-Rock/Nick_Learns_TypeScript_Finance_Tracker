import { Invoice } from "./classes/invoice";
import { ListTemplate } from "./classes/ListTemplates";
import { Payment } from "./classes/payment";
import { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Nick", "web development work", 400);
docTwo = new Payment("Rebecca", "mountain guiding work", 450);

let docs: HasFormatter[] = [];
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
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

// grab the form using the submit button
form.addEventListener("submit", (Event: Event) => {
  Event.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    // create a new doc
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    // create a new doc
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});
