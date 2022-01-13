// Keeping our code DRY
// Don't Repeat Yourself

// Functions - what are they even?
// Functions are an enclosed series of steps that accomplish a task.

// FUNCTION DECLARATION
function firstFunction() {
  console.log("Hello World!")
}

firstFunction() // invoking or calling a function

// function - keyword to declare a function
// firstFunction - name of the function
//    cannot begin with a number
//    cannot be a keyword
//    cannot contain hyphens, no dashes
// function names must ALWAYS be followed by a set of parentheses - these will hold the function's parameters, if any
// curly braces at the bookends of the CODE BLOCK
// inside curlies is the code to execute

// To execute a function you must INVOKE or CALL the function by name. Don't forget the parentheses!

// for (var i = 0; i < 100; i++){
//   firstFunction();
// }

// Sentry - i
// Where sentry starts = 0
// How sentry ends = < 100
// How sentry changes = increments by 1

// Parameters - the ingredients a functions requires as input

function add(num1, num2){
  console.log(num1 + num2);
  return num1 + num2;
}

add(10, 10);

var result = add(2, 2);
console.log(result);

var myName = "Ciso"
console.log(myName)

console.log(add(3, 5))

// The value of a function call is whatever that function call RETURNS.

// The difference between a console.log and a return is like the difference between a hot dog vendor telling you they have hot dogs vs. a hot dog vendor giving you a hot dog.