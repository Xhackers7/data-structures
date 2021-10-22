# Data Structures

## Description
    npm package that adds new data structures and improves existing ones.
## Installation
    `npm i data-structures --save`
    ```
    const dataStructures = require("data-structures");
    
    ```
### Options
    This package currently supports only data structure:
    Singly Linked List
#### Usage
    ```
    const dataStructures = require("data-structures");
    
    let SLinkedList = new dataStructures.SinglyLinkedList()

    SLinkedList.add(20) //adds a value to the list
    SLinkedList.add(30)
    SLinkedList.add(10)

    SLinkedList.insertAt(1, 40) //inserts 20 at 1st index
    SLinkedList.removeValue(40) //removes the value 40 from the list
    SLinkedList.removeFrom(2)  //removes the value at index 2

    SLinkedList.isEmpty() //returns true if the list is empty

    ```