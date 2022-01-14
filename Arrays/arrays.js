// ARRAYS

// Arrays are a collection of data
// Arrays contain index values to represent the location of each piece of data in the collection
// Arrays have length, so we can get HOW many values are in the array
// Arrays ALWAYS start at index 0 and increment up by one

// var myArray = [1, 2, 3, 4, 5];
// console.log(myArray[2]);
// console.log(myArray.length);
// // If we want the last value we have to say array.length - 1
// console.log(myArray[myArray.length-1]);

// // If we want to change an existing value
// myArray[1] = "two";
// console.log(myArray);

// // The difference between arr[#] on the LEFT side of an equal sign vs being on the RIGHT
// // LEFT = RIGHT
// // Left is the location in memory
// // Right is the VALUE at that location

// myArray[3] = myArray[2];
// console.log(myArray);

// // We can modify a value at its location by calling on it correctly
// myArray[4] = myArray[4] * 2;
// console.log(myArray[4]);

// // Other things we can do with arrays
// // #1: We can add values to it
// // Push
// // This pushes a value to the BACK of the array
// myArray.push(6);
// console.log(myArray);

// // #2: We can take values out
// // Pop
// // Special note: you can ONLY pop from the back of the array
// myArray.pop();
// myArray.pop();
// myArray.pop();
// console.log(myArray);

// Getting fancy with arrays

var functionArray = [2,7,4,8,12,6,3,8];

// console.log(functionArray);

// THIS IS A LOT OF WORK, and programmers don't like to work
// console.log(functionArray[0]);
// console.log(functionArray[1]);
// console.log(functionArray[2]);
// console.log(functionArray[3]);
// console.log(functionArray[4]);

// Let's write a loop to console log all values in an array
// 3 major elements of a for loop: start, end, and increment
// for(var i = 0; i < functionArray.length; i++){
//     console.log(functionArray[i]);
// }

// There are two ways to write an end condition that takes us to the end of the array
// Option 1: i <= functionArray.length - 1
// Option 2: i < functionArray.length

// Functions and Arrays
// I want to write a function that multiply each value by 2
var multArray = [1,2,3,4,5];
var multArray2 = [10,3,9,23,4];
// Expected output: [2,4,6,8,10]
function multiplyArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*2;
    }
    return arr;
}

// console.log(multiplyArray(multArray));
// console.log(multiplyArray(multArray2));

// Let's divide an array
function divideArray(arr){
    for(var i = 0; i < arr.length; i++){
        arr[i] = (arr[i]/3).toFixed(2);
        // There is a parseInt and parseFloat
        console.log(arr[i]);
        console.log(parseInt(arr[i]));
        arr[i] = parseFloat(arr[i])*parseFloat(arr[i]);
    }
    return arr;
}

console.log(divideArray(multArray));
console.log(divideArray(multArray2));