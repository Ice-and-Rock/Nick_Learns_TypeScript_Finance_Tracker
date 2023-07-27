"use strict";
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
    console.log(type.value, tofrom.value, details.value, amount.value);
});
