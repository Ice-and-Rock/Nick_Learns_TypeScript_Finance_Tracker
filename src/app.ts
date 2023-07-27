
// create a form to keep the data gathered
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement; 

const amount = document.querySelector('#amount') as HTMLInputElement; 

// grab the form using the submit button
form.addEventListener('submit', (Event: Event) => {
    Event.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})
