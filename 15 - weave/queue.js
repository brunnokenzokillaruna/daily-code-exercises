// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor() {
    this.data = []; // Initialize an empty array to hold the elements of the queue.
  }

  add(record) {
    // Add the record to the start of the array (beginning of the queue).
    this.data.unshift(record);
  }

  remove() {
    // Remove and return the value from the end of the array (end of the queue, next to be removed).
    return this.data.pop();
  }

  peek() {
    // Return the last element (next to be removed) from the end of the array without removing it.
    return this.data[this.data.length - 1];
  }
}

module.exports = Queue;
