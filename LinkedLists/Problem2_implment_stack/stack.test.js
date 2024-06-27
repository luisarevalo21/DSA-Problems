const Stack = require("./stack.js");

describe("Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });

  test("test 1", () => {
    stack.push(1);
    console.assert(stack.getStack().length === 1, "Test Case 1 Failed");
    console.assert(stack.getStack()[0] === 1, "Test Case 1 Failed");
  });
  test("test 2", () => {
    stack = new Stack();
    stack.push(1);
    stack.pop();
    console.assert(stack.getStack().length === 0, "Test Case 2 Failed");
  });
  test("test 3", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    console.assert(stack.getStack().length === 3, "Test Case 3 Failed");
    console.assert(stack.getStack()[0] === 1, "Test Case 3 Failed");
    console.assert(stack.getStack()[1] === 2, "Test Case 3 Failed");
    console.assert(stack.getStack()[2] === 3, "Test Case 3 Failed");
  });
  test("test 4", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    console.assert(stack.getStack().length === 2, "Test Case 4 Failed");
    console.assert(stack.getStack()[1] === 2, "Test Case 4 Failed");
  });
  test("test 5", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.push(3);
    console.assert(stack.getStack().length === 2, "Test Case 5 Failed");
    console.assert(stack.getStack()[0] === 1, "Test Case 5 Failed");
    console.assert(stack.getStack()[1] === 3, "Test Case 5 Failed");
  });
  test("test 6", () => {
    stack = new Stack();
    stack.pop();
    console.assert(stack.getStack().length === 0, "Test Case 6 Failed");
  });
  test("test 7", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.pop();
    stack.pop();
    stack.pop();
    console.assert(stack.getStack().length === 0, "Test Case 7 Failed");
  });
  test("test 8", () => {
    stack = new Stack();
    stack.push(1);
    stack.push("two");
    stack.push({ three: 3 });
    console.assert(stack.getStack().length === 3, "Test Case 8 Failed");
    console.assert(stack.getStack()[0] === 1, "Test Case 8 Failed");
    console.assert(stack.getStack()[1] === "two", "Test Case 8 Failed");
    console.assert(JSON.stringify(stack.getStack()[2]) === JSON.stringify({ three: 3 }), "Test Case 8 Failed");
  });
  test("test 9", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    stack.push(3);
    stack.push(4);
    console.assert(stack.getStack().length === 2, "Test Case 9 Failed");
    console.assert(stack.getStack()[0] === 3, "Test Case 9 Failed");
    console.assert(stack.getStack()[1] === 4, "Test Case 9 Failed");
  });
  test("test 10", () => {
    stack = new Stack();
    stack.push(1);
    stack.pop();
    stack.push(2);
    console.assert(stack.getStack().length === 1, "Test Case 10 Failed");
    console.assert(stack.getStack()[0] === 2, "Test Case 10 Failed");
  });
  test("test 11", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.push(3);
    stack.pop();
    stack.pop();
    console.assert(stack.getStack().length === 0, "Test Case 12 Failed");
  });
  test("test 12", () => {
    stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.push(3);
    stack.pop();
    stack.pop();
    console.assert(stack.getStack().length === 0, "Test Case 12 Failed");
  });
});
