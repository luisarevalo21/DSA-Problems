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
  const reverse = head => {
    let prev = null;
    let cur = head;
    while (cur) {
      const temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    return prev;
  };

  let newHead = reverse(head);
  let cur = newHead;

  let largest = cur.val;

  while (cur.next) {
    if (cur.next.val >= largest) {
      largest = cur.next.val;
      cur = cur.next;
    } else {
      cur.next = cur.next.next;
    }
  }
  return reverse(newHead);
};
