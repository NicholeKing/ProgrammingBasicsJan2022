// Write a function that takes in a starting number and an ending number and returns the sum of all the numbers between (inclusive).

// 3, 10
// 3, 4, 5, 6, 7, 8, 9, 10

function adder(startNum, endNum){
  var sum = 0;
  for(var i = startNum; i <= endNum; i++){
    // sum = sum + i;
    sum += i;
  }
  return sum;
}

console.log(adder(3, 10));

// Print 1-255
// print1To255()
// Print all the integers from 1 to 255. 

function print1To255(){
  for(var i = 1; i <= 255; i++){
    console.log(i);
  }
}

print1To255();

// 2. Print Odds 1-255
// printOdds1To255()
// Print all odd integers from 1 to 255.

function printOdds1To255(){
  for(var i = 1; i <= 255; i = i + 2){
    console.log(i);
  }
}

printOdds1To255();

function printOdds1To255WithModulo(){
  for(var i = 1; i <= 255; i++){
    if(i % 2 != 0){
      console.log(i);
    }
  }
}

printOdds1To255WithModulo();

// WHAT THE HECK IS MODULO????
// Modulo returns the remainder of arg1 divided by arg 2.

console.log(5 % 2);

console.log(13 % 3 === 0);

