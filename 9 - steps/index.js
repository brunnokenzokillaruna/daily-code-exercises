// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 1; i <= n; i++) {
        let line = ""; // Initialize an empty string to build the step.

        // Add the '#' characters for the current step level.
        for (let hashtag = 1; hashtag <= i; hashtag++) {
            line += "#";
        }

        // Add the spaces to the right of the step.
        for (let spaces = 1; spaces <= (n - i); spaces++) {
            line += " ";
        }

        console.log(line); // Print the current step.
    }
}

module.exports = steps;

/* Solution 1
function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n; column++) {
            if (column <= row) {
                stair += '#';
            } else {
                stair += ' ';
            }
        }

        console.log(stair);
    }
}

1 - Loop through each row from 0 to n-1.
2 - Initialize an empty string `stair` to construct the step for the current row.
3 - Loop through each column from 0 to n-1.
4 - If the current column is less than or equal to the row, add `#`.
5 - Otherwise, add a space.
6 - Print the constructed step for the current row.
*/

/* Solution 2
function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        return steps(n, row + 1);
    }

    const add = stair.length <= row ? '#' : ' ';
    steps(n, row, stair + add);
}

1 - Check if the current row equals n. If so, stop the recursion (base case).
2 - If the length of the current step (stair) equals n, print the step and move to the next row.
3 - Determine whether to add a `#` or a space based on the current row and the length of the string.
4 - Recursively call the function to build the current step character by character.
5 - Continue the recursion, moving to the next row once the current step is fully built.
*/
