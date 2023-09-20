// In JavaScript, primitive types are the most basic data types, and they represent single values.
// Primitive types are immutable, meaning their values cannot be changed after they are created. JavaScript has six primitive data types:

// 1. Numbers - Represents numeric values, both integers and floating-point numbers.
// Examples:

let age = 30;
let pi = 3.14159;

// 2. String: Represents sequences of characters (text).
// Strings are enclosed in single or double quotes. Examples:
let name = "Geralt";
let message = "Hello, world!";

// 3.Boolean: Represents a binary value, which can be either true or false.
// Booleans are often used for conditional statements. Examples:
let isLoading = true;
let hasSubscription = false;

// 4. Undefined: Represents a variable that has been declared but has not been assigned a value yet.
// Variables without an assigned value have the special value undefined. 
Example:
let myVar;
console.log(myVar); // Outputs: undefined

// 5. Null: Represents the intentional absence of any object value or no value at all. 
// It is often used to indicate that a variable should have no value or that an object property should be empty. 
// Example:
let emptyValue = null;

// Important!  Primitive data types (such as numbers, strings, booleans, null, undefined, and symbols) are immutable by nature. Once you create a variable with a primitive value, you cannot change that value directly. 
// Any operation that seems to modify the value creates a new variable stored in memory.

let name = "Geralt";
name = "Yarpen"; // Creates a new variable with the value "Doe"


//Undefined vs null

// undefined: It is the default value assigned to variables that have been declared but have not been assigned a value.
// It often indicates that a variable or property has not been initialized.
let name; // 'name' is declared but not assigned, so it's 'undefined'.
console.log(name); // Outputs: undefined

// null: It represents the intentional absence of any object value or no value at all.
// It is typically used when you want to explicitly indicate that a variable or object property should have no value.
let user = null; // 'user' intentionally has no value
let config = { apiKey: null }; // 'apiKey' property is set to null to indicate no value

// In summary, undefined is often used for variables that have not been initialized or when a function is called without providing an argument,
//  while null is used when you want to explicitly indicate the absence of a value