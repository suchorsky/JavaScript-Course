// 1. The Global object
// In this context, this refers to the global object, which is window in a browser environment.
console.log(this);

// 2. As a method within an object
const hero = {
  firstName: "Geralt",
  lastName: "of Rivia",
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(hero.fullName());

// 3. As a cunstructor on a function class

class Location {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
}

const newLocation = new Location("Novigrad", "City");
console.log(newLocation.name);

// 4. As a DOM event handler
document.getElementById("myButton").addEventListener("click", function () {
  console.log(this);
});

//5. Arrow functions vs Regular Functions

//Arrow function don't have own 'this' context. Instead it capture the 'this' value from their enclosing (surrounding) context.This can lead to unexpected behavior in event handlers or within object methods, especially if you expect this to refer to the object itself. :
const obj = {
  name: "Geralt",
  sayHello: () => {
    console.log(`Hello, ${this.name}`); //name is undefined
  },
};
obj.sayHello();
// In this case, this.name will be undefined because the arrow function captures this from the global context, where name is not defined.

//Binding 'this':
//You can explicitly bind 'this' calue to specific context using the 'bind', 'call', or 'apply' method functions. This is particularly useful when working with callback function (which will I will shwo later).
//Example using 'bind':
const obj2 = {
  name: "Geralt",
  sayHello: function () {
    console.log(`Hello, ${this.name}`);
  },
};
const sayHelloFunction = obj2.sayHello.bind(obj);
sayHelloFunction();

//Arrow Function in Event Handler
//When using arrow function as event hanlders, be cautious above the value of 'this'. It won't reffer to the DOM elment that triggered the event but instead will capture 'this'
// value from the enclosing context, which not be what you expect.
document.getElementById("myButton").addEventListener("click", () => {
  console.log("'this' is not the button element");
  console.log(this);
});

document.getElementById("myButton").addEventListener("click", function () {
  console.log("'this' is the button element");
  console.log(this);
});

//More examples:

class Counter {
  constructor() {
    this.count = 0;
  }
  increment() {
    setInterval(function () {
      // 'this' does not refer to the Counter instance
      // 'this.count' would be undefined, and you'd encounter an error
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

const counter = new Counter();
counter.increment();

//Insted we can use arrow function or .bind(this) inside callback to ensure that 'this' refers to 'Counter instance.
class Counter2 {
  constructor() {
    this.count = 0;
  }
  increment() {
    setInterval(() => {
      // 'this' does refer to the Counter instance
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

const counter2 = new Counter2();
counter2.increment();
