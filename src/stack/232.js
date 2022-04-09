var MyQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let size = this.outStack.length;
    if(size) {
        return this.outStack.pop();
    }
    while(this.inStack.length) {
        this.outStack.push(this.inStack.pop());
    }
    return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    const out = this.pop();
    this.outStack.push(out);
    return out;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.inStack.length && !this.outStack.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */