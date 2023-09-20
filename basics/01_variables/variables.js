// 1. JavaScript variables

//Var: Historically used for variable declarations, but it has some issues and is mostly replaced by let and const.
// Variables declared with var are function-scoped.
var x = 10;

// Let: Introduced in ES6 (ECMAScript 2015), let allows you to declare block-scoped variables.

let y = 20;
console.log(y); //20

y = 50;
console.log(y); //50

// Const:
// Const: Also introduced in ES6, const is used to declare variables whose values shouldn't
//re-assigned after initial assignment. It's also block-scoped.

const z = 20;
console.log(z);

//TypeError: Assignment to constant variable.
z = 50;

//Naming conventions for variables in JavaScript are important for writing readable and maintainable code. They help you and others understand the purpose and usage of variables within your code.
//Here are some common naming conventions and best practices for variables in JavaScript:

// 1. Use Descriptive Names: Choose variable names that describe their purpose or content. This makes your code more self-documenting.
// Good
let firstName = "Geralt";
let age = 96;

// Bad - Not descriptive
let x = "Geralt";
let a = 96;

//2.Camel Case: Use camelCase for variable names.
// Start with a lowercase letter, and capitalize the first letter of each subsequent word.
let fullName = "Geralt of Rivia";
let numberOfItems = 10;

//Avoid Reserved Words: Do not use reserved words (e.g., if, if, function) as variable names. 
//This can lead to confusion and errors.

// Bad - Using a reserved word as a variable name
let if = true;


// 3.Use Meaningful Prefixes: For variables with a specific purpose, consider using prefixes to indicate their type or purpose. Common prefixes include:

// is or has for Boolean variables.
// count for variables that store counts.
// element for variables that reference DOM elements.
// config for configuration variables.

let isLoading = false;
let elementDiv = document.getElementById("myDiv");
let configMaxRetries = 3;

// 4. Avoid Acronyms: While shortening variable names is common, try to avoid excessive use of acronyms or overly cryptic abbreviations. 
// Make sure that the abbreviation is widely understood.
// // Good
let userProfile = { /* ... */ };

// // Bad - Overly cryptic
let usrProf = { /* ... */ };

// 5. Avoid Single-Letter Names: In general, avoid single-letter variable names unless they are used as loop counters (e.g., i, j) or have a well-established meaning (e.g., x, y in coordinates).
// Good (loop counters)
for (let i = 0; i < 10; i++) {
  // ...
}

// Bad - Not descriptive
let x = 5;