// // through iteration
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 1; i--) {
//     total *= i;
//   }
//   return total;
// }

// console.log(factorial(4));

// recursively
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(12));


// helper method recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));




function power(base, expo){
  if (expo === 0) return 1; // base case
  return base * power(base, expo - 1); // recursion
}

console.log(power(2,4));