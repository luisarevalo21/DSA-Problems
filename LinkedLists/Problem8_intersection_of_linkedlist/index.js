/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * brute force
 */

// hashmap solution
var getIntersectionNode = function (headA, headB) {
  const map = new Map();

  let cur = headA;
  while (cur) {
    if (!map.has(cur)) {
      map.set(cur, 0);
    }
    cur = cur.next;
  }

  let curRight = headB;
  while (curRight) {
    if (map.has(curRight)) {
      return curRight;
    }
    curRight = curRight.next;
  }
  return null;
};

// Array solution
var getIntersectionNode = function (headA, headB) {
  const left = [];
  const right = [];

  let leftPtr = headA;
  let rightPtr = headB;

  while (leftPtr) {
    left.push(leftPtr);
    leftPtr = leftPtr.next;
  }
  while (rightPtr) {
    right.push(rightPtr);
    rightPtr = rightPtr.next;
  }

  for (let i = 0; i < left.length; i++) {
    for (let j = 0; j < right.length; j++) {
      console.log(left[i], right[j]);
      if (left[i] === right[j]) {
        return left[i];
      }
    }
  }
  return null;
};
