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
      while (counter != index) {
        currentHead = currentHead.next;
        counter++;
      }
      return currentHead;  
    } else {
      var counter = this.length - 1;
      var currentTail = this.tail;
      while (counter != index) {
        currentTail = currentTail.prev;
        counter--;
      }
      return currentTail;  
    }
  }
}

var list = new DoublyLinkedList();
list.push("Hello");
list.push("World");
list.push(1);
list.push(2);
list.push(3);

console.log(list);
console.log(list.get(1));
console.log(list.get(3));



