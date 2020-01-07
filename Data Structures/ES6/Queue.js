class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) { // add from the end
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() { // remove from the beginning
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
queue.dequeue();
queue.dequeue();

console.log(queue);