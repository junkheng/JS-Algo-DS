function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib_memo(n - 1, memo) + fib_memo (n - 2, memo);
  memo[n] = res;
  return res;
}

function fib_table(n) {
  if (n <=2 ) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2];
  }
  return fibNums[n];
}

console.log(fib_memo(20));

console.log(fib_table(10000)); // Infinity
console.log(fib_memo(10000)); // RangeError: Maximum call stack size exceeded
