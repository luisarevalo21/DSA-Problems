/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * find the left pointer
 * save another pointer to it.
 * start another pointer at the start
 * iterate unitl right is at the end right.next is not null
 * the new pointer will be equal distance as the left pointer since k-1 was used to find the first one
 * swap and return the head
 * ..my solution
 */
var swapNodes = function (head, k) {
  let i = 0;
  let left = head;
  while (i < k - 1) {
    left = left.next;
    i++;
  }

  let right = left;
  let secondNode = head;

  while (right.next) {
    right = right.next;
    secondNode = secondNode.next;
  }

  const temp = left.val;
  left.val = secondNode.val;
  secondNode.val = temp;
  return head;
};

var swapNodes = function (head, k) {
  let i = 0;
  let cur = head;
  while (i < k - 1) {
    cur = cur.next;
    i++;
  }

  //saves left to cur here
  let left = cur;
  let right = head;

  while (cur.next) {
    cur = cur.next;
    right = right.next;
  }

  const temp = left.val;
  left.val = right.val;
  right.val = temp;
  return head;
};
