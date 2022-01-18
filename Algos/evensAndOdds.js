// Evens and Odds
// Create a function that accepts an array. Every time that array has three odd values in a row, print "That’s odd!" Every time the array has three evens in a row, print "Even more so!"

// PSEUDOCODE - ENGLISH
// Create a function called evensAndOdds that has an array as a parameter.
// 

function evensAndOdds(arr) {
  //  Lauren's group's solution:
  var counterOdd = 0;
  var counterEven = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      counterEven = 0
      counterOdd = counterOdd + 1
      if (counterOdd % 3 === 0) {
        console.log("Thats Odd!");
      }
    }
    else {
      // console.log("Found an Even")
      counterOdd = 0;
      counterEven = counterEven + 1
      if (counterEven % 3 === 0) {
        console.log("Even more so!");
      }
    }
  }
}

var myArr = [1, 3, 5, 1, 3, 5, 6, 4, 4, 4, 1, 2, 2, 2, 2, 3]

evensAndOdds(myArr);