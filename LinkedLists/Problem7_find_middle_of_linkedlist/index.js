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
 * algorithm
 * 2 pointers
 * one slow and one fast
 * intiialize both at the head
 * while fast and fast.next exist
 * move pointers
 * slow by one and fast by 2
 * return slow as it'll be at the middle
 */
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
