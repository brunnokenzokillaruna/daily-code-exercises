// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversedString = n.toString().split('').reverse().join('');

    const reversedNumber = parseInt(reversedString);

    return Math.sign(n) * reversedNumber;
}

module.exports = reverseInt;

/* Solution 1
function reverseInt(n) {
    const reversed = n.toString().split('').reverse().join('');

    return parseInt(reversed) * Math.sign(n);
}
    1 - Convert the integer to a string, split it into an array of characters, reverse the array, and join it back into a string.
    2 - parseInt(reversed): Convert the reversed string back into an integer.
    3 - Math.sign(n): Determine the sign of the original integer (positive, negative, or zero).
    4 - Multiply the reversed integer by the sign of the original integer to ensure the correct sign in the result.
    5 - Return the final reversed integer with the correct sign.
*/