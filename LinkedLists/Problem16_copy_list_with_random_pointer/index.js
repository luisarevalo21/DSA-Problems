/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 *iterate through list 
 check if the node is in my map or notm 
 if it is get the new node created 
 and set it in my new list 
 if its not 
 const newNode = new Node()
 add it va old node => newNode
 add it to my list
 * 

 check random nodes
 if random node is in map

 if its not in the map
 create it in the map 
 old Node => new Node 
 newNode.random = newNode
 create it new Node 
 old node =>new node 
 set newNode.random => newRandomNode
 * 
 *
 * return dummy.next
 *
 */

function ListNode(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function (head) {
  const map = new Map();
  const dummy = new ListNode(-1, head);
  let dummyPtr = dummy;
  let cur = head;

  while (cur) {
    let newNode = null;

    if (map.has(cur)) {
      newNode = map.get(cur);
      dummyPtr.next = newNode;
      dummyPtr = newNode;
    } else {
      newNode = new ListNode(cur.val, null);
      map.set(cur, newNode);
      dummyPtr.next = newNode;
      dummyPtr = newNode;
    }

    //check if the cur.random is in my map
    // will be a structure of old node = new node

    //if its not in the map
    // add it
    // the same way as cur value
    //
    if (cur.random !== null) {
      //   if (map.has(cur.random)) {
      //     const newNodeInMap = map.get(cur);
      //     if (cur.random.val === 7) {
      //       console.log("new node", newNodeInMap);
      //     }
      //     newNode.random = newNodeInMap;
      //   } else {
      //     const newRandomNode = new ListNode(cur.random.val, null);
      //     map.set(cur.random, newRandomNode);
      //     newNode.random = newRandomNode;
      //   }

      //if its in the map
      //get it
      if (map.has(cur.random)) {
        const newNodeInMap = map.get(cur.random);
        newNode.random = newNodeInMap;
      } else {
        const newNodeInMap = new ListNode(cur.random.val, null);
        map.set(cur, newNodeInMap);
        newNode.random = newNodeInMap;
      }
    }
    cur = cur.next;
  }

  return dummy.next;
};

const node1 = new ListNode(7);
const node2 = new ListNode(13);
const node3 = new ListNode(11);
const node4 = new ListNode(10);
const node5 = new ListNode(1);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node1.random = null;
node2.random = node1;
node3.random = node5;
node4.random = node3;
node5.random = node1;

copyRandomList(node1);
