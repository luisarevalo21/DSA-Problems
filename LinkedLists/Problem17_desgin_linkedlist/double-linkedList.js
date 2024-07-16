class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
var MyLinkedList = function () {
  this.left = new Node(-1);
  this.right = new Node(-1);
  this.left.next = this.right;
  this.right.prev = this.left;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.left.next;

  while (cur && index > 0) {
    index--;
    cur = cur.next;
  }
  if (cur && index === 0 && cur !== this.right) {
    return cur.val;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let cur = this.left;
  const next = cur.next;
  const newNode = new Node(val);

  cur.next = newNode;
  newNode.prev = cur;
  newNode.next = next;
  next.prev = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let cur = this.right;
  const prev = cur.prev;
  const newNode = new Node(val);

  prev.next = newNode;
  newNode.prev = prev;
  newNode.next = cur;
  cur.prev = newNode;
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}

iterate through the list
stop before. 
redue index until 0 
check if cur is not null, index ==0 and cur is not the tail
if so insert
otherwise do nohting
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let cur = this.left;
  const newNode = new Node(val);

  while (cur && index > 0) {
    cur = cur.next;
    index--;
  }

  if (cur && index === 0 && cur !== this.right) {
    const next = cur.next;
    cur.next = newNode;
    newNode.prev = cur;
    newNode.next = next;
    next.prev = newNode;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.left.next;

  while (cur && index > 0) {
    cur = cur.next;
    index--;
  }
  if (cur && index === 0 && cur !== this.right) {
    const next = cur.next;
    const prev = cur.prev;
    next.prev = prev;
    prev.next = next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
