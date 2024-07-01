/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

/**
 * @param {ListNode} head
 * @return {ListNode}
 * brute force
 * iterate through list and add to an array.
 * convert to a map which will sort it
 * iterate again the recreate the linkedlist return the head
 */
// var deleteDuplicates = function (head) {
//   const dummy = new ListNode(-1, head);
//   let prev = dummy;
//   let cur = head;
//   const map = new Map();

//   while (cur) {
//     if (!map.has(cur.val)) {
//       map.set(cur.val, 1);
//       prev = cur;
//     } else {
//       prev.next = cur.next;
//     }
//     cur = cur.next;
//   }
//   return dummy.next;
// };

// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(1);

// node1.next = node2;
// node2.next = node3;

// console.log(deleteDuplicates(node1));
