const test = require("./test");
module.exports = QueueTest = async (queue) => {
  try {
    console.log("\x1b[37m", "--------------------\n Queue");

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    await test(queue.dequeue(), 1, "Dequeue");
    await test(queue.first(), 2, "Front");
    await test(queue.size, 2, "Size");
    await test(queue.isEmpty(), false, "Is empty");
    queue.clearAll();
    await test(queue.isEmpty(), true, "Confirm is empty");

    console.log("\x1b[32m", `✔ Queue passed all tests`);
  } catch (err) {
    throw err;
  }
};
