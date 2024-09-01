// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    // Loop through numbers from 1 to n.
    for (let i = 1; i <= n; i++) {
        // If the number is divisible by both 3 and 5, print "fizzbuzz".
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        // If the number is divisible only by 3, print "fizz".
        } else if (i % 3 === 0) {
            console.log("fizz");
        // If the number is divisible only by 5, print "buzz".
        } else if (i % 5 === 0) {
            console.log("buzz");
        // If the number is not divisible by 3 or 5, print the number itself.
        } else {
            console.log(i);
        }
    }
}

module.exports = fizzBuzz;