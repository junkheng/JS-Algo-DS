// naive solution - linear time complexity
function search(arr ,val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// refactored - log(N) time complexity - Binary Search
function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < value) {
      min = middle + 1;
    }
    else if (array[middle]> val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}