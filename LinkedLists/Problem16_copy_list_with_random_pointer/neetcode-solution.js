// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

/*
first pass 
create the hash map 
odl => new list node 
//second pass create the linekd list 
by iterating through the map 
and setting the random
my solution 
i use a dummy node 
*/
class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    let cur = head;
    let map = new Map();
    while (cur) {
      map.set(cur, new ListNode(cur.val, null));
      cur = cur.next;
    }

    let dummy = new ListNode(-1);
    let dummyPtr = dummy;
    cur = head;
    while (cur) {
      const node = map.get(cur);
      dummyPtr.next = map.get(cur);
      const randomNode = cur.get(cur.random);
      node.random = randomNode;
      dummyPtr = node;
    }

    return dummy.next;
  }
}

// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }
class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  // his solution uses the new node as we are setting the next poitners
  //anyways so we can return the map.get(head) since its already set
  copyRandomList(head) {
    let cur = head;
    let map = new Map();
    while (cur) {
      map.set(cur, new Node(cur.val, null));
      cur = cur.next;
    }

    cur = head;
    while (cur) {
      const node = map.get(cur);
      node.next = map.get(cur.next);
      node.random = map.get(cur.random);
      cur = cur.next;
    }

    return map.get(head);
  }
}
