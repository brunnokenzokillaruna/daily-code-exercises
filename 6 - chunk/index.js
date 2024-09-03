// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    // Initialize an empty array to store the subarrays
    const bigArray = [];
    
    // Initialize an index variable to track the current position in the array
    let index = 0;

    // Loop through the array until the index reaches the end of the array
    while (index < array.length) {
        // Create a subarray using slice from the current index to index + size
        const subArray = array.slice(index, index + size);
        
        // Add the subarray to the bigArray
        bigArray.push(subArray);
        
        // Move the index forward by the size to get the next chunk
        index += size;
    }

    // Return the array containing all the subarrays
    return bigArray;
}

module.exports = chunk;

/* Solution 1
function chunk(array, size) {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1]

        if (!last || last.length === size) {
            chunked.push([element]);
        } else {
            last.push(element);
        }
    }

    return chunked;
}
    1 - Initialize an empty array `chunked` to store the subarrays.
    2 - Loop through each element in the original array.
    3 - Get the last subarray in `chunked` (or `undefined` if `chunked` is empty).
    4 - If `last` does not exist (meaning `chunked` is empty) or if `last` has reached the desired size:
        - a) Create a new subarray with the current element and add it to `chunked`.
    5 - If `last` exists and has not yet reached the desired size:
        - a) Add the current element to the last subarray.
    6 - Continue this process until all elements are processed, then return the array `chunked` containing all the subarrays.
*/

/* Solution 2
function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }

    return chunked;
}

1 - Initialize an empty array to store the subarrays.
2 - Initialize an index variable to track the current position in the array.
3 - Loop until the index reaches the length of the array.
4 - Use slice to create a subarray from the current index to index + size, then push it into the chunked array.
5 - Increment the index by the size to move to the next chunk.
6 - Return the array containing all the subarrays.
*/