// // nested loop method
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; i++) {
//       if(arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }



// refactor with multiple pointer method
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    }
    else if (sum > 0) {
      right--;
    }
    else
    {
      left++;
    }
  }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));


// countUniqueValues in linear time and constant space
function countUniqueValues(arr) {
  if (arr.length === 0) return 0; // otherwise will always return 1 as per below i + 1
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1,1,1,2,3,4,4,4,5,6,7,99]));