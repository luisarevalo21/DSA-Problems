class BrowserHistory {
  constructor(homepage) {
    this.stack = [homepage];
    this.i = 0;
    this.length = this.i + 1;
  }

  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    if (this.stack.length < this.i + 2) {
      this.stack.push(url);
    } else {
      this.stack[this.i + 1] = url;
    }

    this.i = this.i + 1;
    this.length = this.i + 1;
  }

  back(steps) {
    this.i = Math.max(this.i - steps, 0);
    return this.stack[this.i];
  }
  forward(steps) {
    this.i = Math.min(this.i + steps, this.length - 1);
    return this.stack[this.i];
  }
}
