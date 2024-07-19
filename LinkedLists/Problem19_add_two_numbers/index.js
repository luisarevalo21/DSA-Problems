/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

/*

create string of both lists add them reverse via join then convert to a linkedlist 

*/
class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    let leftString = "";
    let rightString = "";

    let leftPtr = l1;
    let rightPtr = l2;

    const dummyNode = new ListNode(-1);
    let dummyPtr = dummyNode;
    while (leftPtr) {
      leftString += leftPtr.val;
      leftPtr = leftPtr.next;
    }
    while (rightPtr) {
      rightString += rightPtr.val;
      rightPtr = rightPtr.next;
    }

    const reversedLeftString = leftString.split(" ").reverse().join(" ");
    const reversedRightString = rightString.split(" ").reverse().join(" ");

    //reveres strings
    //add them
    //then reverser them again
    const total = Number(reversedLeftString) + Number(reversedRightString);
    const totalStr = total.toString().split("").reverse().join("");

    let i = 0;

    while (i < totalStr.length) {
      console.log("total string", totalStr[i]);
      const newNode = new ListNode(totalStr[i]);
      dummyPtr.next = newNode;
      dummyPtr = dummyPtr.next;
      i++;
    }
    return dummyNode.next;
  }
  //   const dummy = new ListNode(-1);
  //   let dummyPtr = dummy;
  //   let left = l1;
  //   let right = l2;

  //   while (left) {
  //     const newNode = new ListNode(left.val + right.val);
  //     dummyPtr.next = newNode;
  //     dummyPtr = dummyPtr.next;
  //     left = left.next;
  //     right = right.next;
  //   }
  //   return dummy.next;
  // }
}
