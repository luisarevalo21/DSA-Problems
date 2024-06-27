//dynamic array
// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   pop() {
//     if (this.stack.length === 0) {
//       return null;
//     }
//     return this.stack.pop();
//   }
//   push(val) {
//     this.stack.push(val);
//   }
// }

//linkedlist
const LinkedList = require("../Problem1_design_linkedlist/LinkedList.js");

class Stack {
  constructor() {
    this.stack = new LinkedList();
  }

  pop() {
    if (this.stack.getValues().length === 0) {
      return null;
    }

    const index = this.stack.getValues().length - 1;
    if (this.stack.remove(index)) {
      return true;
    }
    // if (this.stack.length === 0) {
    //   return null;
    // }
    // return this.stack.pop();
  }
  push(val) {
    this.stack.insertTail(val);
    // this.stack.push(val);
  }
  getStack() {
    return this.stack.getValues();
  }
}

const myStack = new Stack();

console.log("stack", myStack);
module.exports = Stack;
