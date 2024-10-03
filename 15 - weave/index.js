// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
    const thirdQueue = new Queue(); // Initialize a new queue to hold the combined elements.

    // Continue looping while there are elements in either sourceOne or sourceTwo.
    while (sourceOne.peek() || sourceTwo.peek()) {

        // If sourceOne has elements, remove the first one and add it to thirdQueue.
        if (sourceOne.peek()) {
            thirdQueue.add(sourceOne.remove());
        }

        // If sourceTwo has elements, remove the first one and add it to thirdQueue.
        if (sourceTwo.peek()) {
            thirdQueue.add(sourceTwo.remove());
        }
    }

    // Return the new queue containing the alternated elements from both sourceOne and sourceTwo.
    return thirdQueue;
}

module.exports = weave;