// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.data = []; // Initialize an empty array to hold the elements of the stack.
    }

    push(value) {
        // Add the value to the end of the array (top of the stack).
        this.data.push(value);
    }

    pop() {
        // Remove and return the value from the end of the array (top of the stack).
        return this.data.pop();
    }

    peek() {
        // Return the value at the end of the array (top of the stack) without removing it.
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
