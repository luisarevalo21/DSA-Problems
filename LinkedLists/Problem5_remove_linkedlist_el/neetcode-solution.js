/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * creat dummy node
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(-1, head);
  let cur = head;
  let prev = dummy;

  while (cur) {
    const next = cur.next;
    if (cur.val === val) {
      prev.next = next;
    } else {
      prev = cur;
    }
    cur = next;
  }
  return dummy.next;
};
