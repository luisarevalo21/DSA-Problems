/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(-1, head);
  let dummyPtr = dummy;
  let cur = head;
  let prev = dummyPtr;
  while (cur) {
    let first = cur;
    let second = cur.next;

    if (first && second) {
      //swap
      const temp = second;
      first.next = temp.next;
      second.next = first;
      prev.next = temp;
    }

    prev = cur;
    cur = cur.next;
  }
  return dummy.next;
};

const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
console.log(swapPairs(head)); // 2 -> 1 -> 4 -> 3
