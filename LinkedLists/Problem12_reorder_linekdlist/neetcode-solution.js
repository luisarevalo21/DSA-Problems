/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Solution {
  /**
   * @param {ListNode} head
   * @return {void}
   * get middle
   * set right start by left.next
   * then set left enxt to null
   *
   * reverse the second half
   * combine them
   *
   */
  reorderList(head) {
    let slow = head;
    let fast = head.next;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let rightHalf = slow.next;
    slow.next = null;

    let prev = null;
    while (rightHalf) {
      const temp = rightHalf.next;
      rightHalf.next = prev;
      prev = rightHalf;
      rightHalf = temp;
    }

    //right half is the reversed now, stored in prev

    let cur = head;

    while (prev) {
      const temp1 = cur.next;
      const temp2 = prev.next;
      cur.next = prev;
      prev.next = temp1;
      cur = temp1;
      prev = temp2;
    }
    // console.log("head", head.next);
  }
}

const node1 = new ListNode(2);
const node2 = new ListNode(4);
const node3 = new ListNode(6);
const node4 = new ListNode(8);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const s = new Solution();
console.log(s.reorderList(node1));
