// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let prev = 0; // Initialize the first number in the Fibonacci sequence (F(0)).
    let curr = 1; // Initialize the second number in the Fibonacci sequence (F(1)).

    // If n is 0, return 0 as the result.
    if (n === 0) {
        return 0;
    }

    // Loop starting from the 2nd index (i = 2) to n to calculate the nth Fibonacci number.
    for (let i = 2; i <= n; i++) {
        let sum = prev + curr; // Calculate the next Fibonacci number.
        prev = curr; // Update prev to be the previous current.
        curr = sum; // Update curr to be the newly calculated sum.
    }

    return curr; // Return the nth Fibonacci number.
}
// Runtime Complexity: O(n)
// This solution has a time complexity of O(n) because it uses a loop to compute the Fibonacci number iteratively, making n-1 iterations.

module.exports = fib;

/* Solution 1
function fib(n) {
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        const a = result[i - 1];
        const b = result[i - 2];

        result.push(a + b);
    }

    return result[n];
}

1 - Initialize an array `result` with the first two numbers of the Fibonacci sequence, 0 and 1.
2 - Loop from index 2 to n, calculating the Fibonacci number at each index by summing the two previous numbers (a and b).
3 - Add the calculated Fibonacci number to the `result` array.
4 - Return the nth Fibonacci number from the `result` array after the loop ends.
*/
// Runtime Complexity: O(n)
// This solution has a linear time complexity O(n) since it computes the Fibonacci number iteratively by filling an array, which takes n-1 operations.

/* Solution 2
function fib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

1 - If n is less than 2, return n as it's a base case of the Fibonacci sequence (F(0) = 0, F(1) = 1).
2 - For n greater than 1, recursively calculate the nth Fibonacci number by summing the results of the previous two Fibonacci numbers (fib(n - 1) + fib(n - 2)).
3 - The recursive calls continue until they reach the base cases, and the final sum is returned as the nth Fibonacci number.
*/
// Runtime Complexity: O(2^n)
// This solution has an exponential time complexity O(2^n) because each function call leads to two more recursive calls, resulting in an exponential growth in the number of calculations.


/* Solution 3
function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}

function slowFib(n) {
    if (n < 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

1 - Define a memoization function `memoize` that stores the results of expensive function calls in a cache.
2 - Within `memoize`, check if the current arguments already exist in the cache. If so, return the cached value to avoid recalculating.
3 - If the arguments are not in the cache, call the original function with `fn.apply`, store the result in the cache, and return the result.
4 - Define the `slowFib` function to recursively calculate the Fibonacci number using the slow recursive solution (fib(n - 1) + fib(n - 2)).
5 - Wrap `slowFib` with `memoize` to create a memoized version that improves the performance of the recursive Fibonacci function.
*/
// Runtime Complexity: O(n)
// With memoization, this solution achieves a time complexity of O(n) because it avoids redundant calculations by caching results, only performing n distinct computations.