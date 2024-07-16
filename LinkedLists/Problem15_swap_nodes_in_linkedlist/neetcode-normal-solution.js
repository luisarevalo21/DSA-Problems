/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let cur = head;
  let left = head;
  let length = 0;
  let i = 0;
  while (i < k - 1) {
    left = left.next;
    length++;
    i++;
  }

  cur = left;
  while (cur) {
    length++;
    cur = cur.next;
  }

  i = 0;
  let right = head;
  while (i < length - k) {
    right = right.next;
    i++;
  }

  const temp = left.val;
  left.val = right.val;
  right.val = temp;
  return head;
  //   console.log("length", right);
  //left hasa the left node
};

// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log(swapNodes(node1, 2));
