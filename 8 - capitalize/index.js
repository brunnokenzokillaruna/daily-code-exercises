// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let finalPhrase = ""; //Initialize an empty string to store the final capitalized sentence.
    
    let arrayCap = str.split(' '); //Split the string into an array of words, using space as the delimiter.

    //Loop through each word in the array.
    for (let i = 0; i < arrayCap.length; i++) {
        let capitalizieFirstLetter = arrayCap[i]; //Get each word from the array.
        //Capitalize the first letter of each word and concatenate it with the rest of the word (using slice to get the rest of the word).
        arrayCap[i] = capitalizieFirstLetter[0].toUpperCase() + capitalizieFirstLetter.slice(1);
    }

    finalPhrase = arrayCap.join(' '); //oin the array of words back into a single string, separating each word with a space.

    return finalPhrase; //Return the final capitalized sentence.
}

module.exports = capitalize;

/* Solution 1
function capitalize(str) {
    const words = []; // 1 - Initialize an empty array to store the capitalized words.

    // 2 - Loop through each word in the string after splitting it by spaces.
    for (let word of str.split(' ')) {
        // 3 - Capitalize the first letter of each word and concatenate it with the rest of the word.
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    // 4 - Join the array of words back into a single string, separating each word with a space.
    return words.join(' ');
}

1 - Split the input string into an array of words, using space as the delimiter.
2 - Loop through each word in the array.
3 - Capitalize the first letter of each word, then concatenate it with the rest of the word.
4 - Add the capitalized word to the 'words' array.
5 - After the loop, join all words in the 'words' array into a single string, separating them by spaces.
6 - Return the final capitalized sentence.
*/