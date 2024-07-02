/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let curLeft = headA;
  let curRight = headB;

  while (curLeft || curRight) {
    if (curLeft === curRight) {
      return curLeft;
    }
    if (curLeft === null) {
      curLeft = headB;
    } else if (curRight === null) {
      curRight = headA;
    }
    curLeft = curLeft.next;
    curRight = curRight.next;
  }
  return null;
};
