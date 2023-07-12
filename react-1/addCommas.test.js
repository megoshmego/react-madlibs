const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

console.log(addCommas(1234)); // Expected output: "1,234"
console.log(addCommas(1000000)); // Expected output: "1,000,000"
console.log(addCommas(9876543210)); // Expected output: "9,876,543,210"
console.log(addCommas(6)); // Expected output: "6"
console.log(addCommas(-10)); // Expected output: "-10"
console.log(addCommas(-5678)); // Expected output: "-5,678"

});
