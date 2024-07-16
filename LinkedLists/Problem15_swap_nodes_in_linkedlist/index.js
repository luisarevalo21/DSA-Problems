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
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * count up to k
 * if count = k save the node
 * count again up to then swap the current node with saved node return the head
 */
var swapNodes = function (head, k) {
  //   let dummy = new ListNode(-1, head);

  //   let counter = 1;
  //   let cur = head;
  //   let savedNode = null;
  //   while (cur) {
  //     if (counter === k) {
  //       savedNode = cur;
  //       counter = 0;
  //     }
  //     counter++;
  //     cur = cur.next;
  //   }

  const arr = [-1];

  let cur = head;

  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }

  let temp = arr[k];
  arr[k] = arr[arr.length - k];
  arr[arr.length - k] = temp;

  console.log("arr", arr);
  // const temp = left;
  // left = right;
  // right = temp;
  // console.log("arr", arr);
  // console.log("right", right);
  // const temp = arr[k];
  // arr[k] = arr[k + k];
  // arr[k + k] = temp;

  let dummy = new ListNode(-1);
  cur = dummy;

  for (let i = 1; i < arr.length; i++) {
    const node = new ListNode(arr[i].val);
    cur.next = node;
    cur = node;
  }
  return dummy.next;
};

// [7, 9, 6, 6, 7, 8, 3, 0, 9, 5];

const node1 = new ListNode(7);
const node2 = new ListNode(9);
const node3 = new ListNode(6);
const node4 = new ListNode(6);
const node5 = new ListNode(7);
const node6 = new ListNode(8);
const node7 = new ListNode(3);
const node8 = new ListNode(0);
const node9 = new ListNode(9);
const node10 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;

swapNodes(node1, 5);
