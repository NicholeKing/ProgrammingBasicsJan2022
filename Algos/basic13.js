// 5. Find and Print Max
// printMaxOfArray(arr)
// Given an array, find and print its largest element.

// PSEUDOCODE - KNOW WHAT TO DO BEFORE YOU FIGURE OUT HOW TO DO IT
// In English (with maybe a little bit of coding terms)
// Create a function called printMaxOfArray that takes in an array.
function printMaxOfArray(arr){
  // Create a variable called max and assign the value at the index of zero to it.
  var max = arr[0];
  // Create a for loop that starts i at 0, ends arr.length, and increments by 1.
  for (var i = 1; i < arr.length; i++){
    // Inside the for loop 
    // Create an if statement that compares each number to max
    if(arr[i] > max){
      // If it is larger, then make it the new max.
      max = arr[i];
    }
  }
  // After the for loop c.log the final value of max.
  console.log(max);
}

printMaxOfArray([4, 7, 1, 3, 8, 9, 3, 56, 7, 8, 10]);

// 6. Get and Print Average
// printAverageOfArray(arr)
// Analyze an array’s values and print the average.

// Create a function called printAverageOfArray that takes in an array.
// Create a variable called sum and intialize it at 0.
// Create a for loop that starts i at 0, ends arr.length, and increments by 1.
// Inside the for loop:
//   Update sum with the value of each element.
// Outside the for loop:
//   Console log the result of dividing sum by arr.length

function printAverageOfArray(arr){
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    // sum = sum + arr[i]
  }
  var result = sum / arr.length;
  console.log(result);
}

printAverageOfArray([1, 2, 3, 4, 5]);