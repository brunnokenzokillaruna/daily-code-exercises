// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}; // Initialize an empty object to store character counts.
    let max = 0; // Initialize a variable to track the highest count found.
    let maxChar = ""; // Initialize a variable to store the character with the highest count.

    // Loop through each character in the string.
    for (let char of str) {
        // If the character is not in the object, add it with a count of 1.
        if (!chars[char]) {
            chars[char] = 1;
        } else {
            // If the character is already in the object, increment its count.
            chars[char]++;
        }
    }

    // Loop through the characters in the object to find the one with the highest count.
    for (let char in chars) {
        // If the current character's count is greater than the max found so far,
        // update max and maxChar with the current character's count and the character itself.
        if (chars[char] > max) {
            max = chars[char];
            maxChar = char;
        }
    }

    return maxChar; // Return the character with the highest count.
}

module.exports = maxChar;


/* Solution 1
function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = "";

    for (let char of str) {
        if (charMap[char]) {
        charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}
    1 - Initialize an empty object to store character counts.
    2 - Initialize a variable to track the highest count found.
    3 - Initialize a variable to store the character with the highest count.
    4 - Loop through each character in the string.
    5 - If the character is already in charMap, increment its count.
    6 - If the character is not in charMap, add it with a count of 1.
    7 - Loop through the keys (characters) in charMap to find the one with the highest count.
    8 - If the current character's count is greater than the max count found so far, update max with the current count and maxChar with the current character.
    9 - Return the character with the highest count.
*/