const dataStructures = require("./index");
const DLinkedList = require("./tests/DLinkedList");
const SLinkedList = require("./tests/SLinkedList");
const StackTest = require("./tests/Stack");
const QueueTest = require('./tests/Queue')

let ll = new dataStructures.SinglyLinkedList();
let Dll = new dataStructures.DoublyLinkedList();
let stack = new dataStructures.Stack();
let queue = new dataStructures.Queue()


async function doAllTests() {
  try {
    await SLinkedList(ll);
    await DLinkedList(Dll);
    await StackTest(stack);
    await QueueTest(queue)
    console.log("\x1b[37m", "\n----------------------------------------\n");
    console.log("\x1b[32m", `✔ All tests are succesfull`);
  } catch (err) {
    console.error("\x1b[31m", err);
  }
}

doAllTests();
