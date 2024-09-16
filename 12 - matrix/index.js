// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let array = []; // Initialize an empty array to hold the NxN matrix.

    // Loop to create 'n' empty subarrays (rows) within the 'array'.
    for (let i = 0; i < n; i++) {
        array.push([]);
    }

    // Initialize the limits for the spiral traversal of the matrix.
    let topRow = 0;
    let bottomRow = n - 1;
    let leftColumn = 0;
    let rightColumn = n - 1;

    let counter = 1; // Initialize a counter to fill the matrix with numbers.

    // Continue looping until the top and bottom rows, and the left and right columns meet.
    while (topRow <= bottomRow && leftColumn <= rightColumn) {
        
        // Fill the top row from left to right.
        for (let i = leftColumn; i <= rightColumn; i++) {
            array[topRow][i] = counter;
            counter++;
        }
        topRow++; // Move the top boundary down.

        // Fill the right column from top to bottom.
        for (let i = topRow; i <= bottomRow; i++) {
            array[i][rightColumn] = counter;
            counter++;
        }
        rightColumn--; // Move the right boundary left.

        // Fill the bottom row from right to left (only if topRow <= bottomRow).
        if (topRow <= bottomRow) {
            for (let i = rightColumn; i >= leftColumn; i--) {
                array[bottomRow][i] = counter;
                counter++;
            }
            bottomRow--; // Move the bottom boundary up.
        }

        // Fill the left column from bottom to top (only if leftColumn <= rightColumn).
        if (leftColumn <= rightColumn) {
            for (let i = bottomRow; i >= topRow; i--) {
                array[i][leftColumn] = counter;
                counter++;
            }
            leftColumn++; // Move the left boundary right.
        }
    }

    return array; // Return the fully populated NxN matrix.
}

module.exports = matrix;

/* Solution 1
function matrix(n) {
    const results = [];

    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return results;
}

1 - Initialize an empty NxN matrix `results`.
2 - Define variables to track the boundaries (start and end rows/columns).
3 - Start a loop that continues as long as the boundaries do not overlap.
4 - Fill the top row from left to right, then move the top boundary down.
5 - Fill the right column from top to bottom, then move the right boundary left.
6 - Fill the bottom row from right to left, then move the bottom boundary up.
7 - Fill the left column from bottom to top, then move the left boundary right.
8 - Continue until the matrix is fully filled, then return the final matrix.
*/