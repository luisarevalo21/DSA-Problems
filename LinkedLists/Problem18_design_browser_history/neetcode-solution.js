class ListNode {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.cur = new ListNode(homepage);
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  // const newNode = new ListNode(url);
  // this.cur.next = newNode;
  // newNode.prev = this.cur

  // this.cur = newNode;
  this.cur.next = new ListNode(url, this.cur);
  this.cur = this.cur.next;

  console.log("this/cur", this.cur);
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  while (this.cur.prev && steps > 0) {
    this.cur = this.cur.prev;
    steps--;
  }
  return this.cur.value;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  while (this.cur.next && steps > 0) {
    this.cur = this.cur.next;
    steps--;
  }
  return this.cur.value;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
