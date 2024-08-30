// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reversed = ""; // Initialize an empty string to store the reversed version of the input string.

    // Loop through each character in the input string.
    for (let character of str) {
        // Prepend each character to the 'reversed' string to build it in reverse order.
        reversed = character + reversed;
    }

    // Compare the reversed string with the original string.
    if (reversed === str) {
        return true; // If they are the same, the string is a palindrome, so return true.
    }
    else {
        return false; // If they are not the same, the string is not a palindrome, so return false.
    }
}

module.exports = palindrome;

/* Solution 1
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    
    return str === reversed;
}
    1 - split method: Converts the string into an array of characters.
    2 - reverse method: Reverses the order of the elements in the array.
    3 - join method: Combines the array of characters back into a single string.
    4 - Return true if the original string is strictly equal to the reversed string (checks both value and type).
*/

/* Solution 2
function palindrome(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}
    1 - split method: Converts the string into an array of characters.
    2 - every method: Iterates over each character in the array, checking a condition.
    3 - Comparison: For each character, compares it to the corresponding character from the end of the string (str[str.length - i - 1]).
    4 - Return true if all characters match their corresponding character from the end of the string, meaning the string is a palindrome.
*/