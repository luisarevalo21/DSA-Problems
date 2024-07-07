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
  let counter = 0;

  let lst1 = list1;
  let prev = null;
  let next = null;
  let lst2 = list2;

  while (counter < a) {
    prev = lst1;
    lst1 = lst1.next;
    counter++;
  }
  while (counter <= b) {
    next = lst1.next;
    lst1 = lst1.next;
    counter++;
  }
  prev.next = list2;

  while (list2.next !== null) {
    list2 = list2.next;
  }
  list2.next = next;

  return list1;
};
