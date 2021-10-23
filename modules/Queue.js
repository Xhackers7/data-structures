const errorMsg = require("./errorMsg");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    if (value) {
      this.front = {
        value: value,
        next: null,
      };
      this.size = 1;
    } else {
      this.front = null;
      this.size = 0;
    }
    this.tail = this.front;
  }

  enqueue = (value) => {
    let newNode = new Node(value);
    if (!this.front) this.front = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  };

  dequeue = () => {
    const deleteNode = this.front;
    this.front = deleteNode.next;
    this.size--;
    return deleteNode.value;
  };

  first = () => {
    return this.front.value;
  };

  isEmpty = () => {
    return this.front === null && this.size === 0;
  };

  display = () => {
    let array = [];
    let currentList = this.front;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }
    console.log(array.join(" --> "));
  };

  clearAll = () => {
    this.front = null;
    this.tail = null;
    this.size = 0;
  };
}

module.exports = Queue;
