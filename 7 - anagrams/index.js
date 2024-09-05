// --- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // Remove all non-word characters (punctuation, etc.) and spaces, convert to lowercase, split into an array of characters, sort the array, and join back into a string for stringA.
    let string1 = stringA.replace(/[^\w]|_/g, "").replace(/\s+/g, "").toLowerCase().split('').sort().join('');
    
    // Repeat the same process for stringB: remove non-word characters, convert to lowercase, split, sort, and join into a string.
    let string2 = stringB.replace(/[^\w]|_/g, "").replace(/\s+/g, "").toLowerCase().split('').sort().join('');

    // If the two processed strings are equal, return true (they are anagrams).
    if (string1 === string2) {
        return true;
    // Otherwise, return false (they are not anagrams).
    } else {
        return false;
    }
}

module.exports = anagrams;

/* Solution 1
function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }

    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

1 - Call buildCharMap for stringA to create a character map for it.
2 - Call buildCharMap for stringB to create a character map for it.
3 - Compare the number of keys (unique characters) in both maps. If they are different, return false (they are not anagrams).
4 - Loop through each character in the character map of stringA.
5 - Compare the count of each character in both maps. If any count is different, return false (they are not anagrams).
6 - If all characters have the same count, return true (they are anagrams).

7 - Initialize an empty object to store character counts for the given string.
8 - Loop through each character of the cleaned-up string (convert to lowercase and remove non-alphanumeric characters).
9 - For each character, add 1 to its count in the charMap or set it to 1 if it's the first occurrence.
10 - Return the charMap, which contains the counts of each character in the string.
*/

/* Solution 2
function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

1 - The function anagrams takes two strings as input and checks if they are anagrams.
2 - The cleanString function is called on both stringA and stringB to clean and process the strings.
3 - The cleanString function removes all non-alphanumeric characters from the string using the replace method with a regex pattern.
4 - It converts the cleaned string to lowercase to ensure case insensitivity.
5 - The string is split into an array of individual characters using split('').
6 - The array of characters is sorted in alphabetical order using sort().
7 - The sorted array is joined back into a string using join('').
8 - In the anagrams function, the cleaned and sorted versions of stringA and stringB are compared.
9 - If the cleaned strings are identical, the function returns true, meaning the strings are anagrams.
10 - If the cleaned strings are not identical, the function returns false, meaning the strings are not anagrams.
*/
