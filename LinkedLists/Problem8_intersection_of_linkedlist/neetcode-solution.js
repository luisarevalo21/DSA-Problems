/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let left = headA;
  let right = headB;

  while (left !== right) {
    // if (left) {
    //   left = left.next;
    // } else left = headB;
    // if (right) {
    //   right = right.next;
    // } else right = headA;
    left = left ? left.next : headB;
    right = right ? right.next : headA;
  }
  return left;
};
