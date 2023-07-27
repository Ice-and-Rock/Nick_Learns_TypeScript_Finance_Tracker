# Typescript App

# Compiling TS files into JS files
Compile a typescript file in terminal into a js file:
~~~ javascript
tsc sandbox.ts 
~~~
this will return a .js file of the same name but compiled into Javascript that the browser can understand

Compile the same file but watch for updated code in real time
~~~ javascript
tsc sandbox.ts -w 
~~~

# Type Basics
When compiling .ts files, all of the checks for types are done before compiling, which means the file will not be converted if there are any errors.

## Arrays
- Once the type has been inferred automatically, you can't change the type of the array data
- if, however, you have a mixed type array, thye inferred type will be mixed
~~~ javascript
let mixed = ['ken', 4, 'john', 9]

mixed.push('sarah')
mixed.push(56)
~~~
## Objects
- Same as above, once an object type (shape) has been defined, everything must be the same for this object when being returned. [use ? for each field to say it's not neccesary]
~~~javascript
let ninja = {
  name: 'nick',
  isClimber: true,
  age: 45
};
ninja.age = 34;
ninja.isClimber = false;
~~~

## Explicit Types 
- written after a variable/array/object has been declared to tell typescript exactly what type something should be
~~~javascript
// create a new array that is mixed
let mixed: (string|number|boolean) [] = [];
~~~
~~~javascript
let secondObject: {
  name: string,
  age: number,
  isClimber: boolean
}
//you can't add any more fields to this object and items must match given type
secondObject = { name: 'Steve', age: 20, isClimber: true}
~~~

## Dynamic any types

Try to avoid doing this, simply because it removes any point in using Typescript when developing large apps.
- that being said, it may rarely have it's use cases
~~~javascript
//create an object with any type for contents 
let life: { name: any, age: any }
life = { name: 'Nick', age: 'Nick'}
~~~ 
- you can see above that a mistake has been made, but due to 'any' field, it won't get picked up

# Better workflow & TSconfig

To compile the TS files (as shown above) we usually use a command like 'tsc src/sandbox.ts'. This will compile the typescript file into a Javascript file to be read by the browser.
However, if you don't want the Javascript file to be compiled into the same folder as the TS file (which is standard) follow the below instructions in the terminal:
- Create a stconfig.json file
~~~javascript
tsc --init
~~~
- Go into the config file and change the root directory to wherever  Javascript files are. The following will watch inside './src':
~~~javascript
 "rootDir": "./src",                                  
 /* Specify the root folder within your source files. */
 ~~~
 - Then change the output location folder in the 'Emit' sction of the json file:
 ~~~javascript
"outDir": "./public",                                   
/* Specify an output folder for all emitted files. */
~~~
Remember you can run this in real time using 'tsc -w' to watch the TypeScript file for changes and automatically compile the new changes

 ## Warning **
 - this is a problem in large apps because every TyupeScript file will be compiled to the './public' folder. To stop this from happening, you must set thte compiler to ONLY LISTEN IN A CERTAIN FOLDER using the following at the bottom of the json file:
~~~ javascript
  },
  "include": ["src"]
}
// only compile files in the './src' folder
~~~ 


# Function Basics
You can define something to be a function but it needs a capitol
~~~ javascript 
let greet: Function;
greet = () => {
    console.log("hello. welcome to my work...")
};
~~~

Define the arguments a function takes in. 
- The arguments don't have to be **mantatory**, use '?' to say if the argument is strictly necessary 
~~~ javascript 
// write a calculator function
// takes in 3 items (3rd is optional)
let add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c) 
}
// call the function with arguments 
add(5, 10, 45)
~~~
- you can create a **default value** for an argument, too. Using the '=' sign in the argument. This will be overwriten when a new argument is passed in
~~~ javascript 
// Same, but with a default parameter for the third value as 10
let addV2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}
// call the function with arguments 
add(5, 10, "45") 
~~~ 

A **Void type** occurs when a function has no return value either ever, or at that point in time. For example, the aboveo code would have the type void, but the code below would have an inferred value of 'number'...
~~~ javascript
let minus = (a: number, b: number, c: number|string) => {
    return a - b
}
minus(5, 3)
~~~

## Type Aliases
Are used to reduce the amount or repeated code in your work. For example you can create an alias for a repeatable type: string|number. You can also create an alias for an object, inc size and types:
~~~ javascript
// create 2 type aliases
// 1 for an id number | 1 for a member details object
type stringOrNum = string | number ;
type memberObject = { name: string, id: number } ;

// write a function with the first the alias
let memberDetails = (name: string, id: stringOrNum) => {
    console.log(memberDetails)
}
// write a function with the second alias
let memberDetailsV2 = (member: memberObject) => {
    console.log(`${member.name} says hey...!`) }
~~~

## Function signatures
Similar to aliases but specifically for functions. We can define the type structure of a function and then change the arguments and information in them later on using the same structure. For example:
- Greet below takes in two strings and can produce void
~~~ javascript
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log (`${name} says ${greeting}`)
}
~~~
- calculator takes in three arguments to produce a number. The code following still has the initial structure, but with different function contents
~~~ javascript
let calculator: (a: number, b: number, c: string) => number ;
calculator = (num1: number, num2: number, action: string) => {
    if (action === 'add') {
        return num1 + num2
    } else {
        return num1 - num2
    }}
~~~
- logDetails is an object with two fields that can return void (no return statement). We can simply rename and add contents to the object using an alias object *(person)*. We still keep the same structure type 
~~~ javascript
let logDetails: (obj: {name: string, age: number}) => void ;
type person = {name: string, age: number} ;

logDetails = (user: person) => {
    console.log(`${user.name} is ${user.age} years old`)
}
~~~

# Building the App
Created an app.ts file in src folder => this compiles into the public folder using ```tsc``` command in terminal from the root folder

## The DOM and Type casting
Pull elements from the HTML page using ```document.querySelector``` and reassign them to be HTML elements (rather than just Elements).
~~~ javascript
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);
const type = document.querySelector('#type') as HTMLSelectElement;
~~~ 

create an ```eventListener``` for the submit button that logs all of the form data collected
~~~ javascript
// grab the form using the submit button
form.addEventListener('submit', (Event: Event) => {
    Event.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )})
~~~ 

## Classes

Create a class for the invoices our App is going to take in - rather than simply name all of the types of each field (client, details, number)
- Use a constructor to automatically assign values taken in by the input fields to be each class
- Create a method for the class to return a dynamic value using ```format()```
~~~ javascript
class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor ( c: string, d: string, a: number ) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`
    }}
~~~

To make an area to test these new classe, we first need to create two variables to hand into thte class... 
~~~ javascript
const invoiceOne = new Invoice('Nick', 'work on the new web app', 350);
const invoiceTwo = new Invoice('Rebecca', 'work on an existing web app', 450);
~~~
After this, we need somewhere to save them to. Create an empty array that will only accept the class into each index
~~~ javascript
let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo)
~~~

## Private, Public and ReadOnly
The defgault behavour of classes - anyone can change the poperties of them. We use **Access Modifiers** to change this using: private, public or readonly 
- private, can't be seen outside the class
- public, can be seen any changed anywhere
- can only be read 
This can all be done inside the constructor
~~~ javascript
class Invoice {
    constructor ( 
        readonly client: string,
        private details: string,
        public amount: number,
     ) {}}
~~~

## Modules
- Seperate the invoices class into a seperate component 
- Add "module" to the script tag in the HTML

## Interfaces 
Declaring an interface basically says, if something is created in the future calling itself by that type, it must contain these set credentials
~~~ javascript
interface IsPerson {
    name: string,
    age: number,
    speak(a: string): void;
    spend(a: number): number;
}
~~~
WE can go ahead and test if this is working by creating a variable with the interface, note it must match the criteria! 
~~~ javascript
let me: IsPerson = {
    name: 'nick',
    age: 33,
    speak (text: string) {
        console.log(text)
        // this can be void
    },
    spend (amount: number) {
        console.log('I spent' + amount)
        // this can't be void
        return amount
    }}
~~~
You can hand this interface into a function adn the type will automatically be inferred like so...
~~~ javascript
const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}
~~~
or even like this to test your new object...
~~~ javascript
greetPerson( me )
~~~

## Interfaces with Classes
So, after playing around, it's time to set up a two classes that implemement the correct type interface. Create a new class file and call it 'payments.ts'. It's going to use the same type structure as the constructor given in 'Invoice'.
Then add a folder and file called 'HasFormatter'. This will call the format inside each class(?) then hand it back to the class.
~~~ javascript
// Create a formatter that simply returns a string from a format function 
export interface HasFormatter {
    format(): string; }
~~~
this is the updated Class...
~~~ javascript
export class Payment implements HasFormatter{
    constructor ( 
        readonly recipient: string,
        private details: string,
        public amount: number,
     ) {}
     
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}`;
    }}
~~~

Then, check everything is working by going back to App and use HasFormatter as a type for some new variables 
~~~ javascript
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Nick', 'web development work', 400);
docTwo = new Payment('Rebecca', 'mountain guiding work', 450);
~~~

Then, create a new array to save all fo the new formatted variables to and .push them in. **Hint**: You shouldn't be getting any type errors here.
~~~ javascript
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);
~~~
We can then be sure that everyhting we've added to the new array is in the correct format ✅

### create a new payments of invoice object
In the eventListener in App, add a new variable to capture all the input data. This will depend on the two input fields: invoice/payment.
We therefore need an **if / else** statement to check which type it is equal to '==='.
Add the values from the inputs to either classes using the field.value(AsNumer)
~~~ javascript
let doc: HasFormatter;
    if (type.value === 'invoice') {
        // create a new doc
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        // create a new doc
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
~~~




