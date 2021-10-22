const dataStructures = require("./index");
const DLinkedList = require("./tests/DLinkedList");
const SLinkedList = require("./tests/SLinkedList");

let ll = new dataStructures.SinglyLinkedList();
let Dll = new dataStructures.DoublyLinkedList();

async function doAllTests() {
  try {
    await SLinkedList(ll);
    await DLinkedList(Dll);
    console.log("\x1b[37m", "\n----------------------------------------\n");
    console.log("\x1b[32m", `✔ All tests are succesfull`);
  } catch (err) {
    console.error("\x1b[31m", err);
  }
}

doAllTests();
