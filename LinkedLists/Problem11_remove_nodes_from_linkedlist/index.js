/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function (head) {
  let cur = head;
  let reverseOrder = null;
  let prev = null;

  while (cur) {
    const temp = cur.next;
    cur.next = reverseOrder;
    reverseOrder = cur;
    cur = temp;
  }
  let largest = new ListNode(-1);

  //iterate through reverse order
  //if cur is larger than my cur largest
  //reasisgn it to largest

  while (reverseOrder) {
    if (reverseOrder.val >= largest.val) {
      if (reverseOrder.val === 13) {
      }
      const next = reverseOrder.next;
      largest = reverseOrder;
      largest.next = prev;
      prev = reverseOrder;

      reverseOrder = next;
    } else {
      reverseOrder = reverseOrder.next;
    }
  }
  return largest;
};
