/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {number}
 * find the mid point
 * as i'm iterating reveser the left side until the mid point
 * mid will be the right side.
 * once i have the mid left will start left of mid and mid will be at the mid point
 * now i can iterate left in reverse and right in the correct order and find the max sum of the values
 * return the largest
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast && fast.next) {
    fast = fast.next.next;
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  let middle = slow;
  let left = prev;
  let largest = 0;
  while (left && middle) {
    const sum = left.val + middle.val;
    if (sum > largest) {
      largest = sum;
    }
    left = left.next;
    middle = middle.next;
  }
  return largest;
};

const node1 = new ListNode(5);
const node2 = new ListNode(4);
const node3 = new ListNode(2);
const node4 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(pairSum(node1));
