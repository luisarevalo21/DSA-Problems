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
/*
alorithm is
set cur to head
loop outer with cur 
 inner loop checks does cur.next exists and does cur.next === cur.val
 if so change cur.next to cur.next.next
 loop again if next exists and next equals to cur 
 otherwise shift cur to the new cur.next can be 1 ahead of 5 depending on how many were deleted

 return the head as it'll be the new list without duplciates 
 Time O(N) as outer loops skips and inner loop deletes elements 
 Space O(1) as we using constant memory
*/
var removeElements = function (head, val) {
  let cur = head;
  let dummy = new ListNode(-1, head);
  let prev = dummy;

  while (cur) {
    while (cur && cur.val === val) {
      prev.next = cur.next;
      //   cur.next = cur.next.next;
    }
    cur = cur.next;
  }
  return dummy.next;
};
