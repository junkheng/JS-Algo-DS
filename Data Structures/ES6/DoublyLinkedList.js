class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // to severe the ties of poppedNode
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;  
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length ===0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return list;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var midPoint = (this.length / 2);
    if (index <= midPoint) {
      var counter = 0;
      var currentHead = this.head;  
      while (counter !== index) {
        currentHead = currentHead.next;
        counter++;
      }
      return currentHead;  
    } else {
      var counter = this.length - 1;
      var currentTail = this.tail;
      while (counter !== index) {
        currentTail = currentTail.prev;
        counter--;
      }
      return currentTail;  
    }
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    var removedNode = this.get(index);
    var prevNode = this.get(index - 1);
    var nextNode = this.get(index + 1);
    prevNode.next = removedNode.next;
    nextNode.prev = removedNode.prev;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

var list = new DoublyLinkedList();
list.push("Hello");
list.push("World");
list.push(1);
// list.push(2);
// list.push(3);

console.log(list);
console.log(list.remove(3));
console.log(list);


