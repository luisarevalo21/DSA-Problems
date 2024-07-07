/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const map = new Map();

  let cur = head;

  while (cur) {
    if (map.has(cur)) {
      return true;
    }
    map.set(cur, 0);
    cur = cur.next;
  }
  return false;
};
