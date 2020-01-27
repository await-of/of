const ofDefault = require("../dist/of.cjs").default;
const { of } = require("../dist/of.cjs");
const js = require("../dist/of.js");

describe("calling and printing", () => {
  it("should not crash on call", () => {
    expect(ofDefault).toBeDefined();
    expect(of).toBeDefined();
    expect(js).toBeDefined();
  });
  it("standard check", () => {
    const value = "Oh, Hi Mark!";
    const promise = new Promise((resolve, reject) => {
      resolve(value);
    });
    return of(promise).then((result) => {
      expect(result[0]).toEqual(value);
      expect(result[1]).toBeUndefined();
    });
  });
});
