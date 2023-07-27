// define a function
let greet: Function;

// write a greet function
greet = () => {
    console.log("hello. welcome to my work...")
}

// write a calculator function
// takes in 3 items (3rd is optional)
let add = (a: number, b: number, c?: number | string) => {
    console.log(a + b)
    console.log(c) 
}

// call the function with arguments 
add(5, 10, 45) 

// Same, but with a default parameter for the third value as 10
let addV2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b)
    console.log(c)
}