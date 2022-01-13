// Conditionals
// What are they even?

// Conditionals are tools with which developers can use to make decisions in their code.

if (2 > 1) {
  console.log("The condition is true.");
}

else {
  console.log("The conditional is false.");
}

// keyword - 'if' tells JavaScript to start a conditional statement.
// boolean statement (test) - between the parens
// code block - code to run if test is true, bookended by curly braces.

var hour = 10;

if (hour < 11) {
  console.log("Good morning!");
}

else if (hour < 18) {
  console.log("Good day!");
}

else {
  console.log("Good evening!");
}

console.log("The conditional is complete.");

// If you have multiple boolean tests, put the strictest one first.

var isDogWhimpering = true;

if (isDogWhimpering) {
  console.log("Take dog for walk.")
}

var myName = "Narciso";
var myNum = 25;

// == tests for equality in value only
// === tests for equality in value AND datatype

// strings, booleans, numbers, undefined, null - JS primitive datatypes

if ("10" !== 10) {
  console.log('true');
}

// OPERATORS
// < (less than)
// > (greater than)
// <= (less than or equal to)
// >= (greater than or equal to)
// === (equal to)
// !== (not equal to)

// % (modulus operator)

// FizzBuzz algorithm for conditionals and modulus.