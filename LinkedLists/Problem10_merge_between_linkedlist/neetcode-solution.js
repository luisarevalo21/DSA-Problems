/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let cur = list1;
  let counter = 0;

  while (counter < a - 1) {
    cur = cur.next;
    counter++;
  }

  let head = cur;

  while (counter <= b) {
    cur = cur.next;
    counter++;
  }
  head.next = list2;

  while (list2.next) {
    list2 = list2.next;
  }
  list2.next = cur;

  return list1;
};
