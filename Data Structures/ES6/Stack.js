class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    if (this.size > 1) {
      this.first = this.first.next;
    }
    this.size--;
    return removedNode;
  }
}

var stack = new Stack();
stack.push(23);
stack.push(31);
stack.push(49);

stack.pop();
stack.pop();

console.log(stack);