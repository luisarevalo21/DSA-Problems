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
 */
var removeElements = function (head, val) {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let cur = head;
  prev = dummy;

  while (cur) {
    if (cur.val === val) {
      prev.next = cur.next;
      cur = cur.next;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  return dummy.next;
};

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @return {ListNode}
//  */
// var removeElements = function (head, val) {
//   let prev = head;
//   let cur = head;

//   while (cur) {
//     if (cur.val === val) {
//       console.log(prev);
//       prev.next = cur.next;
//       cur = cur.next;
//     } else {
//       prev = cur;
//       cur = cur.next;
//     }
//   }
//   if (prev.val === val) {
//     return null;
//   }
//   return head;
// };

// // Create a linked list with elements 7,7,7,7
// // const node1 = new ListNode(1);
// // const node2 = new ListNode(2);
// // const node3 = new ListNode(6);
// // const node4 = new ListNode(3);
// // const node5 = new ListNode(4);
// // const node6 = new ListNode(5);
// // const node7 = new ListNode(6);

// // node1.next = node2;
// // node2.next = node3;
// // node3.next = node4;
// // node4.next = node5;
// // node5.next = node6;
// // node6.next = node7;

// // const node1 = new ListNode(7);
// // const node2 = new ListNode(7);
// // const node3 = new ListNode(7);
// // const node4 = new ListNode(7);

// // node1.next = node2;
// // node2.next = node3;
// // node3.next = node4;

// const node1 = new ListNode();
// // const node2 = new ListNode();
// // const node3 = new ListNode(7);
// // const node4 = new ListNode(7);

// // node1.next = node2;
// // node2.next = node3;
// // node3.next = node4;

// // Call the removeElements function with the created linked list
// const result = removeElements(node1, 1);
// console.log(result);
