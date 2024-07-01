/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * Given the head of a singly linked list, return true if it is a palindrome.
 * brute force solution
 * iterate through list and store values in an array
 * then check if the array is a palindrome
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 */
var isPalindrome = function (head) {
  const storedArray = [];

  while (head !== null) {
    storedArray.push(head);
    head = head.next;
  }

  let start = 0;
  let end = storedArray.length - 1;

  while (start <= end) {
    if (storedArray[start].val === storedArray[end].val) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

/*

Follow up: Could you do it in O(n) time and O(1) space?


*/

var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  //get to middle
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  //reverse linkedlist

  prev = null;
  while (slow) {
    const temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (prev) {
    if (prev.val !== head.val) {
      return false;
    }
    prev = prev.next;
    head = head.next;
  }
  return true;

  // //slow will be at middle
  // //prev will have the reversed list

  // while (prev && slow) {
  //   if (prev.val !== slow.val) {
  //     return false;
  //   }
  //   prev = prev.next;
  //   slow = slow.next;
  // }

  // return true;
};
