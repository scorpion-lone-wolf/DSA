// 1 dimension DP problem

// Fibonacci number
// f(n) = f(n-1) + f(n-2)

// top-down appraoch (recursion + memoization)
function fiboTopDown(n, memo) {
  if (n == 0 || n == 1) return n;
  if (memo[n] !== undefined) return memo[n];
  const leftFibo = fiboTopDown(n - 1, memo);
  const rightFibo = fiboTopDown(n - 2, memo);
  memo[n] = leftFibo + rightFibo;
  return memo[n];
}

// bottom up approach (always Iterative)
function fiboBottomUp(n) {
  if (n == 0 || n == 1) return n;
  let fibo1 = 0;
  let fibo2 = 1;
  let fibo3;
  for (let i = 2; i <= n; i++) {
    fibo3 = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fibo3;
  }
  return fibo3;
}

const startTime1 = Date.now();
let n = 10;
const fib1 = fiboTopDown(n, {});
console.log(`${n}'th Fibonacci number is ${fib1}`);
console.log("Total time taken : ", (Date.now() - startTime1) / 1000, "sec");

const startTime2 = Date.now();
n = 10;
const fib2 = fiboBottomUp(n);
console.log(`${n}'th Fibonacci number is ${fib2}`);
console.log("Total time taken : ", (Date.now() - startTime2) / 1000, "sec");
