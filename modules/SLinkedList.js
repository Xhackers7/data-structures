const errorMsg = require("./errorMsg");

class SlNode {
  // constructor
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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

  add = (value) => {
    let newNode = new SlNode(value);
    if (this.head == null && this.tail == null) this.head = newNode;
    else this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  };

  // Insert node at the start of the list
  prepend(value) {
    let newNode = new SlNode(value);

    newNode.next = this.head;
    this.head = newNode;

    this.size++;
  }

  insertAt = (index, value) => {
    if (!Number.isInteger(index) || index == 0 || index > this.size + 1) {
      return errorMsg(
        `Error while inserting value ${value} at index ${index}\n Invalid Index`
      );
    }
    if (index < 0) index = this.size + index + 1;

    let newNode = new SlNode(value),
      currentNode = this.head,
      previousNode = null;
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let count = 0;
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      newNode.next = currentNode;
      previousNode.next = newNode;
    }
    this.size++;
  };

  removeFrom = (index) => {
    if (!Number.isInteger(index) || index == null || index > this.size) {
      return errorMsg(
        `Error while removing value ${value} at index ${index}. Invalid Index`
      );
    }
    if (index < 0) index = this.size + index;
    let currentNode = this.head,
      previousNode = null,
      count = 0;

    if (index == 0) this.head = currentNode.next;
    else {
      while (count < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      previousNode.next = currentNode.next;
      if (currentNode == this.tail) this.tail = previousNode;
    }
    this.size--;
    return currentNode.value;
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

  // Helper Methods

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

  isEmpty = () => {
    return this.head == null && this.tail == null && this.size == 0;
  };

  toArray = () => {
    let array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  };

  display = () => {
    let array = [];
    let currentList = this.head;
    while (currentList !== null) {
      array.push(currentList.value);
      currentList = currentList.next;
    }

    console.log(array.join(" --> "));
  };

  forEach = (callBack) => {
    let currentNode = this.head;
    while(currentNode !== null){
      callBack(currentNode.value)
      currentNode = currentNode.next
    }
  }

  clearAll = () => {
    this.head = null;
    this.tail = null;
    this.size = 0;
  };
}

module.exports = SinglyLinkedList;
