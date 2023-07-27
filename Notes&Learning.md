### Typescript App

## Compiling TS files into JS files
Compile a typescript file in terminal into a js file:
~~~ 
tsc sandbox.ts 
~~~
this will return a .js file of the same name but compiled into Javascript that the browser can understand

Compile the same file but watch for updated code in real time
~~~ 
tsc sandbox.ts -w 
~~~

## Type Basics
When compiling .ts files, all of the checks for types are done before compiling, which means the file will not be converted if there are any errors.

# Arrays
- Once the type has been inferred automatically, you can't change the type of the array data
- if, however, you have a mixed type array, thye inferred type will be mixed
~~~ 
let mixed = ['ken', 4, 'john', 9]

mixed.push('sarah')
mixed.push(56)
~~~
# Objects
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

## Explicit Types 
- written after a variable/array/object has been declared to tell typescript exactly what type something should be
~~~
// create a new array that is mixed
let mixed: (string|number|boolean) [] = [];
~~~
~~~
let secondObject: {
  name: string,
  age: number,
  isClimber: boolean
}
//you can't add any more fields to this object and items must match given type
secondObject = { name: 'Steve', age: 20, isClimber: true}
~~~

# Dynamic any types

Try to avoid doing this, simply because it removes any point in using Typescript when developing large apps.
- that being said, it may rarely have it's use cases
~~~
//create an object with any type for contents 
let life: { name: any, age: any }
life = { name: 'Nick', age: 'Nick'}
~~~ 
- you can see above that a mistake has been made, but due to 'any' field, it won't get picked up

## Better workflow & TSconfig

To compile the TS files (as shown above) we usually use a command like 'tsc src/sandbox.ts'. This will compile the typescript file into a Javascript file to be read by the browser.
However, if you don't want the Javascript file to be compiled into the same folder as the TS file (which is standard) follow the below instructions in the terminal:
- Create a stconfig.json file
~~~
tsc --init
~~~
- Go into the config file and change the root directory to wherever  Javascript files are. The following will watch inside './src':
~~~
 "rootDir": "./src",                                  
 /* Specify the root folder within your source files. */
 ~~~
 - Then change the output location folder in the 'Emit' sction of the json file:
 ~~~
"outDir": "./public",                                   
/* Specify an output folder for all emitted files. */
~~~
Remember you can run this in real time using 'tsc -w' to watch the TypeScript file for changes and automatically compile the new changes

 # Warning 
 - this is a problem in large apps because every TyupeScript file will be compiled to the './public' folder. To stop this from happening, you must set thte compiler to ONLY LISTEN IN A CERTAIN FOLDER using the following at the bottom of the json file:
~~~
  },
  "include": ["src"]
}
// only compile files in the './src' folder
~~~ 

