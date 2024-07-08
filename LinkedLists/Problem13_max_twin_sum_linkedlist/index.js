/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 * find the mid point
 *  start of right to left.next
 * set left.next to null
 *
 * reverse the right side
 *
 * from there check left and right and calcute the largest
 * if its larger than my current update
 * otherwise ignore it
 * return the largest sum
 *
 */
var pairSum = function (head) {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let right = slow.next;
  slow.next = null;

  let prev = null;
  while (right) {
    const temp = right.next;
    right.next = prev;
    prev = right;
    right = temp;
  }

  let left = head;
  right = prev;
  let largest = 0;

  while (right) {
    const sum = left.val + right.val;
    if (sum > largest) {
      largest = sum;
    }
    left = left.next;
    right = right.next;
  }
  return largest;
};
