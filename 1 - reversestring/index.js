// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var word = "";

    for (let i = str.length - 1; i >= 0; i--) {
        word += str[i];
    }

    return word;
}

/* Best approach
function reverse(str) {
    return str.split('').reverse().join('');
}
    1 - split method: Divides the string into an array of characters. The '' argument means each character of the string will be separated individually.
    2 - reverse method: Reverses the order of elements in the array.
    3 - join method: Joins the elements of the array back into a string. The '' argument means the elements will be joined without any separator.
*/

module.exports = reverse;
