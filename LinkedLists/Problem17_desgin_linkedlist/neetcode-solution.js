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
    cur = cur.next;
    index--;
  }

  if (cur && cur !== this.right && index === 0) {
    return cur.val;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new Node(val);
  const prev = this.left;
  const next = this.left.next;

  node.next = next;
  next.prev = node;
  prev.next = node;
  node.prev = prev;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const node = new Node(val);
  const prev = this.right.prev;
  const next = this.right;

  prev.next = node;
  node.prev = prev;

  node.next = next;
  next.prev = node;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let cur = this.left.next;

  while (cur && index > 0) {
    index--;
    cur = cur.next;
  }

  //cur is at the node to insert before
  if (cur && index === 0) {
    const next = cur;
    const prev = cur.prev;
    const node = new Node(val);
    next.prev = node;
    node.next = next;
    prev.next = node;
    node.prev = prev;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let cur = this.left.next;

  while (cur && index > 0) {
    index--;
    cur = cur.next;
  }
  if (cur && cur !== this.right && index === 0) {
    const next = cur.next;
    const prev = cur.prev;
    prev.next = next;
    next.prev = prev;
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
