const test = require("./test");
module.exports = doDoubleLinkedListTest = async (ll) => {
  try {
    console.log("\x1b[37m", "--------------------\n Doubly Linked List");
    await test(ll.isEmpty(), true, "Is Empty");
    ll.add(10);
    await test(ll.toArray(), 10, "Adding value");
    await test(ll.size, 1, "Checking size");
    ll.add(20);
    ll.add(30);
    ll.add(40);
    ll.add(50);
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 40, 50].join(""),
      "Adding more values"
    );
    await test(ll.removeValue(50), 50, "Removing value from the last position");
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 40].join(""),
      "Rechecking if last value was removed"
    );
    ll.add(50);
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 40, 50].join(""),
      "Adding more values"
    );
    await test(ll.removeValue(40), 40, "Removing value from middle position");
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 50].join(""),
      "Rechecking if middle value was removed"
    );
    await test(ll.size, 4, "Checking size");
    ll.removeValue(50);
    ll.add(40);
    ll.add(50);
    await test(await ll.indexOf(40), 3, "Index of function");
    await ll.insertAt(2, 60);
    await test(
      ll.toArray().join(""),
      [10, 20, 60, 30, 40, 50].join(""),
      "Insert At function"
    );
    await test(await ll.removeFrom(2), 60, "Remove from function");
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 40, 50].join(""),
      "Rechecking if removeFrom function worked"
    );
    await ll.insertAt(-2, 60);
    await test(
      ll.toArray().join(""),
      [10, 20, 30, 40, 60, 50].join(""),
      "Insert at negative numbers"
    );
    await ll.prepend(5);
    await test(
      ll.toArray().join(""),
      [5, 10, 20, 30, 40, 60, 50].join(""),
      "Prepend function"
    );
    ll.clearAll();
    await test(ll.isEmpty(), true, "Is Empty");
    await test(ll.toArray().join(""), [].join(""), "clearAll function");

    ll.add(3);
    ll.add(2);
    ll.add(4);
    ll.add(5);
    await test(ll.removeFrom(-2), 4, "remove from function negative value");

    console.log("\x1b[32m", `✔ Doubly Linked Lists passed all tests`);
  } catch (err) {
    throw err;
  }
};
