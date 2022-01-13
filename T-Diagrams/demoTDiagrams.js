// T-Diagram the following code snippets to help predict the output.

// Challenge #2
function hello() {
  console.log('hello');
  return 15;
}
var result = hello();
console.log('result is', result);

// Challenge #7
function sumNums1(num1, num2) {
  return num1+num2;
}
console.log(sumNums1(2,3))
console.log(sumNums1(3,5))

// Challenge #10
function sumNums2(num1, num2) {
  var sum = num1 + num2;
  console.log('sum is', sum);
  return sum;
}
var result = sumNums2(2,3) + sumNums2(3,sumNums2(2,1)) + sumNums2(sumNums2(2,1),sumNums2(2,3));
console.log('result is', result);

