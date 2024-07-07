/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 *
 *
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 * iterate through linked list
 * check if i should pop
 * i pop if the top of the stack is smaller than the current
 * pop until the value is no longer smaller than the current
 * add the stack
 *
 * if i dont pop just add the value as it is smaller than the top of the stack
 *
 * convert stack to linkedlist return it and create  dummy node to point to the stack
 *
 */
var removeNodes = function (head) {
  const dummy = new ListNode(-1);
  let cur = head;
  const stack = [];
  while (cur) {
    while (stack.length > 0 && stack[stack.length - 1] < cur.val) {
      stack.pop();
    }

    stack.push(cur.val);
    cur = cur.next;
  }

  cur = dummy;
  for (let i = 0; i < stack.length; i++) {
    cur.next = new ListNode(stack[i]);
    cur = cur.next;
  }

  return dummy.next;
};

const node1 = new ListNode(5);
const node2 = new ListNode(2);
const node3 = new ListNode(13);
const node4 = new ListNode(3);
const node5 = new ListNode(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

console.log(removeNodes(node1));
