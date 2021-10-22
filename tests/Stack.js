const test = require("./test");

module.exports = doStackTest = async (stack) => {
  try {
    console.log("\x1b[37m", "--------------------\n Stack");

    stack.push(1);
    stack.push(2);
    stack.push(3);
    await test(stack.toArray().join(""), [3, 2, 1].join(""), "Value order");
    await test(stack.pop(), 3, "Pop");
    await test(stack.toArray().join(""), [2, 1].join(""), "Confirm pop");
    await test(stack.peek(), 2, "Peek");
    await test(stack.size, 2, "Size");
    await test(stack.toArray().join(""), [2, 1].join(""), "Confrim peek");
    stack.push(5);
    await test(stack.indexOf(2), 1, "Index of");
    await test(stack.indexOf(5), 0, "Confirm index of");
    await test(stack.isEmpty(), false, "Is empty");
    stack.clearAll();
    await test(stack.isEmpty(), true, "Confirm is empty");
    await test(stack.toArray().join(""), "", "Clear all");

    console.log("\x1b[32m", `✔ Stack passed all tests`);
  } catch (err) {
    throw err;
  }
};
