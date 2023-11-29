// ES6 - ES2015
// ES7 - ES2016
// ES8 - ES2017
//

// 1. Default parameters
const defaultLength = 50;

function areaOfRect(length = defaultLength, width = length) {
  return length * width;
}

console.log(areaOfRect(10, 15));
console.log(areaOfRect(10));
console.log(areaOfRect());

// 2. Template Literals
const firstName = "Kevin";
const lastName = "Cunningham";

var fullName = "Your name is" + firstName + " " + lastName + ".";

console.log(fullName);
fullName = `Your name is ${firstName} ${lastName}.`;
console.log(fullName);

type Greeting = "Hello" | "Hi" | "Bonjour";
type Target = "World" | "Person" | "Place";
type GreetingTarget = `${Greeting} ${Target}`;

// 3. Object Literals

const make = "apple";
const model = "m1";
const year = 2024;

const laptop = {
  make,
  model,
  year,
};

// 4. Arrow functions - anonymous

function sayHi(person: string) {
  console.log(`Hi ${person}!`);
}
sayHi("Hati");

const sayGoodbye = (person: string) => {
  console.log(`Goodbye ${person}`);
};
sayGoodbye("Daniel");

const add = (a, b) => a + b;

console.log(add(1, 2));

// 5. var, let, const

// scope
// mutability
// hoisting

// block scope

function letFunction() {
  console.log("Before defining blcok", scopedLet);
  if (true) {
    const scopedLet = "I am scoped within a block";
  }
  console.log("After defining block", scopedLet);
}

// letFunction();

function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };
  for (let i = 1; i <= 3; i++) {
    // 1
    var element = pseudoDom["button" + i]; // <- something going on here
    element.click = function () {
      return "Item " + i + " is clicked."; // 2
    };
  }
  console.log(pseudoDom.button1.click()); // Item ___ is clicked
  console.log(pseudoDom.button2.click()); // Item ___ is clicked
  console.log(pseudoDom.button3.click()); // Item ___ is clicked
  return pseudoDom;
}
// 0, 1, 2
// 1, 2
// 1, 2, 3
// Error OutOfBounds?
// Is it even reachable?
// 3, 3, 3
// 4, 4, 4

simulateDom();

// var
// let
// const
