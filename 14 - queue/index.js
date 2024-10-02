// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.data = []; // Initialize an empty array to hold the elements of the queue.
    }

    add(value) {
        // Add the value to the start of the array (beginning of the queue).
        this.data.unshift(value);
    }

    remove() {
        // Remove and return the value from the end of the array (end of the queue).
        return this.data.pop();
    }
}

module.exports = Queue;
