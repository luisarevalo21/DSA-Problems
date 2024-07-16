class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
var MyLinkedList = function (head) {
  this.head = new Node(-1, head);
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let cur = this.head.next;
  let counter = 0;
  while (cur) {
    if (counter === index) {
      return cur.val;
    }
    cur = cur.next;
    counter++;
  }
  return -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let dummy = this.head;
  if (!dummy.next) {
    dummy.next = new Node(val);
    return;
  }
  const newNode = new Node(val, this.head.next);
  dummy.next = newNode;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let dummy = this.head;
  if (!dummy.next) {
    dummy.next = new Node(val);
    return;
  }
  while (dummy.next) {
    dummy = dummy.next;
  }
  dummy.next = new Node(val);
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let counter = 0;
  let cur = this.head;
  while (cur) {
    if (index <= counter) {
      const newNode = new Node(val, cur.next);
      const next = cur.next;
      cur.next = newNode;
      newNode.next = next;

      return;
    }
    cur = cur.next;
    counter++;
  }
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let counter = 0;
  let prev = this.head;
  let cur = this.head.next;

  while (cur) {
    if (counter === index) {
      prev.next = cur.next;
      return;
    }
    prev = cur;
    cur = cur.next;

    counter++;
  }
};
