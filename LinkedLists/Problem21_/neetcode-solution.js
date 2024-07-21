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
var swapPairs = function (head) {
  const dummy = new ListNode(-1, head);

  let cur = head;
  let prev = dummy;

  while (cur && cur.next) {
    let next = cur.next.next;
    let first = cur;
    let second = cur.next;

    prev.next = second;
    second.next = first;
    first.next = next;

    prev = cur;
    cur = next;
  }
  return dummy.next;
};
