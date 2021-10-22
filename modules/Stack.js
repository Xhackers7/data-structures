const errorMsg = require("./errorMsg");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    if (value) {
      this.top = {
        value: value,
        next: null,
      };
      this.size = 1;
    } else {
      this.top = null;
      this.size = 0;
    }
  }

  push = (value) => {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  };

  pop = () => {
    let node = this.top;
    this.top = node.next;
    this.size--;
    return node.value;
  };

  peek = () => {
    let node = this.top;
    return node.value;
  };

  isEmpty = () => this.top == null;

  indexOf = (value) => {
    let currentNode = this.top;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.value == value) break;
      index++;
      currentNode = currentNode.next;
    }
    if (currentNode == null) return null;
    return index;
  };

  display = () => {
    let array = [];
    let currentList = this.top;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(" --> "));
  };

  toArray = () => {
    let array = [];
    let currentList = this.top;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    return array;
  };

  clearAll = () => {
    this.top = null;
  };
}

module.exports = Stack;
