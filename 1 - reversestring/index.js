// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var word = ""; // Initialize an empty string to store the reversed word.

    // Loop through the string starting from the last character to the first.
    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i]; // Add each character to the 'word' variable, effectively reversing the string.
    }

    return word; // Return the reversed string.
}

module.exports = reverse;

/* Solution 1
function reverse(str) {
    return str.split('').reverse().join('');
}
    1 - split method: Divides the string into an array of characters. The '' argument means each character of the string will be separated individually.
    2 - reverse method: Reverses the order of elements in the array.
    3 - join method: Joins the elements of the array back into a string. The '' argument means the elements will be joined without any separator.
*/

/* Solution 2
function reverse(str) {
    let reversed = '';

    for (let character of str) {
    reversed = character + reversed;
    }

    return reversed;
}
    1 - Initialize an empty string 'reversed' to store the reversed version of the input string.
    2 - for...of loop: Iterates over each character in the input string 'str'.
    3 - Add each character to the start of 'reversed': By placing the current character at the beginning of 'reversed', the string is reversed as you iterate.
    4 - Return the reversed string after the loop completes.
*/

/* Solution 3
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
    1 - split method: Divides the string into an array of characters.
    2 - reduce method: Iterates over each character in the array and accumulates a reversed string.
        - 'char + rev': Adds the current character to the beginning of the accumulated string.
        - '' as the initial value ensures the first character is correctly placed.
    3 - The final accumulated string 'rev' is returned as the reversed version of the original string.
*/