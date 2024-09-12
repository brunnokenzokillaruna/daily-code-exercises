// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    // Loop through each row from 1 to n (representing the pyramid's height).
    for (let i = 1; i <= n; i++) {
        let line = ""; // Initialize an empty string to construct the current row.

        // Loop through each column from 1 to (2 * n - 1), which defines the width of the pyramid.
        for (let hashtag = 1; hashtag <= (2 * n - 1); hashtag++) {
            // Add '#' if the current column falls within the range that should have a block.
            // Add spaces otherwise to balance the pyramid structure.
            if (hashtag >= (n - i + 1) && hashtag <= (n + i - 1)) {
                line += "#";
            } else {
                line += " ";
            }
        }

        console.log(line); // Print the constructed row (the current level of the pyramid).
    }
}

module.exports = pyramid;

/* Solution 1
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = '';

        for (let column = 0; column < 2 * n - 1; column++) {
            if (midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        
        console.log(level);
    }
}

1 - Calculate the midpoint of each row based on the total width (`2 * n - 1`).
2 - Loop through each row from 0 to n-1.
3 - Initialize an empty string `level` to construct the row.
4 - Loop through each column from 0 to `2 * n - 1`.
5 - Add '#' if the current column is within the range between `midpoint - row` and `midpoint + row`.
6 - Add a space if the current column is outside this range.
7 - After constructing the row, print the `level`.
*/

/* Solution 2
function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level + add);
}

1 - Base case: If the current row equals `n`, stop the recursion.
2 - Check if the current row (`level`) has reached the required length (`2 * n - 1`).
3 - If the row is complete, print it and recursively move to the next row.
4 - Calculate the midpoint based on the total width of the pyramid (`2 * n - 1`).
5 - Determine whether to add a `#` or a space to the current level based on the midpoint.
6 - Recursively call the function to continue building the current row.
7 - Once the row is complete, move to the next row.
*/