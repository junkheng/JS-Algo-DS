function linearSearch(arr, tar){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === tar) return i;
  }
  return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 25));