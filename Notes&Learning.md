# Typescript App

*Compiling TS files into JS files*
Compile a typescript file in terminal into a js file:
~~~ tsc sandbox.ts ~~~
this will return a .js file of the same name but compiled into Javascript that the browser can understand

Compile the same file but watch for updated code in real time
~~~ tsc sandbox.ts -w ~~~

*Type Basics*
When compiling .ts files, all of the checks for types are done before compiling, which means the file will not be converted if there are any errors.

