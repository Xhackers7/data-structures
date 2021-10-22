const dataStructures = require("./index");
const SLinkedList = require("./tests/SLinkedList");

let ll = new dataStructures.SinglyLinkedList();

async function doAllTests() {
  try {
    await SLinkedList(ll);
    console.log("\x1b[32m", `✔ All tests are succesfull`);
  } catch (err) {
    err = true;
  }
}

doAllTests();
