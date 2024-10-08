// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    constructor() {
        this.stack1 = new Stack(); // Stack to hold the elements as they are added.
        this.stack2 = new Stack(); // Stack to hold the elements in reverse order for removal.
    }

    // Add an element to the queue by pushing it onto stack1
    add(record) {
        this.stack1.push(record);
    }

    // Remove the first element that was added to the queue
    remove() {
        // If stack2 is empty, move all elements from stack1 to stack2
        if (!this.stack2.peek()) {
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // Pop the element from stack2, which is the first element added to the queue
        return this.stack2.pop();
    }

    // Peek at the first element that was added to the queue
    peek() {
        // If stack2 is empty, move all elements from stack1 to stack2
        if (!this.stack2.peek()) {
            while (this.stack1.peek()) {
                this.stack2.push(this.stack1.pop());
            }
        }

        // Return the element at the top of stack2 (without removing it)
        return this.stack2.peek();
    }
}

module.exports = Queue;