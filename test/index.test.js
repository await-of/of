const of = require("../dist/of.cjs").default;

describe("calling and printing", () => {
  it("should not crash on call", () => {
    expect(of).toBeDefined();
  });
});
