## Typescript App

# Compiling TS files into JS files
Compile a typescript file in terminal into a js file:
~~~ 
tsc sandbox.ts 
~~~
this will return a .js file of the same name but compiled into Javascript that the browser can understand

Compile the same file but watch for updated code in real time
~~~ 
tsc sandbox.ts -w 
~~~

# Type Basics
When compiling .ts files, all of the checks for types are done before compiling, which means the file will not be converted if there are any errors.

*Arrays*
- Once the type has been inferred automatically, you can't change the type of the array data
- if, however, you have a mixed type array, thye inferred type will be mixed
~~~ 
let mixed = ['ken', 4, 'john', 9]

mixed.push('sarah')
mixed.push(56)
~~~
*Objects*
- Same as above, once an object type (shape) has been defined, everything must be the same for this object when being returned. [use ? for each field to say it's not neccesary]
~~~
let ninja = {
  name: 'nick',
  isClimber: true,
  age: 45
};
ninja.age = 34;
ninja.isClimber = 'false';
~~~

*Explicit Types*
