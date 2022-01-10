// Variables
// Two forward slashes make a comment
// Comments are useful for leaving yourself some notes

// Javascript has a specific way of creating all variables
// The way we are going to cover is the old way of doing JS, but it is still accepted and you will learn the new way in MERN
// All variables start with the key word "var"
// The second thing all variables have is a name - pick a descriptive name
// The third thing you will always see when declaring a variable is an = sign
// the fourth thing will be the value you are assigning
var myNumber = 5;

// Bad practice
// var my other number
// Good practice
// var myOtherNumber

// If I want to EDIT an existing variable, here is how we do it:
// Step one, identify the variable you want to change
// Step two, we want to set it, so we need an equal sign
// Step three, we put in the new value

// Option 1, we manually change the number ourselves
myNumber = 4;

// Option 2, if I want to perform a certain change to the number but I don't know what the number is, I can use the variable to change the variable
myNumber = myNumber - 1;

// console.log is our way of seeing results in a terminal or output
console.log("This is a console log");
console.log(myNumber);

// Semicolons are optional, use them or don't, JS does not care

// Other datatypes

// Number: it stores numbers for us
var num1 = 7;
// Numbers can be decimals
var num2 = 2.4;
// Numbers can be negative
var num3 = -12;

// Words: literally just words, likes names, locations, etc...
// Words -> strings
var myName = "Nichole"; 
var lastName = "King";

// Done this way, we get NicholeKing
// myName = myName + lastName;

// Done this way, we get Nichole King
// myName = myName + " " + lastName;

console.log(myName);

// This way is good if we DON'T want to change the variables
console.log(myName + " " + lastName);

console.log(myName);

// Undefined VS Null

// When something is undefined, that means it has not yet had a value assigned to it

// This is undefined
var myValue;
console.log(myValue);

if(myValue == undefined)
{
    console.log("The value is undefined");
}

// This returns NaN (Not a Number)
myValue = myValue + 2;
console.log(myValue);

// Null is when it exists, but we specifically told it to be empty
// The reason we might want a null is when we want a placeholder for something

var nullValue = null;

console.log(nullValue);

// Boolean
// True or False
var myBool = true;
var myOtherBool = false;

console.log(myBool);