const errorMsg = require("./errorMsg");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    if (value) {
      this.head = {
        value: value,
        next: null,
        previous: null,
      };
      this.size = 1;
    } else {
      this.head = null;
      this.size = 0;
    }
    this.tail = this.head;
  }

  display() {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(" <--> "));
  }

  // Insert node at end of the list
  add(value) {
    let newNode = new Node(value);
    if (this.head == null && this.tail == null) this.head = newNode;
    else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;

    this.size++;
  }

  // Insert node at the start of the list
  prepend(value) {
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;

    this.size++;
  }

  // Insert node at a given index
  insertAt(index, value) {
    if (!Number.isInteger(index) || index == null || index > this.size + 1) {
      return errorMsg(
        `Error while removing value ${value} at index ${index}. Invalid Index`
      );
    }

    // If index is 0, prepend
    if (index === 0) {
      this.prepend(value);
    }

    if (index < 0) index = this.size + index + 1;

    // If index is equal to this.size, append
    if (index === this.size) {
      this.add(value);
    }

    // Reach the node at that index
    let newNode = new Node(value);
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }

    let nextNode = previousNode.next;

    newNode.next = nextNode;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    nextNode.previous = newNode;

    this.size++;
  }

  // Remove a node
  removeFrom(index) {
    if (!Number.isInteger(index) || index == null || index > this.size) {
      return errorMsg(
        `Error while removing value ${value} at index ${index}. Invalid Index`
      );
    }

    let deleteNode = null;

    // Remove head
    if (index === 0) {
      this.head = this.head.next;
      this.head.previous = null;
      deleteNode = this.head;
      this.size--;
    }

    if (index < 0) index = this.size + index;

    // Remove tail
    if (index === this.size - 1) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      deleteNode = this.tail;
      this.size--;
    }

    // Remove node at an index
    let previousNode = this.head;

    for (let k = 0; k < index - 1; k++) {
      previousNode = previousNode.next;
    }
    deleteNode = previousNode.next;
    let nextNode = deleteNode.next;

    previousNode.next = nextNode;
    nextNode.previous = previousNode;

    this.size--;
    if (!deleteNode) return null;
    return deleteNode.value;
  }

  toArray = () => {
    let array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

  removeValue = (value) => {
    let currentNode = this.head,
      previousNode = null;

    while (currentNode != null) {
      if (currentNode.value == value) {
        if (currentNode == this.head) this.head = currentNode.next;
        else previousNode.next = currentNode.next;
        if (currentNode == this.tail) this.tail = previousNode;
        this.size--;
        return currentNode.value;
      }
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  };

  indexOf = (value) => {
    if (this.isEmpty()) return undefined;
    let currentNode = this.head,
      index = 0;

    while (currentNode != null) {
      if (currentNode.value == value) {
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }
  };

  forEach = (callBack) => {
    let currentNode = this.head;
    while (currentNode !== null) {
      callBack(currentNode.value);
      currentNode = currentNode.next;
    }
  };

  isEmpty = () => {
    return this.head == null && this.tail == null && this.size == 0;
  };

  clearAll = () => {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };
}

module.exports = DoublyLinkedList;
