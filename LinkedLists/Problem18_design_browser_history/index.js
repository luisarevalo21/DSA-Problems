class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.left = new Node(-1);
  this.right = new Node(-1);
  const homeNode = new Node(homepage);

  this.left.next = homeNode;
  homeNode.prev = this.left;

  this.right.prev = homeNode;
  homeNode.next = this.right;
  this.current = this.left.next;
};

/**
 * @param {string} url
 * @return {void}
 * //add at the tail function
 * set current to the top value
 *
 */
BrowserHistory.prototype.visit = function (url) {
  const newNode = new Node(url);
  const tail = this.right;
  const left = this.current;
  left.next = newNode;
  newNode.prev = left;

  newNode.next = tail;
  tail.prev = newNode;
  this.current = newNode;
};

/**
* @param {number} steps
* @return {string}
go back as much as steps allow or if i reach the left node return the current 

*/
BrowserHistory.prototype.back = function (steps) {
  let cur = this.current;
  while (cur.prev !== this.left && steps > 0) {
    steps--;
    cur = cur.prev;
  }

  if (cur && steps === 0) {
    this.current = cur;
    return cur.value;
  }

  if (cur.prev === this.left && steps > 0) {
    this.current = cur;
    return cur.value;
  }
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let cur = this.current;

  while (cur.next !== this.right && steps > 0) {
    steps--;
    cur = cur.next;
  }

  if (cur && steps === 0) {
    this.current = cur;
    return cur.value;
  }

  if (cur.next === this.right && steps > 0) {
    this.current = cur;
    return cur.value;
  }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
