# JavaScript Primitive Types

In JavaScript, primitive types are fundamental data types that represent single values. They are immutable, meaning their values cannot be changed after creation. JavaScript has six primitive data types:

## Numbers

Numbers represent both integers and floating-point numbers.

```javascript
let age = 30;
let pi = 3.14159;
```

## String

Strings represent sequences of characters (text) and are enclosed in single or double quotes.

```javascript
let name = "Geralt";
let message = "Hello, world!";
```

## Boolean

Booleans represent binary values, either `true` or `false`, often used for conditional statements.

```javascript
let isLoading = true;
let hasSubscription = false;
```

## Undefined

Undefined represents a variable that has been declared but has not been assigned a value. It indicates that a variable or property has not been initialized.

```javascript
let myVar;
console.log(myVar); // Outputs: undefined
```

## Null

Null represents the intentional absence of any object value or no value at all. It is often used to indicate that a variable should have no value or that an object property should be empty.

```javascript
let emptyValue = null;
```

**Important!** Primitive data types (numbers, strings, booleans, null, undefined, and symbols) are immutable by nature. Once you create a variable with a primitive value, you cannot change that value directly. Any operation that seems to modify the value creates a new variable stored in memory.

## Undefined vs Null

### Undefined

Undefined is the default value assigned to variables that have been declared but have not been assigned a value. It often indicates that a variable or property has not been initialized.

```javascript
let name; // 'name' is declared but not assigned, so it's 'undefined'.
console.log(name); // Outputs: undefined
```

### Null

Null represents the intentional absence of any object value or no value at all. It is typically used when you want to explicitly indicate that a variable or object property should have no value.

```javascript
let user = null; // 'user' intentionally has no value
let config = { apiKey: null }; // 'apiKey' property is set to null to indicate no value
```

In summary, undefined is often used for variables that have not been initialized or when a function is called without providing an argument, while null is used when you want to explicitly indicate the absence of a value.
