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
// The function runs in linear time as the loop iterates n-1 times, making it O(n).

module.exports = fib;

/* Solution 1
function fib(n) {
    const result = [0, 1]; // Initialize an array with the first two Fibonacci numbers.

    // Loop from 2 to n to compute the next Fibonacci numbers.
    for (let i = 2; i <= n; i++) {
        const a = result[i - 1]; // Get the previous Fibonacci number.
        const b = result[i - 2]; // Get the one before the previous number.

        result.push(a + b); // Add the sum of the two previous numbers to the result array.
    }

    return result[n]; // Return the nth Fibonacci number from the result array.
}

// Runtime Complexity: O(n)
// The function also runs in linear time O(n) because the loop iterates n - 1 times to calculate Fibonacci values.
*/

/* Solution 2
function fib(n) {
    // If n is less than 2, return n (base cases for Fibonacci sequence).
    if (n < 2) {
        return n;
    }

    // Recursively compute the sum of the two previous Fibonacci numbers.
    return fib(n - 1) + fib(n - 2);
}

// Runtime Complexity: O(2^n)
// This solution has an exponential time complexity O(2^n) because each call to fib recursively calls two additional functions, leading to a large number of repeated calculations.
*/