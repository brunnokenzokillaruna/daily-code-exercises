// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const vowelsArray = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']; // Array containing both uppercase and lowercase vowels.
    let vowelFound = 0; // Initialize a counter to track the number of vowels found.

    // Loop through each character in the string.
    for (let char of str) {
        // Loop through the array of vowels to check if the current character is a vowel.
        for (let vowel of vowelsArray) {
            if (vowel === char) {
                vowelFound++; // Increment the counter if a vowel is found.
            }
        }
    }

    return vowelFound; // Return the total number of vowels found.
}

module.exports = vowels;

/* Solution 1
function vowels(str) {
    let count = 0;
    const checker = "aeiou";

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

1 - Define a string `checker` containing all the vowels in lowercase.
2 - Convert the input string to lowercase and loop through each character.
3 - For each character, check if it is a vowel using the `includes` method.
4 - Increment the vowel count if a match is found.
5 - After the loop, return the total count of vowels.
*/

/* Solution 2
function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

1 - Use the `match` method with a regular expression to search for all vowels in the string (both uppercase and lowercase).
2 - The regular expression `/[aeiou]/gi` matches any of the vowels, ignoring case (`i` flag).
3 - If matches are found, return the length of the resulting array, which corresponds to the number of vowels.
4 - If no vowels are found, return 0.
*/