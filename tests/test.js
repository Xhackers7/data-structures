module.exports = test = (result, expected, testName) => {
    if (result != expected)
      throw `✖ ${testName} test failed\n  Result: ${result}\n  Expected result: ${expected}`;
    else console.log("\x1b[36m", `✔ ${testName} test passed`);
  }